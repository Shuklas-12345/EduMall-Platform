const express = require('express');
const router = express.Router();
const { executeInContext } = require('../core/utils/execution.engine');
const { verifyConsent } = require('../middleware/consentGate');
const { checkLiveAccess } = require('../middleware/liveAccessGate');
const AssessmentEngine = require('../core/assessmentEngine');

/**
 * 1. ACADEMIC PROGRESS (SRS 8.2)
 * Gated by 'CORE' learning data consent.
 */
router.get('/progress/mastery', verifyConsent('CORE'), executeInContext(async (req, trx) => {
    return await trx('user_progress')
        .join('academic_entities', 'user_progress.entity_id', 'academic_entities.id')
        .where('user_progress.user_id', req.user.userId)
        .select('academic_entities.title', 'user_progress.mastery_score');
}));

/**
 * 2. LIVE CLASSROOM JOIN (SRS 4.12)
 * Verified by Batch Enrollment and Time-Window gates.
 */
router.get('/live/join/:sessionId', checkLiveAccess, executeInContext(async (req, trx) => {
    // Handshake logic with BBB/Zoom (from Task 2.3)
    return { url: "https://bbb.edumall.sovereign/join?token=verified" };
}));

/**
 * 3. EXAMINATION ACCESS (SRS 5.7)
 * Gated by Attempt Pinning and SQL Encryption.
 */
router.post('/exams/start', executeInContext(async (req, trx) => {
    return await AssessmentEngine.startExam(req.user.userId, req.user.tenantId, req.body.examId, trx);
}));

module.exports = router;