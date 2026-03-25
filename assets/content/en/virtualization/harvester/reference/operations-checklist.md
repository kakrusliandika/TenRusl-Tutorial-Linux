# 📋 Operations Checklist

## Purpose Of This Reference
Use this as the compact day-2 checklist for Harvester before and after maintenance, during incidents, and during normal health reviews.

## Structured Reference Material
| Interval | What To Review | Core Commands |
|---|---|---|
| Daily | Node health, VM inventory, storage classes, Longhorn node state | `kubectl get nodes; kubectl get vm -A; kubectl get sc; kubectl -n longhorn-system get nodes.longhorn.io` |
| Before change | Disk visibility, attachment definitions, spare capacity | `lsblk -f; kubectl get network-attachment-definitions -A; kubectl -n longhorn-system get volumes.longhorn.io` |
| After change | Cluster health, VM reachability, storage reaction | `kubectl get nodes; kubectl get vm -A; kubectl -n longhorn-system get pods` |

```bash
kubectl get nodes -o wide
kubectl get vm -A 2>/dev/null || true
kubectl get sc
kubectl -n longhorn-system get nodes.longhorn.io 2>/dev/null || true
```

## Practical Interpretation Notes
- If the control plane and Linux host checks disagree, trust neither until you understand why.
- Keep the same inspection habit across operators so incident handoff stays fast and consistent.

## Related Docs
- [🧠 Harvester Architecture and Operating Model](../concepts/harvester-overview.md)
- [↩️ Restore a Backup with Validation](../how-to/restore-backup.md)

Next: translate to id
