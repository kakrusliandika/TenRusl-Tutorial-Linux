# 💽 Storage Design

## What This Concept Means
Incus storage design is about mapping pools and volumes to the lifecycle of your workloads. Containers, VMs, images, snapshots, and exports may all touch the same backend, so purpose and capacity discipline matter early.

## Why It Matters Operationally
- A storage pool decision affects launch speed, snapshot behavior, backup size, and operational transparency.
- Image imports and VM disks can grow faster than expected when there is no clear cleanup policy.
- Restore drills are simpler when you know which pool should receive recovered instances and which pool is only for artifacts.

## Core Design Principles
- Name pools by backend and role.
- Keep the first design small: one stable pool, one tested export path, one documented retention rule.
- Understand whether your chosen driver is directory, ZFS, Btrfs, or LVM-backed before scaling it.
- Inspect storage from both Incus and Linux tools.

## Common Mistakes
- Treating every pool as interchangeable.
- Ignoring snapshot, export, or image growth until the pool is already constrained.
- Mixing throwaway lab artifacts and durable platform artifacts in the same space without cleanup rules.

## Decision Guidance
- Use a simple pool first, then add specialized backends only after the workload pattern is known.
- Reserve clear space for exports and backups so recovery does not compete with live workloads.
- Document whether a pool is acceptable for VMs, containers, images, or all three.

## Verification Mindset
Use the platform control plane and Linux host checks together. The commands below are the minimum command-line baseline for this concept.

```bash
incus storage list
incus storage show default 2>/dev/null
lsblk -f
df -h
```

## Related Files In This Module
- [🧠 Incus Architecture and Operating Model](./incus-overview.md)
- [💽 Add Storage Safely](../how-to/add-storage.md)
- [📋 Storage Layout](../reference/storage-layout.md)

Next: translate to id
