# 🗄️ Tutorial 04: Back Up Database

## Objective
Create the database dump that matches the same backup generation as the file archive.

## Prerequisites
- Shell access to the application host or restore target.
- Knowledge of the app root, upload paths, and database engine.
- A staging or lab target where restore validation can run safely.

## Environment Assumptions
- The file archive generation already exists.
- The database engine and credentials are known.

## Sequential Steps
### 1. Create the dump artifact
Use engine-appropriate dump commands and store the result in the same generation directory.

```bash
BACKUP_DIR=$(find /srv/backup/web/example.com -maxdepth 1 -mindepth 1 -type d | sort | tail -n1)
mysqldump --single-transaction app_db | gzip > "$BACKUP_DIR/app_db.sql.gz"
pg_dump -Fc app_db > "$BACKUP_DIR/app_db.dump" 2>/dev/null || true
```

### 2. Update checksums and notes
The restore target should immediately know which dump format and engine are in scope.

```bash
cd "$BACKUP_DIR"
sha256sum app_db.sql.gz app_db.dump 2>/dev/null | sed '/^$/d' >> SHA256SUMS
printf '%s\n' 'database=app_db' 'engine=mysql-or-postgresql' > database-notes.txt
```

## ✅ Validation Checkpoints
- The dump artifact and checksum file exist in the same generation directory as the file archive.

## ⚠️ Warnings
- Do not split the file archive and dump across different retention buckets.

## Cleanup / Post-Check
- Use the same generation path in the restore tutorial.

## Next Tutorial
[↩️ Tutorial 05: Restore Stack](./05-restore-stack.md)

Next: translate to id
