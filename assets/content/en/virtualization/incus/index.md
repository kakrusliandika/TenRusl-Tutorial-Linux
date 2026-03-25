# ☁️ Incus

## Overview
Incus is a Linux-native manager for system containers and virtual machines. Its biggest advantage is that the operational surface is explicit: profiles, projects, networks, storage pools, images, and instances are all first-class CLI objects. This section turns that explicit model into a practical runbook for host readiness, guest provisioning, isolation, backup, and recovery.

## Who This Section Is For
- Operators who want a Linux-first workflow for containers and VMs without hiding the control plane behind a heavy appliance.
- Teams that need clean image, network, profile, and project discipline for labs or internal platforms.
- Learners who want to understand virtualization and container operations from the command line first.

## Prerequisites
- A Linux host with virtualization support if you plan to run Incus VMs as well as containers.
- Comfort with CLI-driven administration, storage backends, and bridge or routed networking concepts.
- A test project or namespace where you can launch and delete instances safely.

```bash
egrep -c "(vmx|svm)" /proc/cpuinfo
lscpu | grep -i virtualization
ip -br addr
lsblk -f
```

## Learning Path
1. Start with the overview plus the network and storage concepts so projects, profiles, pools, and instance types are clear before you launch anything.
2. Use the how-to pages when you need to create storage pools, define managed networks, manage image lifecycles, or rehearse a restore.
3. Use the reference pages as a compact lookup for inspections, layout decisions, and recurring day-2 checks.
4. Walk through the tutorials when you want a clean first-build flow that produces reusable commands and a small operating model.

## What To Read First
- [🧠 Incus Architecture and Operating Model](./concepts/incus-overview.md)
- [🌐 Network Design for Incus Projects](./concepts/network-design.md)
- [📋 Incus Operations Checklist](./reference/operations-checklist.md)

## Section Map
### Concepts
- [🧠 Incus Architecture and Operating Model](./concepts/incus-overview.md)
- [🌐 Network Design](./concepts/network-design.md)
- [💽 Storage Design](./concepts/storage-design.md)

### How-To
- [💽 Add Storage Safely](./how-to/add-storage.md)
- [🌐 Configure Networking Without Guesswork](./how-to/configure-network.md)
- [📦 Manage Images and Golden Instances](./how-to/manage-images.md)
- [↩️ Restore a Backup with Validation](./how-to/restore-backup.md)

### Reference
- [📋 Backup Checklist](./reference/backup-checklist.md)
- [📋 Network Layout](./reference/network-layout.md)
- [📋 Operations Checklist](./reference/operations-checklist.md)
- [📋 Storage Layout](./reference/storage-layout.md)

### Tutorials
- [📘 01 Introduction](./tutorials/01-introduction.md)
- [📋 02 Prerequisites](./tutorials/02-prerequisites.md)
- [🧱 03 Install Core](./tutorials/03-install-core.md)
- [🌐 04 Networking](./tutorials/04-networking.md)
- [💽 05 Storage](./tutorials/05-storage.md)
- [📦 06 Images or Templates](./tutorials/06-images-or-templates.md)
- [🧰 07 Operations](./tutorials/07-operations.md)
- [💾 08 Backups](./tutorials/08-backups.md)
- [🔐 09 Hardening](./tutorials/09-hardening.md)
- [✅ 10 Closeout](./tutorials/10-closeout.md)

## Related Sections
- [☁️ Virtualization](../index.md)
- [💻 Workstation](../../workstation/index.md)
- [🖥️ Server](../../server/index.md)
- [🛡️ Security](../../security/index.md)
- [💾 Backup](../../backup/index.md)

Next: translate to id
