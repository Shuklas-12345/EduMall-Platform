class SignalPublisher {
    async publishSubmissionSignal(userId, tenantId, assignmentId, score, trx) {
        // FIX 2: AIRTIGHT TENANCY SCOPING
        // We now filter by tenant_id to prevent cross-tenant data bleed
        const recentAttempts = await trx('assignment_submissions')
            .where({ 
                user_id: userId, 
                tenant_id: tenantId, // Mandated Isolation
                assignment_id: assignmentId 
            })
            .orderBy('submitted_at', 'desc')
            .limit(3);

        const failCount = recentAttempts.filter(a => a.score < 50).length;

        if (failCount >= 3) {
            await logSecurityEvent(userId, tenantId, 'LEARNING_GAP_DETECTED', { 
                assignmentId, 
                averageScore: score,
                tenantBound: true 
            });
        }
    }
}