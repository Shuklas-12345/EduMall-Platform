const crypto = require('crypto');

class MaskingService {
    async prepareExternalPayload(userRaw, tenantId, trx) {
        const consent = await trx('user_consents')
            .where({ user_id: userRaw.id, tenant_id: tenantId, withdrawn_at: null })
            .first();

        const hasConsent = consent && consent.consent_matrix['THIRD_PARTY'];
        const vaultKey = process.env.DB_PII_VAULT_KEY;

        if (hasConsent) {
            // FIX: SET VAULT KEY (Turns the key in the lock)
            await trx.raw(`SET LOCAL app.vault_key = ?`, [vaultKey]);

            const [decrypted] = await trx.raw(`
                SELECT 
                    pgp_sym_decrypt(?, ?) as name,
                    pgp_sym_decrypt(?, ?) as email
            `, [userRaw.full_name, vaultKey, userRaw.email, vaultKey]);

            return { external_user_id: userRaw.id, full_name: decrypted.name, email: decrypted.email };
        } else {
            const anonId = crypto.createHash('sha256').update(userRaw.id).digest('hex').substring(0, 12);
            return { external_user_id: `anon_${anonId}`, full_name: "EduMall Learner", email: "protected@edumall.sovereign" };
        }
    }
}

module.exports = new MaskingService();