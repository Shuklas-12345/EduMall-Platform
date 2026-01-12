const crypto = require('crypto');

const generateOpaqueSlug = (promoterId, tenantId) => {
    const salt = process.env.REFERRAL_SALT || 'edumall_growth_2026';
    const rawPayload = `${promoterId}:${tenantId}:${Date.now()}`;
    const hash = crypto.createHmac('sha256', salt).update(rawPayload).digest('hex');
    return `ref_${hash.substring(0, 12)}`;
};

module.exports = { generateOpaqueSlug };