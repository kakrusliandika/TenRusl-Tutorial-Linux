# 🛠️ Schedule VM Backups

## Objective
Run VM backups on a predictable schedule with separate stages for export, verification, and optional offsite copy.

## Use Case
Use this after a manual backup and a test restore both work, so automation preserves a known-good process instead of amplifying a broken one.

## Prerequisites
- A manual backup run already produces a valid, checksummed generation.
- You know the backup window, storage growth rate, and offsite bandwidth constraints.
- The hypervisor has `systemd` available for timers or an equivalent scheduler you trust.

## Environment Assumptions
- The backup shell script will live under `/usr/local/sbin`.
- The timer runs on the hypervisor host that can access guest definitions and disk paths.
- Retention pruning happens only after the new generation validates successfully.

## Exact Steps
### 1. Create the backup script
Capture metadata, disk copy, checksum generation, and logging in one script.

```bash
sudo install -d /usr/local/sbin
sudo tee /usr/local/sbin/vm-backup-app01.sh >/dev/null <<'EOF'
#!/usr/bin/env bash
set -euo pipefail
VM=app01
STAMP=$(date +%F-%H%M)
BACKUP_DIR=/srv/backup/vm/$VM/$STAMP
mkdir -p "$BACKUP_DIR"
virsh dumpxml "$VM" > "$BACKUP_DIR/$VM.xml"
rsync -aH --sparse /var/lib/libvirt/images/$VM.qcow2 "$BACKUP_DIR/"
(cd "$BACKUP_DIR" && sha256sum * > SHA256SUMS)
EOF
sudo chmod 0750 /usr/local/sbin/vm-backup-app01.sh
```

### 2. Create a systemd service and timer
Use `systemd` so scheduling, logs, and missed runs are visible from the shell.

```bash
sudo tee /etc/systemd/system/vm-backup-app01.service >/dev/null <<'EOF'
[Unit]
Description=VM backup for app01

[Service]
Type=oneshot
ExecStart=/usr/local/sbin/vm-backup-app01.sh
EOF
sudo tee /etc/systemd/system/vm-backup-app01.timer >/dev/null <<'EOF'
[Unit]
Description=Nightly VM backup for app01

[Timer]
OnCalendar=*-*-* 01:30:00
Persistent=true

[Install]
WantedBy=timers.target
EOF
sudo systemctl daemon-reload
sudo systemctl enable --now vm-backup-app01.timer
```

### 3. Test one scheduled run and review logs
Do not trust the timer until one manual service execution succeeds and logs cleanly.

```bash
sudo systemctl start vm-backup-app01.service
sudo systemctl status vm-backup-app01.service --no-pager
journalctl -u vm-backup-app01.service -n 50 --no-pager
```

## ✅ Validation Checkpoints
- The timer is active and the service produces a new, dated backup directory.
- The service logs show metadata export, disk copy, and checksum generation without failure.
- The next scheduled run time is visible in `systemctl list-timers`.

## Troubleshooting
- If the timer never fires, confirm timezone, `OnCalendar`, and whether the timer is enabled.
- If the script fails under systemd but works interactively, set explicit paths and avoid relying on shell profile state.
- If the job fills storage, add retention pruning only after validation and offsite copy design are clear.

## ↩️ Rollback or Recovery Notes
- Disable the timer immediately if verification starts failing or retention pruning behaves unexpectedly.
- Keep at least one older known-good generation while tuning automation.

## Related Docs
- [🧠 Offsite Copy Strategy](../concepts/offsite-copy-strategy.md)
- [📚 Retention Policy](../reference/retention-policy.md)
- [☁️ Tutorial 04: Copy Offsite](../tutorials/04-copy-offsite.md)

Next: translate to id
