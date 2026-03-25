# ↩️ Restore a Backup with Validation

## Objective
Restore a backup or export into a safe target on IDVE and prove the recovered workload is operational, not just present.

## When To Use This Procedure
Use this during backup rehearsals, recovery drills, or after major platform changes that could affect recovery paths.

## Prerequisites
- A backup, export, or restore artifact exists and its age is known.
- A non-production target or clear restore namespace is available for rehearsal.

## Environment Assumptions
- You will restore into a test target first whenever possible.
- Recovery steps may vary by backend or platform version, so host-side validation remains mandatory.

## Step-by-Step Procedure
1. **Inspect the recovery artifact first**
Confirm age, ownership, storage location, and what the artifact actually contains before you touch the platform.
```bash
find /srv/idve-storage/backups -maxdepth 1 -type f 2>/dev/null
sha256sum -c /srv/idve-storage/backups/*.sha256 2>/dev/null || true
df -h /srv/idve-storage/backups
```

2. **Run the restore workflow**
Use the platform-supported recovery mechanism and target a safe destination first.
```bash
sudo mkdir -p /srv/idve-restore-test
tar -tf /srv/idve-storage/backups/guest-2026-03-25.tar.zst | head
sha256sum -c /srv/idve-storage/backups/guest-2026-03-25.tar.zst.sha256
```

3. **Validate the recovered workload or management state**
Check power state, storage placement, networking, logs, and service or guest readiness before you call the restore good.
```bash
egrep -c "(vmx|svm)" /proc/cpuinfo
ip -br addr
lsblk -f
systemctl list-units --type=service | grep -Ei 'idve|libvirt|qemu|virt' || true
```

## ✅ Validation Checkpoints
- The restore path is documented and repeatable.
- The recovered object powers on or validates cleanly.
- The team knows which commands prove the restore really worked.

## ⚠️ Troubleshooting Notes
- The object restores but does not function: compare it with the documented original network and storage placement.
- The artifact is older than expected: fix retention and scheduling before trusting the backup strategy.
- If management-plane state is part of the restore, confirm compatibility before overwriting production state.

## ↩️ Rollback Or Recovery Notes
- Keep the original backup artifact untouched until validation is complete.
- If the restore target is unhealthy, discard it and start again in a fresh lab target instead of improvising further.

## Related Docs
- [📋 Backup Checklist](../reference/backup-checklist.md)
- [📋 Operations Checklist](../reference/operations-checklist.md)

Next: translate to id
