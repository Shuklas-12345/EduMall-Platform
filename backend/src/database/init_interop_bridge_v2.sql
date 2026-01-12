-- 1. API CLIENTS
DROP TABLE IF EXISTS api_clients CASCADE;
CREATE TABLE api_clients (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    client_id VARCHAR(50) UNIQUE NOT NULL,
    client_secret_hash TEXT NOT NULL,
    tenant_id UUID REFERENCES tenants(id) NOT NULL,
    scopes JSONB DEFAULT '["read:syllabus"]', 
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. EXTERNAL DATA STAGING (Encrypted BYTEA)
DROP TABLE IF EXISTS external_sync_staging CASCADE;
CREATE TABLE external_sync_staging (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID REFERENCES tenants(id) NOT NULL,
    external_source_name TEXT NOT NULL,
    internal_user_id UUID REFERENCES users(id),
    proposed_data BYTEA NOT NULL, 
    conflict_type VARCHAR(50),
    is_resolved BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Apply RLS
ALTER TABLE api_clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE external_sync_staging ENABLE ROW LEVEL SECURITY;
CREATE POLICY tenant_isolation_policy ON api_clients USING (tenant_id = current_setting('app.current_tenant', true)::uuid);
CREATE POLICY tenant_isolation_policy ON external_sync_staging USING (tenant_id = current_setting('app.current_tenant', true)::uuid);