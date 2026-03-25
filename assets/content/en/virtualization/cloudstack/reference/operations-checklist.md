# 📋 Operations Checklist

## Purpose Of This Reference
Use this as the compact day-2 checklist for CloudStack before and after maintenance, during incidents, and during normal health reviews.

## Structured Reference Material
| Interval | What To Review | Core Commands |
|---|---|---|
| Daily | Management service state, host visibility, storage pool visibility | `systemctl status cloudstack-management; cloudmonkey list hosts; cloudmonkey list storagepools` |
| Before change | Database backup freshness, network object clarity, secondary storage visibility | `ls -lh /srv/backups/cloudstack; cloudmonkey list networks; cloudmonkey list templates` |
| After change | Management service health, host health, test guest readiness | `journalctl -u cloudstack-management; cloudmonkey list virtualmachines` |

```bash
sudo systemctl status cloudstack-management --no-pager
sudo systemctl status cloudstack-agent --no-pager
ip -br addr
df -h
```

## Practical Interpretation Notes
- If the control plane and Linux host checks disagree, trust neither until you understand why.
- Keep the same inspection habit across operators so incident handoff stays fast and consistent.

## Related Docs
- [🧠 CloudStack Architecture and Operating Model](../concepts/cloudstack-overview.md)
- [↩️ Restore a Backup with Validation](../how-to/restore-backup.md)

Next: translate to id
