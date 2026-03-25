# ☁️ CloudStack

## Overview
CloudStack is a cloud orchestration layer on top of virtualization infrastructure, so operators have to understand the management plane, hypervisor hosts, storage pools, and network tiers together. The safest documentation style here is durable and operational: use stable Linux and service checks, add API or CloudMonkey examples where they are clearly helpful, and avoid pretending every deployment looks identical.

## Who This Section Is For
- Operators running CloudStack management nodes and virtualization hosts across zones, pods, clusters, and storage pools.
- Teams that need a cloud-style control plane but still want host-side verification and recovery discipline.
- Learners moving from single-host virtualization into orchestration and multi-tenant infrastructure thinking.

## Prerequisites
- A non-production CloudStack environment or a maintenance window for management-plane and host validation work.
- Comfort with Linux service inspection, networking, storage, and reading system logs.
- If available, access to CloudMonkey or another supported API client for read-only inspection and controlled change workflows.

```bash
egrep -c "(vmx|svm)" /proc/cpuinfo
ip -br addr
lsblk -f
sudo systemctl status cloudstack-management --no-pager
```

## Learning Path
1. Start with the CloudStack overview and the network or storage concepts so zones, clusters, and pool roles make sense before guest orchestration grows.
2. Use the how-to pages for storage onboarding, network design checks, template lifecycle work, and backup rehearsal planning.
3. Use the reference pages for dense operational lookups during maintenance windows.
4. Use the tutorials when you want a conservative first-build runbook that stays management-plane aware.

## What To Read First
- [🧠 CloudStack Architecture and Operating Model](./concepts/cloudstack-overview.md)
- [🌐 Network Design for CloudStack](./concepts/network-design.md)
- [📋 CloudStack Operations Checklist](./reference/operations-checklist.md)

## Section Map
### Concepts
- [🧠 CloudStack Architecture and Operating Model](./concepts/cloudstack-overview.md)
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
