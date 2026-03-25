# 📋 Network Layout

## Purpose Of This Reference
Keep the Harvester network story compact, explicit, and easy to audit during maintenance or incidents.

## Structured Reference Material
| Network Role | What It Carries | Interpretation Notes |
|---|---|---|
| Cluster management | Node management and control-plane traffic | Keep this stable and easy to test from every node |
| VM network | Guest data-plane traffic | Validate with one VM and attachment definition before scaling |
| Secondary / VLAN networks | Tenant or workload isolation | Document namespace, VLAN, and upstream switch expectations |
| Backup / storage path | Backup targets or storage-related traffic | Keep headroom and routing visible in the runbook |

```bash
kubectl get network-attachment-definitions -A 2>/dev/null || kubectl api-resources | grep -i networkattachment
ip -br addr
bridge vlan show 2>/dev/null || true
```

## Practical Interpretation Notes
- If you cannot map a platform object to a Linux path or upstream path, the network design is not finished yet.
- Keep one known-good management path and one known-good guest validation path documented at all times.

## Related Docs
- [🌐 Network Design](../concepts/network-design.md)
- [🌐 Configure Networking Without Guesswork](../how-to/configure-network.md)

Next: translate to id
