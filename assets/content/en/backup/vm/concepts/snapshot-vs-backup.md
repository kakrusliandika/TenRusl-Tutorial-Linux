# 🧠 Snapshots vs Backups

## Summary
A VM snapshot is a short-lived rollback aid near the source workload. A VM backup is a separate, durable recovery artifact that survives more failure modes and can be moved offsite.

## What This Concept Means
Use snapshots when you need a fast checkpoint around planned maintenance. Use backups when you need a recoverable generation that can survive host loss, datastore corruption, or operator error on the original platform.

## Why It Matters Operationally
- Snapshots often share the same hypervisor, storage pool, and retention risks as the live VM.
- Backups should include both guest definition metadata and disk content so rebuilds are deterministic.
- Restore time is slower than snapshot rollback, but the recovery scope is wider and more durable.

## Restore-First Framing
If you design the restore path first, you will treat snapshots as convenience tools and backups as the real disaster-recovery artifact. That keeps you from assuming a fast rollback point can replace an exported, checksummed backup set.

## Retention, Offsite, and Consistency Implications
- Snapshot retention should stay short because it increases storage pressure and can complicate hypervisor performance.
- Backups should have separate retention and at least one offsite copy so host or datastore failure does not erase every generation.
- Crash-consistent and app-consistent captures should be labeled clearly in the backup metadata.

## Common Mistakes
- Keeping a long chain of snapshots and calling it a backup policy.
- Exporting only the disk image while forgetting guest XML or equivalent VM definition metadata.
- Storing every generation on the same cluster or storage domain as the source guest.

## Related Docs
- [🧠 Restore Planning](./restore-planning.md)
- [🛠️ Create a VM Backup](../how-to/create-vm-backup.md)
- [📚 Restore Checklist](../reference/restore-checklist.md)

Next: translate to id
