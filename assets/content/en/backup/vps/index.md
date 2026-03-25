# 💾 VPS Backup

## Overview
This module covers Linux VPS backup as host and service recovery: files, `/etc`, package inventory, service notes, retention, offsite copies, and test restores onto a clean replacement host. The emphasis is restore-first planning, not just producing archives.

## Who This Section Is For
- Operators responsible for a single Linux VPS or a small group of VPS workloads.
- Admins who need to recover configuration, data, and service state onto a fresh host.
- Teams that want local plus offsite copies with practical verification from the shell.

## Prerequisites
- Root or sudo access to the VPS.
- Backup storage separate from the VPS root disk.
- A clean target VPS or a rehearsal plan for restore drills.

## Learning Path
1. Read [Backup Strategy for a Linux VPS](./concepts/backup-strategy.md) to define scope before writing commands.
2. Read [Restore-First Thinking](./concepts/restore-first-thinking.md) before deciding retention or schedule.
3. Build a manual backup with [Create a VPS Backup](./how-to/create-backup.md).
4. Verify that backup with [Verify Backups](./how-to/verify-backups.md) before any pruning or offsite automation.
5. Use the tutorial sequence to rehearse preparation, archive creation, offsite upload, rebuild, and validation.

## What To Read First
- [🧠 Backup Strategy for a Linux VPS](./concepts/backup-strategy.md)
- [🛠️ Create a VPS Backup](./how-to/create-backup.md)
- [🧭 Tutorial 01: Introduction](./tutorials/01-introduction.md)

## Section Map
### Concepts
- [🧠 Backup Strategy for a Linux VPS](./concepts/backup-strategy.md)
- [🧠 Restore-First Thinking](./concepts/restore-first-thinking.md)
- [🧠 Retention Strategy](./concepts/retention-strategy.md)

### How-To
- [🛠️ Create a VPS Backup](./how-to/create-backup.md)
- [🛠️ Restore from Backup](./how-to/restore-from-backup.md)
- [🛠️ Schedule Backups](./how-to/schedule-backups.md)
- [🛠️ Verify Backups](./how-to/verify-backups.md)

### Reference
- [📚 Backup Layout](./reference/backup-layout.md)
- [📚 Restore Checklist](./reference/restore-checklist.md)
- [📚 Retention Policy](./reference/retention-policy.md)

### Tutorials
- [🧭 Tutorial 01: Introduction](./tutorials/01-introduction.md)
- [🧰 Tutorial 02: Prepare Tools](./tutorials/02-prepare-tools.md)
- [📦 Tutorial 03: Create a Full Backup](./tutorials/03-create-full-backup.md)
- [☁️ Tutorial 04: Upload Offsite](./tutorials/04-upload-offsite.md)
- [↩️ Tutorial 05: Restore on a New VPS](./tutorials/05-restore-on-new-vps.md)
- [✅ Tutorial 06: Verify Restore](./tutorials/06-verify-restore.md)

## Related Sections
- [🖥️ Server](../../server/index.md)
- [🛡️ Security](../../security/index.md)
- [💾 Backup](../index.md)

Next: translate to id
