const centerLockdown = async (req, res, next) => {
    const staffProfile = await req.db('staff_profiles').where({ user_id: req.user.userId }).first();

    if (!staffProfile) return res.status(403).json({ error: "STAFF_PROFILE_REQUIRED" });

    // FIX: Physically inject the center_path ltree for the RLS policy
    await req.db.raw(`SET LOCAL app.current_center_path = ?`, [staffProfile.center_path]);
    
    req.centerPath = staffProfile.center_path;
    next();
};

module.exports = { centerLockdown };