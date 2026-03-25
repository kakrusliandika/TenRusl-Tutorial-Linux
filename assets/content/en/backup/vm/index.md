# 💾 VM Backup

## Overview
This module covers virtual machine backup as a full recovery workflow: capture guest definition, protect disk data, move copies off the primary failure domain, and prove that the restored guest can boot and serve its workload. The examples use libvirt and KVM for realistic shell commands, but the recovery logic also applies to other hypervisors.

## Who This Section Is For
- Operators backing up Linux guests on KVM, libvirt, or similar hypervisor platforms.
- Teams that need to distinguish short-term snapshots from durable backup artifacts.
- Admins who want restore validation on isolated networks before touching production.

## Prerequisites
- Shell or console access to the hypervisor host.
- Backup storage that is not the same datastore or host as the source VM.
- A lab target, isolated VLAN, or restore rehearsal environment.

## Learning Path
1. Read [Snapshots vs Backups](./concepts/snapshot-vs-backup.md) first so rollback points and backup generations are not conflated.
2. Read [Restore Planning](./concepts/restore-planning.md) before automating anything, because the restore target and metadata requirements drive the backup layout.
3. Use [Create a VM Backup](./how-to/create-vm-backup.md) to build a manual, checksummed backup set.
4. Use [Schedule VM Backups](./how-to/schedule-vm-backups.md) only after a manual run and a restore rehearsal both succeed.
5. Finish with the tutorial path to rehearse storage prep, export, offsite copy, restore, and validation in order.

## What To Read First
- [🧠 Snapshots vs Backups](./concepts/snapshot-vs-backup.md)
- [🛠️ Create a VM Backup](./how-to/create-vm-backup.md)
- [🧭 Tutorial 01: Introduction](./tutorials/01-introduction.md)

## Section Map
### Concepts
- [🧠 Snapshots vs Backups](./concepts/snapshot-vs-backup.md)
- [🧠 Restore Planning](./concepts/restore-planning.md)
- [🧠 Offsite Copy Strategy](./concepts/offsite-copy-strategy.md)

### How-To
- [🛠️ Create a VM Backup](./how-to/create-vm-backup.md)
- [🛠️ Restore a VM Backup](./how-to/restore-vm-backup.md)
- [🛠️ Schedule VM Backups](./how-to/schedule-vm-backups.md)
- [🛠️ Verify a VM Restore](./how-to/verify-vm-restore.md)

### Reference
- [📚 Backup Layout](./reference/backup-layout.md)
- [📚 Restore Checklist](./reference/restore-checklist.md)
- [📚 Retention Policy](./reference/retention-policy.md)

### Tutorials
- [🧭 Tutorial 01: Introduction](./tutorials/01-introduction.md)
- [💽 Tutorial 02: Prepare Storage](./tutorials/02-prepare-storage.md)
- [📦 Tutorial 03: Create Backup](./tutorials/03-create-backup.md)
- [☁️ Tutorial 04: Copy Offsite](./tutorials/04-copy-offsite.md)
- [↩️ Tutorial 05: Restore VM](./tutorials/05-restore-vm.md)
- [✅ Tutorial 06: Verify Restore](./tutorials/06-verify-restore.md)

## Related Sections
- [☁️ Virtualization](../../virtualization/index.md)
- [🖥️ Server](../../server/index.md)
- [🛡️ Security](../../security/index.md)

Next: translate to id
