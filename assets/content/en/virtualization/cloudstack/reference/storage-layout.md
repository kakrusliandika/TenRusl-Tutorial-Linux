# 📋 Storage Layout

## Purpose Of This Reference
Keep the CloudStack storage story explicit so everyone knows where live workloads, artifacts, backups, and restore staging belong.

## Structured Reference Material
| Storage Role | Typical Backend | What To Watch | Interpretation Notes |
|---|---|---|---|
| Primary storage | Live guest disks | Pool role, free space, host attachment | Guest performance and provisioning depend on this |
| Secondary storage | Templates, ISOs, snapshots, some backup flows | Reachability and artifact hygiene | Template growth can quietly become an outage factor |
| Management backups | CloudStack database and control-plane recovery | Freshness and restore compatibility | Guest backups do not replace this |
| Recovery staging | Lab restore target and test space | Safe rehearsal capacity | Needed before the incident |

```bash
lsblk -f
df -h
mount | egrep "nfs|ceph|cifs" || true
cloudmonkey list storagepools 2>/dev/null || true
```

## Practical Interpretation Notes
- Purpose is more important than capacity alone. If a storage target does not have a clear role, fix that before growth continues.
- Always confirm there is enough free space for restore rehearsal, not only for daily operation.

## Related Docs
- [💽 Storage Design](../concepts/storage-design.md)
- [💽 Add Storage Safely](../how-to/add-storage.md)

Next: translate to id
