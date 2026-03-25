# 🧠 Application Consistency

## Summary
A web application backup is only useful if files, database state, environment configuration, and runtime assumptions belong to the same recoverable generation.

## What This Concept Means
Application consistency means the web root, upload paths, database dump, and important config or secret references match closely enough that the application can start and serve traffic correctly after restore.

## Why It Matters Operationally
- File archives taken at a different time than the database can create subtle corruption that only appears after restore.
- Uploads, generated assets, caches, and runtime tmp paths do not belong in the same tier or retention policy automatically.
- Web apps often fail after restore because one missing `.env`, storage path, or ownership rule was omitted from scope.

## Restore-First Framing
Restore-first thinking asks whether the app can boot, authenticate, read its database, and serve static or uploaded content after a restore drill. If not, the “backup” is just a partial archive.

## Retention, Offsite, and Consistency Implications
- Retention should keep matched file and database generations together under one timestamp.
- Offsite copies should preserve both halves of the app state, not only the web root archive.
- Consistency notes should capture whether services were quiesced or whether the backup is merely crash-consistent.

## Common Mistakes
- Backing up code and forgetting uploads or storage directories.
- Dumping the database hours away from the file archive and pretending they are the same generation.
- Including disposable caches while omitting secrets references, vhost config, or TLS material.

## Related Docs
- [🧠 Database Dump Strategy](./database-dump-strategy.md)
- [🛠️ Back Up the Web Root](../how-to/backup-web-root.md)
- [📚 Backup Layout](../reference/backup-layout.md)

Next: translate to id
