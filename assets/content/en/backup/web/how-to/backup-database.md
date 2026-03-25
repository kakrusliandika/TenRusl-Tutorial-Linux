# 🛠️ Back Up the Database

## Objective
Create a portable, checksummed database dump that matches the same generation as the file archive.

## Use Case
Use this whenever the web application stores mutable state in MySQL, MariaDB, or PostgreSQL and the dump must be restorable on another host.

## Prerequisites
- You know the database engine, database name, and credentials needed for a logical dump.
- The file backup generation stamp is already chosen so both halves of the app stay aligned.
- You can temporarily reduce write activity or place the app in maintenance mode if needed.

## Environment Assumptions
- The example generation directory is `/srv/backup/web/example.com/$STAMP`.
- The workflow keeps one dump file per generation.
- Adjust credentials handling to your environment and avoid hard-coding secrets into reusable scripts.

## Exact Steps
### 1. Dump MySQL or MariaDB safely
Use a transaction-friendly logical dump when supported.

```bash
APP=example.com
STAMP=$(date +%F-%H%M)
BACKUP_DIR=/srv/backup/web/$APP/$STAMP
mysqldump --single-transaction --routines --triggers app_db | gzip > "$BACKUP_DIR/app_db.sql.gz"
```

### 2. Dump PostgreSQL when applicable
Custom-format dumps are often the most flexible for partial or selective restore.

```bash
pg_dump -Fc app_db > "$BACKUP_DIR/app_db.dump"
```

### 3. Write checksums and quick metadata
The restore side should know the engine and dump artifacts immediately.

```bash
cd "$BACKUP_DIR"
sha256sum app_db.sql.gz app_db.dump 2>/dev/null | sed '/^$/d' >> SHA256SUMS
printf '%s\n' 'engine=mysql-or-postgresql' 'database=app_db' > database-notes.txt
```

## ✅ Validation Checkpoints
- A dump artifact exists in the same generation directory as the file archive.
- Checksums cover the dump artifact and the operator can state which engine the dump belongs to.
- The dump timestamp matches the file backup generation closely enough for restore use.

## Troubleshooting
- If dump size is unexpectedly small, confirm the correct database and credentials were used.
- If the app is highly write-active, add maintenance mode or another consistency control during the dump window.
- If both MySQL and PostgreSQL commands exist on the host, label the chosen engine explicitly to avoid confusion later.

## ↩️ Rollback or Recovery Notes
- Keep the previous matched generation until the new dump and file archive both validate.
- Do not separate database dumps from file archives in retention or offsite copy logic.

## Related Docs
- [🧠 Database Dump Strategy](../concepts/database-dump-strategy.md)
- [📚 Restore Checklist](../reference/restore-checklist.md)
- [🗄️ Tutorial 04: Back Up Database](../tutorials/04-backup-database.md)

Next: translate to id
