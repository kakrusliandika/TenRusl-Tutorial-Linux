# 📋 Network Layout

## Purpose Of This Reference
Keep the Incus network story compact, explicit, and easy to audit during maintenance or incidents.

## Structured Reference Material
| Network Role | What It Carries | Interpretation Notes |
|---|---|---|
| Managed bridge | Default bridged connectivity for instances | Document address plan, NAT behavior, and parent uplink |
| Project isolation | Separate teams or environments | Use only when profile and network defaults are already disciplined |
| External uplink | Traffic leaving the host or cluster | Record which parent NIC or bridge carries it |
| Service / backup path | Exports, remote backup targets, or registry access | Keep the path observable and testable |

```bash
incus network list
incus network show incusbr0 2>/dev/null
ip -br addr
ip route
```

## Practical Interpretation Notes
- If you cannot map a platform object to a Linux path or upstream path, the network design is not finished yet.
- Keep one known-good management path and one known-good guest validation path documented at all times.

## Related Docs
- [🌐 Network Design](../concepts/network-design.md)
- [🌐 Configure Networking Without Guesswork](../how-to/configure-network.md)

Next: translate to id
