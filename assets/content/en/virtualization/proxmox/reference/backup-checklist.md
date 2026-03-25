# 📋 Backup Checklist

## Purpose Of This Reference
Use this checklist to decide whether Proxmox backups are operationally credible, not just present.

## Structured Reference Material
- At least one backup target is outside the main workload datastore or failure domain.
- The backup naming convention includes guest identity and age.
- A restore target ID and target datastore are chosen before the incident.
- One recent backup has been restored in a lab or maintenance window.

```bash
vzdump --help | head
ls -lh /srv/pve-backup 2>/dev/null
pvesm status
```

## Practical Interpretation Notes
- A successful backup job does not prove the restore path works.
- Inventory, age, scope, and restore target should all be written down before an incident happens.
- If management-plane recovery is separate from guest recovery on this platform, both paths need owners and drills.

## Related Docs
- [↩️ Restore a Backup with Validation](../how-to/restore-backup.md)
- [📋 Operations Checklist](./operations-checklist.md)

Next: translate to id
