# 💽 Storage Design

## What This Concept Means
Harvester storage design is mostly about Longhorn-backed durability, class selection, replica behavior, and making sure VM images, volumes, and backups do not compete blindly for the same cluster capacity.

## Why It Matters Operationally
- Storage pressure can block scheduling, recovery, or VM performance across the cluster.
- Replica count and disk placement choices affect resilience and usable capacity at the same time.
- Restore thinking has to include where recovered VM state lands and whether the cluster can absorb it.

## Core Design Principles
- Keep a clear map of nodes, disks, storage classes, and what each is for.
- Leave capacity headroom for repair and rebuild operations.
- Separate system-critical thinking from guest-capacity thinking.
- Validate both disk visibility and storage-class behavior before using a new path widely.

## Common Mistakes
- Adding storage without checking how Longhorn or the current class will actually use it.
- Ignoring replica and failure-domain consequences when capacity looks plentiful.
- Treating backup visibility as proof that restore capacity exists.

## Decision Guidance
- Keep the first storage class story simple and well tested.
- Document which workloads may use which classes and why.
- Treat VM image storage and live VM disk storage as related but distinct operational concerns.

## Verification Mindset
Use the platform control plane and Linux host checks together. The commands below are the minimum command-line baseline for this concept.

```bash
lsblk -f
kubectl get sc
kubectl -n longhorn-system get nodes.longhorn.io 2>/dev/null || true
kubectl -n longhorn-system get volumes.longhorn.io 2>/dev/null || true
```

## Related Files In This Module
- [🧠 Harvester Architecture and Operating Model](./harvester-overview.md)
- [💽 Add Storage Safely](../how-to/add-storage.md)
- [📋 Storage Layout](../reference/storage-layout.md)

Next: translate to id
