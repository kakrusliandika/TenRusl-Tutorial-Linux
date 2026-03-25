# 📋 Network Layout

## Purpose Of This Reference
Keep the CloudStack network story compact, explicit, and easy to audit during maintenance or incidents.

## Structured Reference Material
| Network Role | What It Carries | Interpretation Notes |
|---|---|---|
| Management | CloudStack management node and admin reachability | Protect and monitor separately from guest traffic |
| Guest | Workload networks and tenant traffic | Validate with API checks and one test workload |
| Public / edge | Ingress or egress for published services | Map it clearly to upstream routing and firewall policy |
| Storage | Primary or secondary storage reachability | Do not assume it behaves like guest traffic |

```bash
ip -br addr
ip route
bridge link 2>/dev/null || true
cloudmonkey list physicalnetworks 2>/dev/null || true
```

## Practical Interpretation Notes
- If you cannot map a platform object to a Linux path or upstream path, the network design is not finished yet.
- Keep one known-good management path and one known-good guest validation path documented at all times.

## Related Docs
- [🌐 Network Design](../concepts/network-design.md)
- [🌐 Configure Networking Without Guesswork](../how-to/configure-network.md)

Next: translate to id
