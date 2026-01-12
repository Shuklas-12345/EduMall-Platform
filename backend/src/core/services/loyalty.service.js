class PointAwardService {
    async awardPoints(userId, tenantId, bucket, amount, eventId, reason, trx) {
        // 1. CUMULATIVE FATIGUE CHECK (Fixes Logout-Refresh Bypass)
        // Sum total active time today from the heartbeat table
        const dailyActivity = await trx('user_activity_heartbeats')
            .where({ user_id: userId, active_date: trx.fn.now() })
            .first();

        const totalMinutesToday = dailyActivity ? dailyActivity.minutes_spent : 0;
        if (totalMinutesToday > 180) { // SRS 7.7: Hard stop at 3 hours daily total
            return { success: false, reason: "DAILY_WELLBEING_LIMIT_REACHED" };
        }

        // 2. ATOMIC CAP CHECK (Fixes Concurrent Grind)
        // 'FOR UPDATE' locks this specific user's bucket row until the transaction finishes.
        // Other 9 tabs will now have to wait in line.
        let balanceRow = await trx('reward_balances')
            .where({ user_id: userId, tenant_id: tenantId, bucket })
            .forUpdate() 
            .first();

        const currentDailyTotal = (balanceRow && balanceRow.last_earned_date === new Date().toISOString().split('T')[0]) 
            ? balanceRow.daily_total 
            : 0;

        const cap = bucket === 'ACADEMIC' ? 1000 : 200;
        if (currentDailyTotal + amount > cap) {
            return { success: false, reason: "DAILY_CAP_EXCEEDED" };
        }

        // 3. ATOMIC INSERT (Fixes Multi-Bucket Inflation)
        // This will fail automatically if the source_event_id was already used
        try {
            await trx('reward_ledger').insert({
                user_id: userId, tenant_id: tenantId, bucket, amount,
                source_event_id: eventId, reason_code: reason
            });

            await trx('reward_balances')
                .insert({ user_id: userId, tenant_id: tenantId, bucket, balance: amount, daily_total: amount })
                .onConflict(['user_id', 'tenant_id', 'bucket'])
                .merge({
                    balance: trx.raw('reward_balances.balance + ?', [amount]),
                    daily_total: trx.raw('CASE WHEN last_earned_date = CURRENT_DATE THEN daily_total + ? ELSE ? END', [amount, amount]),
                    last_earned_date: trx.raw('CURRENT_DATE')
                });

            return { success: true };
        } catch (err) {
            if (err.code === '23505') return { success: false, reason: "EVENT_ALREADY_REWARDED" };
            throw err;
        }
    }
}
module.exports = new PointAwardService();