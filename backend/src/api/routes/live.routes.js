const express = require('express');
const router = express.Router();
const { executeInContext } = require('../../core/utils/execution.engine');
const { checkLiveAccess } = require('../../middleware/liveAccessGate');

/**
 * POST /api/v1/attendance/verify
 * SRS 4.7: Verified Physical Check-in
 */
router.post(
    '/attendance/verify', 
    checkLiveAccess, // 1. Check if student is in batch
    executeInContext(async (req, trx) => {
        // FIX: No redundant middleware. 
        // The 'executeInContext' wrapper below now handles X-Idempotency-Key
        // using the correct RLS tenant context.
        return { status: "SUCCESS", studentName: req.user.maskedName };
    })
);

module.exports = router;