const express = require('express');
const app = express();
const { verifyNodeAffinity } = require('./middleware/nodeAffinityGate');
const { verifyIDCard } = require('./middleware/authGate');
const { limiter } = require('./middleware/securityGate');

// 1. INFRASTRUCTURE LAYER
app.use(express.json({ limit: '2mb' }));
app.use(limiter); // DDoS Protection first

// 2. SOVEREIGN GATEWAY SEQUENCE (The "Border-First" Rule)
// Check if the school belongs on this server BEFORE looking at student data
app.use(verifyNodeAffinity); 

// 3. AUTHENTICATION LAYER
// Only runs if the node affinity matches the tenant
app.use(verifyIDCard);

// 4. BUSINESS ROUTES
app.get('/api/health', (req, res) => res.json({ status: "Sovereign" }));
app.use('/api/v1/analytics', require('./api/routes/analytics.routes'));
app.use('/api/v1/hr', require('./api/routes/hr.routes'));

module.exports = app;