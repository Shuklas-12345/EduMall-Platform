-- SRS 2.9: Seat usage limits
ALTER TABLE batches ADD COLUMN seat_limit INT DEFAULT 30;