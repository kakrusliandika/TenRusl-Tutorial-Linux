# ☁️ Tutorial 04: Upload Offsite

## Objective
Send the validated VPS backup generation to an offsite destination and verify that the remote copy is usable.

## Prerequisites
- Root or sudo access to the VPS.
- Backup storage separate from the workload disk.
- A clean target VPS or rehearsal target for restore testing.

## Environment Assumptions
- A fresh local generation already exists.
- A remote SSH-accessible backup endpoint exists.

## Sequential Steps
### 1. Transfer the generation
Use `rsync` or equivalent to preserve timestamps and make interrupted transfers resumable.

```bash
BACKUP_DIR=$(find /srv/backup/vps/$(hostname -s) -maxdepth 1 -mindepth 1 -type d | sort | tail -n1)
REMOTE=backup@example.net:/srv/offsite/vps/$(hostname -s)/
rsync -aH --numeric-ids --partial "$BACKUP_DIR" "$REMOTE"
```

### 2. Check the remote copy
Remote existence and checksum verification matter more than a successful transfer exit code alone.

```bash
ssh backup@example.net 'find /srv/offsite/vps/$(hostname -s) -maxdepth 2 -type f | sort | tail -n 10'
ssh backup@example.net 'cd /srv/offsite/vps/$(hostname -s)/$(basename "$BACKUP_DIR") && sha256sum -c SHA256SUMS'
```

## ✅ Validation Checkpoints
- The offsite copy contains the same archive, inventory, and checksum file.
- Remote checksum validation succeeds before local pruning decisions start.

## ⚠️ Warnings
- Do not delete the local copy until the offsite copy is confirmed usable.

## Cleanup / Post-Check
- Record the remote path and date in the backup notes.

## Next Tutorial
[↩️ Tutorial 05: Restore on a New VPS](./05-restore-on-new-vps.md)

Next: translate to id
