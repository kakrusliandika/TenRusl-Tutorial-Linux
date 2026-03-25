# 📚 Backup Layout

## Purpose
Use a layout that keeps VM definition, disks, integrity data, and consistency notes together so restore work never starts with guesswork.

## Structured Reference
| Item | Example | Why It Exists |
| --- | --- | --- |
| Backup root | `/srv/backup/vm/app01/2026-03-25-0100/` | Predictable per-guest history and retention pruning. |
| Guest definition | `app01.xml` | Recreates CPU, RAM, NIC, storage, and firmware assumptions. |
| Disk artifact | `app01.qcow2` | Main guest storage payload. |
| Integrity file | `SHA256SUMS` | Lets the restore target verify artifacts before import. |
| Manifest | `manifest.txt` | Records guest name, export time, and consistency notes. |
| Optional notes | `FILES.txt` or runbook entry | Human-readable inventory for restore rehearsals. |

## Practical Interpretation Notes
- Keep each generation self-contained so a remote operator can restore from one directory without chasing missing metadata.
- Name directories by guest and timestamp so retention automation can prune safely.
- If your platform exports multiple volumes, store each disk with a clear mapping to the guest definition.

## Useful Inspection Snippet
```bash
BACKUP_DIR=/srv/backup/vm/app01/2026-03-25-0100
find "$BACKUP_DIR" -maxdepth 1 -type f -printf '%f\n' | sort
sha256sum -c "$BACKUP_DIR/SHA256SUMS"
```

## Related Docs
- [🛠️ Create a VM Backup](../how-to/create-vm-backup.md)
- [📚 Restore Checklist](./restore-checklist.md)
- [🧭 Tutorial 03: Create Backup](../tutorials/03-create-backup.md)

Next: translate to id
