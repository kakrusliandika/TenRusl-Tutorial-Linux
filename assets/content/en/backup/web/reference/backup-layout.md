# 📚 Backup Layout

## Purpose
Use a web-app backup layout that keeps file archive, database dump, checksums, and restore notes aligned under one generation stamp.

## Structured Reference
| Item | Example File | Why It Matters |
| --- | --- | --- |
| Web root archive | `web-root.tar.gz` | Restores code, uploads, and selected application files. |
| Database dump | `app_db.sql.gz` or `app_db.dump` | Restores mutable records for the same generation. |
| Checksums | `SHA256SUMS` | Validates integrity before restore. |
| DB notes | `database-notes.txt` | Records engine, DB name, or dump assumptions. |
| File listing | `web-root.contents.txt` | Makes scope review easy during restore drills. |
| Secure runbook reference | external or encrypted note | Explains env files, TLS keys, and credentials not stored in the archive. |

## Practical Interpretation Notes
- Use a single generation directory so files and database dumps are never separated by accident.
- If secrets cannot be stored with the backup, the runbook must state exactly how they are reapplied.
- Keep upload/media storage paths explicit if they live outside the main document root.

## Useful Inspection Snippet
```bash
BACKUP_DIR=/srv/backup/web/example.com/2026-03-25-0200
find "$BACKUP_DIR" -maxdepth 1 -type f -printf '%f\n' | sort
sha256sum -c "$BACKUP_DIR/SHA256SUMS"
```

## Related Docs
- [🛠️ Back Up the Web Root](../how-to/backup-web-root.md)
- [🛠️ Back Up the Database](../how-to/backup-database.md)
- [📁 Tutorial 03: Back Up Files](../tutorials/03-backup-files.md)

Next: translate to id
