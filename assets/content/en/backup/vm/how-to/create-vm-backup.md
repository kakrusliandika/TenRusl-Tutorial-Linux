# 🛠️ Create a VM Backup

## Objective
Create a restore-ready VM backup that captures guest metadata, disk content, integrity checksums, and a clear note about consistency.

## Use Case
Use this procedure when a VM needs a manual backup run before automation is trusted, after a major configuration change, or before risky guest maintenance.

## Prerequisites
- You know the guest name, disk path, and where the backup should be staged.
- You can tolerate the read I/O and, if needed, a brief quiesce window.
- The backup target has enough free space for at least one full exported generation.

## Environment Assumptions
- The example guest is `app01` on a libvirt/KVM host.
- The disk image lives under `/var/lib/libvirt/images` and backup staging lives under `/srv/backup/vm`.
- If you use another hypervisor, keep the same metadata-plus-disk pattern even if the export command differs.

## Exact Steps
### 1. Inspect guest identity and storage
Confirm the guest definition, power state, and attached disks before copying anything.

```bash
VM=app01
virsh dominfo "$VM"
virsh domblklist "$VM"
qemu-img info /var/lib/libvirt/images/$VM.qcow2
```

### 2. Create a dated backup directory and record metadata
Store every generation under a predictable timestamp so retention pruning and restore drills are straightforward.

```bash
STAMP=$(date +%F-%H%M)
BACKUP_DIR=/srv/backup/vm/$VM/$STAMP
mkdir -p "$BACKUP_DIR"
virsh dumpxml "$VM" > "$BACKUP_DIR/$VM.xml"
printf '%s\n' "guest=$VM" "stamp=$STAMP" "consistency=crash-consistent" > "$BACKUP_DIR/manifest.txt"
```

### 3. Copy the disk artifact
Use a sparse-aware copy so the backup preserves the guest disk without inflating empty blocks unnecessarily.

```bash
rsync -aH --sparse --numeric-ids   /var/lib/libvirt/images/$VM.qcow2   "$BACKUP_DIR/"
```

### 4. Generate integrity data and a file listing
Checksums and a simple listing make later restore validation much faster.

```bash
cd "$BACKUP_DIR"
sha256sum * > SHA256SUMS
ls -lh > FILES.txt
```

## ✅ Validation Checkpoints
- The backup directory contains guest XML, disk image, checksum file, and a simple manifest.
- Running `sha256sum -c SHA256SUMS` returns `OK` for every artifact.
- The operator can explain whether the backup is crash-consistent or app-consistent.

## Troubleshooting
- If the wrong disk path was copied, re-check `virsh domblklist` and verify whether the guest has multiple volumes.
- If the copy is too slow, move the run into a quieter window or pair it with storage snapshots that are later exported.
- If the guest changes too quickly during copy, use a proper quiesce method or a hypervisor-assisted snapshot/export workflow.

## ↩️ Rollback or Recovery Notes
- Do not delete the source or any previous good generation until checksum verification succeeds.
- If the backup is inconsistent, mark it clearly and rerun rather than silently promoting it into retention.

## Related Docs
- [🧠 Snapshots vs Backups](../concepts/snapshot-vs-backup.md)
- [📚 Backup Layout](../reference/backup-layout.md)
- [📦 Tutorial 03: Create Backup](../tutorials/03-create-backup.md)

Next: translate to id
