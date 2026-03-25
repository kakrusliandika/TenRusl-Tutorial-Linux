# 📦 Tutorial 03: Create Backup

## Objective
Create the first manual VM backup generation with metadata, disk data, and checksums.

## Prerequisites
- Shell access to the hypervisor or recovery host.
- Backup storage separate from the source guest.
- An isolated restore target or lab VLAN for validation.

## Environment Assumptions
- The guest disk path and backup root have already been confirmed.

## Sequential Steps
### 1. Export metadata and disk
Build a single dated generation that future retention logic can manage cleanly.

```bash
VM=app01
STAMP=$(date +%F-%H%M)
BACKUP_DIR=/srv/backup/vm/$VM/$STAMP
mkdir -p "$BACKUP_DIR"
virsh dumpxml "$VM" > "$BACKUP_DIR/$VM.xml"
rsync -aH --sparse /var/lib/libvirt/images/$VM.qcow2 "$BACKUP_DIR/"
```

### 2. Checksum the generation
Never move a generation into retention or offsite storage without integrity data.

```bash
cd "$BACKUP_DIR"
sha256sum * > SHA256SUMS
ls -lh
```

## ✅ Validation Checkpoints
- The generation directory contains the XML, disk image, and checksum file.
- Checksums complete successfully on the newly created artifacts.

## ⚠️ Warnings
- Do not rename individual artifacts casually once checksums are created.

## Cleanup / Post-Check
- Write down the exact generation path for the next tutorial.

## Next Tutorial
[☁️ Tutorial 04: Copy Offsite](./04-copy-offsite.md)

Next: translate to id
