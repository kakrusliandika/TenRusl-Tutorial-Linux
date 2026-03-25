# 🧱 06 WAF Baseline

## Objective
Document realistic filtering and edge protection boundaries.

## Prerequisites
- Shell access to the public hostname and the edge host or service logs.
- A writable notes file for findings and exceptions.

## Environment Assumptions
- The public edge is stable enough for controlled review and any risky config change is backed up first.

## Sequential Steps
### 1. Detect available filtering capability
Start with what the stack actually supports.

```bash
nginx -V 2>&1 | grep -i modsecurity || true
curl -I https://example.com | egrep -i 'server:|cf-ray|x-cache' || true
```

### 2. Define a baseline intent
Examples include blocking obviously sensitive probes or limiting bad methods.

```bash
printf "%s\n" "block list intent:" "managed edge provider:" >> web-security-notes.txt
```

### 3. Test a harmless suspicious request
Use a safe probe that should at least show up in logs.

```bash
curl -I https://example.com/.env || true
curl -I https://example.com/wp-login.php || true
```

## ✅ Validation Checkpoints
- Live responses and logs match the expected edge design after each change.

## ⚠️ Warnings
- Do not call the edge hardened if stale hostnames, weak redirects, or missing logs remain undocumented.

## Cleanup / Post-Check
- Store notes, config backups, and test outputs in a reviewed location.

## Next Tutorial
[Next: 07 Logging](./07-logging.md)

Next: translate to id
