-- 1. Patch Tables for Fraud Checks
ALTER TABLE users ADD COLUMN IF NOT EXISTS phone_hash TEXT;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS ip_address VARCHAR(45);

-- 2. OPAQUE REFERRAL LINKS
CREATE TABLE IF NOT EXISTS referral_links (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    promoter_id UUID REFERENCES users(id) NOT NULL,
    tenant_id UUID REFERENCES tenants(id) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. REFERRAL EVENTS
CREATE TABLE IF NOT EXISTS referral_events (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    link_id UUID REFERENCES referral_links(id) NOT NULL,
    lead_id UUID REFERENCES leads(id) UNIQUE NOT NULL,
    status VARCHAR(20) DEFAULT 'PENDING',
    reward_issued BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. SALTED PRIVACY VIEW (SRS 17.12)
-- Using Salted HMAC so promoters cannot de-anonymize students
CREATE OR REPLACE VIEW v_promoter_referrals AS
SELECT 
    re.id as referral_event_id,
    rl.promoter_id,
    rl.tenant_id,
    re.status,
    re.reward_issued,
    encode(hmac(re.lead_id::text, current_setting('app.referral_salt', true), 'sha256'), 'hex') as display_prospect_id,
    re.created_at
FROM referral_events re
JOIN referral_links rl ON re.link_id = rl.id;