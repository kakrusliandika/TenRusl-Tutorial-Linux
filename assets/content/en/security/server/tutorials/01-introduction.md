# 🛡️ 01 Introduction

## Objective
Define the host role, trust boundary, and security success criteria.

## Prerequisites
- Sudo access to the host or the relevant inspection path.
- A writable notes file for findings and exceptions.

## Environment Assumptions
- The host is stable enough for review work and any risky edits are backed up first.

## Sequential Steps
### 1. Record host identity
Start with a durable identity snapshot.

```bash
hostnamectl
cat /etc/os-release
uname -r
id
```

### 2. Capture service and socket inventory
This is the baseline for later hardening decisions.

```bash
sudo systemctl --type=service --state=running --no-pager
sudo ss -tulpn
```

### 3. Write the security intent
Document who may log in and which ports should stay open.

```bash
printf "%s\n" "Host role:" "Allowed admin path:" "Expected open ports:" > security-baseline-notes.txt
```

## ✅ Validation Checkpoints
- The step output matches the documented host role and no new unknown services, users, or listeners appear.

## ⚠️ Warnings
- Never treat an untested config change as finished just because the command returned zero.

## Cleanup / Post-Check
- Store outputs that matter in your host record or change log.

## Next Tutorial
[Next: 02 Baseline Audit](./02-baseline-audit.md)

Next: translate to id
