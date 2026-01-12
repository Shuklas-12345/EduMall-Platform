const crypto = require('crypto');
const { systemDb } = require('../../database');
const redis = require('../../infrastructure/redis');

class EtlService {
    /**
     * syncAssessments: High-Performance Watermark ETL
     */
    async syncAssessments() {
        const lock = await redis.set('lock:etl:assessments', 'active', 'NX', 'EX', 600);
        if (!lock) return console.log("ETL Job already in progress. Skipping.");

        try {
            const salt = process.env.ANALYTICS_SALT;
            const watermark = await systemDb('warehouse_watermarks').where({ table_name: 'f_assessments' }).first();
            const lastId = watermark ? watermark.last_processed_id : '00000000-0000-0000-0000-000000000000';

            // FIX: FETCH WITH FULL LINEAGE (Center ID and Minor Flag)
            const newRecords = await systemDb('exam_attempts')
                .join('student_profiles', 'exam_attempts.user_id', 'student_profiles.user_id')
                .join('users', 'exam_attempts.user_id', 'users.id') // Join users for is_minor
                .where('exam_attempts.status', 'SUBMITTED')
                .andWhere('exam_attempts.id', '>', lastId)
                .select(
                    'exam_attempts.*', 
                    'student_profiles.center_id', // FIX: Explicitly selected
                    'users.is_minor'              // FIX: Explicitly selected
                )
                .orderBy('exam_attempts.id', 'asc')
                .limit(500);

            if (newRecords.length === 0) return;

            await systemDb.transaction(async (trx) => {
                for (const rec of newRecords) {
                    const userHash = crypto.createHmac('sha256', salt).update(rec.user_id).digest('hex');

                    await trx('f_assessments').insert({
                        id: rec.id,
                        tenant_id: rec.tenant_id,
                        center_id: rec.center_id, // Now populated correctly
                        is_minor: rec.is_minor,   // Now populated correctly
                        user_hash: userHash,
                        score: rec.score_percentage,
                        topic_id: rec.topic_id,
                        created_at: rec.started_at
                    });
                }

                const latestId = newRecords[newRecords.length - 1].id;
                await trx('warehouse_watermarks').insert({ table_name: 'f_assessments', last_processed_id: latestId })
                    .onConflict('table_name').merge();
            });

        } finally {
            await redis.del('lock:etl:assessments');
        }
    }

    async hardAnonymizeUser(userId, tenantId) {
        const salt = process.env.ANALYTICS_SALT;
        const userHash = crypto.createHmac('sha256', salt).update(userId).digest('hex');

        await systemDb('f_assessments')
            .where({ tenant_id: tenantId, user_hash: userHash })
            .update({ user_hash: null });
            
        console.log(`[DPDP] Hard-Anonymized student ${userId} in Warehouse.`);
    }
}

module.exports = new EtlService();