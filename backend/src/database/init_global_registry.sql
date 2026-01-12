-- EDU-MALL GLOBAL NODE REGISTRY (V1.0)
-- Defines physical hardware locations and tenant affinity

-- 1. PHYSICAL NODE DEFINITIONS
CREATE TABLE IF NOT EXISTS system_nodes (
    id VARCHAR(20) PRIMARY KEY,     -- e.g., 'NODE-IN-MUMBAI', 'NODE-EU-FRANKFURT'
    jurisdiction_id VARCHAR(10) REFERENCES jurisdictions(id),
    base_url TEXT NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. TENANT NODE AFFINITY (SRS 22.7)
-- Locks a school's data to a specific physical region
ALTER TABLE tenants ADD COLUMN IF NOT EXISTS home_node_id VARCHAR(20) REFERENCES system_nodes(id);

-- 3. LOG SYNC TRACKER
-- Ensures regional logs are sanitized before being pushed to Global HQ
ALTER TABLE security_audit_logs ADD COLUMN IF NOT EXISTS is_synced_to_hq BOOLEAN DEFAULT FALSE;

-- 4. RLS POLICIES
ALTER TABLE system_nodes ENABLE ROW LEVEL SECURITY;
CREATE POLICY global_read_policy ON system_nodes FOR SELECT TO public USING (true);