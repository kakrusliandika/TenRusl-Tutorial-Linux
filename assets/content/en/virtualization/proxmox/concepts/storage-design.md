# 💽 Storage Design

## What This Concept Means
Proxmox storage design is the discipline of giving each datastore a narrow operational role. Workload disks, templates, ISOs, and backups should not all compete for the same capacity and failure domain by default.

## Why It Matters Operationally
- Restore speed, free space, and guest performance are easier to predict when datastore roles are explicit.
- Template and ISO sprawl becomes dangerous when it quietly consumes the same pool required by production disks.
- Storage problems often look like guest or cluster problems until you inspect the backend directly.

## Core Design Principles
- Name datastores by backend and role, such as `local-lvm`, `ceph-vm`, or `lab-backup`.
- Keep backups outside the primary workload failure domain whenever you can.
- Understand whether a datastore is best for images, containers, ISOs, templates, or backups before you enable all content types.
- Measure capacity before cloning, bulk importing, or restoring workloads.

## Common Mistakes
- Enabling every content type on every datastore and losing track of purpose.
- Ignoring thin-provision growth or snapshot growth until a restore or migration fails.
- Testing backup creation but never testing restore speed or recovered guest boot.

## Decision Guidance
- Use directory storage for simple ISO, template, and backup workflows when you want transparency from the Linux host.
- Use LVM-thin, ZFS, Ceph, or shared storage only when the operational tradeoffs are understood by the team.
- Keep at least one small test guest available for storage-change rehearsal.

## Verification Mindset
Use the platform control plane and Linux host checks together. The commands below are the minimum command-line baseline for this concept.

```bash
pvesm status
lsblk -f
df -h
findmnt -t zfs,nfs,nfs4,cifs,ceph
```

## Related Files In This Module
- [🧠 Proxmox Architecture and Operating Model](./proxmox-overview.md)
- [💽 Add Storage Safely](../how-to/add-storage.md)
- [📋 Storage Layout](../reference/storage-layout.md)

Next: translate to id
