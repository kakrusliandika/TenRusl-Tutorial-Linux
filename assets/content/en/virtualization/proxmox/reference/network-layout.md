# 📋 Network Layout

## Purpose Of This Reference
Keep the Proxmox network story compact, explicit, and easy to audit during maintenance or incidents.

## Structured Reference Material
| Network Role | What It Carries | Interpretation Notes |
|---|---|---|
| Management | Web UI, SSH, cluster control traffic | Keep reachable from console-backed path; do not experiment here first |
| Guest access | VM and container workload traffic | Use clear bridge or VLAN mapping and test with one guest after every change |
| Storage / migration | Optional isolated path for shared storage or migration | Only isolate if you can also monitor and recover it cleanly |
| Backup | Export or backup target reachability | Prefer separate routing or backend access when the environment justifies it |

```bash
ip -br link
ip route
bridge link
bridge vlan show
cat /etc/network/interfaces
```

## Practical Interpretation Notes
- If you cannot map a platform object to a Linux path or upstream path, the network design is not finished yet.
- Keep one known-good management path and one known-good guest validation path documented at all times.

## Related Docs
- [🌐 Network Design](../concepts/network-design.md)
- [🌐 Configure Networking Without Guesswork](../how-to/configure-network.md)

Next: translate to id
