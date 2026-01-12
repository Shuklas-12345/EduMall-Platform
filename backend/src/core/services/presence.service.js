const crypto = require('crypto');
const NotificationDispatcher = require('./notification.dispatcher');

class PresenceService {
    /**
     * SRS 4.7: Validates TOTP with a 3-step window (T-1, T, T+1)
     * Total window = 45 seconds (Safe for 3G/4G lag)
     */
    verifyAttendanceToken(token, centerId, tenantId) {
        const secret = process.env.QR_TOTP_SECRET;
        const currentEpoch = Math.floor(Date.now() / 15000);
        
        // Check 3 windows: 15s ago, Now, 15s from now
        for (let i = -1; i <= 1; i++) {
            const epoch = currentEpoch + i;
            const payload = `${centerId}:${tenantId}:${epoch}`;
            const expected = crypto.createHmac('sha256', secret).update(payload).digest('hex').substring(0, 8);
            if (token === expected) return true;
        }
        return false;
    }

    /**
     * SRS 15.8: High-Efficiency Minor Watchdog
     * Uses a single anti-join query for all centers
     */
    async runMinorWatchdog(trx) {
        // Bulk find all minors who should be in class but haven't checked in
        const absentees = await trx('enrollments')
            .join('users', 'enrollments.user_id', 'users.id')
            .join('physical_sessions', 'enrollments.batch_id', 'physical_sessions.batch_id')
            .join('parent_student_links', 'users.id', 'parent_student_links.student_user_id')
            .leftJoin('physical_attendance_logs', function() {
                this.on('users.id', '=', 'physical_attendance_logs.user_id')
                    .andOn('physical_attendance_logs.session_id', '=', 'physical_sessions.id');
            })
            .where({
                'physical_sessions.status': 'ACTIVE',
                'users.is_minor': true
            })
            .whereRaw("physical_sessions.start_time <= NOW() - INTERVAL '10 minutes'")
            .whereNull('physical_attendance_logs.id')
            .select('users.masked_name', 'parent_student_links.parent_user_id', 'physical_sessions.tenant_id');

        // Enqueue alerts using the Task 4.6 Priority Pattern
        for (const record of absentees) {
            await NotificationDispatcher.send(record.parent_user_id, record.tenant_id, 'MINOR_ABSENCE_ALERT', {
                studentName: record.masked_name
            }, { priority: 'CRITICAL' });
        }
    }
}

module.exports = new PresenceService();