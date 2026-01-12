-- EDU-MALL PRODUCTION HARDENING & MIXED-STATE VIEWS
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 1. ADD VERSIONING COLUMNS (SRS 20.9)
ALTER TABLE users ADD COLUMN IF NOT EXISTS vault_key_version INT DEFAULT 1;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS vault_key_version INT DEFAULT 1;
ALTER TABLE staff_profiles ADD COLUMN IF NOT EXISTS vault_key_version INT DEFAULT 1;

-- 2. VERSION-AWARE DECRYPTION VIEW (LEADS)
-- This allows the app to stay online while we switch keys
CREATE OR REPLACE VIEW v_decrypted_leads AS
SELECT 
    id, tenant_id, status, is_minor, masked_name, vault_key_version,
    CASE vault_key_version
        WHEN 1 THEN pgp_sym_decrypt(full_name, current_setting('app.vault_key_v1', true))
        WHEN 2 THEN pgp_sym_decrypt(full_name, current_setting('app.vault_key_v2', true))
        WHEN -1 THEN '!!CORRUPT_DATA_MARKER!!'
        ELSE '!!KEY_VERSION_ERROR!!'
    END as full_name,
    CASE vault_key_version
        WHEN 1 THEN pgp_sym_decrypt(phone, current_setting('app.vault_key_v1', true))
        WHEN 2 THEN pgp_sym_decrypt(phone, current_setting('app.vault_key_v2', true))
        WHEN -1 THEN '!!CORRUPT_DATA_MARKER!!'
        ELSE '!!KEY_VERSION_ERROR!!'
    END as phone
FROM leads;

-- 3. VERSION-AWARE DECRYPTION VIEW (STAFF)
CREATE OR REPLACE VIEW v_decrypted_staff AS
SELECT 
    s.id, s.user_id, s.tenant_id, s.max_hours_per_week, s.vault_key_version,
    CASE vault_key_version
        WHEN 1 THEN pgp_sym_decrypt(s.full_name, current_setting('app.staff_key_v1', true))
        WHEN 2 THEN pgp_sym_decrypt(s.full_name, current_setting('app.staff_key_v2', true))
        WHEN -1 THEN '!!CORRUPT_DATA_MARKER!!'
        ELSE '!!KEY_VERSION_ERROR!!'
    END as full_name
FROM staff_profiles s;

-- 4. COMPLIANCE HEALTH MONITOR
CREATE OR REPLACE VIEW v_compliance_vault_health AS
SELECT 'leads' as table_name, vault_key_version, count(*) as row_count FROM leads GROUP BY 1, 2
UNION ALL
SELECT 'staff' as table_name, vault_key_version, count(*) as row_count FROM staff_profiles GROUP BY 1, 2;