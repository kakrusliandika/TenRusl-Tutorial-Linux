# 📘 10 Closeout

## Objective
Package rollback data and the next review schedule.

## Prerequisites
- Shell access to the guest or the relevant host-side inventory path.
- A writable notes file for the estate review.

## Environment Assumptions
- The guest or host is stable enough for review and any risky operation is backed up first.

## Sequential Steps
### 1. Bundle the notes and metadata
Keep the security notes near template and backup records.

```bash
tar czf vm-security-pack-$(date +%F).tgz vm-security-notes.txt 2>/dev/null || true
```

### 2. Record the next review window
Security posture decays if nobody owns the next check.

```bash
printf "%s\n" "Next VM security review: YYYY-MM-DD" >> vm-security-notes.txt
```

### 3. Point operators back to the module index
The index is the landing page for future refresh cycles.

```bash
echo "Review module: ../index.md"
```

## ✅ Validation Checkpoints
- The current state matches the documented trust zones, template lineage, and recovery path.

## ⚠️ Warnings
- Do not call the VM baseline complete if restore or isolation assumptions still live only in memory.

## Cleanup / Post-Check
- Store notes, exports, and checksums where the next operator can find them securely.

## Next Tutorial
[Return to VM Security](../index.md)

Next: translate to id
