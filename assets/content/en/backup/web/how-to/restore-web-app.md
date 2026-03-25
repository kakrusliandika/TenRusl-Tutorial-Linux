# 🛠️ Restore the Web App

## Objective
Restore the file archive and matching database dump into a clean host or staging target, then bring the application stack online in a controlled order.

## Use Case
Use this during planned restore rehearsal or a real incident where the application stack must be rebuilt from backup artifacts.

## Prerequisites
- You have the matched file archive, database dump, and the config or secret references the app requires.
- The restore target is isolated from production traffic.
- You know which services should be started first on the target.

## Environment Assumptions
- The example target uses Nginx and either MySQL/MariaDB or PostgreSQL.
- Application files restore before database import so ownership and paths are ready.
- Traffic stays blocked until HTTP and app-level validation both succeed.

## Exact Steps
### 1. Verify artifacts before restore
Restore should never start from an unchecked generation.

```bash
BACKUP_DIR=/srv/backup/web/example.com/2026-03-25-0200
cd "$BACKUP_DIR"
sha256sum -c SHA256SUMS
ls -lh
```

### 2. Restore files and ownership
Recreate the application tree and required ownership first.

```bash
sudo tar --xattrs --acls --numeric-owner -xzf web-root.tar.gz -C /
sudo chown -R www-data:www-data /var/www/example.com 2>/dev/null || true
```

### 3. Import the database and restart services
Bring up the data tier and then the web tier in order.

```bash
gunzip -c app_db.sql.gz | mysql app_db 2>/dev/null || true
pg_restore -d app_db app_db.dump 2>/dev/null || true
sudo systemctl restart mariadb mysql postgresql 2>/dev/null || true
sudo systemctl restart nginx apache2 httpd php*-fpm 2>/dev/null || true
```

## ✅ Validation Checkpoints
- Files, ownership, and database restore complete without obvious errors.
- Services restart and the stack reaches a testable state on the isolated target.
- The operator knows what secrets or environment files still need secure reapplication.

## Troubleshooting
- If the app fails after restart, review env files, permissions, and database connectivity before blaming the archive.
- If imports fail, confirm engine, database name, and whether the target schema should be cleared first.
- If file uploads are missing, verify they were inside the archive scope and not stored on a different volume.

## ↩️ Rollback or Recovery Notes
- Keep the restore target isolated until the app passes HTTP and functional validation.
- Do not overwrite the backup artifacts during troubleshooting; copy them into a scratch path instead.

## Related Docs
- [🧠 Restore Rehearsal](../concepts/restore-rehearsal.md)
- [📚 Restore Checklist](../reference/restore-checklist.md)
- [↩️ Tutorial 05: Restore Stack](../tutorials/05-restore-stack.md)

Next: translate to id
