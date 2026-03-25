# ☁️ Proxmox

## Overview
Proxmox VE is a Debian-based virtualization stack that combines KVM, LXC, clustering, software-defined storage options, and backup tooling in one control plane. The useful operator mindset is not “click until it works.” It is “understand nodes, bridges, storage roles, guest artifacts, and restore paths well enough to prove the platform is healthy from the shell as well as from the web UI.”

## Who This Section Is For
- Linux admins running KVM virtual machines or LXC containers on dedicated nodes or small clusters.
- Homelab and internal-platform operators who need repeatable guest provisioning, backups, and maintenance runbooks.
- Beginners who want a practical first hypervisor and intermediate operators who need better day-2 discipline.

## Prerequisites
- A lab node or maintenance window where network and storage changes can be tested safely.
- Basic Linux skills: SSH, package management, reading logs, and editing configuration files carefully.
- Hardware with Intel VT-x or AMD-V enabled and enough CPU, RAM, and storage headroom for a test workload.

```bash
egrep -c "(vmx|svm)" /proc/cpuinfo
lscpu | grep -i virtualization
lsmod | grep -E "kvm|vfio"
ip -br addr
```

## Learning Path
1. Start with the overview, network design, and storage design pages so bridges, VLANs, and datastore roles are clear before you create guests.
2. Use the how-to pages when you need to add storage, stage a network change, build a reusable template, or rehearse a restore.
3. Keep the reference pages open during maintenance windows so the same inspection commands and checklists are reused every time.
4. Use the tutorial sequence when you want a first-build walkthrough that turns into an operational runbook.

## What To Read First
- [🧠 Proxmox Architecture and Operating Model](./concepts/proxmox-overview.md)
- [🌐 Network Design for Proxmox Nodes](./concepts/network-design.md)
- [📋 Proxmox Operations Checklist](./reference/operations-checklist.md)

## Section Map
### Concepts
- [🧠 Proxmox Architecture and Operating Model](./concepts/proxmox-overview.md)
- [🌐 Network Design](./concepts/network-design.md)
- [💽 Storage Design](./concepts/storage-design.md)

### How-To
- [💽 Add Storage Safely](./how-to/add-storage.md)
- [🌐 Configure Networking Without Guesswork](./how-to/configure-network.md)
- [📦 Manage Templates and Base Images](./how-to/manage-templates.md)
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
