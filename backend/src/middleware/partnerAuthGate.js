const bcrypt = require('bcrypt');
const { systemDb } = require('../database');

const verifyPartnerKey = async (req, res, next) => {
    const clientId = req.headers['x-client-id'];
    const clientSecret = req.headers['x-client-secret'];

    if (!clientId || !clientSecret) return res.status(401).json({ error: "API_KEY_REQUIRED" });

    // Use Master handle to find the client initially
    const client = await systemDb('api_clients').where({ client_id: clientId, is_active: true }).first();
    if (!client) return res.status(401).json({ error: "INVALID_PARTNER" });

    const isMatch = await bcrypt.compare(clientSecret, client.client_secret_hash);
    if (!isMatch) return res.status(401).json({ error: "CREDENTIAL_MISMATCH" });

    req.user = {
        id: client.id,
        tenantId: client.tenant_id,
        role: 'EXTERNAL_PARTNER',
        scopes: client.scopes 
    };

    next();
};

module.exports = { verifyPartnerKey };