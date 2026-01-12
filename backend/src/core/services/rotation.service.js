const { systemDb } = require('../../database');

class RotationService {
    /**
     * SRS 20.9: Resilient Key Rotation
     */
    async rotateVaultKey(oldKey, newKey, oldVersion, newVersion, targetTable = 'users') {
        console.log(`[ROTATION] Starting migration for ${targetTable} to V${newVersion}...`);
        
        let hasMore = true;
        let totalProcessed = 0;

        while (hasMore) {
            // Fetch rows that are still on the old version
            const batch = await systemDb(targetTable)
                .where({ vault_key_version: oldVersion })
                .limit(50)
                .select('id', 'full_name', 'phone');

            if (batch.length === 0) {
                hasMore = false;
                break;
            }

            for (const row of batch) {
                try {
                    // ATOMIC DECISION: Update the individual row
                    await systemDb(targetTable).where({ id: row.id }).update({
                        full_name: systemDb.raw(`pgp_sym_encrypt(pgp_sym_decrypt(?, ?), ?)`, [row.full_name, oldKey, newKey]),
                        phone: row.phone ? systemDb.raw(`pgp_sym_encrypt(pgp_sym_decrypt(?, ?), ?)`, [row.phone, oldKey, newKey]) : null,
                        vault_key_version: newVersion // Mark as Success
                    });
                    totalProcessed++;
                } catch (rowError) {
                    // FIX: THE STALL-BREAKER
                    // If a row fails, we mark it as -1 so the next loop skips it
                    console.error(`[ERROR] Row ${row.id} is unreadable. Skipping.`);
                    await systemDb(targetTable).where({ id: row.id }).update({ vault_key_version: -1 });
                }
            }
            console.log(`[ROTATION] Commit: ${totalProcessed} rows migrated.`);
        }
        return totalProcessed;
    }
}

module.exports = new RotationService();