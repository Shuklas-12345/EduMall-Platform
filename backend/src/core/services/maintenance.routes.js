const { systemDb } = require('../../database');

class MaintenanceService {
    /**
     * runSovereigntyCheck: The Deep Audit
     */
    async runSovereigntyCheck() {
        const requiredTables = ['users', 'leads', 'staff_profiles', 'f_assessments'];
        
        // FIX: THE DEEP CHECK (Verifies both RLS status AND Policy existence)
        const audit = await systemDb.raw(`
            SELECT 
                t.tablename, 
                t.relrowsecurity as rls_enabled,
                COUNT(p.policyname) as policy_count
            FROM (SELECT tablename, relname FROM pg_tables JOIN pg_class ON relname = tablename WHERE schemaname = 'public') t
            LEFT JOIN pg_policy p ON p.tablename = t.tablename
            WHERE t.tablename IN (${requiredTables.map(t => `'${t}'`).join(',')})
            GROUP BY t.tablename, t.relrowsecurity
        `);

        const vulnerabilities = audit.rows.filter(r => !r.rls_enabled || parseInt(r.policy_count) === 0);

        return {
            timestamp: new Date().toISOString(),
            status: vulnerabilities.length === 0 ? 'PASS' : 'FAIL',
            posture: vulnerabilities.length === 0 ? 'SOVEREIGN' : 'COMPROMISED',
            details: audit.rows.map(r => ({
                table: r.tablename,
                secure: r.rls_enabled && parseInt(r.policy_count) > 0,
                policyCount: r.policy_count
            }))
        };
    }
}

module.exports = new MaintenanceService();