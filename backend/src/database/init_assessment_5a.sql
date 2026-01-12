CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 1. THE VAULT (Question Bank with SQL-Level Encryption)
CREATE TABLE questions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID REFERENCES tenants(id) NOT NULL,
    entity_id UUID REFERENCES academic_entities(id) NOT NULL,
    type q_type NOT NULL,
    difficulty q_difficulty NOT NULL,
    category q_category NOT NULL,
    -- Data is encrypted using a key from our .env
    question_text BYTEA NOT NULL, 
    options_json BYTEA NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. SECURE DECRYPTION VIEW (SRS 5.12)
-- Only returns readable text if 'app.vault_key' is set in the session
CREATE OR REPLACE VIEW v_secure_questions AS
SELECT 
    id, tenant_id, entity_id, type, difficulty, category,
    pgp_sym_decrypt(question_text, current_setting('app.vault_key', true)) as decrypted_text,
    pgp_sym_decrypt(options_json, current_setting('app.vault_key', true))::jsonb as decrypted_options
FROM questions;

-- 3. UPDATED ATTEMPT TABLE (No changes to unique constraint, but service logic changes)
CREATE TABLE exam_attempts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) NOT NULL,
    tenant_id UUID REFERENCES tenants(id) NOT NULL,
    session_token UUID NOT NULL,
    status VARCHAR(20) DEFAULT 'STARTED',
    expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
    UNIQUE(user_id, status) WHERE (status = 'STARTED')
);