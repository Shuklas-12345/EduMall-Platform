const crypto = require('crypto');

class CRMService {
    /**
     * FIX 2: TRIGRAM INDEXING (Partial Search Support)
     * "John" becomes ["joh", "ohn"] -> Hashed
     */
    async generateBlindIndexes(name, leadId, tenantId, trx) {
        const salt = process.env.BLIND_INDEX_SALT;
        const cleanName = name.toLowerCase().replace(/\s+/g, '');
        const hashes = [];

        for (let i = 0; i <= cleanName.length - 3; i++) {
            const chunk = cleanName.substring(i, i + 3);
            hashes.push(crypto.createHmac('sha256', salt).update(chunk).digest('hex'));
        }

        const rows = hashes.map(h => ({ lead_id: leadId, tenant_id: tenantId, trigram_hash: h }));
        await trx('lead_search_indexes').insert(rows);
    }

    /**
     * FIX 1 & 3: SECURE PEEK & KEY RESET
     */
    async getLeadDetails(leadId, trx) {
        const vaultKey = process.env.DB_PII_VAULT_KEY;
        
        try {
            // A. Set the key for this specific request
            await trx.raw(`SET LOCAL app.vault_key = ?`, [vaultKey]);

            // B. THE CONSENT GATE: Join with consents and check the 'counseling' bit
            // If the student said 'false', the query returns zero rows (Fail-Safe)
            const lead = await trx('v_decrypted_leads')
                .join('lead_consents', 'v_decrypted_leads.id', 'lead_consents.lead_id')
                .where({ 
                    'v_decrypted_leads.id': leadId,
                    'lead_consents.consent_matrix->>counseling': 'true' // Mandatory check
                })
                .select('v_decrypted_leads.*')
                .first();

            return lead;
        } finally {
            // FIX: THE "FROZEN CONNECTION" (Key Reset)
            // Hard-wipe the key from the connection before it goes back to the pool
            await trx.raw(`SET LOCAL app.vault_key = ''`);
        }
    }
}

module.exports = new CRMService();