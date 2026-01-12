const express = require('express');
const router = express.Router();
const { executeInContext } = require('../../core/utils/execution.engine');
const { blockSalesFromPerformance } = require('../../middleware/performanceGate');

const getRecommendationWhy = async (req, db) => {
    const { id } = req.params;
    const userId = req.user.userId;

    // FIX: THE WHY-FORGE (Owner-only check)
    const data = await db('remedial_suggestions')
        .join('learning_gaps', 'remedial_suggestions.gap_id', 'learning_gaps.id')
        .where({ 
            'remedial_suggestions.id': id,
            'learning_gaps.user_id': userId // Verification: Must be the owner
        })
        .select('remedial_suggestions.reason_code', 'learning_gaps.signals_detected')
        .first();

    if (!data) throw new Error("RECO_NOT_FOUND_OR_UNAUTHORIZED");

    return {
        explanation: "Based on your unique error patterns.",
        evidence: data.signals_detected
    };
};

// APPLY THE SALES GATE TO ALL ROUTES
router.use(blockSalesFromPerformance);

router.get('/recommendations/why/:id', executeInContext(getRecommendationWhy));

module.exports = router;