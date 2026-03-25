# 🧠 Restore Planning

## Summary
Restore planning captures the information you will need under pressure: target hypervisor, storage path, VLAN mapping, guest definition, and validation sequence.

## What This Concept Means
For VM recovery, the archive alone is not enough. You also need to know where the guest will be imported, how the NICs should be attached, what name collisions must be avoided, and how to prove the restored guest is safe to cut over.

## Why It Matters Operationally
- VMs fail at restore time when metadata, storage placement, and network mapping are undocumented.
- An isolated restore target prevents hostname and IP collisions with production.
- The restore plan should define what “good” looks like before anyone boots the guest.

## Restore-First Framing
Restore-first planning changes backup layout choices. It pushes you to store manifests, checksums, notes about consistency, and the guest definition beside the disk artifacts because those items are what the operator actually reaches for during recovery.

## Retention, Offsite, and Consistency Implications
- Retention is only useful if each generation includes enough metadata to recreate the guest predictably.
- Offsite copies should preserve the same directory structure and checksums so a remote restore drill does not depend on undocumented manual reconstruction.
- Consistency notes matter because application owners need to know whether they can trust in-guest data immediately or must run additional integrity checks.

## Common Mistakes
- Restoring directly into the production network without a rehearsal or an isolation plan.
- Forgetting firmware mode, boot order, or guest driver assumptions.
- Treating a backup job as complete before the restored guest reaches console and service health.

## Related Docs
- [🧠 Offsite Copy Strategy](./offsite-copy-strategy.md)
- [🛠️ Restore a VM Backup](../how-to/restore-vm-backup.md)
- [✅ Tutorial 06: Verify Restore](../tutorials/06-verify-restore.md)

Next: translate to id
