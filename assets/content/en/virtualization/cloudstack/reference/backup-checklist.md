# 📋 Backup Checklist

## Purpose Of This Reference
Use this checklist to decide whether CloudStack backups are operationally credible, not just present.

## Structured Reference Material
- Management-plane backup freshness is known and documented.
- Template or snapshot inventory is not confused with a full recovery strategy.
- A restore path exists for both the management plane and at least one representative guest.
- CloudMonkey or equivalent API access is available for validation when the UI is not enough.

```bash
sudo systemctl status cloudstack-management --no-pager
ls -lh /srv/backups/cloudstack 2>/dev/null || true
cloudmonkey list snapshots 2>/dev/null || true
```

## Practical Interpretation Notes
- A successful backup job does not prove the restore path works.
- Inventory, age, scope, and restore target should all be written down before an incident happens.
- If management-plane recovery is separate from guest recovery on this platform, both paths need owners and drills.

## Related Docs
- [↩️ Restore a Backup with Validation](../how-to/restore-backup.md)
- [📋 Operations Checklist](./operations-checklist.md)

Next: translate to id
