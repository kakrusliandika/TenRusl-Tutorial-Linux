# 🧱 02 Hypervisor Baseline

## Objective
Review host-side assumptions that shape guest security.

## Prerequisites
- Shell access to the guest or the relevant host-side inventory path.
- A writable notes file for the estate review.

## Environment Assumptions
- The guest or host is stable enough for review and any risky operation is backed up first.

## Sequential Steps
### 1. Review host identity and inventory
Use the tools your environment exposes.

```bash
hostnamectl
sudo virsh list --all 2>/dev/null || true
sudo virsh net-list --all 2>/dev/null || true
```

### 2. Review storage and backup locations
Know where guest disks and backup repositories actually live.

```bash
lsblk -f
findmnt -lo TARGET,SOURCE,FSTYPE,OPTIONS
find /srv /var/lib -maxdepth 2 -type d \( -name images -o -name backups \) 2>/dev/null
```

### 3. Record management-path expectations
Write down how operators reach the host and guests.

```bash
printf "%s\n" "Hypervisor admin path:" "Guest console path:" >> vm-security-notes.txt
```

## ✅ Validation Checkpoints
- The current state matches the documented trust zones, template lineage, and recovery path.

## ⚠️ Warnings
- Do not call the VM baseline complete if restore or isolation assumptions still live only in memory.

## Cleanup / Post-Check
- Store notes, exports, and checksums where the next operator can find them securely.

## Next Tutorial
[Next: 03 Network Isolation](./03-network-isolation.md)

Next: translate to id
