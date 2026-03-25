# 📦 Tutorial 03: Create a Full Backup

## Objective
Create the first full VPS backup generation and checksum it.

## Prerequisites
- Root or sudo access to the VPS.
- Backup storage separate from the workload disk.
- A clean target VPS or rehearsal target for restore testing.

## Environment Assumptions
- The important paths and backup root are already defined.

## Sequential Steps
### 1. Build the generation directory and package inventory
Keep every generation self-contained.

```bash
HOST=$(hostname -s)
STAMP=$(date +%F-%H%M)
BACKUP_DIR=/srv/backup/vps/$HOST/$STAMP
mkdir -p "$BACKUP_DIR"
dpkg-query -W -f='${binary:Package}	${Version}
' > "$BACKUP_DIR/packages.tsv" 2>/dev/null || true
rpm -qa --qf '%{NAME}	%{VERSION}-%{RELEASE}
' > "$BACKUP_DIR/packages.tsv" 2>/dev/null || true
```

### 2. Archive system and application data
Capture the selected paths with metadata preservation.

```bash
sudo tar --xattrs --acls --numeric-owner -czf "$BACKUP_DIR/system-data.tar.gz" /etc /var/www /srv /home
(cd "$BACKUP_DIR" && sha256sum system-data.tar.gz packages.tsv > SHA256SUMS)
```

## ✅ Validation Checkpoints
- The generation directory contains archive, inventory, and checksums.
- The archive lists expected files when inspected with `tar -tzf`.

## ⚠️ Warnings
- Do not prune previous generations yet.

## Cleanup / Post-Check
- Write the generation path down for the offsite copy stage.

## Next Tutorial
[☁️ Tutorial 04: Upload Offsite](./04-upload-offsite.md)

Next: translate to id
