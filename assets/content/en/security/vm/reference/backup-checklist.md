# 📋 Backup Checklist

## Purpose
Use this checklist to review whether VM backups are complete enough to restore under pressure.

## Structured Reference
| Check | Why it matters | Quick verification |
| --- | --- | --- |
| Guest disk data is included | Prevents false confidence from config-only exports | Review backup job scope |
| VM definition or metadata is stored | Rebuilds NIC, disk, and memory mapping faster | Keep XML or JSON export with the backup |
| Retention is written down | Prevents one-backup-only posture | Check repository policy notes |
| Integrity metadata exists | Detects corruption before restore day | `sha256sum` or repository verify command |
| Restore testing is scheduled | Proves recovery is more than an archive file | Record last test date |


## Practical Interpretation Notes
- A backup without VM definition metadata slows down restore.
- Snapshots are not backups unless separate retained copies and restore steps also exist.

## Command Snippets
```bash
find /srv/vm-backups -maxdepth 2 -type f -printf '%p\n' 2>/dev/null | sort || true
sha256sum -c /srv/vm-backups/SHA256SUMS 2>/dev/null || true
```

## Related Docs
- [💾 Rotate VM Backups](../how-to/rotate-vm-backups.md)
- [💾 08 Backups](../tutorials/08-backups.md)
- [🧱 VM Security](../index.md)

Next: translate to id
