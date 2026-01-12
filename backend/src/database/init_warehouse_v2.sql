-- ==========================================================
-- EDU-MALL ANALYTICS WAREHOUSE (V2.4 - AIRTIGHT)
-- Task 6.1: Final Hardened Implementation
-- ==========================================================

CREATE EXTENSION IF NOT EXISTS "pgcrypto";
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. WATERMARK TRACKING (O(1) Scaling)
CREATE TABLE IF NOT EXISTS warehouse_watermarks (
    table_name TEXT PRIMARY KEY,
    last_processed_id UUID,
    last_sync_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. FACT TABLE (Anonymized Data)
CREATE TABLE IF NOT EXISTS f_assessments (
    id UUID PRIMARY KEY, -- Matches Production ID for Watermarking
    tenant_id UUID NOT NULL,
    center_id UUID,        -- Populated via ETL join
    user_hash TEXT,        -- Salted HMAC. NULL if student erased (DPDP)
    is_minor BOOLEAN DEFAULT FALSE, -- FIX: Compliance flag added
    topic_id UUID NOT NULL,
    score DECIMAL(5,2),
    created_at TIMESTAMP WITH TIME ZONE
);

-- 3. THE ERASURE-AWARE TRIGGER
CREATE OR REPLACE FUNCTION fn_block_warehouse_mutation_v3() RETURNS TRIGGER AS $$
BEGIN
    IF (TG_OP = 'UPDATE' AND NEW.user_hash IS NULL AND OLD.user_hash IS NOT NULL) THEN
        RETURN NEW;
    END IF;
    RAISE EXCEPTION 'Warehouse Violation: Data is append-only. Only legal erasure is permitted.';
END; $$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_f_assessments_immutable ON f_assessments;
CREATE TRIGGER trg_f_assessments_immutable 
BEFORE UPDATE OR DELETE ON f_assessments 
FOR EACH ROW EXECUTE FUNCTION fn_block_warehouse_mutation_v3();

-- 4. K-ANONYMITY VIEW (SRS 21.9)
-- FIX: Uses COUNT(*) to include anonymized students in the threshold
CREATE OR REPLACE VIEW v_safe_topic_performance 
WITH (security_invoker = on) AS
SELECT 
    topic_id,
    tenant_id,
    is_minor,
    AVG(score) as avg_score,
    COUNT(*) as sample_size -- FIX: Count all records, even if hash is null
FROM f_assessments
GROUP BY topic_id, tenant_id, is_minor
HAVING COUNT(*) >= 5; -- THE RULE OF 5

-- 5. RLS POLICIES
ALTER TABLE f_assessments ENABLE ROW LEVEL SECURITY;
CREATE POLICY tenant_isolation_policy ON f_assessments 
    USING (tenant_id = current_setting('app.current_tenant', true)::uuid);