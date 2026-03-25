# ↩️ Tutorial 05: Restore on a New VPS

## Objective
Restore the backup generation onto a clean VPS and bring services back in a controlled order.

## Prerequisites
- Root or sudo access to the VPS.
- Backup storage separate from the workload disk.
- A clean target VPS or rehearsal target for restore testing.

## Environment Assumptions
- A clean replacement VPS is ready and isolated from production traffic.
- The chosen backup generation has already passed integrity checks.

## Sequential Steps
### 1. Verify and stage the archive
Do not extract until the generation is confirmed intact.

```bash
BACKUP_DIR=/srv/backup/vps/host01/2026-03-25-0200
cd "$BACKUP_DIR"
sha256sum -c SHA256SUMS
ls -lh
```

### 2. Stop services and extract files
Restore files before application traffic or fresh writes resume.

```bash
sudo systemctl stop nginx apache2 httpd php-fpm mariadb mysql postgresql 2>/dev/null || true
sudo tar --xattrs --acls --numeric-owner -xzf system-data.tar.gz -C /
```

### 3. Restart services gradually
Start the stack in a predictable order so the first failure is obvious.

```bash
sudo systemctl restart mariadb mysql postgresql 2>/dev/null || true
sudo systemctl restart nginx apache2 httpd php-fpm 2>/dev/null || true
systemctl --failed
```

## ✅ Validation Checkpoints
- The target host reaches the expected service state without critical failures.
- The operator has a list of any manual follow-up steps still required.

## ⚠️ Warnings
- Do not expose the host publicly until the next validation tutorial is complete.

## Cleanup / Post-Check
- Save the restore notes for future rehearsals.

## Next Tutorial
[✅ Tutorial 06: Verify Restore](./06-verify-restore.md)

Next: translate to id
