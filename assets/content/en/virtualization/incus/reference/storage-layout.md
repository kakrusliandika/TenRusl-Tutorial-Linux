# 📋 Storage Layout

## Purpose Of This Reference
Keep the Incus storage story explicit so everyone knows where live workloads, artifacts, backups, and restore staging belong.

## Structured Reference Material
| Storage Role | Typical Backend | What To Watch | Interpretation Notes |
|---|---|---|---|
| Primary instance pool | Containers and VMs | Driver behavior, free space, snapshot cost | Know whether the pool is good for both containers and VMs |
| Image repository | Published images and imported artifacts | Artifact growth and validation history | Do not leave stale golden images forever |
| Export / backup path | Instance exports and recovery artifacts | Retention and integrity checks | Recovery depends on this path being readable and documented |
| Scratch / staging | Temporary imports and rehearsals | Cleanup discipline | Do not let staging become permanent production storage |

```bash
incus storage list
incus storage show default 2>/dev/null
lsblk -f
df -h
```

## Practical Interpretation Notes
- Purpose is more important than capacity alone. If a storage target does not have a clear role, fix that before growth continues.
- Always confirm there is enough free space for restore rehearsal, not only for daily operation.

## Related Docs
- [💽 Storage Design](../concepts/storage-design.md)
- [💽 Add Storage Safely](../how-to/add-storage.md)

Next: translate to id
