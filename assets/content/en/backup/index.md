# 💾 Backup

## Overview
This section teaches Linux backup and recovery discipline with restore readiness as the primary goal. It separates VM, VPS, and web application recovery patterns so you can protect the right artifacts, store them in the right places, and rehearse the restore path before a failure forces improvisation.

## Who This Section Is For
- Linux operators who need repeatable backup routines instead of ad-hoc archives.
- Admins responsible for restore drills, offsite retention, and post-restore validation.
- Teams protecting hypervisor guests, single VPS hosts, or full web application stacks.

## Prerequisites
- Comfort with the shell, ownership and permissions, and basic service management.
- A backup target that is separate from the workload being protected.
- A test or rehearsal target where restore procedures can be verified safely.

## Learning Path
1. Start with [VPS Backup](./vps/index.md) if you want a host-level mental model for scope, retention, and restore order.
2. Read [VM Backup](./vm/index.md) next if your recovery path depends on hypervisor metadata, exported disks, or guest isolation during restore.
3. Read [Web Application Backup](./web/index.md) when files, databases, TLS material, and application validation all need to recover together.
4. Review [Security](../security/index.md) after the backup workflow exists so the backup data, credentials, and offsite copies are protected properly.

## What To Read First
- Single Linux host or service stack: [VPS Backup](./vps/index.md).
- Hypervisor-aware recovery and disk image export: [VM Backup](./vm/index.md).
- Web app files plus database and config recovery: [Web Application Backup](./web/index.md).

## Section Map
### VM Backup
- [💾 VM Backup](./vm/index.md) — hypervisor-aware guest exports, metadata capture, offsite copies, and restore drills.

### VPS Backup
- [💾 VPS Backup](./vps/index.md) — host-level file, config, package, and service recovery for Linux VPS workloads.

### Web Backup
- [💾 Web Application Backup](./web/index.md) — file archives, database dumps, secret handling, and application validation after restore.

## Related Sections
- [☁️ Virtualization](../virtualization/index.md)
- [💻 Workstation](../workstation/index.md)
- [🖥️ Server](../server/index.md)
- [🛡️ Security](../security/index.md)

Next: translate to id
