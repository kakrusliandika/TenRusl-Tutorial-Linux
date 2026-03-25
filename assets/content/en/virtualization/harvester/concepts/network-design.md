# 🌐 Network Design

## What This Concept Means
Harvester networking is cluster networking plus guest networking. Management reachability, node-to-node paths, VM traffic, and any VLAN or attachment definitions all need to be understandable at the same time.

## Why It Matters Operationally
- A misconfigured network attachment or VLAN can break guests while the cluster still looks partially healthy.
- Node communication and guest communication are related but not identical paths.
- A network design that is not documented becomes very hard to troubleshoot under node or guest movement.

## Core Design Principles
- Document which path is for cluster management and which paths are for VM traffic.
- Add VLAN-backed or secondary networks only after the base management path is stable.
- Use one test VM or attachment definition to validate every new path before production use.
- Keep guest network names tied to purpose, not temporary experiments.

## Common Mistakes
- Introducing attachment definitions without documenting namespace, VLAN, or bridge intent.
- Changing multiple network variables at once across a cluster.
- Forgetting that upstream switch behavior and MTU choices still matter.

## Decision Guidance
- Start with a single well-understood VM network and expand only when tenant or workload isolation requires it.
- Prefer validation from `kubectl`, host interfaces, and one test VM together.
- Treat network changes as cluster changes, not just guest changes.

## Verification Mindset
Use the platform control plane and Linux host checks together. The commands below are the minimum command-line baseline for this concept.

```bash
kubectl get network-attachment-definitions -A 2>/dev/null || kubectl api-resources | grep -i networkattachment
ip -br addr
bridge vlan show 2>/dev/null || true
```

## Related Files In This Module
- [🧠 Harvester Architecture and Operating Model](./harvester-overview.md)
- [🌐 Configure Networking Without Guesswork](../how-to/configure-network.md)
- [📋 Network Layout](../reference/network-layout.md)

Next: translate to id
