# 🧠 Proxmox Architecture and Operating Model

## What This Concept Means
Proxmox is not only a web interface. It is a stack made of Linux networking, guest runtimes, storage definitions, backup tooling, and optionally cluster membership. An operator who understands only the UI will eventually lose time on issues that are obvious from the node shell.

## Why It Matters Operationally
- Node, storage, and bridge mistakes usually appear first as guest symptoms such as failed boots, broken migrations, or timeouts during restore.
- Proxmox gives you a lot of flexibility. Without a mental model, that flexibility becomes naming drift and mixed-purpose datastores.
- The platform is easiest to run well when you can explain where management traffic lives, where guest disks live, and how a backup would be restored before an incident happens.

## Core Design Principles
- Treat every node as a Linux host first and a control-plane object second.
- Name bridges, VLANs, templates, and datastores by purpose, not by temporary convenience.
- Separate running guest storage, artifact storage, and backup storage whenever practical.
- Use a small set of repeatable commands for health checks and do not rely on memory during incidents.

## Common Mistakes
- Putting ISOs, template images, live guest disks, and backups in the same datastore without a reason.
- Enabling extra networks on guests without documenting why they exist or how they should be validated.
- Calling a snapshot a backup and discovering the difference only after host loss or storage corruption.
- Ignoring cluster and quorum state because the local node looks fine.

## Decision Guidance
- Choose Proxmox when you want Linux-first KVM and LXC operations with clear host access and no abstraction wall between you and the node.
- Keep the design simple at first: one management bridge, one guest bridge or VLAN-aware bridge, one workload datastore, one backup target, one tested template.
- Add advanced features such as clustering, Ceph, or SDN only after the base inventory and restore process are already disciplined.

## Verification Mindset
Use the platform control plane and Linux host checks together. The commands below are the minimum command-line baseline for this concept.

```bash
pveversion -v
pvecm status
pvesm status
qm list
pct list
systemctl status pveproxy pvedaemon pve-cluster --no-pager
```

## Related Files In This Module
- [🌐 Network Design](./network-design.md)
- [💽 Storage Design](./storage-design.md)
- [📋 Operations Checklist](../reference/operations-checklist.md)

Next: translate to id
