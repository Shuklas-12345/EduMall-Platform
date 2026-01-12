const handlebars = require('handlebars');
const sanitizeHtml = require('sanitize-html');
const { systemDb } = require('../../database');
const ThrottleService = require('./throttle.service');
const LocaleService = require('./locale.service');

class NotificationDispatcher {
    /**
     * send: Now with "Best Match" Single-Query Logic
     */
    async send(userId, tenantId, templateSlug, data, options = {}) {
        const { triggerId, browserLang } = options;
        let logId = null;

        try {
            const reservation = await systemDb.transaction(async (trx) => {
                const user = await trx('users').where({ id: userId, tenant_id: tenantId }).first();
                if (!user) return { status: 'ERROR_USER_NOT_FOUND' };

                // 1. Resolve Language Preference
                const lang = LocaleService.getBestLanguage(user.preferred_language, browserLang);

                // 2. THE "BEST MATCH" QUERY (Fixes Performance & Tenancy)
                // We find the specific template in one go, prioritizing Tenant matches over HQ defaults
                const template = await trx('notification_templates')
                    .where({ slug: templateSlug, is_active: true })
                    .andWhere(function() {
                        this.where({ tenant_id: tenantId }).orWhereNull('tenant_id');
                    })
                    .orderByRaw(`
                        (tenant_id = ?) DESC,         -- Match specific school first
                        (language_code = ?) DESC,    -- Match preferred language second
                        (language_code = 'en') DESC  -- Match English third
                    `, [tenantId, lang])
                    .first();

                if (!template) return { status: 'ERROR_TEMPLATE_NOT_FOUND' };

                // 3. CONSENT & THROTTLE (As before)
                const throttle = await ThrottleService.isThrottled(userId, template.category, trx);
                if (throttle.throttled) return { status: 'THROTTLED', reason: throttle.reason };

                // 4. LOG & PREPARE
                const [log] = await trx('communication_logs').insert({
                    user_id: userId, tenant_id: tenantId, template_id: template.id,
                    channel: template.channel, status: 'PENDING', trigger_event_id: triggerId
                }).returning('id');
                
                logId = log.id;
                const rawBody = handlebars.compile(template.body_template)({
                    ...data, maskedId: (user.masked_security_id || '').substring(0, 8)
                });

                return { status: 'READY', body: sanitizeHtml(rawBody), lang: template.language_code };
            });

            if (reservation.status !== 'READY') return reservation;

            // --- STEP 2: SEND ---
            console.log(`[DISPATCH] [${reservation.lang}] to ${userId}`);
            await systemDb('communication_logs').where({ id: logId }).update({ status: 'SENT' });
            return { status: 'SENT', language: reservation.lang };

        } catch (err) {
            console.error("Dispatcher Failure:", err.message);
            return { status: 'CRASHED' };
        }
    }
}

module.exports = new NotificationDispatcher();