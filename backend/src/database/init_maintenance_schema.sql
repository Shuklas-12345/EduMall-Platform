-- 1. SYSTEM CHANGELOG (Hardened)
DROP TABLE IF EXISTS system_changelog;
CREATE TABLE system_changelog (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    version_tag VARCHAR(20) NOT NULL,
    change_type VARCHAR(20) NOT NULL,
    reason_code VARCHAR(100) NOT NULL,
    compliance_impact_rating INT CHECK (compliance_impact_rating BETWEEN 1 AND 5),
    pia_conducted BOOLEAN DEFAULT FALSE,
    authorized_by UUID REFERENCES users(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    -- FIX: MANDATORY PIA FOR HIGH IMPACT (Rating >= 4)
    CONSTRAINT enforce_pia_on_risk CHECK (compliance_impact_rating < 4 OR pia_conducted = TRUE)
);

-- 2. UX SENTIMENT (Monthly Only)
DROP TABLE IF EXISTS ux_sentiment_logs;
CREATE TABLE ux_sentiment_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) NOT NULL,
    helpful_status BOOLEAN NOT NULL,
    -- FIX: Ensure only one signal per user per month
    feedback_month DATE DEFAULT date_trunc('month', CURRENT_DATE),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, feedback_month)
);

ALTER TABLE ux_sentiment_logs ENABLE ROW LEVEL SECURITY;
CREATE POLICY user_isolation_policy ON ux_sentiment_logs 
    USING (user_id = current_setting('app.current_user_id', true)::uuid);