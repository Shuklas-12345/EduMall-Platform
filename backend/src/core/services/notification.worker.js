const { systemDb } = require('../../database');

class NotificationWorker {
    /**
     * SRS 9.10: The Zombie Hunter
     * Rescues jobs stuck in 'PROCESSING' for > 5 mins (e.g. server crash)
     */
    async rescueStalledJobs() {
        const affected = await systemDb('communication_logs')
            .where('status', 'PROCESSING')
            .andWhereRaw("updated_at < NOW() - INTERVAL '5 minutes'")
            .update({ 
                status: 'PENDING', 
                error_reason: 'WORKER_CRASH_RECOVERY' 
            });
        
        if (affected > 0) console.warn(`[RECOVERY] Rescued ${affected} zombie messages.`);
    }

    /**
     * SRS 20.10: High-Efficiency Priority Processing
     */
    async processQueue(batchSize = 50) {
        try {
            const jobs = await systemDb.transaction(async (trx) => {
                const pendingJobs = await trx('communication_logs')
                    .where({ status: 'PENDING' })
                    .orderBy([{ column: 'priority_score', order: 'asc' }, { column: 'created_at', order: 'asc' }])
                    .limit(batchSize)
                    .forUpdate()
                    .skipLocked()
                    .select('id', 'channel', 'user_id', 'priority_score');

                if (pendingJobs.length > 0) {
                    await trx('communication_logs')
                        .whereIn('id', pendingJobs.map(j => j.id))
                        .update({ status: 'PROCESSING', updated_at: trx.fn.now() });
                }
                return pendingJobs;
            });

            if (jobs.length === 0) return;

            // 1. PERFORM EXTERNAL SENDS (Simulated)
            const finishedIds = [];
            for (const job of jobs) {
                // await provider.send(...)
                finishedIds.push(job.id);
            }

            // 2. FIX: BULK FINISH (One round-trip instead of 50)
            await systemDb('communication_logs')
                .whereIn('id', finishedIds)
                .update({ status: 'SENT', updated_at: systemDb.fn.now() });

            console.log(`[WORKER] Batch of ${finishedIds.length} finalized.`);

        } catch (err) {
            console.error("Worker Error:", err.message);
        }
    }
}

module.exports = new NotificationWorker();