# 💾 08 Backups

## Objective
Check backup scope, naming, and restore readiness.

## Prerequisites
- Shell access to the guest or the relevant host-side inventory path.
- A writable notes file for the estate review.

## Environment Assumptions
- The guest or host is stable enough for review and any risky operation is backed up first.

## Sequential Steps
### 1. Inventory backup artifacts
List what exists and how it is named.

```bash
find /srv/vm-backups -maxdepth 2 -type f -printf '%p\n' 2>/dev/null | sort || true
```

### 2. Check integrity metadata
Backups without verification are just archives.

```bash
sha256sum -c /srv/vm-backups/SHA256SUMS 2>/dev/null || true
```

### 3. Record restore prerequisites
Capture guest metadata, disk format, and external dependencies.

```bash
printf "%s\n" "Restore notes for vm-name:" >> vm-security-notes.txt
```

## ✅ Validation Checkpoints
- The current state matches the documented trust zones, template lineage, and recovery path.

## ⚠️ Warnings
- Do not call the VM baseline complete if restore or isolation assumptions still live only in memory.

## Cleanup / Post-Check
- Store notes, exports, and checksums where the next operator can find them securely.

## Next Tutorial
[Next: 09 Hardening](./09-hardening.md)

Next: translate to id
