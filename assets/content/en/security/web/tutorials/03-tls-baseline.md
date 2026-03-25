# 🔒 03 TLS Baseline

## Objective
Verify certificate health and HTTPS behavior first.

## Prerequisites
- Shell access to the public hostname and the edge host or service logs.
- A writable notes file for findings and exceptions.

## Environment Assumptions
- The public edge is stable enough for controlled review and any risky config change is backed up first.

## Sequential Steps
### 1. Check HTTP to HTTPS behavior
A predictable redirect policy matters as much as the certificate.

```bash
curl -I http://example.com
curl -I https://example.com
```

### 2. Inspect the certificate
Read issuer and validity dates from the live listener.

```bash
openssl s_client -connect example.com:443 -servername example.com </dev/null | openssl x509 -noout -subject -issuer -dates
```

### 3. Record TLS ownership
Someone must own renewal and expiry monitoring.

```bash
printf "%s\n" "certificate owner:" "renewal path:" >> web-security-notes.txt
```

## ✅ Validation Checkpoints
- Live responses and logs match the expected edge design after each change.

## ⚠️ Warnings
- Do not call the edge hardened if stale hostnames, weak redirects, or missing logs remain undocumented.

## Cleanup / Post-Check
- Store notes, config backups, and test outputs in a reviewed location.

## Next Tutorial
[Next: 04 Security Headers](./04-security-headers.md)

Next: translate to id
