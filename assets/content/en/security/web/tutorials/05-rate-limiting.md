# 🚦 05 Rate Limiting

## Objective
Introduce a first abuse-control rule at the edge.

## Prerequisites
- Shell access to the public hostname and the edge host or service logs.
- A writable notes file for findings and exceptions.

## Environment Assumptions
- The public edge is stable enough for controlled review and any risky config change is backed up first.

## Sequential Steps
### 1. Pick a narrow target
Start with a path that benefits from abuse resistance.

```bash
printf "%s\n" "/login" "/api/auth" >> web-security-notes.txt
```

### 2. Apply the limit
Use the web-server syntax your environment supports.

```bash
# Nginx example
limit_req_zone $binary_remote_addr zone=loginlimit:10m rate=5r/m;
```

### 3. Test repeated requests
Confirm the rule triggers without breaking normal browsing.

```bash
for i in $(seq 1 20); do
  curl -s -o /dev/null -w "%{http_code}\n" https://example.com/login
done
```

## ✅ Validation Checkpoints
- Live responses and logs match the expected edge design after each change.

## ⚠️ Warnings
- Do not call the edge hardened if stale hostnames, weak redirects, or missing logs remain undocumented.

## Cleanup / Post-Check
- Store notes, config backups, and test outputs in a reviewed location.

## Next Tutorial
[Next: 06 WAF Baseline](./06-waf-baseline.md)

Next: translate to id
