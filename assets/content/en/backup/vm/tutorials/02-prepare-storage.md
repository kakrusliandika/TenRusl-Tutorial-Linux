# 💽 Tutorial 02: Prepare Storage

## Objective
Prepare staging storage for VM backups and make sure the target can hold a full generation plus integrity files.

## Prerequisites
- Shell access to the hypervisor or recovery host.
- Backup storage separate from the source guest.
- An isolated restore target or lab VLAN for validation.

## Environment Assumptions
- The hypervisor has a local or mounted backup path available.
- The estimated guest size is known well enough to budget backup space.

## Sequential Steps
### 1. Create the per-guest backup root
Use a deterministic path so later retention and offsite copy logic stay simple.

```bash
sudo install -d -m 0750 /srv/backup/vm/app01
sudo ls -ld /srv/backup/vm/app01
```

### 2. Inspect available capacity
Confirm that the backup target can hold a full exported disk plus some headroom for the next run.

```bash
df -h /srv/backup/vm
qemu-img info /var/lib/libvirt/images/app01.qcow2
```

## ✅ Validation Checkpoints
- The backup root exists with appropriate permissions.
- The storage target has enough free capacity for at least one full backup generation.

## ⚠️ Warnings
- Avoid staging VM backups on the same datastore as the source guest if you expect site-level failures.

## Cleanup / Post-Check
- Capture free-space expectations in your runbook before moving to export.

## Next Tutorial
[📦 Tutorial 03: Create Backup](./03-create-backup.md)

Next: translate to id
