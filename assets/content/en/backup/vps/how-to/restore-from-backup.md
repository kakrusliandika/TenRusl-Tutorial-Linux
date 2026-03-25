# 🛠️ Restore from Backup

## Objective
Restore a Linux VPS backup onto a clean host in a controlled order: verify, stage, extract, reapply services, and validate.

## Use Case
Use this during a restore rehearsal or when recovering onto a fresh VPS after disk, host, or provider failure.

## Prerequisites
- A clean target VPS exists and matches the workload requirements closely enough.
- The selected backup generation includes archive, checksums, and package inventory.
- You know which services must stay stopped during extraction or data import.

## Environment Assumptions
- The target VPS is isolated from production traffic until validation completes.
- Package installation may differ by distribution, so adjust package manager commands conservatively.
- The archive was created with preserved owners and ACLs.

## Exact Steps
### 1. Verify the selected generation
Never extract a backup before validating checksums and reviewing what it contains.

```bash
BACKUP_DIR=/srv/backup/vps/host01/2026-03-25-0100
cd "$BACKUP_DIR"
sha256sum -c SHA256SUMS
tar -tzf system-data.tar.gz | head
```

### 2. Prepare the target host
Install missing base packages and stop the application stack before file restoration.

```bash
sudo systemctl stop nginx apache2 httpd php-fpm mariadb mysql postgresql 2>/dev/null || true
less packages.tsv
```

### 3. Extract files and restart services gradually
Bring the host back in a deliberate order so failures are visible.

```bash
sudo tar --xattrs --acls --numeric-owner -xzf system-data.tar.gz -C /
sudo systemctl daemon-reload
sudo systemctl restart nginx apache2 httpd php-fpm mariadb mysql postgresql 2>/dev/null || true
systemctl --failed
```

## ✅ Validation Checkpoints
- Checksums validate before extraction.
- The target host reaches the expected service state without critical boot or service failures.
- The operator can explain what manual secrets or credentials still need secure reapplication.

## Troubleshooting
- If services fail on restart, read unit logs one at a time instead of restarting the whole stack repeatedly.
- If extracted files have wrong ownership, verify the archive was created and extracted with numeric owners preserved.
- If package names drift across distributions, treat `packages.tsv` as rebuild guidance rather than a blind install script.

## ↩️ Rollback or Recovery Notes
- Keep the target isolated if validation fails so bad data or wrong config does not receive traffic.
- Do not overwrite the backup generation or remove the old host until the replacement is validated.

## Related Docs
- [🧠 Restore-First Thinking](../concepts/restore-first-thinking.md)
- [📚 Restore Checklist](../reference/restore-checklist.md)
- [↩️ Tutorial 05: Restore on a New VPS](../tutorials/05-restore-on-new-vps.md)

Next: translate to id
