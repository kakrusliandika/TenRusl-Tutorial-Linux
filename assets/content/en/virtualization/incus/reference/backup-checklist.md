# 📋 Backup Checklist

## Purpose Of This Reference
Use this checklist to decide whether Incus backups are operationally credible, not just present.

## Structured Reference Material
- Exports or backups are stored outside the active pool when possible.
- Image and instance names make it obvious what is recoverable and how old it is.
- A restore rehearsal exists for at least one important instance type.
- Projects and profiles needed by a restored instance are documented.

```bash
incus storage list
incus list
incus info
```

## Practical Interpretation Notes
- A successful backup job does not prove the restore path works.
- Inventory, age, scope, and restore target should all be written down before an incident happens.
- If management-plane recovery is separate from guest recovery on this platform, both paths need owners and drills.

## Related Docs
- [↩️ Restore a Backup with Validation](../how-to/restore-backup.md)
- [📋 Operations Checklist](./operations-checklist.md)

Next: translate to id
