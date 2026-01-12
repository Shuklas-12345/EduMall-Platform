-- ==========================================================
-- EDU-MALL ACADEMIC HIERARCHY & IP PROTECTION ENGINE
-- Task 1.4: Final Hardened Implementation
-- ==========================================================

-- 1. HELPER FUNCTIONS & RANK ENGINE
-- ----------------------------------------------------------

-- Sanitize UUID for Ltree (removes hyphens for syntax compatibility)
CREATE OR REPLACE FUNCTION fn_clean_uuid_ltree(id UUID) RETURNS TEXT AS $$
BEGIN
    RETURN replace(id::text, '-', '_');
END; $$ LANGUAGE plpgsql;

-- Integer Ranks for Hierarchy Validation (SRS 3.2)
CREATE OR REPLACE FUNCTION fn_get_academic_rank(t academic_type) RETURNS INT AS $$
BEGIN
    RETURN CASE t
        WHEN 'PROGRAM'   THEN 1
        WHEN 'COURSE'    THEN 2
        WHEN 'SUBJECT'   THEN 3
        WHEN 'UNIT'      THEN 4
        WHEN 'TOPIC'     THEN 5
        WHEN 'SUB_TOPIC' THEN 6
        ELSE 99
    END;
END; $$ LANGUAGE plpgsql;


-- 2. HIERARCHY VALIDATION & IP ASSIGNMENT (SRS 3.6 / 3.12)
-- ----------------------------------------------------------

CREATE OR REPLACE FUNCTION fn_validate_academic_hierarchy_v4() RETURNS TRIGGER AS $$
DECLARE
    parent_rec RECORD;
    cleaned_id TEXT;
    cleaned_tenant TEXT;
BEGIN
    cleaned_id := fn_clean_uuid_ltree(NEW.id);
    cleaned_tenant := fn_clean_uuid_ltree(NEW.tenant_id);

    -- IP ASSIGNMENT: Force owner_tenant_id during insertion
    IF TG_OP = 'INSERT' THEN
        IF NEW.cloned_from_id IS NOT NULL THEN
            SELECT owner_tenant_id INTO NEW.owner_tenant_id FROM academic_entities WHERE id = NEW.cloned_from_id;
        ELSE
            NEW.owner_tenant_id := NEW.tenant_id;
        END IF;
    END IF;

    -- ROOT LEVEL CHECK
    IF NEW.parent_id IS NULL THEN
        IF NEW.type <> 'PROGRAM' THEN RAISE EXCEPTION 'Hierarchy Error: Root must be a PROGRAM.'; END IF;
        NEW.node_path := cleaned_tenant::ltree || cleaned_id::ltree;
        RETURN NEW;
    END IF;

    -- FETCH PARENT CONTEXT & CROSS-TENANT CHECK
    SELECT type, tenant_id, node_path FROM academic_entities WHERE id = NEW.parent_id INTO parent_rec;
    
    -- Allow "Subscribing" to HQ (Tenant 0) content only
    IF parent_rec.tenant_id <> NEW.tenant_id AND parent_rec.tenant_id <> '00000000-0000-0000-0000-000000000000'::uuid THEN
        RAISE EXCEPTION 'Security Violation: Tenant isolation breach.';
    END IF;

    -- RANK VALIDATION (Prevent Inversion)
    IF fn_get_academic_rank(NEW.type) <= fn_get_academic_rank(parent_rec.type) THEN
        RAISE EXCEPTION 'Hierarchy Inversion: % cannot be child of %.', NEW.type, parent_rec.type;
    END IF;

    -- PATH ASSEMBLY
    NEW.node_path := parent_rec.node_path || cleaned_id::ltree;

    RETURN NEW;
END; $$ LANGUAGE plpgsql;

CREATE TRIGGER trg_academic_hierarchy_gate_v4 
BEFORE INSERT OR UPDATE OF parent_id, type ON academic_entities 
FOR EACH ROW EXECUTE FUNCTION fn_validate_academic_hierarchy_v4();


-- 3. RECURSIVE PATH UPDATES (Maintains Tree Integrity)
-- ----------------------------------------------------------

CREATE OR REPLACE FUNCTION fn_cascade_academic_path_update() RETURNS TRIGGER AS $$
BEGIN
    -- If a node moves, update all children underneath it recursively
    IF (OLD.node_path IS DISTINCT FROM NEW.node_path) THEN
        UPDATE academic_entities
        SET node_path = NEW.node_path || subpath(node_path, nlevel(OLD.node_path))
        WHERE node_path <@ OLD.node_path AND id <> NEW.id;
    END IF;
    RETURN NEW;
END; $$ LANGUAGE plpgsql;

CREATE TRIGGER trg_academic_path_cascade 
AFTER UPDATE OF node_path ON academic_entities 
FOR EACH ROW EXECUTE FUNCTION fn_cascade_academic_path_update();


-- 4. IP SHIELD (SRS 3.6 PROTECTION)
-- ----------------------------------------------------------

CREATE OR REPLACE FUNCTION fn_enforce_ip_protection_v4() RETURNS TRIGGER AS $$
BEGIN
    -- Block edits if the user is not in the tenant that created the IP
    IF (OLD.owner_tenant_id::text <> current_setting('app.current_tenant', true)) THEN
        RAISE EXCEPTION 'IP Violation: You cannot modify content you do not own.';
    END IF;
    RETURN NEW;
END; $$ LANGUAGE plpgsql;

CREATE TRIGGER trg_academic_ip_shield_v4 
BEFORE UPDATE OR DELETE ON academic_entities 
FOR EACH ROW EXECUTE FUNCTION fn_enforce_ip_protection_v4();