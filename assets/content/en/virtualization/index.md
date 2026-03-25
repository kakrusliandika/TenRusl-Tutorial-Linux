# ☁️ Virtualization

## Overview
Virtualization in this repository means more than booting guests. It means proving that hosts support hardware virtualization, networks are planned, storage roles are explicit, guest artifacts are controlled, backups are rehearsed, and day-2 operations stay readable from Linux commands. This section is the English source of truth for those operational patterns across Proxmox, Incus, Harvester, CloudStack, and IDVE.

## Who This Section Is For
- Linux learners moving from basic administration into hypervisors, containers, HCI, or cloud orchestration.
- Homelab, VPS, and internal-platform operators who need practical guest lifecycle, backup, and recovery guidance.
- Intermediate admins who want repeatable commands and validation steps rather than UI-only walkthroughs.

## Prerequisites
- Basic Linux shell skills, SSH access, and comfort reading service, network, and storage output.
- A lab host, nested-virtualization environment, or non-production platform where you can test safely.
- A willingness to validate from the shell after every meaningful change.

```bash
egrep -c "(vmx|svm)" /proc/cpuinfo
lscpu | grep -i virtualization
ip -br addr
lsblk -f
```

## Learning Path
1. Start with Proxmox if you want a practical KVM-first entry point with clear Linux host visibility.
2. Read Incus next if you want a CLI-native model for containers and virtual machines.
3. Move to Harvester when cluster and HCI behavior become part of the operational picture.
4. Read CloudStack when orchestration, zones, clusters, and tenant-style layout matter.
5. Use IDVE for conservative Linux-grounded operating patterns where product wording may vary by deployment.

## What To Read First
- [☁️ Proxmox](./proxmox/index.md) for KVM, LXC, bridges, templates, and backup habits.
- [☁️ Incus](./incus/index.md) for images, profiles, projects, and Linux-native control-plane work.
- [☁️ Harvester](./harvester/index.md) for HCI, cluster health, storage classes, and VM image flow.
- [☁️ CloudStack](./cloudstack/index.md) for cloud orchestration and management-plane thinking.
- [☁️ IDVE](./idve/index.md) for durable host-side validation patterns when vendor behavior varies.

## Section Map
| Platform | Best Fit | Read First | Notes |
|---|---|---|---|
| Proxmox | Linux-first KVM and LXC operations | [Open Proxmox](./proxmox/index.md) | Good first hypervisor for labs and small clusters. |
| Incus | CLI-driven containers and VMs | [Open Incus](./incus/index.md) | Strong when you want explicit projects, profiles, and images. |
| Harvester | HCI and cluster-oriented VM operations | [Open Harvester](./harvester/index.md) | Useful when node health, storage classes, and cluster behavior matter together. |
| CloudStack | Cloud orchestration and multi-host control plane | [Open CloudStack](./cloudstack/index.md) | Best when zones, clusters, and tenancy are part of the design. |
| IDVE | Conservative Linux-grounded virtualization operations | [Open IDVE](./idve/index.md) | Good when product specifics vary and durable host validation matters most. |

## Related Sections
- [💻 Workstation](../workstation/index.md)
- [🖥️ Server](../server/index.md)
- [🛡️ Security](../security/index.md)
- [💾 Backup](../backup/index.md)

Next: translate to id
