# 📚 Retention Policy

## Purpose
Retention should protect recent operator rollback, slower-detected corruption, and site-level failure without assuming snapshots are equivalent to exported backups.

## Structured Reference
| Layer | Example Count | Storage Tier | Purpose |
| --- | --- | --- | --- |
| Snapshot window | 1-3 short-lived points | Local datastore | Maintenance rollback, not disaster recovery. |
| Daily backups | 3-7 | Local backup storage | Fast recovery from recent guest mistakes. |
| Weekly backups | 4 | Local or secondary site | Broader rollback window for slower-detected issues. |
| Monthly backups | 2-3 | Offsite | Longer history for critical guests. |
| Remote copy | At least one recent generation | Offsite object store or remote host | Survives site or datastore loss. |

## Practical Interpretation Notes
- Prune snapshots aggressively, because long snapshot chains can hurt storage performance and create false confidence.
- Do not prune the only offsite generation until a newer remote copy verifies successfully.
- Use guest criticality to choose retention depth rather than applying one count blindly across every VM.

## Useful Inspection Snippet
```bash
find /srv/backup/vm/app01 -maxdepth 1 -mindepth 1 -type d | sort
# compare local generations with remote inventory before pruning anything
```

## Related Docs
- [🧠 Snapshots vs Backups](../concepts/snapshot-vs-backup.md)
- [🧠 Offsite Copy Strategy](../concepts/offsite-copy-strategy.md)
- [☁️ Tutorial 04: Copy Offsite](../tutorials/04-copy-offsite.md)

Next: translate to id
