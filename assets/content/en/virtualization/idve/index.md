# ☁️ IDVE

## Overview
IDVE is treated in this repository as a virtualization environment with a control plane on top of Linux hosts. Because exact product behavior can vary by deployment, the safe writing approach is conservative: document what must always be true around CPU virtualization, storage layout, bridge or VLAN planning, guest artifacts, backups, and recovery, then use Linux commands to verify those truths.

## Who This Section Is For
- Operators working with an IDVE-style virtualization environment where host truth still matters as much as the control plane.
- Teams that need durable operations guidance without relying on fragile UI wording or version-specific menus.
- Learners who want a safe, practical model for validating a virtualization stack when the vendor surface varies.

## Prerequisites
- A lab or maintenance window where host, storage, and guest checks can be performed safely.
- Basic Linux administration, networking, storage, and shell troubleshooting skills.
- A willingness to verify the platform from Linux even if the control plane uses a different workflow for creation and approval steps.

```bash
egrep -c "(vmx|svm)" /proc/cpuinfo
lscpu | grep -i virtualization
ip -br addr
lsblk -f
```

## Learning Path
1. Start with the overview, network design, and storage design pages so the stable parts of the operating model are clear first.
2. Use the how-to pages for host-side preparation, image handling, network validation, and restore rehearsal.
3. Use the reference pages as compact checklists when the control plane wording changes but Linux facts do not.
4. Use the tutorial sequence to build a conservative first-pass runbook that can be adapted to your own IDVE deployment.

## What To Read First
- [🧠 IDVE Operating Model](./concepts/idve-overview.md)
- [🌐 Network Design for IDVE Environments](./concepts/network-design.md)
- [📋 IDVE Operations Checklist](./reference/operations-checklist.md)

## Section Map
### Concepts
- [🧠 IDVE Architecture and Operating Model](./concepts/idve-overview.md)
- [🌐 Network Design](./concepts/network-design.md)
- [💽 Storage Design](./concepts/storage-design.md)

### How-To
- [💽 Add Storage Safely](./how-to/add-storage.md)
- [🌐 Configure Networking Without Guesswork](./how-to/configure-network.md)
- [📦 Manage Base Images and Templates](./how-to/manage-templates.md)
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
