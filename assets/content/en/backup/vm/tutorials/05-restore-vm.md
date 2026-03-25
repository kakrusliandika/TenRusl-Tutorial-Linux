# ↩️ Tutorial 05: Restore VM

## Objective
Restore the VM from the backup generation into an isolated target and document every manual adjustment required.

## Prerequisites
- Shell access to the hypervisor or recovery host.
- Backup storage separate from the source guest.
- An isolated restore target or lab VLAN for validation.

## Environment Assumptions
- A restore target host is available.
- The selected generation was checksum-verified before restore.

## Sequential Steps
### 1. Stage the generation on the target
Bring the selected backup set onto the restore host without altering the original artifacts.

```bash
BACKUP_DIR=/srv/backup/vm/app01/2026-03-25-0100
cd "$BACKUP_DIR"
sha256sum -c SHA256SUMS
sudo rsync -aH --sparse app01.qcow2 /var/lib/libvirt/images/restore/
```

### 2. Define and boot the guest
Import metadata, then boot into an isolated network to avoid production collision.

```bash
virsh define app01.xml
virsh start app01
virsh console app01
```

## ✅ Validation Checkpoints
- The guest boots on the target host and shows expected devices.
- Any restore-time XML or network edits are written down.

## ⚠️ Warnings
- Do not attach the guest to a production bridge during the first restore drill.

## Cleanup / Post-Check
- Keep the console transcript or manual notes for the validation phase.

## Next Tutorial
[✅ Tutorial 06: Verify Restore](./06-verify-restore.md)

Next: translate to id
