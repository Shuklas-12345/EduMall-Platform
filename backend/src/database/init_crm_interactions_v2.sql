-- 1. HARDENED SEARCH INDEX (SRS 23.7)
DROP TABLE IF EXISTS lead_search_indexes;
CREATE TABLE lead_search_indexes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID REFERENCES tenants(id) NOT NULL,
    lead_id UUID REFERENCES leads(id) ON DELETE CASCADE,
    -- Each fragment is a 3-character hashed chunk
    trigram_hash TEXT NOT NULL 
);
CREATE INDEX idx_lead_trigram_search ON lead_search_indexes (tenant_id, trigram_hash);

-- 2. (Keep lead_interactions table from previous version)