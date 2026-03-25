# ✅ 09 Hardening

## Objective
Run a final public-edge posture review.

## Prerequisites
- Shell access to the public hostname and the edge host or service logs.
- A writable notes file for findings and exceptions.

## Environment Assumptions
- The public edge is stable enough for controlled review and any risky config change is backed up first.

## Sequential Steps
### 1. Re-run the core edge checks
Use the same commands future reviews will use.

```bash
curl -I https://example.com
openssl s_client -connect example.com:443 -servername example.com </dev/null | openssl x509 -noout -dates
sudo ss -tulpn | egrep ":80 |:443 " || true
```

### 2. Review logs and abuse controls
Confirm the edge still sees and records what you need.

```bash
sudo journalctl -u nginx -u caddy -n 30 --no-pager 2>/dev/null || true
sudo tail -n 20 /var/log/nginx/access.log 2>/dev/null || true
```

### 3. Record remaining exceptions
Legacy compatibility needs must be visible to the next operator.

```bash
printf "%s\n" "Open web-security exceptions:" >> web-security-notes.txt
```

## ✅ Validation Checkpoints
- Live responses and logs match the expected edge design after each change.

## ⚠️ Warnings
- Do not call the edge hardened if stale hostnames, weak redirects, or missing logs remain undocumented.

## Cleanup / Post-Check
- Store notes, config backups, and test outputs in a reviewed location.

## Next Tutorial
[Next: 10 Closeout](./10-closeout.md)

Next: translate to id
