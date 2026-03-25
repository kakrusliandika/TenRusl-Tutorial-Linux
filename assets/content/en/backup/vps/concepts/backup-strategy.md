# 🧠 Backup Strategy for a Linux VPS

## Summary
A VPS backup strategy defines what must be captured to rebuild the host and its workload: system configuration, service data, package context, secrets, and at least one copy outside the VPS itself.

## What This Concept Means
On a VPS, operating system state and application state often share one disk. Strategy decides which files, databases, package lists, and service notes become part of each generation so restore work can proceed in a predictable order.

## Why It Matters Operationally
- A provider snapshot may be useful, but it does not replace a documented, testable restore flow.
- If `/etc`, app data, and package context are separated poorly, rebuilding onto a clean VPS becomes guesswork.
- Scope decisions are operational: exclude disposable caches, include irreplaceable config, secrets references, uploads, and data.

## Restore-First Framing
Restore-first strategy asks what the replacement VPS would need on day one: hostname, users, packages, service config, application data, credentials references, and a validation sequence. The backup scope should answer those needs directly.

## Retention, Offsite, and Consistency Implications
- Retention choices should match how far back you may need to recover from bad deploys, package regressions, or data corruption.
- Offsite copies matter because the VPS root volume and provider account are not the same thing as a disaster boundary.
- Consistency matters for databases and active applications; a filesystem archive alone is not enough if the data tier is mutating rapidly.

## Common Mistakes
- Archiving the whole filesystem without excluding disposable paths or documenting service dependencies.
- Keeping a backup archive but no package inventory or service notes.
- Treating a provider snapshot as the only recovery artifact.

## Related Docs
- [🧠 Restore-First Thinking](./restore-first-thinking.md)
- [🛠️ Create a VPS Backup](../how-to/create-backup.md)
- [📚 Backup Layout](../reference/backup-layout.md)

Next: translate to id
