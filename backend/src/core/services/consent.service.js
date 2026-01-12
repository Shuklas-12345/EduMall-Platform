class ConsentManager {
    async revokeAllConsent(userId, tenantId) {
        await db.transaction(async (trx) => {
            // 1. Database: Persist Total Withdrawal
            await trx('user_consents')
                .where({ user_id: userId, tenant_id: tenantId, withdrawn_at: null })
                .update({ withdrawn_at: trx.fn.now() });

            // 2. Atomic Sync: Update Redis ONLY after DB success
            await trx.commit(); 
            
            // GLOBAL KILL SWITCH: Blocks all purposes immediately
            await redis.set(`revocation:${userId}:${tenantId}:GLOBAL`, 'true', 'EX', 86400);
            
            await logSecurityEvent(userId, tenantId, 'TOTAL_CONSENT_WITHDRAWAL', { userId });
        });
    }

    async grantConsent(userId, tenantId, matrix, noticeId) {
        await db.transaction(async (trx) => {
            // Upsert Logic...
            await trx('user_consents').insert({ ... }).onConflict(...).merge();
            
            await trx.commit(); // Ensure DB is saved before clearing blocks

            // Clear Redis blocks and increment Epoch for silent refresh
            await redis.del(`revocation:${userId}:${tenantId}:GLOBAL`);
            await redis.incr(`consent_epoch:${userId}:${tenantId}`);
        });
    }
}