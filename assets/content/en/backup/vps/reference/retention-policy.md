# 📚 Retention Policy

## Purpose
Retention should preserve enough history to recover from fast mistakes and slower corruption while still keeping a tested offsite copy.

## Structured Reference
| Tier | Example Count | Typical Location | Recovery Role |
| --- | --- | --- | --- |
| Daily | 7 | Local backup disk | Fast rollback after recent mistakes or bad deploys. |
| Weekly | 4 | Local or secondary host | Broader history for slower-detected issues. |
| Monthly | 3-6 | Offsite | Longer historical recovery for important hosts. |
| Provider snapshot | Optional short window | Provider control plane | Fast platform rollback, not a substitute for archives. |

## Practical Interpretation Notes
- Document pruning rules explicitly so rotation does not happen implicitly through disk pressure.
- Do not treat provider snapshots and file-level backups as interchangeable controls.
- Offsite retention should lag local pruning so there is always a recent remote copy.

## Useful Inspection Snippet
```bash
find /srv/backup/vps/host01 -maxdepth 1 -mindepth 1 -type d | sort
# compare retained generations with the written retention policy before deletion
```

## Related Docs
- [🧠 Retention Strategy](../concepts/retention-strategy.md)
- [🛠️ Schedule Backups](../how-to/schedule-backups.md)
- [☁️ Tutorial 04: Upload Offsite](../tutorials/04-upload-offsite.md)

Next: translate to id
