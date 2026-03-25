# 🧰 Tutorial 02: Prepare Tools

## Objective
Prepare archive, checksum, and transfer tooling for the VPS backup workflow.

## Prerequisites
- Root or sudo access to the VPS.
- Backup storage separate from the workload disk.
- A clean target VPS or rehearsal target for restore testing.

## Environment Assumptions
- You can install packages on the VPS or confirm they already exist.

## Sequential Steps
### 1. Confirm core tools
Verify that archiving, checksum, and transfer utilities are available.

```bash
command -v tar sha256sum rsync systemctl
command -v mysqldump pg_dump 2>/dev/null || true
```

### 2. Create the backup root
Use a stable path that all later tutorials will reuse.

```bash
sudo install -d -m 0750 /srv/backup/vps/$(hostname -s)
sudo ls -ld /srv/backup/vps/$(hostname -s)
```

## ✅ Validation Checkpoints
- Core tools are installed or already available.
- The backup root exists and is writable by the backup workflow.

## ⚠️ Warnings
- If database dump tools are absent, do not delay documenting which engine the workload actually needs.

## Cleanup / Post-Check
- Keep notes on missing tools or distro-specific package names for future automation.

## Next Tutorial
[📦 Tutorial 03: Create a Full Backup](./03-create-full-backup.md)

Next: translate to id
