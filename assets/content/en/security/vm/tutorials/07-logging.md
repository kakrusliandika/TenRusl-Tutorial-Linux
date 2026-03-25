# 🧾 07 Logging

## Objective
Make guest and hypervisor-adjacent actions reviewable.

## Prerequisites
- Shell access to the guest or the relevant host-side inventory path.
- A writable notes file for the estate review.

## Environment Assumptions
- The guest or host is stable enough for review and any risky operation is backed up first.

## Sequential Steps
### 1. Review guest logs
Start with service, auth, and boot logs.

```bash
sudo journalctl -b --no-pager | tail -n 50
sudo journalctl -u sshd -u ssh -n 30 --no-pager || true
```

### 2. Review host-side virtualization hints
Even simple task logs help with timelines.

```bash
sudo journalctl -u libvirtd -n 30 --no-pager 2>/dev/null || true
```

### 3. Record where logs live
Future incidents should not require rediscovery.

```bash
printf "%s\n" "Guest log commands:" "Host log commands:" >> vm-security-notes.txt
```

## ✅ Validation Checkpoints
- The current state matches the documented trust zones, template lineage, and recovery path.

## ⚠️ Warnings
- Do not call the VM baseline complete if restore or isolation assumptions still live only in memory.

## Cleanup / Post-Check
- Store notes, exports, and checksums where the next operator can find them securely.

## Next Tutorial
[Next: 08 Backups](./08-backups.md)

Next: translate to id
