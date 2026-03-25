# 🧩 04 Security Headers

## Objective
Apply browser-side guardrails with measured validation.

## Prerequisites
- Shell access to the public hostname and the edge host or service logs.
- A writable notes file for findings and exceptions.

## Environment Assumptions
- The public edge is stable enough for controlled review and any risky config change is backed up first.

## Sequential Steps
### 1. Inspect current headers
Start with the live response.

```bash
curl -I https://example.com | egrep -i 'strict-transport-security|content-security-policy|x-content-type-options|referrer-policy|x-frame-options' || true
```

### 2. Add or tune baseline headers
Apply the smallest useful set first.

```bash
# Example low-risk headers
# X-Content-Type-Options: nosniff
# Referrer-Policy: strict-origin-when-cross-origin
```

### 3. Re-test the live response
Confirm the edge returns the headers you intended.

```bash
curl -I https://example.com
```

## ✅ Validation Checkpoints
- Live responses and logs match the expected edge design after each change.

## ⚠️ Warnings
- Do not call the edge hardened if stale hostnames, weak redirects, or missing logs remain undocumented.

## Cleanup / Post-Check
- Store notes, config backups, and test outputs in a reviewed location.

## Next Tutorial
[Next: 05 Rate Limiting](./05-rate-limiting.md)

Next: translate to id
