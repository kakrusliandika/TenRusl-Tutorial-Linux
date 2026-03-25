# ✅ 09 Hardening

## Objective
Run a final VM and template review.

## Prerequisites
- Shell access to the guest or the relevant host-side inventory path.
- A writable notes file for the estate review.

## Environment Assumptions
- The guest or host is stable enough for review and any risky operation is backed up first.

## Sequential Steps
### 1. Re-run guest identity and network checks
Confirm the current state matches the documented design.

```bash
hostnamectl
ip -br addr
ip route
sudo ss -tulpn
```

### 2. Review template and backup notes
Hardening is incomplete if clone and recovery paths are unclear.

```bash
sed -n "1,160p" vm-security-notes.txt
```

### 3. Record unresolved exceptions
Temporary exceptions must be visible to the next operator.

```bash
printf "%s\n" "Open VM security exceptions:" >> vm-security-notes.txt
```

## ✅ Validation Checkpoints
- The current state matches the documented trust zones, template lineage, and recovery path.

## ⚠️ Warnings
- Do not call the VM baseline complete if restore or isolation assumptions still live only in memory.

## Cleanup / Post-Check
- Store notes, exports, and checksums where the next operator can find them securely.

## Next Tutorial
[Next: 10 Closeout](./10-closeout.md)

Next: translate to id
