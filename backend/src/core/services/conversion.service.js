const { systemDb } = require('../../database');
const { logSecurityEvent } = require('../utils/logger');
const OnboardingService = require('./onboarding.service');

class ConversionService {
    async convert(leadId, offerId, txnId) {
        return await systemDb.transaction(async (trx) => {
            // A. ENABLE LEAD DECRYPTION
            const leadVaultKey = process.env.DB_PII_VAULT_KEY;
            await trx.raw(`SET LOCAL app.vault_key = ?`, [leadVaultKey]);

            // B. FETCH LEAD (Decrypted)
            const lead = await trx('v_decrypted_leads').where({ id: leadId }).forUpdate().first();
            if (!lead || lead.status === 'CONVERTED') return { success: true };

            const offer = await trx('admission_offers').where({ id: offerId }).first();
            if (!offer) throw new Error("OFFER_NOT_FOUND");

            // C. FETCH TARGET ROLE ID (SRS 1.3)
            const targetRoleName = lead.intended_role || 'STUDENT';
            const role = await trx('roles').where({ role_name: targetRoleName, tenant_id: lead.tenant_id }).first();
            if (!role) throw new Error("TENANT_ROLE_NOT_CONFIGURED");

            // D. CREATE USER (Identity only)
            const leadRaw = await trx('leads').where({ id: leadId }).first();
            const [user] = await trx('users').insert({
                full_name: leadRaw.full_name,
                email: leadRaw.email,
                phone: leadRaw.phone,
                status: 'REGISTERED'
            }).returning('*');

            // E. FIX: CREATE TENANT MEMBERSHIP (Auth Fix)
            await trx('user_tenant_memberships').insert({
                user_id: user.id,
                tenant_id: lead.tenant_id,
                role_id: role.id,
                membership_status: 'ACTIVE'
            });

            // F. CLEAN HANDSHAKE (Profile Setup)
            await OnboardingService.automateSetup(
                trx, user.id, lead.tenant_id, targetRoleName, lead.is_minor, 
                leadRaw.phone_hash, leadRaw.masked_name, 
                leadRaw.source_metadata?.parentId || null,
                lead.full_name // Readable string for HR Vault
            );

            // G. ENROLL & PURGE
            await trx('enrollments').insert({ user_id: user.id, tenant_id: lead.tenant_id, batch_id: offer.batch_id });
            await trx('leads').where({ id: leadId }).update({
                status: 'CONVERTED',
                full_name: Buffer.from('PURGED'),
                phone_hash: 'PURGED_' + leadId
            });

            await logSecurityEvent(user.id, lead.tenant_id, 'CONVERSION_SUCCESS', { leadId });
            return { userId: user.id, success: true };
        });
    }
}

module.exports = new ConversionService();