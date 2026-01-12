const verifyConsent = (purpose) => async (req, res, next) => {
    const { userId, tenantId, jwtNoticeId, consents, consentEpoch } = req.user;

    // A. TOTAL KILL-SWITCH CHECK
    const isGloballyRevoked = await redis.get(`revocation:${userId}:${tenantId}:GLOBAL`);
    if (isGloballyRevoked) {
        await logSecurityEvent(userId, tenantId, '403_GLOBAL_REVOCATION_BLOCK', { userId, purpose });
        return res.status(403).json({ error: "ALL_CONSENT_WITHDRAWN" });
    }

    // B. VERSION SUPERSESSION
    const currentNotice = await noticeCache.getLatest(req.user.lang);
    if (jwtNoticeId !== currentNotice.id) {
        await logSecurityEvent(userId, tenantId, '403_NOTICE_SUPERSEDED', { jwtNoticeId, currentId: currentNotice.id });
        return res.status(403).json({ error: "NOTICE_SUPERSEDED" });
    }

    // C. EPOCH SYNC (Mid-session Grant)
    const systemEpoch = await redis.get(`consent_epoch:${userId}:${tenantId}`);
    if (systemEpoch && parseInt(systemEpoch) > consentEpoch) {
        return res.status(401).json({ error: "CONSENT_UPDATED" }); // Triggers Silent Refresh
    }

    // D. GRANULAR REVOCATION & JWT CHECK
    const isPurposeRevoked = await redis.get(`revocation:${userId}:${tenantId}:${purpose}`);
    if (isPurposeRevoked || !consents[purpose]) {
        await logSecurityEvent(userId, tenantId, '403_PURPOSE_LACKING', { purpose });
        return res.status(403).json({ error: "CONSENT_REQUIRED", purpose });
    }

    next();
};