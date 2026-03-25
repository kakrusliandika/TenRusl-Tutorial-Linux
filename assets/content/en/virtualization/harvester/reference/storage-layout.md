# 📋 Storage Layout

## Purpose Of This Reference
Keep the Harvester storage story explicit so everyone knows where live workloads, artifacts, backups, and restore staging belong.

## Structured Reference Material
| Storage Role | Typical Backend | What To Watch | Interpretation Notes |
|---|---|---|---|
| Primary VM storage | Storage class used by live VMs | Replica policy, headroom, node placement | Do not ignore cluster repair overhead |
| Image storage | VM image imports and reusable artifacts | Import validation and cleanup cadence | Stale images waste space quickly |
| Backup target | Longhorn or external backup path | Reachability and restore-readiness | Visibility alone is not enough |
| Recovery staging | Space for restore drills and test boots | Capacity and cleanup | Plan for it before the incident |

```bash
lsblk -f
kubectl get sc
kubectl -n longhorn-system get nodes.longhorn.io 2>/dev/null || true
kubectl -n longhorn-system get volumes.longhorn.io 2>/dev/null || true
```

## Practical Interpretation Notes
- Purpose is more important than capacity alone. If a storage target does not have a clear role, fix that before growth continues.
- Always confirm there is enough free space for restore rehearsal, not only for daily operation.

## Related Docs
- [💽 Storage Design](../concepts/storage-design.md)
- [💽 Add Storage Safely](../how-to/add-storage.md)

Next: translate to id
