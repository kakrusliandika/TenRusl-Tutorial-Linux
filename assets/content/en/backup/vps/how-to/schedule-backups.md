# 🛠️ Schedule Backups

## Objective
Schedule VPS backups with enough logging and verification to support rotation, alerting, and later restore drills.

## Use Case
Use this when the manual backup procedure already works and you want a repeatable run without turning verification into an afterthought.

## Prerequisites
- A manual backup command already completes successfully.
- You know the approximate runtime and storage impact of each generation.
- You have a plan for alerting or at least inspecting timer logs regularly.

## Environment Assumptions
- The example uses a shell script and `systemd` timer.
- Verification and offsite copy should happen before pruning old generations.
- The scheduled job runs as root or via sudo because system files are included.

## Exact Steps
### 1. Create the backup script
Put the real backup logic in one shell script so manual and automated runs stay identical.

```bash
sudo tee /usr/local/sbin/vps-backup.sh >/dev/null <<'EOF'
#!/usr/bin/env bash
set -euo pipefail
HOST=$(hostname -s)
STAMP=$(date +%F-%H%M)
BACKUP_DIR=/srv/backup/vps/$HOST/$STAMP
mkdir -p "$BACKUP_DIR"
dpkg-query -W -f='${binary:Package}	${Version}
' > "$BACKUP_DIR/packages.tsv" 2>/dev/null || true
rpm -qa --qf '%{NAME}	%{VERSION}-%{RELEASE}
' > "$BACKUP_DIR/packages.tsv" 2>/dev/null || true
tar --xattrs --acls --numeric-owner -czf "$BACKUP_DIR/system-data.tar.gz" /etc /var/www /srv /home
(cd "$BACKUP_DIR" && sha256sum system-data.tar.gz packages.tsv > SHA256SUMS)
EOF
sudo chmod 0750 /usr/local/sbin/vps-backup.sh
```

### 2. Create and enable the timer
Systemd timers make schedule, last run, and failures visible from the shell.

```bash
sudo tee /etc/systemd/system/vps-backup.service >/dev/null <<'EOF'
[Unit]
Description=Nightly VPS backup

[Service]
Type=oneshot
ExecStart=/usr/local/sbin/vps-backup.sh
EOF
sudo tee /etc/systemd/system/vps-backup.timer >/dev/null <<'EOF'
[Unit]
Description=Nightly VPS backup schedule

[Timer]
OnCalendar=*-*-* 02:00:00
Persistent=true

[Install]
WantedBy=timers.target
EOF
sudo systemctl daemon-reload
sudo systemctl enable --now vps-backup.timer
```

### 3. Test and inspect the scheduled workflow
A timer is not trusted until one on-demand run and its logs look correct.

```bash
sudo systemctl start vps-backup.service
sudo systemctl status vps-backup.service --no-pager
journalctl -u vps-backup.service -n 50 --no-pager
systemctl list-timers vps-backup.timer
```

## ✅ Validation Checkpoints
- The service creates a new generation when started manually.
- The timer is enabled and shows the next run time clearly.
- Logs are sufficient to identify the exact generation path created by the service.

## Troubleshooting
- If the timer runs but creates empty archives, compare the script environment with the interactive shell and use absolute paths.
- If runtime is too long, split archive and offsite phases or reduce scope to essential paths only.
- If rotation is added later, protect the newest validated offsite copy from accidental pruning.

## ↩️ Rollback or Recovery Notes
- Disable the timer if repeated failures occur until the underlying backup routine is fixed.
- Keep at least one manual generation outside the automated rotation during rollout.

## Related Docs
- [🧠 Retention Strategy](../concepts/retention-strategy.md)
- [📚 Retention Policy](../reference/retention-policy.md)
- [☁️ Tutorial 04: Upload Offsite](../tutorials/04-upload-offsite.md)

Next: translate to id
