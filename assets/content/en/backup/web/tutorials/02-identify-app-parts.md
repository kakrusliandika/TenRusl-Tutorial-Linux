# 🧩 Tutorial 02: Identify App Parts

## Objective
Separate essential application components from disposable runtime data so the backup scope is deliberate.

## Prerequisites
- Shell access to the application host or restore target.
- Knowledge of the app root, upload paths, and database engine.
- A staging or lab target where restore validation can run safely.

## Environment Assumptions
- You can inspect the live host safely.

## Sequential Steps
### 1. Inspect file paths and storage
Differentiate code, uploads, cache, and logs.

```bash
find /var/www/example.com -maxdepth 2 -type d | sort | head -n 50
find /var/www/example.com -maxdepth 2 -type f | egrep '\.env|composer\.json|package\.json' || true
```

### 2. Identify database and web config references
A restore needs DB name, vhost path, and any service overrides.

```bash
grep -R "DB_\|DATABASE_" /var/www/example.com 2>/dev/null | head -n 20 || true
ls -l /etc/nginx/sites-available /etc/apache2/sites-available 2>/dev/null || true
```

## ✅ Validation Checkpoints
- You can explain which paths are essential, optional, or disposable.
- You know where the database and web server config are defined.

## ⚠️ Warnings
- Do not include large cache trees by default unless they are irreplaceable.

## Cleanup / Post-Check
- Update the scope notes before taking the first file archive.

## Next Tutorial
[📁 Tutorial 03: Back Up Files](./03-backup-files.md)

Next: translate to id
