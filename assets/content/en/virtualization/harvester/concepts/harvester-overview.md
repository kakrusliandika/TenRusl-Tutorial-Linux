# 🧠 Harvester Architecture and Operating Model

## What This Concept Means
Harvester is an HCI platform. You are not only operating VMs. You are also operating node health, cluster state, storage classes, and the plumbing that lets VMs consume cluster resources safely. That changes how you plan backups, validate storage, and reason about failure domains.

## Why It Matters Operationally
- A VM issue can come from node health, Longhorn health, network attachments, or the guest itself.
- Storage and networking choices affect the whole cluster, not just one hypervisor host.
- Harvester works best when cluster operators treat VM operations and infrastructure validation as one workflow.

## Core Design Principles
- Keep the first design small: a clear node inventory, a clear storage class story, and one tested VM image path.
- Validate from `kubectl` and Linux host tools, not only from the web interface.
- Distinguish system capacity from guest capacity and leave headroom for cluster repair operations.
- Treat restore readiness as part of cluster design, not an afterthought.

## Common Mistakes
- Treating Harvester like a single-node hypervisor when the storage and control plane are cluster-scoped.
- Adding disks, networks, or VM images without recording which node or class they are meant to serve.
- Ignoring Longhorn health until a VM is already degraded or blocked.
- Assuming UI visibility equals operational readiness.

## Decision Guidance
- Choose Harvester when the cluster and storage story matter as much as the guest lifecycle itself.
- Keep initial node roles, storage classes, and network paths conservative and heavily validated.
- Use one known-good VM image and one test VM before broadening the platform.

## Verification Mindset
Use the platform control plane and Linux host checks together. The commands below are the minimum command-line baseline for this concept.

```bash
kubectl get nodes -o wide
kubectl get vm -A 2>/dev/null || true
kubectl get sc
kubectl -n longhorn-system get nodes.longhorn.io 2>/dev/null || true
```

## Related Files In This Module
- [🌐 Network Design](./network-design.md)
- [💽 Storage Design](./storage-design.md)
- [📋 Operations Checklist](../reference/operations-checklist.md)

Next: translate to id
