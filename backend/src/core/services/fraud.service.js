class FraudDetectionService {
    async isPotentialFraud(promoterId, leadPhoneHash, clientIP, trx) {
        // 1. SELF-REFERRAL CHECK (Promoter Hash vs Lead Hash)
        const promoter = await trx('users').where({ id: promoterId }).select('phone_hash').first();
        
        // Block if hashes match or if promoter doesn't have a hash (Identity Sync failure)
        if (!promoter || !promoter.phone_hash || promoter.phone_hash === leadPhoneHash) {
            return { isFraud: true, reason: 'SELF_REFERRAL_OR_IDENTITY_SYNC_FAIL' };
        }

        // 2. IP VELOCITY CHECK (Using global leads table)
        const recentIPCount = await trx('leads')
            .where({ ip_address: clientIP })
            .whereRaw("created_at > NOW() - INTERVAL '1 hour'")
            .count('id as total');

        if (parseInt(recentIPCount[0].total) > 5) {
            return { isFraud: true, reason: 'IP_VELOCITY_ABUSE' };
        }

        return { isFraud: false };
    }
}

module.exports = new FraudDetectionService();