class AssessmentService {
    /**
     * FIX 1: RESUMPTION LOGIC (SRS 5.14)
     */
    async startExam(userId, tenantId, durationMins, trx) {
        // 1. Check if a 'STARTED' attempt already exists
        const existing = await trx('exam_attempts')
            .where({ user_id: userId, status: 'STARTED', tenant_id: tenantId })
            .first();

        if (existing) {
            // If it hasn't expired, return the existing session (RESUME)
            if (new Date() < new Date(existing.expires_at)) {
                return { attemptId: existing.id, sessionToken: existing.session_token, resume: true };
            }
            // If it HAS expired, close it out
            await trx('exam_attempts').where({ id: existing.id }).update({ status: 'EXPIRED' });
        }

        // 2. Otherwise, start a fresh session
        const sessionToken = crypto.randomUUID();
        const expiresAt = new Date(Date.now() + durationMins * 60000);

        const [newAttempt] = await trx('exam_attempts').insert({
            user_id: userId, tenant_id: tenantId, session_token: sessionToken, expires_at: expiresAt
        }).returning('*');

        return { attemptId: newAttempt.id, sessionToken, resume: false };
    }

    /**
     * FIX 4: RACE-CONDITION PROTECTION
     */
    async processSubmission(attemptId, answers, trx) {
        // STATE-LOCK: Only update if the status is still 'STARTED'
        const affectedRows = await trx('exam_attempts')
            .where({ id: attemptId, status: 'STARTED' }) 
            .update({
                status: 'SUBMITTED',
                topic_breakdown: JSON.stringify({ "ANALYTICAL": 85 }), // Simulated scoring
                score_percentage: 85.0
            });

        if (affectedRows === 0) {
            throw new Error("EXAM_ALREADY_SUBMITTED_OR_EXPIRED");
        }

        return { status: "SUCCESS" };
    }
}