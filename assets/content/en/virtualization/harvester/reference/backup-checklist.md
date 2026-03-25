# 📋 Backup Checklist

## Purpose Of This Reference
Use this checklist to decide whether Harvester backups are operationally credible, not just present.

## Structured Reference Material
- Backup target health is known from the cluster and the backend, not just from one UI page.
- At least one test VM has a rehearsed restore path.
- Capacity exists for both backup retention and recovered VM state.
- The team knows which backup resource or backend to inspect first during recovery.

```bash
kubectl get vm -A 2>/dev/null || true
kubectl -n longhorn-system get backups.longhorn.io 2>/dev/null || kubectl api-resources | grep -i backup
kubectl -n longhorn-system get backupvolumes.longhorn.io 2>/dev/null || true
```

## Practical Interpretation Notes
- A successful backup job does not prove the restore path works.
- Inventory, age, scope, and restore target should all be written down before an incident happens.
- If management-plane recovery is separate from guest recovery on this platform, both paths need owners and drills.

## Related Docs
- [↩️ Restore a Backup with Validation](../how-to/restore-backup.md)
- [📋 Operations Checklist](./operations-checklist.md)

Next: translate to id
