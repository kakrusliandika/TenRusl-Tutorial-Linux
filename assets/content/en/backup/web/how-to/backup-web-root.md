# 🛠️ Back Up the Web Root

## Objective
Create a web root backup that captures application code, uploads, key configuration files, and selected runtime assets without conflating them with the database.

## Use Case
Use this when the application files must be protected separately from the database dump, or when you are building a matched file-plus-database generation.

## Prerequisites
- You know the application root, upload paths, and which directories can be safely excluded.
- You have enough space for a full archive generation.
- You know where service configuration or vhost files live if they are part of recovery scope.

## Environment Assumptions
- The example app root is `/var/www/example.com` and the staged backup path is `/srv/backup/web/example.com/$STAMP`.
- Disposable cache directories can be excluded if they are documented and safely regenerated.
- Database state is backed up separately and should use the same generation stamp.

## Exact Steps
### 1. Create the generation directory
Use one timestamp across file and database backup steps so restore pairing stays obvious.

```bash
APP=example.com
STAMP=$(date +%F-%H%M)
BACKUP_DIR=/srv/backup/web/$APP/$STAMP
mkdir -p "$BACKUP_DIR"
```

### 2. Archive the application files
Capture web root, storage, and selected config while excluding disposable caches.

```bash
sudo tar --xattrs --acls --numeric-owner -czf "$BACKUP_DIR/web-root.tar.gz"   /var/www/example.com   /etc/nginx/sites-available/example.com.conf   --exclude=/var/www/example.com/storage/framework/cache   --exclude=/var/www/example.com/tmp
```

### 3. Create checksums and an inventory
A human-readable inventory helps later restore checks.

```bash
cd "$BACKUP_DIR"
sha256sum web-root.tar.gz > SHA256SUMS
tar -tzf web-root.tar.gz | head -n 100 > web-root.contents.txt
```

## ✅ Validation Checkpoints
- The archive contains expected code and upload paths but excludes known disposable directories.
- The checksum validates and the content listing makes scope review easy.

## Troubleshooting
- If the archive is too large, split uploads or media into their own backup artifact with the same generation stamp.
- If ownership comes back wrong later, confirm the archive was created with numeric-owner preservation.
- If config is missing, review whether vhost, PHP-FPM, systemd, or app-specific env files belong in scope.

## ↩️ Rollback or Recovery Notes
- Do not replace the previous generation until the matching database dump is complete and checksummed.
- If you missed a critical path, create a new generation instead of patching the old one silently.

## Related Docs
- [🧠 Application Consistency](../concepts/application-consistency.md)
- [📚 Backup Layout](../reference/backup-layout.md)
- [📁 Tutorial 03: Back Up Files](../tutorials/03-backup-files.md)

Next: translate to id
