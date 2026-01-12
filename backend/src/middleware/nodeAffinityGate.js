const { systemDb } = require('../database');

/**
 * SRS 22.12: Hard-Border Verification (Pre-PII Lookup)
 */
const verifyNodeAffinity = async (req, res, next) => {
    // 1. Identify Tenant without touching 'users' table
    const tenantId = req.headers['x-tenant-id'] || (req.user && req.user.tenantId);
    const currentNodeId = process.env.NODE_ID; 

    if (!tenantId) return next();

    // 2. Lookup Node Affinity in Global Config
    const tenantConfig = await systemDb('tenants')
        .where({ id: tenantId })
        .select('home_node_id')
        .first();

    if (!tenantConfig) return res.status(404).json({ error: "TENANT_NOT_FOUND" });

    // 3. SOVEREIGNTY BLOCK (SRS 22.7)
    if (tenantConfig.home_node_id !== currentNodeId) {
        // Generic 451 error to prevent node-probing leaks
        return res.status(451).json({ 
            error: "REGIONAL_ACCESS_RESTRICTED",
            message: "Legal data residency protocols prohibit access via this node."
        });
    }

    next();
};

module.exports = { verifyNodeAffinity };