-- Path: backend/src/database/init_crm_leads_v2.sql
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 1. FINAL HARDENED LEADS TABLE
DROP TABLE IF EXISTS leads CASCADE;
CREATE TABLE leads (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID REFERENCES tenants(id) NOT NULL,
    promoter_id UUID,
    -- SRS 1.10: ALL PII (Name, Email, Phone) is now encrypted at rest
    full_name BYTEA NOT NULL, 
    email BYTEA, 
    phone BYTEA NOT NULL,
    phone_hash TEXT NOT NULL, -- SHA256 for de-duplication
    status VARCHAR(50) DEFAULT 'NEW',
    source_metadata JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(tenant_id, phone_hash)
);

-- 2. HARDENED LEAD CONSENT
DROP TABLE IF EXISTS lead_consents CASCADE;
CREATE TABLE lead_consents (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID REFERENCES tenants(id) NOT NULL,
    lead_id UUID REFERENCES leads(id) ON DELETE CASCADE,
    notice_id UUID REFERENCES privacy_notices(id) NOT NULL,
    consent_matrix JSONB NOT NULL,
    ip_address VARCHAR(45),
    consented_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Apply RLS to both tables
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE lead_consents ENABLE ROW LEVEL SECURITY;

CREATE POLICY tenant_isolation_policy ON leads USING (tenant_id = current_setting('app.current_tenant', true)::uuid);
CREATE POLICY tenant_isolation_policy ON lead_consents USING (tenant_id = current_setting('app.current_tenant', true)::uuid);