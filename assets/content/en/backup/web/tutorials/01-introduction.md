# 🧭 Tutorial 01: Introduction

## Objective
Define which application parts must recover together so the backup plan matches the real web stack.

## Prerequisites
- Shell access to the application host or restore target.
- Knowledge of the app root, upload paths, and database engine.
- A staging or lab target where restore validation can run safely.

## Environment Assumptions
- The app stores both files and database state.

## Sequential Steps
### 1. List the app components
Start by naming the code path, uploads, secrets references, service config, and database engine.

```bash
printf '%s\n' '/var/www/example.com'   '/var/www/example.com/storage'   '/etc/nginx/sites-available/example.com.conf'   'database=app_db'   > /tmp/web-app-scope.txt
cat /tmp/web-app-scope.txt
```

### 2. Inspect the running stack
A restore target needs to reproduce the same essential services.

```bash
systemctl list-units --type=service --state=running | egrep 'nginx|apache|httpd|php|mysql|mariadb|postgres' || true
ss -tulpn | egrep ':80|:443|:3306|:5432' || true
```

## ✅ Validation Checkpoints
- You have a written inventory of the file, database, and service parts of the application.

## ⚠️ Warnings
- Do not treat code backup alone as a full web application backup.

## Cleanup / Post-Check
- Use the inventory in the next tutorial to confirm scope and exclusions.

## Next Tutorial
[🧩 Tutorial 02: Identify App Parts](./02-identify-app-parts.md)

Next: translate to id
