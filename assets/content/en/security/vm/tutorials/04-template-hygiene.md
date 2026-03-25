# 🧼 04 Template Hygiene

## Objective
Prepare a reusable and safe template source.

## Prerequisites
- Shell access to the guest or the relevant host-side inventory path.
- A writable notes file for the estate review.

## Environment Assumptions
- The guest or host is stable enough for review and any risky operation is backed up first.

## Sequential Steps
### 1. Patch and clean the guest
Remove stale package state and obvious residue.

```bash
if command -v apt >/dev/null 2>&1; then
  sudo apt update && sudo apt full-upgrade -y && sudo apt clean
fi
sudo journalctl --rotate
sudo journalctl --vacuum-time=1s
```

### 2. Remove unique identity artifacts
Only on a true template source.

```bash
sudo truncate -s 0 /etc/machine-id
sudo rm -f /var/lib/dbus/machine-id
sudo rm -f /etc/ssh/ssh_host_* 2>/dev/null || true
```

### 3. Record template version
Versioning is part of security because it enables rollback.

```bash
printf "%s\n" "Template version:" "Patch date:" >> vm-security-notes.txt
```

## ✅ Validation Checkpoints
- The current state matches the documented trust zones, template lineage, and recovery path.

## ⚠️ Warnings
- Do not call the VM baseline complete if restore or isolation assumptions still live only in memory.

## Cleanup / Post-Check
- Store notes, exports, and checksums where the next operator can find them securely.

## Next Tutorial
[Next: 05 Snapshot Policy](./05-snapshot-policy.md)

Next: translate to id
