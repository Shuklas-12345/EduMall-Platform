/**
 * SRS 18.12: Scope-Based Authorization
 */
const verifyScope = (requiredScope) => (req, res, next) => {
    const userScopes = req.user.scopes || [];

    if (!userScopes.includes(requiredScope) && !userScopes.includes('admin:all')) {
        return res.status(403).json({ 
            error: "INSUFFICIENT_SCOPE", 
            message: `Action requires '${requiredScope}' permission.` 
        });
    }

    next();
};

module.exports = { verifyScope };