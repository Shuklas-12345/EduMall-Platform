-- EDU-MALL HR VAULT & CAPACITY SCHEMA (V2.3 - SYSTEM-READY)
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 1. STAFF PROFILES (Encrypted Vault)
DROP TABLE IF EXISTS staff_profiles CASCADE;
CREATE TABLE staff_profiles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) NOT NULL,
    tenant_id UUID REFERENCES tenants(id) NOT NULL,
    center_path ltree NOT NULL,
    full_name BYTEA NOT NULL,
    national_id BYTEA,
    bank_details BYTEA,
    max_hours_per_week INT DEFAULT 40,
    current_rating DECIMAL(3,2),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. STAFF SEARCH INDEX
DROP TABLE IF EXISTS staff_search_indexes CASCADE;
CREATE TABLE staff_search_indexes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID REFERENCES tenants(id) NOT NULL,
    staff_id UUID REFERENCES staff_profiles(id) ON DELETE CASCADE,
    trigram_hash TEXT NOT NULL
);

-- 3. STAFF ASSIGNMENTS
DROP TABLE IF EXISTS staff_assignments CASCADE;
CREATE TABLE staff_assignments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID REFERENCES tenants(id) NOT NULL,
    staff_id UUID REFERENCES staff_profiles(id) NOT NULL,
    session_id UUID REFERENCES live_sessions(id) NOT NULL,
    hours_allocated DECIMAL(4,2) DEFAULT 1.5,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. SECURE HR VIEW
CREATE OR REPLACE VIEW v_decrypted_staff AS
SELECT 
    s.id, s.user_id, s.tenant_id, s.center_path, s.max_hours_per_week, s.current_rating,
    pgp_sym_decrypt(s.full_name, current_setting('app.staff_vault_key', true)) as full_name,
    pgp_sym_decrypt(s.national_id, current_setting('app.staff_vault_key', true)) as national_id,
    pgp_sym_decrypt(s.bank_details, current_setting('app.staff_vault_key', true)) as bank_details
FROM staff_profiles s;

-- 5. RLS POLICIES
ALTER TABLE staff_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE staff_assignments ENABLE ROW LEVEL SECURITY;
ALTER TABLE staff_search_indexes ENABLE ROW LEVEL SECURITY;

CREATE POLICY tenant_isolation_policy ON staff_profiles USING (tenant_id = current_setting('app.current_tenant', true)::uuid);
CREATE POLICY tenant_isolation_policy ON staff_assignments USING (tenant_id = current_setting('app.current_tenant', true)::uuid);
CREATE POLICY tenant_isolation_policy ON staff_search_indexes USING (tenant_id = current_setting('app.current_tenant', true)::uuid);