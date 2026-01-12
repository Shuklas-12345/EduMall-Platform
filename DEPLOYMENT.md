# EduMall Platform: Deployment & Disaster Recovery

## 1. Initial Setup
1. Define `DB_PII_VAULT_KEY` (Key V1) in your environment.
2. Run `bash launch.sh`.

## 2. Managing Key Rotations
The platform supports **Mixed-State Decryption**, meaning you can rotate keys while students are logged in.

### Steps to Rotate:
1. Add a second key to secrets: `app.vault_key_v2`.
2. Run the `RotationService` (targets rows where version = 1).
3. The platform will automatically use Key V2 for updated rows and Key V1 for remaining rows.
4. Once `v_compliance_vault_health` shows 0 rows for version 1, you may safely delete the old key.

## 3. Data Integrity
If a row is marked with version `-1`, it means the data was corrupted before the rotation. Contact the DB Administrator for forensic recovery.