const crypto = require('crypto');

class ContentService {
    /**
     * SRS 12.3: Generates a duration-aware token with Forensic Metadata
     */
    async getSignedAssetUrl(req, assetId, durationInSeconds) {
        const userId = req.user.userId;
        const tenantId = req.user.tenantId;
        const clientIP = req.ip.replace('::ffff:', ''); // Clean IPv4
        const sessionID = req.sessionID || 'no-session';

        // FIX: THE "MID-LESSON FREEZE"
        // Expiry = Video Length + 1 hour buffer for pausing/rewinding
        const expiry = Math.floor(Date.now() / 1000) + durationInSeconds + 3600;
        
        const secret = process.env.CONTENT_SIGNING_SECRET;
        
        // FORENSIC TOKEN: Includes IP and Session ID in the HMAC hash
        const token = crypto.createHmac('sha256', secret)
                            .update(`${assetId}:${expiry}:${tenantId}:${clientIP}:${sessionID}`)
                            .digest('hex');

        // MASKED IP for UX (e.g., 192.168.x.x)
        const maskedIP = clientIP.split('.').slice(0, 2).join('.') + '.x.x';

        return {
            url: `/api/v1/stream/${assetId}?token=${token}&expires=${expiry}`,
            forensics: {
                maskedIP,
                sessionID: sessionID.substring(0, 8), // Short ID for UI
                expiryDate: new Date(expiry * 1000).toISOString()
            }
        };
    }
}

module.exports = new ContentService();