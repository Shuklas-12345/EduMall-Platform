-- 1. HARDENED ASSIGNMENTS (SRS 5.1)
ALTER TABLE assignments ADD COLUMN answer_key BYTEA; -- Encrypted via pgp_sym_encrypt

-- 2. SECURE GATING RULES (Fixes Metadata Leak)
ALTER TABLE gating_rules ADD COLUMN tenant_id UUID REFERENCES tenants(id);

-- Apply RLS to Gating Rules
ALTER TABLE gating_rules ENABLE ROW LEVEL SECURITY;
CREATE POLICY tenant_isolation_policy ON gating_rules 
    USING (tenant_id = current_setting('app.current_tenant')::uuid);

-- 3. ATTACK SURFACE REDUCTION: View for Frontend
-- This view omits the 'answer_key' so it's physically impossible to leak to the UI
CREATE OR REPLACE VIEW v_public_assignments AS
SELECT id, tenant_id, entity_id, title, gating_threshold, is_remedial, created_at
FROM assignments;