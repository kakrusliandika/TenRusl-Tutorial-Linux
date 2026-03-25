# ✅ Tutorial 06: Verify Application

## Objective
Verify that the restored web application works as an application, not merely as extracted files and started processes.

## Prerequisites
- Shell access to the application host or restore target.
- Knowledge of the app root, upload paths, and database engine.
- A staging or lab target where restore validation can run safely.

## Environment Assumptions
- The restored staging stack is already running.

## Sequential Steps
### 1. Check HTTP and service logs
Validate both transport response and runtime behavior.

```bash
curl -I http://127.0.0.1 2>/dev/null || true
journalctl -u nginx -u apache2 -u httpd -u php*-fpm -n 100 --no-pager 2>/dev/null || true
```

### 2. Run a smoke test and record the result
A restore drill is not complete until the outcome is documented.

```bash
curl -H 'Host: example.com' http://127.0.0.1/ 2>/dev/null | head -n 30
printf '%s\n' "restore_test=$(date +%F)" 'result=pass-or-fail' 'notes=update web restore runbook if needed' >> /srv/backup/web/example.com/restore-history.txt
tail -n 5 /srv/backup/web/example.com/restore-history.txt
```

## ✅ Validation Checkpoints
- HTTP responses, logs, and basic app behavior all pass the rehearsal standard you defined.
- The restore history file captures what still needs improvement for the next run.

## ⚠️ Warnings
- Do not claim the workflow is trusted if only the web server started but the app still fails functionally.

## Cleanup / Post-Check
- Review the module index and schedule the next restore rehearsal.

## Next Tutorial
[💾 Web Application Backup](../index.md)

Next: translate to id
