# 📈 08 Monitoring

## Objective
Catch TLS and availability issues before users report them.

## Prerequisites
- Shell access to the public hostname and the edge host or service logs.
- A writable notes file for findings and exceptions.

## Environment Assumptions
- The public edge is stable enough for controlled review and any risky config change is backed up first.

## Sequential Steps
### 1. Define the checks that matter most
Start with availability, TLS, and a few abuse indicators.

```bash
printf "%s\n" "health check URL:" "TLS expiry check:" "log anomaly review:" >> web-security-notes.txt
```

### 2. Run simple manual checks
A small shell routine is better than nothing.

```bash
curl -fsS https://example.com/health || curl -I https://example.com
openssl s_client -connect example.com:443 -servername example.com </dev/null | openssl x509 -noout -dates
```

### 3. Review edge service state
If the service is unhealthy, monitoring must show it.

```bash
sudo systemctl is-active nginx 2>/dev/null || true
sudo systemctl is-active caddy 2>/dev/null || true
```

## ✅ Validation Checkpoints
- Live responses and logs match the expected edge design after each change.

## ⚠️ Warnings
- Do not call the edge hardened if stale hostnames, weak redirects, or missing logs remain undocumented.

## Cleanup / Post-Check
- Store notes, config backups, and test outputs in a reviewed location.

## Next Tutorial
[Next: 09 Hardening](./09-hardening.md)

Next: translate to id
