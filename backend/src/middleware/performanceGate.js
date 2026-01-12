// SRS 1.7: Referral Promoters have NO access to student performance
const blockSalesFromPerformance = (req, res, next) => {
    const { role } = req.user;

    if (role === 'REFERRAL_PROMOTER') {
        // Log the unauthorized attempt for the Guardian
        console.error(`SECURITY ALERT: Sales user ${req.user.userId} attempted to access performance data.`);
        return res.status(403).json({ 
            error: "ACCESS_DENIED", 
            message: "Referral Promoters are legally restricted from viewing student performance data." 
        });
    }
    next();
};

module.exports = { blockSalesFromPerformance };