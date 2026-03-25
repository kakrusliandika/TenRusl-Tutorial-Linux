# 🧠 Restore-First Thinking

## Summary
Restore-first thinking means designing the rebuild path before deciding what the backup job should archive and how retention should be enforced.

## What This Concept Means
Instead of starting with “how do I make a tarball,” start with “what would I need to rebuild this VPS onto a clean host in four hours?” That answer should shape backup layout, file naming, retention, and verification.

## Why It Matters Operationally
- The real pressure appears during restore, when missing config, secrets, or package context are expensive.
- Operators need files plus order: what to restore first, which services to keep stopped, and how to validate the rebuilt host.
- Recovery notes reduce improvised commands and accidental data overwrite during incidents.

## Restore-First Framing
Restore-first thinking changes how you label archives, where you store package inventories, and why you keep checksums. It also pushes you to rehearse onto a clean VPS so the documentation is proven, not theoretical.

## Retention, Offsite, and Consistency Implications
- Retention without restore rehearsal can leave you with many unusable generations.
- Offsite copies should preserve the same directory and manifest structure as local copies so the restore process stays consistent.
- Consistency planning should define whether services were stopped, databases dumped separately, or hot copies were taken during activity.

## Common Mistakes
- Pruning older generations before the newest one is validated.
- Skipping package inventory or service notes because the current VPS “is easy to inspect anyway”.
- Assuming the operator performing restore will remember undocumented manual fixes.

## Related Docs
- [🛠️ Restore from Backup](../how-to/restore-from-backup.md)
- [📚 Restore Checklist](../reference/restore-checklist.md)
- [↩️ Tutorial 05: Restore on a New VPS](../tutorials/05-restore-on-new-vps.md)

Next: translate to id
