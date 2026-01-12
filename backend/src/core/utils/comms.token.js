const crypto = require('crypto');

/**
 * SRS 9.9 & 1.6: Generates a tenant-scoped signed token
 */
const generateUnsubscribeToken = (userId, tenantId, channel) => {
    const secret = process.env.COMMS_SECRET || 'edumall_voice_2026';
    const payload = `${userId}:${tenantId}:${channel}:${Date.now()}`;
    const signature = crypto.createHmac('sha256', secret).update(payload).digest('hex').substring(0, 16);
    return Buffer.from(`${payload}:${signature}`).toString('base64');
};

const verifyUnsubscribeToken = (tokenB64) => {
    try {
        const raw = Buffer.from(tokenB64, 'base64').toString();
        const [userId, tenantId, channel, timestamp, signature] = raw.split(':');
        const secret = process.env.COMMS_SECRET || 'edumall_voice_2026';
        
        const expected = crypto.createHmac('sha256', secret)
            .update(`${userId}:${tenantId}:${channel}:${timestamp}`)
            .digest('hex').substring(0, 16);
            
        if (signature !== expected) return null;
        
        // Expiry check (30 days)
        if (Date.now() - parseInt(timestamp) > 30 * 24 * 60 * 60 * 1000) return null;

        return { userId, tenantId, channel };
    } catch (e) { return null; }
};

module.exports = { generateUnsubscribeToken, verifyUnsubscribeToken };