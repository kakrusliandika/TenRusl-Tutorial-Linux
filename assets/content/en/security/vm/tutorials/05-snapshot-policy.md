# 📸 05 Snapshot Policy

## Objective
Separate rollback points from real backups.

## Prerequisites
- Shell access to the guest or the relevant host-side inventory path.
- A writable notes file for the estate review.

## Environment Assumptions
- The guest or host is stable enough for review and any risky operation is backed up first.

## Sequential Steps
### 1. Inventory current snapshots
Count what exists today.

```bash
sudo virsh snapshot-list vm-name 2>/dev/null || true
```

### 2. Mark purpose and expiry
Every retained snapshot needs a reason.

```bash
printf "%s\n" "snapshot | vm | reason | expiry | owner" >> vm-security-notes.txt
```

### 3. Record the backup path too
Snapshots are not the whole recovery story.

```bash
printf "%s\n" "backup source for vm-name:" >> vm-security-notes.txt
```

## ✅ Validation Checkpoints
- The current state matches the documented trust zones, template lineage, and recovery path.

## ⚠️ Warnings
- Do not call the VM baseline complete if restore or isolation assumptions still live only in memory.

## Cleanup / Post-Check
- Store notes, exports, and checksums where the next operator can find them securely.

## Next Tutorial
[Next: 06 Access Control](./06-access-control.md)

Next: translate to id
