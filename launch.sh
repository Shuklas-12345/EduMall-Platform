#!/bin/bash
set -e # Exit immediately if a command fails

echo "🚀 Launching EduMall Sovereign OS..."

# 1. Start Docker Clusters
docker-compose -f docker-compose.prod.yml up -d --build

# 2. THE PATIENCE LOOP (SRS 20.10)
# This prevents the script from crashing while Postgres wakes up
echo "⏳ Waiting for Database to accept connections..."
until docker exec edumall_db pg_isready -U edumall_admin -d edumall_db; do
  sleep 2
  echo "...postgres is still booting..."
done

# 3. RUN DATABASE MIGRATIONS
echo "🗄️ Applying Security Schemas..."
docker exec edumall_backend npm run db:migrate

# 4. RUN PRODUCTION HARDENING (Views & Versioning)
docker exec edumall_backend psql -U edumall_admin -d edumall_db -f /usr/src/app/src/database/init_production_hardening.sql

# 5. IDEMPOTENT SEEDING (ON CONFLICT DO NOTHING)
echo "🌱 Seeding Governance..."
docker exec edumall_backend npm run db:seed:governance

echo "✅ EduMall is ONLINE and DISASTER-PROOF."