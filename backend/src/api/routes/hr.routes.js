const { executeInContext } = require('../../core/utils/execution.engine');
const crypto = require('crypto');

const searchStaffByName = async (req, db) => {
    const { searchTerm } = req.query;
    if (!searchTerm || searchTerm.length < 3) return [];

    const salt = process.env.BLIND_INDEX_SALT;
    const cleanSearch = searchTerm.toLowerCase().replace(/\s+/g, '');
    const searchHashes = [];
    for (let i = 0; i <= cleanSearch.length - 3; i++) {
        const chunk = cleanSearch.substring(i, i + 3);
        searchHashes.push(crypto.createHmac('sha256', salt).update(chunk).digest('hex'));
    }

    return await db('staff_search_indexes')
        .join('staff_profiles', 'staff_search_indexes.staff_id', 'staff_profiles.id')
        .whereIn('staff_search_indexes.trigram_hash', searchHashes)
        .select('staff_profiles.id', 'staff_profiles.current_rating')
        .distinct();
};

const getStaffDetails = async (req, db) => {
    const { staffId } = req.params;
    const staffVaultKey = process.env.DB_STAFF_VAULT_KEY;

    if (!['HQ_ADMIN', 'HR_MANAGER'].includes(req.user.role)) throw new Error("FORBIDDEN");

    try {
        await db.raw(`SET LOCAL app.staff_vault_key = ?`, [staffVaultKey]);
        return await db('v_decrypted_staff').where({ id: staffId }).first();
    } finally {
        await db.raw(`SET LOCAL app.staff_vault_key = ''`);
    }
};

module.exports = { searchStaffByName, getStaffDetails };