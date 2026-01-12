const { systemDb } = require('../../database');
const { verifyReferralData } = require('../utils/attribution');
const GrowthHandler = require('./growth.handler');
const crypto = require('crypto');

class LeadService {
    /**
     * SRS 13.2: Captures a public prospect and prepares them for the CRM
     */
    async capturePublicLead(formData, refSlug) {
        // 1. MANDATORY DPDP CONSENT CHECK
        if (!formData.consents || formData.consents.counseling !== true) {
            throw new Error("LEGAL_CONSENT_REQUIRED");
        }

        // 2. NAME VALIDATION & MASKING (For Dashboard Veracity)
        const cleanName = (formData.name || '').trim();
        if (cleanName.length === 0) throw new Error("NAME_REQUIRED");

        const nameParts = cleanName.split(/\s+/);
        const firstName = nameParts[0];
        const lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : '';
        const calculatedMask = lastName 
            ? `${firstName[0]}. ${lastName[0]}***` 
            : `${firstName[0]}.***`;

        // 3. BOT PROTECTION & ATTRIBUTION
        if (formData.website_field) return { success: false, reason: "BOT_DETECTED" };
        
        const attr = refSlug ? verifyReferralData(refSlug) : { tenantId: process.env.HQ_TENANT_ID };
        const vaultKey = process.env.DB_PII_VAULT_KEY;
        const phoneHash = crypto.createHash('sha256').update(formData.phone).digest('hex');

        try {
            const result = await systemDb.transaction(async (trx) => {
                // 4. CREATE ENCRYPTED LEAD RECORD
                const [lead] = await trx('leads').insert({
                    tenant_id: attr.tenantId,
                    promoter_id: attr.promoterId || null,
                    phone_hash: phoneHash,
                    masked_name: calculatedMask,
                    ip_address: formData.ip, 
                    full_name: trx.raw(`pgp_sym_encrypt(?, ?)`, [formData.name, vaultKey]),
                    email: trx.raw(`pgp_sym_encrypt(?, ?)`, [formData.email, vaultKey]),
                    phone: trx.raw(`pgp_sym_encrypt(?, ?)`, [formData.phone, vaultKey]),
                    source_metadata: JSON.stringify({ device: formData.device })
                }).returning('*');

                // 5. RECORD SHADOW CONSENT
                await trx('lead_consents').insert({
                    lead_id: lead.id,
                    tenant_id: attr.tenantId,
                    notice_id: formData.noticeId,
                    consent_matrix: JSON.stringify(formData.consents),
                    ip_address: formData.ip
                });

                return { 
                    success: true, 
                    leadId: lead.id, 
                    promoterId: attr.promoterId, 
                    tenantId: attr.tenantId, 
                    firstName 
                };
            });

            // 6. TRIGGER AUTOMATED WELCOME
            if (result.promoterId) {
                await GrowthHandler.handleNewReferralLead(
                    result.leadId, 
                    result.tenantId, 
                    result.promoterId, 
                    { firstName: result.firstName }
                );
            }

            return result;
        } catch (error) {
            if (error.code === '23505') return { success: false, reason: "DUPLICATE_LEAD" };
            throw error;
        }
    }
}

module.exports = new LeadService();