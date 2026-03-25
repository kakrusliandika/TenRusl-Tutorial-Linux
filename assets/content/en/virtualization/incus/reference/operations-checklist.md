# 📋 Operations Checklist

## Purpose Of This Reference
Use this as the compact day-2 checklist for Incus before and after maintenance, during incidents, and during normal health reviews.

## Structured Reference Material
| Interval | What To Review | Core Commands |
|---|---|---|
| Daily | Projects, profiles, networks, storage pools, active instances | `incus project list; incus profile list; incus network list; incus storage list; incus list` |
| Before change | Pool headroom, profile impact, current instance layout | `incus storage show <pool>; incus profile show default; incus list` |
| After change | Launch test, network reachability, storage visibility, logs | `incus launch ...; incus exec ...; journalctl -u incus -n 50` |

```bash
incus info
incus profile list
incus network list
incus storage list
```

## Practical Interpretation Notes
- If the control plane and Linux host checks disagree, trust neither until you understand why.
- Keep the same inspection habit across operators so incident handoff stays fast and consistent.

## Related Docs
- [🧠 Incus Architecture and Operating Model](../concepts/incus-overview.md)
- [↩️ Restore a Backup with Validation](../how-to/restore-backup.md)

Next: translate to id
