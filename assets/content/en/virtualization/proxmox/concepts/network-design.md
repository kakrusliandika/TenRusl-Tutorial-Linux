# 🌐 Network Design

## What This Concept Means
In Proxmox, networking is usually a Linux bridge problem before it is a VM problem. The guest NIC, bridge membership, VLAN awareness, upstream switch configuration, and management reachability all need to tell the same story.

## Why It Matters Operationally
- A bridge or VLAN mistake can cut off both guests and administrators at the same time.
- Migration, backup traffic, and storage access often depend on paths that are not obvious if you only look at a VM config.
- The safest designs make management, guest, storage, and backup traffic easy to name, test, and reason about.

## Core Design Principles
- Use bridge names such as `vmbr0` and `vmbr1` only after their purpose is documented in the runbook.
- Prefer a predictable management path that does not share every experiment you make for guests.
- Use VLAN-aware bridges only when the upstream switch and validation method are both understood.
- Test from the host and from a guest after every network change.

## Common Mistakes
- Editing `/etc/network/interfaces` remotely without console access or a rollback copy.
- Mixing management and guest VLAN experiments on the same untested bridge.
- Leaving unused guest networks attached because “they might be useful later.”

## Decision Guidance
- Use one baseline management bridge first. Add separate workload or tenant paths only when you know the security or routing reason.
- Document which bridge carries management, which carries guest traffic, and which paths are allowed to carry storage or backup traffic.
- For clusters, decide whether migration traffic is isolated or shares the management path and validate that choice intentionally.

## Verification Mindset
Use the platform control plane and Linux host checks together. The commands below are the minimum command-line baseline for this concept.

```bash
ip -br link
ip -br addr
ip route
bridge link
bridge vlan show
cat /etc/network/interfaces
```

## Related Files In This Module
- [🧠 Proxmox Architecture and Operating Model](./proxmox-overview.md)
- [🌐 Configure Networking Without Guesswork](../how-to/configure-network.md)
- [📋 Network Layout](../reference/network-layout.md)

Next: translate to id
