# 📋 Operations Checklist

## Purpose Of This Reference
Use this as the compact day-2 checklist for IDVE before and after maintenance, during incidents, and during normal health reviews.

## Structured Reference Material
| Interval | What To Review | Core Commands |
|---|---|---|
| Daily | Host virtualization readiness, service inventory, storage visibility | `egrep -c "(vmx|svm)" /proc/cpuinfo; systemctl list-units --type=service | grep -Ei "idve|libvirt|qemu|virt"; df -h` |
| Before change | Bridge/VLAN map, free space, image inventory, rollback copy | `ip -br addr; bridge vlan show; find /srv/idve-storage/templates -maxdepth 1 -type f` |
| After change | Reachability, guest boot test, archive integrity, logs | `ip route; qemu-img info ...; sha256sum -c ...; journalctl -n 50` |

```bash
egrep -c "(vmx|svm)" /proc/cpuinfo
ip -br addr
lsblk -f
systemctl list-units --type=service | grep -Ei 'idve|libvirt|qemu|virt' || true
```

## Practical Interpretation Notes
- If the control plane and Linux host checks disagree, trust neither until you understand why.
- Keep the same inspection habit across operators so incident handoff stays fast and consistent.

## Related Docs
- [🧠 IDVE Architecture and Operating Model](../concepts/idve-overview.md)
- [↩️ Restore a Backup with Validation](../how-to/restore-backup.md)

Next: translate to id
