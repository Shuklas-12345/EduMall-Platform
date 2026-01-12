const express = require('express');
const router = express.Router();
const { executeInContext } = require('../../core/utils/execution.engine');
const MaintenanceService = require('../../core/services/maintenance.service');

router.get('/sovereignty-check', executeInContext(async (req, trx) => {
    if (req.user.role !== 'HQ_ADMIN') throw new Error("UNAUTHORIZED_ACCESS");

    const report = await MaintenanceService.runSovereigntyCheck();
    
    // Log the event with High Priority
    await trx('security_audit_logs').insert({
        user_id: req.user.userId,
        event_type: 'SYSTEM_SOVEREIGNTY_AUDIT',
        metadata: JSON.stringify(report)
    });

    return report;
}));

module.exports = router;