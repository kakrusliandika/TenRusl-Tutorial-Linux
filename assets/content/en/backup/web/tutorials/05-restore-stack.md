# ↩️ Tutorial 05: Restore Stack

## Objective
Restore files and database into a clean staging host in the same order a real incident would require.

## Prerequisites
- Shell access to the application host or restore target.
- Knowledge of the app root, upload paths, and database engine.
- A staging or lab target where restore validation can run safely.

## Environment Assumptions
- A clean restore target exists.
- The selected generation already passed checksum validation.

## Sequential Steps
### 1. Verify and restore files
Start with integrity, then unpack files and reapply ownership.

```bash
BACKUP_DIR=/srv/backup/web/example.com/2026-03-25-0200
cd "$BACKUP_DIR"
sha256sum -c SHA256SUMS
sudo tar --xattrs --acls --numeric-owner -xzf web-root.tar.gz -C /
sudo chown -R www-data:www-data /var/www/example.com 2>/dev/null || true
```

### 2. Import the database and restart services
Bring the data tier up before the web tier and keep the target isolated.

```bash
gunzip -c app_db.sql.gz | mysql app_db 2>/dev/null || true
pg_restore -d app_db app_db.dump 2>/dev/null || true
sudo systemctl restart mariadb mysql postgresql 2>/dev/null || true
sudo systemctl restart nginx apache2 httpd php*-fpm 2>/dev/null || true
```

## ✅ Validation Checkpoints
- The stack restores without obvious extraction or import errors.
- The application reaches a state ready for HTTP validation on the staging target.

## ⚠️ Warnings
- Do not publish traffic to the restored host yet.

## Cleanup / Post-Check
- Keep notes on any secrets or env files re-applied manually.

## Next Tutorial
[✅ Tutorial 06: Verify Application](./06-verify-application.md)

Next: translate to id
