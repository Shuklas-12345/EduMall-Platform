const { db } = require('../../database');
const { logSecurityEvent } = require('./logger');

const executeInContext = (controllerFn) => async (req, res, next) => {
    const { tenantId, userId } = req.user;
    const idempotencyKey = req.headers['x-idempotency-key'];

    try {
        const result = await db.transaction(async (trx) => {
            // 1. SET SECURITY CONTEXT
            await trx.raw(`SET LOCAL app.current_tenant = ?`, [tenantId]);
            await trx.raw(`SET LOCAL app.current_user_id = ?`, [userId]); // <--- New Variable
            
            if (req.centerPath) {
                await trx.raw(`SET LOCAL app.current_center_path = ?`, [req.centerPath]);
            }

            // 2. IDEMPOTENCY
            if (idempotencyKey) {
                const existing = await trx('processed_requests').where({ idempotency_key: idempotencyKey }).first();
                if (existing && existing.status === 'COMPLETED') return { _isIdempotent: true };
                if (!existing) {
                    await trx('processed_requests').insert({
                        idempotency_key: idempotencyKey, user_id: userId, tenant_id: tenantId, status: 'PENDING'
                    });
                }
            }

            // 3. EXECUTE
            const data = await controllerFn(req, trx);

            // 4. FINALIZE
            if (idempotencyKey) {
                await trx('processed_requests').where({ idempotency_key: idempotencyKey })
                    .update({ status: 'COMPLETED', updated_at: trx.fn.now() });
            }
            return data;
        });

        if (result?._isIdempotent) return res.status(409).json({ message: 'ALREADY_PROCESSED' });
        return res.status(200).json(result);

    } catch (err) {
        await logSecurityEvent(userId, tenantId, 'ENGINE_ERROR', { error: err.message });
        next(err);
    } finally {
        // FIX: THE NUCLEAR RESET (Includes app.current_user_id)
        try {
            await db.raw(`
                SET LOCAL app.current_tenant = '';
                SET LOCAL app.current_user_id = '';
                SET LOCAL app.current_center_path = '';
                SET LOCAL app.vault_key_v1 = '';
                SET LOCAL app.vault_key_v2 = '';
                SET LOCAL app.staff_key_v1 = '';
                SET LOCAL app.staff_key_v2 = '';
            `);
        } catch (resetErr) {
            console.error("POOL HYGIENE FAILURE", resetErr);
        }
    }
};

module.exports = { executeInContext };