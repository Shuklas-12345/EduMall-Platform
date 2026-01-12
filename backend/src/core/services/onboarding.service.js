const hrService = require('./hr.service');

class OnboardingService {
    /**
     * automateSetup: Final Handshake Sequence
     */
    async automateSetup(trx, userId, tenantId, role, isMinor, phoneHash, maskedName, parentId = null, rawName = null) {
        
        // 1. IDENTITY SYNC
        await trx('users').where({ id: userId }).update({
            phone_hash: phoneHash,
            masked_name: maskedName,
            current_session_started_at: trx.fn.now()
        });

        // 2. ROLE-BASED PROVISIONING
        if (role === 'STUDENT') {
            if (isMinor && !parentId) throw new Error("MINOR_SAFETY_VIOLATION");
            await trx('student_profiles').insert({ user_id: userId, tenant_id: tenantId });
            if (isMinor && parentId) {
                await trx('parent_student_links').insert({
                    parent_user_id: parentId, student_user_id: userId, relationship_type: 'GUARDIAN'
                });
            }
        } 
        else if (['TEACHER', 'FACULTY'].includes(role)) {
            await hrService.createStaffProfile(trx, userId, tenantId, {
                fullName: rawName,
                maxHours: 40
            });
        }

        // 3. INITIALIZE HEARTBEAT
        await trx('user_activity_heartbeats').insert({
            user_id: userId, active_date: trx.fn.now(), minutes_spent: 0
        }).onConflict(['user_id', 'active_date']).ignore();

        return { status: 'PROVISIONED' };
    }
}

module.exports = new OnboardingService();