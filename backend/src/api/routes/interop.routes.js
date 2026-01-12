const express = require('express');
const router = express.Router();
const { executeInContext } = require('../../core/utils/execution.engine');
const { verifyPartnerKey } = require('../../middleware/partnerAuthGate');
const { verifyScope } = require('../../middleware/scopeGate');

/**
 * POST /api/v1/sync/external
 * SRS 18.6: Partner Data Sync
 */
router.post(
    '/sync/external',
    verifyPartnerKey,       // 1. Who are you? (Partner ID)
    verifyScope('write:sync'), // 2. Are you allowed to write?
    executeInContext(async (req, trx) => {
        // Handover to SyncService
        return { status: "RECEIVED" };
    })
);

module.exports = router;