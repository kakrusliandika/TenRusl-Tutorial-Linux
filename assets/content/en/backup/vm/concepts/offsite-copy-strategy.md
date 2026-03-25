# 🧠 Offsite Copy Strategy

## Summary
Offsite strategy decides how VM backup generations leave the source platform, how they are verified remotely, and how many copies you can actually afford to retain.

## What This Concept Means
A VM backup is not meaningfully offsite until the remote copy is complete, checksummed, and recoverable without the source hypervisor or source datastore.

## Why It Matters Operationally
- Large VM artifacts change the bandwidth and scheduling profile of backup operations.
- A local backup on the same cluster protects against fewer failure modes than an offsite copy.
- The remote copy must preserve enough metadata to restore without guessing which disk belongs to which guest generation.

## Restore-First Framing
The restore-first question is simple: if the hypervisor disappears, can you still find the right generation, trust its integrity, and import it on another platform? If the answer depends on tribal knowledge, the offsite design is incomplete.

## Retention, Offsite, and Consistency Implications
- Retention policies often differ for local staging and offsite history because remote storage is slower but more valuable during a site failure.
- Checksum files and a small manifest should travel with the exported disks so verification can happen remotely.
- If the source backup is crash-consistent only, preserve that note offsite too so recovery teams know what extra application checks are required.

## Common Mistakes
- Deleting the only local copy before the remote copy is checked.
- Keeping remote copies but no manifest describing the guest name, export time, and storage format.
- Ignoring transfer failures because the sync tool exited after partially copying very large images.

## Related Docs
- [🛠️ Schedule VM Backups](../how-to/schedule-vm-backups.md)
- [📚 Retention Policy](../reference/retention-policy.md)
- [☁️ Tutorial 04: Copy Offsite](../tutorials/04-copy-offsite.md)

Next: translate to id
