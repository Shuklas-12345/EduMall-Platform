-- 1. SETUP EXTENSIONS & ROLES
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "ltree";

-- SYSTEM ROLE FOR READ-ONLY AUDITORS (SRS 1.11)
CREATE ROLE app_auditor;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO app_auditor;

-- 2. ENUMS
CREATE TYPE user_status AS ENUM ('INVITED', 'REGISTERED', 'ACTIVE', 'SUSPENDED', 'ARCHIVED');

-- 3. CORE TABLES
CREATE TABLE tenants (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    parent_id UUID REFERENCES tenants(id),
    node_path ltree,                      -- Path for loop-free hierarchy
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    type VARCHAR(50) NOT NULL,
    status VARCHAR(20) DEFAULT 'ACTIVE',
    branding_config JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE,
    full_name VARCHAR(255),
    status user_status DEFAULT 'INVITED',
    pii_consents JSONB,
    version INT DEFAULT 1,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE roles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID REFERENCES tenants(id), -- NULL = Global HQ Role
    role_name VARCHAR(50) NOT NULL,
    permissions JSONB NOT NULL,
    is_system_role BOOLEAN DEFAULT FALSE
);

CREATE TABLE user_tenant_memberships (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id),
    tenant_id UUID REFERENCES tenants(id) NOT NULL,
    role_id UUID REFERENCES roles(id),
    membership_status user_status DEFAULT 'ACTIVE',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, tenant_id)
);

CREATE TABLE parent_student_links (
    parent_user_id UUID REFERENCES users(id),
    student_user_id UUID REFERENCES users(id),
    relationship_type VARCHAR(50),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (parent_user_id, student_user_id)
);

-- RLS-EXEMPT LOGGING TABLE (SRS 15.10)
CREATE TABLE security_audit_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    attempted_tenant_id UUID,
    user_id UUID,
    event_type VARCHAR(50),
    metadata JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. SECURITY TRIGGERS
-- TRIGGER: Prevent Hierarchy Loops
CREATE OR REPLACE FUNCTION fn_sync_tenant_path() RETURNS TRIGGER AS $$
DECLARE parent_path ltree;
BEGIN
    IF NEW.parent_id IS NULL THEN NEW.node_path := NEW.slug::ltree;
    ELSE
        SELECT node_path FROM tenants WHERE id = NEW.parent_id INTO parent_path;
        IF parent_path <@ NEW.node_path THEN RAISE EXCEPTION 'Hierarchy Loop Detected'; END IF;
        NEW.node_path := parent_path || NEW.slug::ltree;
    END IF;
    RETURN NEW;
END; $$ LANGUAGE plpgsql;

CREATE TRIGGER trg_tenant_path_sync BEFORE INSERT OR UPDATE OF parent_id, slug ON tenants FOR EACH ROW EXECUTE FUNCTION fn_sync_tenant_path();

-- TRIGGER: Prevent Role Poaching
CREATE OR REPLACE FUNCTION fn_enforce_role_tenant_context() RETURNS TRIGGER AS $$
DECLARE role_tenant_id UUID;
BEGIN
    SELECT tenant_id FROM roles WHERE id = NEW.role_id INTO role_tenant_id;
    IF role_tenant_id IS NOT NULL AND role_tenant_id <> NEW.tenant_id THEN
        RAISE EXCEPTION 'Security Violation: Role-Tenant Mismatch';
    END IF;
    RETURN NEW;
END; $$ LANGUAGE plpgsql;

CREATE TRIGGER trg_membership_role_security BEFORE INSERT OR UPDATE ON user_tenant_memberships FOR EACH ROW EXECUTE FUNCTION fn_enforce_role_tenant_context();

-- 5. ROW LEVEL SECURITY (RLS)
ALTER TABLE user_tenant_memberships ENABLE ROW LEVEL SECURITY;
CREATE POLICY tenant_isolation_policy ON user_tenant_memberships USING (tenant_id = current_setting('app.current_tenant')::uuid);