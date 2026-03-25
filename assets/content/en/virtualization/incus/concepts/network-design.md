# 🌐 Network Design

## What This Concept Means
Incus networking is the relationship between managed bridges, uplinks, instance devices, and project defaults. A clean design makes it obvious which network carries management, which carries workloads, and how an instance actually receives its connectivity.

## Why It Matters Operationally
- A profile-level NIC change can affect many instances quickly.
- Managed networks are convenient, but convenience becomes risk if you cannot explain NAT, DHCP, DNS, and uplink behavior.
- Projects are safer when the network defaults are narrow and documented.

## Core Design Principles
- Document the parent bridge or uplink for every managed network.
- Know whether a workload uses bridged, macvlan, routed, or OVN-backed connectivity.
- Test one instance after each change and confirm the result from both host and guest viewpoints.
- Prefer profile defaults over ad hoc per-instance device drift.

## Common Mistakes
- Attaching instances to multiple networks without a reason or validation plan.
- Forgetting that project restrictions may change available network objects.
- Leaving DNS, DHCP, or NAT behavior implied instead of documented.

## Decision Guidance
- Start with one managed bridge unless you have a clear requirement for routed or tenant-isolated networks.
- Use projects to separate teams or environments only when the default network and profile model are already understood.
- Keep a known-good test instance for connectivity checks.

## Verification Mindset
Use the platform control plane and Linux host checks together. The commands below are the minimum command-line baseline for this concept.

```bash
incus network list
incus network show incusbr0 2>/dev/null
incus profile show default
ip -br addr
ip route
```

## Related Files In This Module
- [🧠 Incus Architecture and Operating Model](./incus-overview.md)
- [🌐 Configure Networking Without Guesswork](../how-to/configure-network.md)
- [📋 Network Layout](../reference/network-layout.md)

Next: translate to id
