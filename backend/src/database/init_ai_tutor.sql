-- EDU-MALL AI TUTOR & KNOWLEDGE SCHEMA (V1.2 - AIRTIGHT)
CREATE EXTENSION IF NOT EXISTS "pgvector";

-- 1. KNOWLEDGE STORE (RAG)
CREATE TABLE IF NOT EXISTS knowledge_vectors (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID REFERENCES tenants(id), -- NULL = HQ Global
    entity_id UUID REFERENCES academic_entities(id) NOT NULL,
    content_chunk TEXT NOT NULL,
    embedding VECTOR(1536),
    metadata JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. CONVERSATION LOGS (Audit Trail)
CREATE TABLE IF NOT EXISTS tutor_conversation_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) NOT NULL,
    tenant_id UUID REFERENCES tenants(id) NOT NULL,
    student_query_scrubbed TEXT NOT NULL,
    ai_response TEXT NOT NULL,
    citations JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. FIX: DECRYPTED USER VIEW (For the Scrubber)
-- We pull from 'users' table because 'leads' is purged after conversion
CREATE OR REPLACE VIEW v_decrypted_users AS
SELECT 
    id, full_name as encrypted_name,
    pgp_sym_decrypt(full_name, current_setting('app.vault_key_v1', true)) as full_name
FROM users;

-- 4. RLS POLICIES
ALTER TABLE knowledge_vectors ENABLE ROW LEVEL SECURITY;
CREATE POLICY tenant_and_hq_isolation ON knowledge_vectors 
    USING (tenant_id = current_setting('app.current_tenant', true)::uuid OR tenant_id IS NULL);