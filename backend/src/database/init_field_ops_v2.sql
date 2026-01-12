-- 1. PHYSICAL SESSIONS (Hardened with Path)
DROP TABLE IF EXISTS physical_sessions CASCADE;
CREATE TABLE physical_sessions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID REFERENCES tenants(id) NOT NULL,
    center_id UUID REFERENCES academic_entities(id) NOT NULL,
    center_path ltree NOT NULL, -- SRS 2.3: Used for sub-tree isolation
    batch_id UUID REFERENCES batches(id) NOT NULL,
    start_time TIMESTAMP WITH TIME ZONE NOT NULL,
    end_time TIMESTAMP WITH TIME ZONE NOT NULL,
    status VARCHAR(20) DEFAULT 'SCHEDULED'
);

-- 2. PHYSICAL ATTENDANCE LOGS
DROP TABLE IF EXISTS physical_attendance_logs CASCADE;
CREATE TABLE physical_attendance_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    session_id UUID REFERENCES physical_sessions(id) NOT NULL,
    user_id UUID REFERENCES users(id) NOT NULL,
    tenant_id UUID REFERENCES tenants(id) NOT NULL,
    center_path ltree NOT NULL, -- Added for RLS performance
    check_in_time TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    method VARCHAR(20) DEFAULT 'QR_SCAN'
);

-- 3. FIX: CENTER-LEVEL RLS (SRS 1.6 & 2.3)
-- Blocks "Sibling Peeking": Staff can only see their center or its children
ALTER TABLE physical_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE physical_attendance_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY center_isolation_policy ON physical_sessions 
    USING (tenant_id = current_setting('app.current_tenant', true)::uuid 
    AND center_path <@ current_setting('app.current_center_path', true)::ltree);

CREATE POLICY center_isolation_policy ON physical_attendance_logs 
    USING (tenant_id = current_setting('app.current_tenant', true)::uuid 
    AND center_path <@ current_setting('app.current_center_path', true)::ltree);