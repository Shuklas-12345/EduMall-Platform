const crypto = require('crypto');

class WorkloadManager {
    /**
     * SRS 16.12: Staff Vault Population
     * rawData includes: fullName, nationalId, bankDetails
     */
    async createStaffProfile(trx, userId, tenantId, rawData) {
        // FIX: Consistent Staff Key for Vault
        const staffKey = process.env.DB_STAFF_VAULT_KEY;

        const [profile] = await trx('staff_profiles').insert({
            user_id: userId,
            tenant_id: tenantId,
            center_path: rawData.centerPath || 'root',
            full_name: trx.raw(`pgp_sym_encrypt(?, ?)`, [rawData.fullName, staffKey]),
            national_id: rawData.nationalId ? trx.raw(`pgp_sym_encrypt(?, ?)`, [rawData.nationalId, staffKey]) : null,
            bank_details: rawData.bankDetails ? trx.raw(`pgp_sym_encrypt(?, ?)`, [rawData.bankDetails, staffKey]) : null,
            max_hours_per_week: rawData.maxHours || 40
        }).returning('*');

        await this.generateStaffSearchIndexes(rawData.fullName, profile.id, tenantId, trx);
        return profile;
    }

    async checkScheduleConflict(staffId, newSessionId, trx) {
        const newSession = await trx('live_sessions').where({ id: newSessionId }).first();
        const conflict = await trx('staff_assignments')
            .join('live_sessions', 'staff_assignments.session_id', 'live_sessions.id')
            .where('staff_assignments.staff_id', staffId)
            .andWhere('live_sessions.start_time', '<', newSession.end_time)
            .andWhere('live_sessions.end_time', '>', newSession.start_time)
            .first();

        if (conflict) throw new Error("FACULTY_DOUBLE_BOOKING_DETECTED");
        return false;
    }

    async getWeeklyLoad(staffId, trx) {
        const result = await trx('staff_assignments')
            .join('live_sessions', 'staff_assignments.session_id', 'live_sessions.id')
            .where('staff_assignments.staff_id', staffId)
            .whereRaw("live_sessions.start_time >= date_trunc('week', now())")
            .whereRaw("live_sessions.start_time < date_trunc('week', now()) + interval '1 week'")
            .sum('staff_assignments.hours_allocated as total');
        
        return parseFloat(result[0].total || 0);
    }

    async generateStaffSearchIndexes(name, staffId, tenantId, trx) {
        const salt = process.env.BLIND_INDEX_SALT;
        const cleanName = name.toLowerCase().replace(/\s+/g, '');
        const hashes = [];
        for (let i = 0; i <= cleanName.length - 3; i++) {
            const chunk = cleanName.substring(i, i + 3);
            hashes.push(crypto.createHmac('sha256', salt).update(chunk).digest('hex'));
        }
        const rows = hashes.map(h => ({ staff_id: staffId, tenant_id: tenantId, trigram_hash: h }));
        if (rows.length > 0) await trx('staff_search_indexes').insert(rows);
    }
}

module.exports = new WorkloadManager();