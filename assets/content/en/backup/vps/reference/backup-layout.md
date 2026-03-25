# 📚 Backup Layout

## Purpose
Use a per-host, per-generation layout that keeps archive, package inventory, checksums, and service notes in one place so a new operator can restore without archaeology.

## Structured Reference
| Item | Example Path | Why It Matters |
| --- | --- | --- |
| Backup root | `/srv/backup/vps/host01/2026-03-25-0200/` | Predictable retention and host grouping. |
| Main archive | `system-data.tar.gz` | Host config and selected service data. |
| Package inventory | `packages.tsv` | Rebuild context for a clean VPS. |
| Checksums | `SHA256SUMS` | Integrity validation before restore. |
| Service note | `service-status.txt` | Quick view of what was running when the backup was taken. |
| Optional DB dump | `app.sql.gz` | Keeps mutable database state aligned with the archive. |

## Practical Interpretation Notes
- A clean layout matters because recovery is usually performed by someone under time pressure.
- Keep generation timestamps consistent across archive, database dump, and offsite copy.
- If secrets cannot be stored in the archive, store a secure reference in the runbook and document how they are re-applied.

## Useful Inspection Snippet
```bash
find /srv/backup/vps/host01/2026-03-25-0200 -maxdepth 1 -type f -printf '%f\n' | sort
sha256sum -c /srv/backup/vps/host01/2026-03-25-0200/SHA256SUMS
```

## Related Docs
- [🛠️ Create a VPS Backup](../how-to/create-backup.md)
- [📚 Restore Checklist](./restore-checklist.md)
- [📦 Tutorial 03: Create a Full Backup](../tutorials/03-create-full-backup.md)

Next: translate to id
