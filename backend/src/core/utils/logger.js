const db = require('../../database'); // Global access allowed ONLY here

const logSecurityEvent = async (userId, tenantId, eventType, metadata) => {
    try {
        await db('security_audit_logs').insert({
            user_id: userId,
            attempted_tenant_id: tenantId,
            event_type: eventType,
            metadata: JSON.stringify(metadata)
        });
    } catch (e) {
        console.error("CRITICAL SECURITY LOGGING FAILURE", e);
    }
};

module.exports = { logSecurityEvent };