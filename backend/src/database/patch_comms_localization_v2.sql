-- 1. SRS 2.1 & 22.3: Tenant-Aware Localization
ALTER TABLE notification_templates ADD COLUMN tenant_id UUID REFERENCES tenants(id);

-- 2. Update unique constraint: A slug can exist once per language per school
ALTER TABLE notification_templates DROP CONSTRAINT IF EXISTS unique_template_lang;
ALTER TABLE notification_templates ADD CONSTRAINT unique_template_tenant_lang 
    UNIQUE (slug, language_code, tenant_id);

-- 3. PROOF OF CONCEPT: Regional Override for School A
-- Imagine Tenant 'abc-123' wants a specific Hindi welcome
INSERT INTO notification_templates (slug, channel, category, language_code, tenant_id, subject_template, body_template)
VALUES (
    'REFERRAL_WELCOME_LEAD', 
    'WHATSAPP', 
    'MARKETING', 
    'hi', 
    '00000000-0000-0000-0000-000000000000', -- Replace with a real School UUID
    'स्वागत है!', 
    'नमस्ते! आपके विद्यालय [School Name] में आपका स्वागत है।'
) ON CONFLICT DO NOTHING;