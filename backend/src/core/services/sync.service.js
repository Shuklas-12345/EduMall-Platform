const { systemDb } = require('../../database');

class SyncService {
    async stageExternalData(tenantId, externalData, trx) {
        const vaultKey = process.env.DB_PII_VAULT_KEY;

        // FIX: PRIVILEGED LOOKUP (Find user across the whole platform)
        // systemDb ignores RLS so we don't create duplicates
        const internalUser = await systemDb('users').where({ phone_hash: externalData.phone_hash }).first();

        if (internalUser) {
            // FIX: SET VAULT KEY
            await trx.raw(`SET LOCAL app.vault_key = ?`, [vaultKey]);

            const [res] = await trx.raw(`SELECT pgp_sym_decrypt(?, ?) as name`, [internalUser.full_name, vaultKey]);
            
            if (externalData.fullName !== res.name) {
                await trx('external_sync_staging').insert({
                    tenant_id: tenantId,
                    external_source_name: externalData.source,
                    internal_user_id: internalUser.id,
                    proposed_data: trx.raw(`pgp_sym_encrypt(?, ?)`, [JSON.stringify(externalData), vaultKey]),
                    conflict_type: 'NAME_MISMATCH'
                });
                return { status: 'PAUSED_FOR_CONFLICT' };
            }
        }
        
        return { status: 'SYNC_READY' };
    }
}

module.exports = new SyncService();