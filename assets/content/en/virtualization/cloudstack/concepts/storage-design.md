# 💽 Storage Design

## What This Concept Means
CloudStack storage design is the relationship between primary storage, secondary storage, templates, snapshots, and backup or database state. Good design prevents guest orchestration from hiding the real storage failure domain.

## Why It Matters Operationally
- Primary and secondary storage serve different purposes and should be treated that way operationally.
- Template registration, snapshot use, and restore readiness all depend on storage placement and reachability.
- Management-plane backups matter too, not only guest disk state.

## Core Design Principles
- Document which storage is primary, which is secondary, and which holds management backups.
- Keep storage pool purpose narrow and obvious.
- Check backend reachability and free space from both the management view and the host where relevant.
- Separate guest recovery thinking from management-plane recovery thinking.

## Common Mistakes
- Treating primary storage capacity as if it also proves secondary storage or backup readiness.
- Letting template and snapshot sprawl grow without inventory hygiene.
- Restoring management data without a compatibility or validation plan.

## Decision Guidance
- Keep the first storage design easy to explain: one clear primary path, one clear secondary path, one clear backup path.
- Use API or CLI checks where possible so the storage story can be audited repeatably.
- Validate a restore in a lab before trusting a backup.

## Verification Mindset
Use the platform control plane and Linux host checks together. The commands below are the minimum command-line baseline for this concept.

```bash
lsblk -f
df -h
mount | egrep "nfs|ceph|cifs" || true
cloudmonkey list storagepools 2>/dev/null || true
```

## Related Files In This Module
- [🧠 CloudStack Architecture and Operating Model](./cloudstack-overview.md)
- [💽 Add Storage Safely](../how-to/add-storage.md)
- [📋 Storage Layout](../reference/storage-layout.md)

Next: translate to id
