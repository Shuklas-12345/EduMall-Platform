const { systemDb } = require('../../database');

class ComplianceManager {
    /**
     * SRS 20.14: Generates the DPDP Compliance Artifact
     */
    async generateComplianceArtifact() {
        // 1. Fetch Version Distribution
        const vaultHealth = await systemDb('v_compliance_vault_health').select('*');
        
        // 2. CHECK FOR INCONSISTENCY
        // If there are multiple versions, the rotation is incomplete
        const versions = [...new Set(vaultHealth.map(h => h.vault_key_version))];
        const isAirtight = versions.length === 1 && versions[0] > 0;

        return {
            platform: "EduMall Sovereign OS",
            exportDate: new Date().toISOString(),
            auditStatus: isAirtight ? 'HEALTHY' : 'WARNING_MIXED_STATE',
            vaultVersioning: vaultHealth,
            encryptionStandard: "AES-256 PGP-Symmetric",
            forensicSample: await systemDb('security_audit_logs').limit(20)
        };
    }
}

module.exports = new ComplianceManager();