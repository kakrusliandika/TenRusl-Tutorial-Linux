# ☁️ Harvester

## Overview
Harvester is an HCI platform where virtualization, Kubernetes-style control-plane behavior, and Longhorn-backed storage all meet. That means guest operations only stay predictable when node health, storage classes, VM images, network attachments, and cluster recovery expectations are documented together instead of in separate silos.

## Who This Section Is For
- Operators building a hyperconverged VM platform on top of Harvester and its Kubernetes-oriented control plane.
- Admins who need repeatable VM provisioning, storage planning, and backup thinking in a cluster rather than on a single host.
- Learners who want to understand how virtualization changes once cluster health and HCI storage are part of the story.

## Prerequisites
- A lab cluster or non-production node set where networking, storage, and image workflows can be rehearsed safely.
- Basic Linux and `kubectl` familiarity, plus a working understanding of IP networking and block storage.
- Hardware that supports virtualization and enough spare storage for at least one test VM and one restore rehearsal.

```bash
egrep -c "(vmx|svm)" /proc/cpuinfo
lsblk -f
ip -br addr
kubectl get nodes -o wide
```

## Learning Path
1. Start with the Harvester overview plus the network and storage concepts so node roles, storage classes, and cluster boundaries are clear.
2. Use the how-to pages when you need to validate storage expansion, VM networking, image handling, or restore readiness.
3. Keep the reference pages nearby during node maintenance and incident review.
4. Use the tutorials when you want a first-pass operating model that stays conservative and cluster-aware.

## What To Read First
- [🧠 Harvester Architecture and Operating Model](./concepts/harvester-overview.md)
- [🌐 Network Design for Harvester Clusters](./concepts/network-design.md)
- [📋 Harvester Operations Checklist](./reference/operations-checklist.md)

## Section Map
### Concepts
- [🧠 Harvester Architecture and Operating Model](./concepts/harvester-overview.md)
- [🌐 Network Design](./concepts/network-design.md)
- [💽 Storage Design](./concepts/storage-design.md)

### How-To
- [💽 Add Storage Safely](./how-to/add-storage.md)
- [🌐 Configure Networking Without Guesswork](./how-to/configure-network.md)
- [📦 Manage VM Images and Templates](./how-to/manage-templates.md)
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
