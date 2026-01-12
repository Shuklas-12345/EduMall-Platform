-- SRS 17.12: Add masked_name to users
ALTER TABLE users ADD COLUMN IF NOT EXISTS masked_name VARCHAR(20);

-- Index for referral social-proof lookups
CREATE INDEX IF NOT EXISTS idx_user_masked_name_lookup ON users (id, masked_name);

-- Ensure all existing users have a fallback mask
UPDATE users SET masked_name = 'Learner' WHERE masked_name IS NULL;