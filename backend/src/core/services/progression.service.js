class ProgressionManager {
    /**
     * SRS 3.11: Path-Based Gating
     * Checks if the target OR ANY ANCESTOR is locked.
     */
    async checkAccess(userId, tenantId, entityId, trx) {
        // 1. Fetch the ltree path for the entity the student wants to access
        const target = await trx('academic_entities').where({ id: entityId }).first();
        if (!target) return { isLocked: false };

        // 2. FIND ALL POTENTIAL LOCKS: Get all rules for any node in this path
        // Using ltree logic: 'ancestor_path @> target.node_path'
        const activeLocks = await trx('gating_rules')
            .join('academic_entities', 'gating_rules.target_entity_id', 'academic_entities.id')
            .whereRaw('academic_entities.node_path @> ?', [target.node_path])
            .select('gating_rules.*');

        // 3. VERIFY EACH LOCK
        for (const rule of activeLocks) {
            const bestSubmission = await trx('assignment_submissions')
                .where({ 
                    user_id: userId, 
                    tenant_id: tenantId, 
                    assignment_id: rule.required_assignment_id 
                })
                .where('score', '>=', rule.min_mastery_required)
                .first();

            // FIX: If ANY parent is not cleared, the child is locked!
            if (!bestSubmission) {
                return {
                    isLocked: true,
                    reason: `Parent Module Locked. Clearance required at: ${rule.target_entity_id}`,
                    requiredAssignmentId: rule.required_assignment_id
                };
            }
        }

        return { isLocked: false };
    }
}