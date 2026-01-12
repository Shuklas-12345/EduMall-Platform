const { systemDb } = require('../../database');

class ThrottleService {
    /**
     * SRS 9.9 & 22.3: Atomic, Timezone-Safe Throttling
     */
    async isThrottled(userId, category, trx) {
        if (category === 'SAFETY') return false;

        // 1. ATOMIC LOCK (Stops Burst Spam)
        await trx('user_comms_locks').insert({ user_id: userId }).onConflict('user_id').ignore();
        await trx('user_comms_locks').where({ user_id: userId }).forUpdate();

        // 2. TIMEZONE CHECK (Fixes Timezone Injection Crash)
        let localHour = 12; // Safe default
        try {
            const user = await trx('users').where({ id: userId }).select('timezone').first();
            const userTime = new Date().toLocaleString("en-US", { 
                timeZone: user.timezone || 'Asia/Kolkata' 
            });
            localHour = new Date(userTime).getHours();
        } catch (tzError) {
            console.error(`TZ Error for user ${userId}, falling back to IST.`);
            // Fallback to IST if the timezone string is 'Hacker/Zone'
            const istTime = new Date().toLocaleString("en-US", { timeZone: 'Asia/Kolkata' });
            localHour = new Date(istTime).getHours();
        }

        if (localHour >= 22 || localHour < 7) {
            return { throttled: true, reason: 'QUIET_HOURS_ACTIVE' };
        }

        // 3. FREQUENCY CHECK (Including PENDING to prevent race-conditions)
        const recentCount = await trx('communication_logs')
            .where({ user_id: userId })
            .whereIn('status', ['SENT', 'PENDING']) // Reserve the slot!
            .whereRaw("created_at >= NOW() - INTERVAL '24 hours'")
            .join('notification_templates', 'communication_logs.template_id', 'notification_templates.id')
            .whereIn('notification_templates.category', ['REMEDIAL', 'REWARDS', 'MARKETING'])
            .count('communication_logs.id as total');

        if (parseInt(recentCount[0].total) >= 3) {
            return { throttled: true, reason: 'DAILY_CAP_REACHED' };
        }

        return { throttled: false };
    }
}

module.exports = new ThrottleService();