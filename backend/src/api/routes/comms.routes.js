const express = require('express');
const router = express.Router();
const { verifyUnsubscribeToken } = require('../../core/utils/comms.token');
const { systemDb } = require('../../database');

/**
 * GET /api/v1/comms/unsubscribe?t=[token]
 * SRS 1.6: Isolated Unsubscribe
 */
router.get('/unsubscribe', async (req, res) => {
    const { t } = req.query;
    const verified = verifyUnsubscribeToken(t);

    if (!verified) {
        return res.status(400).send('Invalid or expired unsubscribe link.');
    }

    // FIX: UPDATE PREFERENCES FOR THIS SPECIFIC TENANT ONLY
    await systemDb('user_notification_preferences')
        .where({ 
            user_id: verified.userId, 
            tenant_id: verified.tenantId, // Isolated update
            channel: verified.channel 
        })
        .update({ is_enabled: false });

    res.send('Successfully unsubscribed from this institution’s alerts.');
});

module.exports = router;