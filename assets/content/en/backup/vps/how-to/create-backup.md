# 🛠️ Create a VPS Backup

## Objective
Create a file-level VPS backup that captures host configuration, selected service data, package context, and integrity metadata in a repeatable directory structure.

## Use Case
Use this when you need a manual first-generation backup before introducing scheduling or retention automation.

## Prerequisites
- You know which directories, databases, and secrets references are required to rebuild the workload.
- A backup target exists outside the root volume or outside the VPS entirely.
- You can tolerate a short quiesce or read-only window if the workload changes rapidly.

## Environment Assumptions
- The example stages backups under `/srv/backup/vps/$HOSTNAME/$STAMP`.
- Disposable paths such as caches can be excluded if they are safe to regenerate.
- Package inventory is captured alongside the archive for rebuild context.

## Exact Steps
### 1. Create the generation directory and package inventory
Store both the archive and the system context needed for a clean rebuild.

```bash
HOST=$(hostname -s)
STAMP=$(date +%F-%H%M)
BACKUP_DIR=/srv/backup/vps/$HOST/$STAMP
mkdir -p "$BACKUP_DIR"
if command -v dpkg >/dev/null 2>&1; then
  dpkg-query -W -f='${binary:Package}	${Version}
' > "$BACKUP_DIR/packages.tsv"
elif command -v rpm >/dev/null 2>&1; then
  rpm -qa --qf '%{NAME}	%{VERSION}-%{RELEASE}
' > "$BACKUP_DIR/packages.tsv"
fi
```

### 2. Archive configuration and service data
Capture the important host and application paths in one dated archive.

```bash
sudo tar --xattrs --acls --numeric-owner -czf "$BACKUP_DIR/system-data.tar.gz"   /etc   /var/www   /srv   /home   --exclude=/var/www/*/cache   --exclude=/srv/*/tmp
```

### 3. Write checksums and a simple service note
Integrity data and service notes make the archive usable during restore.

```bash
cd "$BACKUP_DIR"
sha256sum system-data.tar.gz packages.tsv > SHA256SUMS
systemctl list-units --type=service --state=running > service-status.txt
```

## ✅ Validation Checkpoints
- The archive, package inventory, checksums, and service note exist in the same generation directory.
- The archive can be listed with `tar -tzf` and the checksum file validates cleanly.

## Troubleshooting
- If the archive is too large, separate mutable application data from static code and review exclusions carefully.
- If services keep changing data during backup, add a database dump or short quiesce window before archive creation.
- If permissions restore incorrectly later, confirm `tar` preserves ACLs and numeric owners in your environment.

## ↩️ Rollback or Recovery Notes
- Do not delete the source data or older known-good generations until the archive is validated.
- If the backup missed a required path, create a new generation instead of patching the old one silently.

## Related Docs
- [🧠 Backup Strategy for a Linux VPS](../concepts/backup-strategy.md)
- [📚 Backup Layout](../reference/backup-layout.md)
- [📦 Tutorial 03: Create a Full Backup](../tutorials/03-create-full-backup.md)

Next: translate to id
