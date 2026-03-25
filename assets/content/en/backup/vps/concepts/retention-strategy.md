# 🧠 Retention Strategy

## Summary
Retention strategy decides how many generations you keep locally, how many go offsite, and how far back you can recover from incidents that are not detected immediately.

## What This Concept Means
A retention strategy is the policy layer over recurring backup jobs. It turns dated archives into recoverable history with clear pruning rules and separate protection for offsite generations.

## Why It Matters Operationally
- Bad deploys, accidental deletes, and slower corruption all appear on different timelines.
- Storage cost is real, but overly aggressive pruning can remove the only good pre-incident generation.
- Retention has to be explicit for both local and offsite tiers.

## Restore-First Framing
Restore-first retention asks: which generation would I choose if today’s backup is already contaminated by the same issue as production? That question usually requires daily, weekly, and offsite layers instead of a single rolling archive.

## Retention, Offsite, and Consistency Implications
- Local copies are usually faster to restore from, but offsite copies protect against provider, disk, or host loss.
- Retention policy should state when to prune, who approves exceptions, and what verification must happen before deletion.
- Database dumps and filesystem archives should follow the same generation stamp so retention never separates matched restore artifacts.

## Common Mistakes
- Keeping only one rolling backup file with no history depth.
- Applying the same retention count to every VPS regardless of business impact.
- Deleting local generations as soon as offsite transfer starts instead of after it verifies.

## Related Docs
- [📚 Retention Policy](../reference/retention-policy.md)
- [🛠️ Schedule Backups](../how-to/schedule-backups.md)
- [☁️ Tutorial 04: Upload Offsite](../tutorials/04-upload-offsite.md)

Next: translate to id
