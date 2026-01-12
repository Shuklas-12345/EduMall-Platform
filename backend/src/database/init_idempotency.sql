-- 1. IDEMPOTENCY REGISTRY (SRS 11.2 & 19.2)
CREATE TYPE request_status AS ENUM ('PENDING', 'COMPLETED');

DROP TABLE IF EXISTS processed_requests CASCADE;
CREATE TABLE processed_requests (
    idempotency_key UUID PRIMARY KEY,
    user_id UUID REFERENCES users(id) NOT NULL,
    tenant_id UUID REFERENCES tenants(id) NOT NULL,
    status request_status DEFAULT 'PENDING',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. DEVICE BINDING (SRS 19.9)
CREATE TABLE IF NOT EXISTS user_device_bindings (
    user_id UUID REFERENCES users(id) NOT NULL,
    tenant_id UUID REFERENCES tenants(id) NOT NULL,
    device_id TEXT NOT NULL, 
    bound_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id, tenant_id)
);

-- Apply RLS
ALTER TABLE processed_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_device_bindings ENABLE ROW LEVEL SECURITY;

CREATE POLICY tenant_isolation_policy ON processed_requests USING (tenant_id = current_setting('app.current_tenant', true)::uuid);
CREATE POLICY tenant_isolation_policy ON user_device_bindings USING (tenant_id = current_setting('app.current_tenant', true)::uuid);