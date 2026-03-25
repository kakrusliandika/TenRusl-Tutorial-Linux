# 📋 Backup Checklist

## Purpose Of This Reference
Use this checklist to decide whether IDVE backups are operationally credible, not just present.

## Structured Reference Material
- Backups are stored in a documented repository with integrity data.
- At least one restore drill has been rehearsed to a non-production target.
- The runbook explains what to validate on the host if the control plane is unavailable.
- Archive names and retention rules are understandable without tribal knowledge.

```bash
find /srv/idve-storage/backups -maxdepth 1 -type f 2>/dev/null
sha256sum -c /srv/idve-storage/backups/*.sha256 2>/dev/null || true
df -h /srv/idve-storage/backups
```

## Practical Interpretation Notes
- A successful backup job does not prove the restore path works.
- Inventory, age, scope, and restore target should all be written down before an incident happens.
- If management-plane recovery is separate from guest recovery on this platform, both paths need owners and drills.

## Related Docs
- [↩️ Restore a Backup with Validation](../how-to/restore-backup.md)
- [📋 Operations Checklist](./operations-checklist.md)

Next: translate to id
