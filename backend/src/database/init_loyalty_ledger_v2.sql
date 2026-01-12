-- 1. HARDENED LEDGER: One event can only pay out to ONE bucket (Fixes Multi-Bucket Inflation)
DROP TABLE IF EXISTS reward_ledger;
CREATE TABLE reward_ledger (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) NOT NULL,
    tenant_id UUID REFERENCES tenants(id) NOT NULL,
    bucket bucket_type NOT NULL,
    amount INT NOT NULL,
    source_event_id UUID NOT NULL, 
    reason_code VARCHAR(100) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    -- FIX: Mathematical uniqueness. User + Event = Exactly one reward.
    UNIQUE(user_id, source_event_id) 
);

-- 2. HARDENED BALANCES: Prevents negative scholarship values
DROP TABLE IF EXISTS reward_balances;
CREATE TABLE reward_balances (
    user_id UUID REFERENCES users(id) NOT NULL,
    tenant_id UUID REFERENCES tenants(id) NOT NULL,
    bucket bucket_type NOT NULL,
    balance INT DEFAULT 0,
    daily_total INT DEFAULT 0,
    last_earned_date DATE DEFAULT CURRENT_DATE,
    PRIMARY KEY (user_id, tenant_id, bucket),
    -- FIX: Zero-Floor Constraint
    CONSTRAINT balance_not_negative CHECK (balance >= 0)
);

-- 3. CUMULATIVE ACTIVITY LOG: Fixes Logout-Refresh Bypass
CREATE TABLE user_activity_heartbeats (
    user_id UUID REFERENCES users(id) NOT NULL,
    active_date DATE DEFAULT CURRENT_DATE,
    minutes_spent INT DEFAULT 0,
    PRIMARY KEY (user_id, active_date)
);