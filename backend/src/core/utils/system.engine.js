const { db, systemDb } = require('../../database');
const { logSecurityEvent } = require('./logger');

const executeAsSystem = (handlerFn) => async (req, res, next) => {
    const { sessionId } = req.body;
    const webhookSecret = req.headers['x-webhook-secret'];

    // 1. COMPLIANCE LOGGING: Track forgery attempts (SRS 15.10)
    if (webhookSecret !== process.env.LIVE_WEBHOOK_SECRET) {
        await logSecurityEvent(null, null, 'WEBHOOK_FORGERY_ATTEMPT', { ip: req.ip });
        return res.status(401).json({ error: "UNAUTHORIZED_SIGNAL" });
    }

    try {
        // 2. THE MASTER LOOKUP (Fixes RLS Catch-22)
        // Use systemDb to find the tenant_id (this handle ignores RLS)
        const session = await systemDb('live_sessions').where({ id: sessionId }).first();
        if (!session) throw new Error("SESSION_NOT_FOUND");

        // 3. SET CONTEXT & EXECUTE
        await db.transaction(async (trx) => {
            await trx.raw(`SET LOCAL app.current_tenant = ?`, [session.tenant_id]);
            req.db = trx;
            const result = await handlerFn(req);
            return res.status(200).json(result);
        });
    } catch (err) {
        await logSecurityEvent(null, null, 'SYSTEM_ENGINE_CRASH', { error: err.message });
        res.status(500).json({ error: "SIGNAL_PROCESSING_FAILED" });
    }
};

module.exports = { executeAsSystem };