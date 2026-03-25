# 🛠️ Test a Web Restore

## Objective
Rehearse a web restore in staging or a lab and verify not just file extraction, but real application behavior and user-facing responses.

## Use Case
Use this to prove that the full web backup workflow is trustworthy before the next incident or risky deployment.

## Prerequisites
- A restore target already exists with restored files and database.
- You can reach the app over loopback, local DNS override, or a staging hostname.
- Logs are accessible from the shell.

## Environment Assumptions
- The target remains isolated from production or is reachable only through controlled test paths.
- The goal is end-to-end validation, not only checksum success.

## Exact Steps
### 1. Check HTTP and headers locally
Start with a basic response check before deeper functional testing.

```bash
curl -I http://127.0.0.1 2>/dev/null || true
curl -k -I https://127.0.0.1 2>/dev/null || true
```

### 2. Review application logs and critical paths
A restored app can still be broken even when it answers HTTP.

```bash
journalctl -u nginx -u apache2 -u httpd -u php*-fpm -n 100 --no-pager 2>/dev/null || true
ls -ld /var/www/example.com /var/www/example.com/storage 2>/dev/null || true
```

### 3. Run a functional smoke test
Test login page, homepage, or application-specific endpoints using the same paths users would need.

```bash
curl -H 'Host: example.com' http://127.0.0.1/ 2>/dev/null | head -n 20
```

## ✅ Validation Checkpoints
- HTTP responds as expected and service logs do not show critical runtime failures.
- Uploads, generated pages, and database-backed functionality behave correctly enough for the app’s recovery target.
- The operator records any manual fixes needed during rehearsal.

## Troubleshooting
- Do not count a restore as verified if only the web server process started but the application still errors out.
- Keep production DNS or public load balancers away from the rehearsal target.

## ↩️ Rollback or Recovery Notes
- Write a short rehearsal summary and store it beside the backup runbook.

## Related Docs
- [🧠 Restore Rehearsal](../concepts/restore-rehearsal.md)
- [📚 Restore Checklist](../reference/restore-checklist.md)
- [✅ Tutorial 06: Verify Application](../tutorials/06-verify-application.md)

Next: translate to id
