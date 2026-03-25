# ✅ Tutorial 06: Verify Restore

## Objective
Verify that the restored VPS is reachable, serving the intended workload, and documented well enough to trust in a real incident.

## Prerequisites
- Root or sudo access to the VPS.
- Backup storage separate from the workload disk.
- A clean target VPS or rehearsal target for restore testing.

## Environment Assumptions
- The replacement VPS is already restored and booted.

## Sequential Steps
### 1. Check host identity and critical services
Confirm the basics from the shell before application-specific tests begin.

```bash
hostnamectl
systemctl --failed
journalctl -p err -b --no-pager | tail -n 50
ss -tulpn
```

### 2. Run workload-facing validation
Use the same checks you would use in production readiness.

```bash
curl -I http://127.0.0.1 2>/dev/null || true
ssh -o StrictHostKeyChecking=no localhost 'echo ssh-ok' 2>/dev/null || true
```

### 3. Record the rehearsal outcome
A restore rehearsal is valuable only if the lessons are written down.

```bash
printf '%s\n' "restore_date=$(date +%F)" 'result=pass-or-fail' 'notes=update runbook if needed' >> /srv/backup/vps/restore-history.txt
tail -n 5 /srv/backup/vps/restore-history.txt
```

## ✅ Validation Checkpoints
- SSH, logs, and service checks confirm the host is usable.
- The restore history captures what succeeded and what still needs improvement.

## ⚠️ Warnings
- If validation fails, do not declare the backup workflow ready just because extraction succeeded.

## Cleanup / Post-Check
- Schedule the next rehearsal and update the backup scope if anything was missing.

## Next Tutorial
[💾 VPS Backup](../index.md)

Next: translate to id
