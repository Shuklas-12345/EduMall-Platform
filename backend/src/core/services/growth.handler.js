const NotificationDispatcher = require('./notification.dispatcher');
const { systemDb } = require('../../database');

class GrowthHandler {
    /**
     * SRS 9.7: High-Trust Welcome with Referrer initials
     */
    async handleNewReferralLead(userId, tenantId, promoterId, leadData) {
        const promoter = await systemDb('users').where({ id: promoterId }).first();
        const referrerMaskedName = (promoter && promoter.masked_name) ? promoter.masked_name : 'A friend';

        await NotificationDispatcher.send(userId, tenantId, 'REFERRAL_WELCOME_LEAD', {
            firstName: leadData.firstName,
            referrerMaskedName: referrerMaskedName,
            loginUrl: `${process.env.FRONTEND_URL}/login`
        }, { priority: 'CRITICAL' });
    }

    /**
     * SRS 17.12: Anonymous Success Alert to Promoter
     */
    async handleConversionAlert(promoterId, tenantId, eventId) {
        // Data is empty to ensure no student PII is sent to the referrer
        await NotificationDispatcher.send(promoterId, tenantId, 'REFERRAL_SUCCESS_PROMOTER', {}, {
            triggerId: eventId,
            priority: 'ENGAGEMENT'
        });
    }
}

module.exports = new GrowthHandler();