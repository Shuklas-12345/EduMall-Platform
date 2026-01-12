class LearningBrain {
    async analyzeSignals(userId, tenantId, topicId, trx) {
        // 1. Fetch current topic path
        const topic = await trx('academic_entities').where({ id: topicId }).first();
        if (!topic) return null;

        // 2. FIX: FOUNDATIONAL PRIORITY (The Join Fix)
        // We join with academic_entities to get the 'node_path' of previous gaps
        const foundationalGaps = await trx('learning_gaps')
            .join('academic_entities', 'learning_gaps.topic_id', 'academic_entities.id')
            .where({ 
                'learning_gaps.user_id': userId, 
                'learning_gaps.is_resolved': false 
            })
            // Does an ancestor path exist in our current gaps?
            .whereRaw('academic_entities.node_path @> ? AND academic_entities.id != ?', [topic.node_path, topicId])
            .first();

        if (foundationalGaps) {
            return { action: 'PRIORITIZE_FOUNDATION', target: foundationalGaps.topic_id };
        }

        // 3. TRIGGER NEW GAP (Evidence-based)
        // ... (Logic for signal counts) ...
    }

    async getActiveSuggestions(userId, trx) {
        // FIX: THE ZOMBIE NUDGE
        // Explicitly filter for 'SUGGESTED' status only
        return await trx('remedial_suggestions')
            .join('learning_gaps', 'remedial_suggestions.gap_id', 'learning_gaps.id')
            .where({ 
                'learning_gaps.user_id': userId, 
                'remedial_suggestions.status': 'SUGGESTED' 
            })
            .select('remedial_suggestions.*', 'learning_gaps.topic_id');
    }
}
module.exports = new LearningBrain();