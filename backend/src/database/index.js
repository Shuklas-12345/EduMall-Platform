const knex = require('knex');
const config = require('../../knexfile');

// 1. REGULAR HANDLE (Standard users, restricted by RLS)
const db = knex(config.development);

// 2. MASTER KEY (System only, bypasses RLS)
// This handle connects as the 'table owner' or a privileged role
const systemDb = knex({
    ...config.development,
    connection: {
        ...config.development.connection,
        user: process.env.DB_SYSTEM_USER || 'edumall_master' 
    }
});

module.exports = { db, systemDb };