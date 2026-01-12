const jwt = require('jsonwebtoken');
const { systemDb } = require('../database');
const { logSecurityEvent } = require('../core/utils/logger');

const verifyIDCard = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    const deviceId = req.headers['x-device-id'];

    if (!token) return res.status(401).json({ error: "MISSING_ID" });

    jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
        if (err) return res.status(403).json({ error: "INVALID_ID" });

        // FIX: AUTOMATED FIRST-DEVICE BINDING (SRS 19.9)
        if (deviceId) {
            // We use systemDb to check for an existing binding
            const binding = await systemDb('user_device_bindings')
                .where({ user_id: user.id, tenant_id: user.tenantId })
                .first();

            if (!binding) {
                // FIRST TIME LOGIN: Adopt this device
                await systemDb('user_device_bindings').insert({
                    user_id: user.id,
                    tenant_id: user.tenantId,
                    device_id: deviceId
                });
                console.log(`[SECURITY] User ${user.id} bound to device ${deviceId}`);
            } else if (binding.device_id !== deviceId) {
                // SECOND DEVICE: Block entry
                await logSecurityEvent(user.id, user.tenantId, 'DEVICE_BINDING_VIOLATION', { attemptedId: deviceId });
                return res.status(403).json({ 
                    error: "UNAUTHORIZED_DEVICE", 
                    message: "Account locked to another device. Contact support to reset." 
                });
            }
        }

        req.user = user;
        next();
    });
};

module.exports = { verifyIDCard };