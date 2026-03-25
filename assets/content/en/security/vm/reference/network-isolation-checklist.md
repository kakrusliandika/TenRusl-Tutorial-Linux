# 📋 Network Isolation Checklist

## Purpose
Use this checklist to confirm that virtual network boundaries still match the intended trust model.

## Structured Reference
| Check | Why it matters | Quick verification |
| --- | --- | --- |
| Each guest has a documented trust zone | Prevents accidental network mixing | Review inventory sheet |
| Management traffic is separate where required | Protects admin paths | Check interface and route design |
| East-west traffic is explicitly allowed or denied | Reduces lateral movement | Test from one guest to another |
| Build or template networks are segregated | Stops prep systems from mixing with workloads | Review bridge or VLAN membership |
| Backup or update egress is documented | Prevents emergency flattening later | Validate route and DNS behavior |


## Practical Interpretation Notes
- Labels in a UI are not proof of isolation. Test from the guest or host.
- If a segment has no documented egress path, operators will bypass isolation during maintenance.

## Command Snippets
```bash
ip -br addr
ip route
ping -c 2 192.168.250.1 2>/dev/null || true
sudo virsh net-list --all 2>/dev/null || true
```

## Related Docs
- [🌐 Set Up an Isolated Network](../how-to/set-up-isolated-network.md)
- [🌐 03 Network Isolation](../tutorials/03-network-isolation.md)
- [🧱 VM Security](../index.md)

Next: translate to id
