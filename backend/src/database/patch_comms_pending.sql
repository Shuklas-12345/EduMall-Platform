-- SRS 9.10: Add PENDING to allow decoupled external sending
ALTER TYPE comms_channel_status ADD VALUE IF NOT EXISTS 'PENDING';
-- Note: Depending on your Postgres version, you may need to use a different method 
-- to update the ENUM, but for this build, assume the value is now available.