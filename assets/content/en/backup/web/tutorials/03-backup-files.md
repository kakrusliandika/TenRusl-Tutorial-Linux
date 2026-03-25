# 📁 Tutorial 03: Back Up Files

## Objective
Create the web file archive with deliberate inclusions and exclusions.

## Prerequisites
- Shell access to the application host or restore target.
- Knowledge of the app root, upload paths, and database engine.
- A staging or lab target where restore validation can run safely.

## Environment Assumptions
- The app parts and exclusions are already identified.

## Sequential Steps
### 1. Create the generation and archive files
Use one dated directory that later receives the matching database dump.

```bash
APP=example.com
STAMP=$(date +%F-%H%M)
BACKUP_DIR=/srv/backup/web/$APP/$STAMP
mkdir -p "$BACKUP_DIR"
sudo tar --xattrs --acls --numeric-owner -czf "$BACKUP_DIR/web-root.tar.gz"   /var/www/example.com   /etc/nginx/sites-available/example.com.conf   --exclude=/var/www/example.com/storage/framework/cache
```

### 2. Inspect and checksum the archive
A content listing and checksum make the next restore drill faster.

```bash
cd "$BACKUP_DIR"
sha256sum web-root.tar.gz > SHA256SUMS
tar -tzf web-root.tar.gz | head -n 100 > web-root.contents.txt
```

## ✅ Validation Checkpoints
- The archive exists and content listing confirms the expected paths are present.

## ⚠️ Warnings
- Do not move to retention or offsite copy until the matching database dump exists.

## Cleanup / Post-Check
- Keep the generation stamp for the next step.

## Next Tutorial
[🗄️ Tutorial 04: Back Up Database](./04-backup-database.md)

Next: translate to id
