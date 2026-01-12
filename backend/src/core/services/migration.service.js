const { systemDb } = require('../../database');

class MigrationService {
    /**
     * SRS 18.6: Regulated Migration with Total Shadow Purge
     */
    async migrateStudent(userId, tenantId, vaultKey) {
        return await systemDb.transaction(async (trx) => {
            // 1. Export Data (Decrypted locally for transfer)
            const [user] = await trx.raw(`
                SELECT *, pgp_sym_decrypt(full_name, ?) as name 
                FROM users WHERE id = ?
            `, [vaultKey, userId]);

            // 2. PURGE SEARCH INDEXES (Fixes Retention Failure)
            const staffProfile = await trx('staff_profiles').where({ user_id: userId }).first();
            if (staffProfile) {
                await trx('staff_search_indexes').where({ staff_id: staffProfile.id }).delete();
            }
            await trx('lead_search_indexes').where({ user_id: userId }).delete();

            // 3. HARD PURGE IDENTITY & HASHES
            await trx('users').where({ id: userId }).update({
                status: 'ARCHIVED',
                full_name: Buffer.from('MIGRATED_OUT'),
                email: null,
                phone: null,
                phone_hash: null, // Wipe de-duplication hash
                masked_name: 'M. Out'
            });

            await trx('security_audit_logs').insert({
                user_id: userId,
                event_type: 'CROSS_BORDER_MIGRATION_COMPLETED',
                metadata: { status: 'PURGED' }
            });
        });
    }
}

module.exports = new MigrationService();