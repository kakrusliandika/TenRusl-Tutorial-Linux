# 📋 Operations Checklist

## Purpose Of This Reference
Use this as the compact day-2 checklist for Proxmox before and after maintenance, during incidents, and during normal health reviews.

## Structured Reference Material
| Interval | What To Review | Core Commands |
|---|---|---|
| Daily | Node status, quorum, guest inventory, datastore headroom | `pvecm status; pvesm status; qm list; pct list` |
| Before change | Backup age, bridge map, free space, console access | `ls -lh /srv/pve-backup; bridge vlan show; df -h` |
| After change | Guest reachability, datastore role, service logs | `ip -br addr; pvesm status; journalctl -u pvedaemon -n 50` |

```bash
pveversion -v
pvecm status
pvesm status
qm list
```

## Practical Interpretation Notes
- If the control plane and Linux host checks disagree, trust neither until you understand why.
- Keep the same inspection habit across operators so incident handoff stays fast and consistent.

## Related Docs
- [🧠 Proxmox Architecture and Operating Model](../concepts/proxmox-overview.md)
- [↩️ Restore a Backup with Validation](../how-to/restore-backup.md)

Next: translate to id
