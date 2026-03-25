# 📋 Storage Layout

## Purpose Of This Reference
Keep the Proxmox storage story explicit so everyone knows where live workloads, artifacts, backups, and restore staging belong.

## Structured Reference Material
| Storage Role | Typical Backend | What To Watch | Interpretation Notes |
|---|---|---|---|
| Live guest disks | LVM-thin, ZFS, Ceph, shared storage | Capacity, latency, migration behavior | Do not mix with backup targets by accident |
| Templates / ISOs | Directory or shared image store | Artifact growth and cleanup | Version and date the artifact inventory |
| Backups | Directory, NFS, or dedicated backup storage | Retention and restore speed | Keep outside the main failure domain when possible |
| Restore staging | Temporary free space or isolated datastore | Import and boot testing | Do not assume production pools have enough headroom |

```bash
pvesm status
lsblk -o NAME,SIZE,FSTYPE,MOUNTPOINT
df -h
findmnt -t nfs,nfs4,cifs,ceph
```

## Practical Interpretation Notes
- Purpose is more important than capacity alone. If a storage target does not have a clear role, fix that before growth continues.
- Always confirm there is enough free space for restore rehearsal, not only for daily operation.

## Related Docs
- [💽 Storage Design](../concepts/storage-design.md)
- [💽 Add Storage Safely](../how-to/add-storage.md)

Next: translate to id
