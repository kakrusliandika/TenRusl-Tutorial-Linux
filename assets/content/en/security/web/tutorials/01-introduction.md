# 🛡️ 01 Introduction

## Objective
Define the public edge and trust boundaries.

## Prerequisites
- Shell access to the public hostname and the edge host or service logs.
- A writable notes file for findings and exceptions.

## Environment Assumptions
- The public edge is stable enough for controlled review and any risky config change is backed up first.

## Sequential Steps
### 1. Record public hostnames
Know which domains and subdomains are real and which should be retired.

```bash
printf "%s\n" "hostname | role | owner | expected ports" > web-security-notes.txt
```

### 2. Capture a first live response
Use the public hostname, not only localhost.

```bash
curl -I https://example.com
curl -I http://example.com
```

### 3. Record the edge software in use
Knowing the edge stack shapes every later step.

```bash
sudo systemctl status nginx --no-pager 2>/dev/null || true
sudo systemctl status caddy --no-pager 2>/dev/null || true
```

## ✅ Validation Checkpoints
- Live responses and logs match the expected edge design after each change.

## ⚠️ Warnings
- Do not call the edge hardened if stale hostnames, weak redirects, or missing logs remain undocumented.

## Cleanup / Post-Check
- Store notes, config backups, and test outputs in a reviewed location.

## Next Tutorial
[Next: 02 Surface Mapping](./02-surface-mapping.md)

Next: translate to id
