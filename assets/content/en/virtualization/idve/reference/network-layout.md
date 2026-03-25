# 📋 Network Layout

## Purpose Of This Reference
Keep the IDVE network story compact, explicit, and easy to audit during maintenance or incidents.

## Structured Reference Material
| Network Role | What It Carries | Interpretation Notes |
|---|---|---|
| Management | Admin access and control-plane reachability | Keep rollback access and documentation simple |
| Guest | VM or instance workload traffic | Validate from one test guest and from the host |
| Backup / replication | Backup target or inter-site movement | Do not assume it shares the same path requirements as guests |
| Staging / testing | Temporary validation paths | Document and remove when no longer needed |

```bash
ip -br addr
ip route
bridge link 2>/dev/null || true
bridge vlan show 2>/dev/null || true
```

## Practical Interpretation Notes
- If you cannot map a platform object to a Linux path or upstream path, the network design is not finished yet.
- Keep one known-good management path and one known-good guest validation path documented at all times.

## Related Docs
- [🌐 Network Design](../concepts/network-design.md)
- [🌐 Configure Networking Without Guesswork](../how-to/configure-network.md)

Next: translate to id
