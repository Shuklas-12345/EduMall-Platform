-- SRS 13.4: Secure View for Counselor Interaction
-- This view decrypts the data only when 'app.vault_key' is set in the session
CREATE OR REPLACE VIEW v_decrypted_leads AS
SELECT 
    id, 
    tenant_id, 
    promoter_id, 
    status,
    pgp_sym_decrypt(full_name, current_setting('app.vault_key', true)) as full_name,
    pgp_sym_decrypt(email, current_setting('app.vault_key', true)) as email,
    pgp_sym_decrypt(phone, current_setting('app.vault_key', true)) as phone,
    source_metadata,
    created_at
FROM leads;