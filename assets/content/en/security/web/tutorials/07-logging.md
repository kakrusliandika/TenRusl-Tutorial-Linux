# 📝 07 Logging

## Objective
Make request and edge events reviewable.

## Prerequisites
- Shell access to the public hostname and the edge host or service logs.
- A writable notes file for findings and exceptions.

## Environment Assumptions
- The public edge is stable enough for controlled review and any risky config change is backed up first.

## Sequential Steps
### 1. Review current access and error logs
Make sure you know where the evidence lives.

```bash
sudo tail -n 50 /var/log/nginx/access.log 2>/dev/null || true
sudo tail -n 50 /var/log/nginx/error.log 2>/dev/null || true
sudo journalctl -u nginx -u caddy -n 50 --no-pager 2>/dev/null || true
```

### 2. Confirm timestamps and useful fields
Logs should show enough to trace failing routes and abusive clients.

```bash
timedatectl status
```

### 3. Record the review commands
Future incidents should not require rediscovery.

```bash
printf "%s\n" "Access log path:" "Error log path:" "Review command:" >> web-security-notes.txt
```

## ✅ Validation Checkpoints
- Live responses and logs match the expected edge design after each change.

## ⚠️ Warnings
- Do not call the edge hardened if stale hostnames, weak redirects, or missing logs remain undocumented.

## Cleanup / Post-Check
- Store notes, config backups, and test outputs in a reviewed location.

## Next Tutorial
[Next: 08 Monitoring](./08-monitoring.md)

Next: translate to id
