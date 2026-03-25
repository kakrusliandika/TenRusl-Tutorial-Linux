# 📋 Storage Layout

## Purpose Of This Reference
Keep the IDVE storage story explicit so everyone knows where live workloads, artifacts, backups, and restore staging belong.

## Structured Reference Material
| Storage Role | Typical Backend | What To Watch | Interpretation Notes |
|---|---|---|---|
| Live guest storage | Running workloads | Capacity, filesystem, failure domain | Do not mix recovery artifacts here by default |
| Base image store | Golden images and templates | Checksums, naming, version/date | Treat as controlled artifacts |
| Backup repository | Archives and restore sets | Integrity and retention | A restore path matters more than archive count |
| Recovery staging | Temporary extract and validation space | Free space and cleanup | Plan it before the outage |

```bash
lsblk -f
findmnt
df -h
stat -f /srv 2>/dev/null || true
```

## Practical Interpretation Notes
- Purpose is more important than capacity alone. If a storage target does not have a clear role, fix that before growth continues.
- Always confirm there is enough free space for restore rehearsal, not only for daily operation.

## Related Docs
- [💽 Storage Design](../concepts/storage-design.md)
- [💽 Add Storage Safely](../how-to/add-storage.md)

Next: translate to id
