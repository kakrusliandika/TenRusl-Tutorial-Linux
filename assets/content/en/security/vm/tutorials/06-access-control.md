# 🔐 06 Access Control

## Objective
Review console, guest, and template access paths.

## Prerequisites
- Shell access to the guest or the relevant host-side inventory path.
- A writable notes file for the estate review.

## Environment Assumptions
- The guest or host is stable enough for review and any risky operation is backed up first.

## Sequential Steps
### 1. Review guest admin accounts
Shared identities are a frequent blind spot.

```bash
getent passwd | grep -E '/bin/(bash|zsh|sh)$'
sudo ls -l /home/*/.ssh/authorized_keys 2>/dev/null || true
```

### 2. Review host-side admin groups
Look at groups relevant to virtualization access.

```bash
id
sudo getent group libvirt kvm wheel sudo 2>/dev/null || true
```

### 3. Record break-glass and console policy
Recovery access should be narrower and better documented than normal access.

```bash
printf "%s\n" "Console access owner:" "Break-glass procedure:" >> vm-security-notes.txt
```

## ✅ Validation Checkpoints
- The current state matches the documented trust zones, template lineage, and recovery path.

## ⚠️ Warnings
- Do not call the VM baseline complete if restore or isolation assumptions still live only in memory.

## Cleanup / Post-Check
- Store notes, exports, and checksums where the next operator can find them securely.

## Next Tutorial
[Next: 07 Logging](./07-logging.md)

Next: translate to id
