# 💻 Workstation

## Overview
The workstation section is the Linux desktop learning path for this repository. It focuses on Ubuntu-based desktop planning, installation, package layering, media setup, driver handling, rollback thinking, and real recovery work so a learner can build a daily machine without treating the installer as magic. English is the source-of-truth in this subtree, and the Ubuntu track is intentionally split into Lite and Standard so the reader can pick the right operational model before touching disk.

## Who This Section Is For
- Laptop and desktop users installing Ubuntu for the first time and wanting a safer process than “click next until it boots.”
- Developers, support staff, and home lab users who need a reliable Linux desktop with clear validation and rollback steps.
- Users deciding between a minimal-first workstation and a fuller default desktop experience.

## Lite vs Standard Orientation
Lite and Standard are both Ubuntu workstation tracks, but they solve different problems. Lite is the controlled path: smaller package baseline, more deliberate layering, clearer failure domains, and more recovery emphasis. Standard is the broader path: fuller desktop defaults, faster productivity, and less manual assembly on day one. Both tracks still require ISO verification, firmware awareness, storage planning, and post-install validation.

## Prerequisites
- A machine or VM you can safely install or reinstall.
- A verified Ubuntu ISO, a bootable USB workflow, and a current backup of any existing data.
- Basic comfort with BIOS/UEFI menus, partitioning concepts, and Linux shell commands.

## Learning Path
1. Open [🧪 Ubuntu Workstations](./ubuntu/index.md) to decide whether Lite or Standard better matches the machine, workflow, and recovery tolerance.
2. Use [💻 Ubuntu Lite](./ubuntu/lite/index.md) if you want a lean base, explicit package control, older-hardware discipline, or stronger troubleshooting boundaries.
3. Use [💻 Ubuntu Standard](./ubuntu/standard/index.md) if you want a fuller daily-driver profile with broader defaults and faster application readiness.
4. After the workstation is stable, continue into [🛡️ Security](../security/index.md) and [💾 Backup](../backup/index.md) so the desktop is recoverable and hardened, not just installed.

## What To Read First
- [🧪 Ubuntu Workstations](./ubuntu/index.md) for the track overview and decision point.
- [✅ Verify the ISO](./ubuntu/lite/how-to/verify-iso.md) before you create installer media.
- [📋 02 Install Preflight](./ubuntu/lite/tutorials/02-install-preflight.md) if you want a checklist-driven first run.

## Section Map
### Ubuntu Workstation Overview
- [🧪 Ubuntu Workstations](./ubuntu/index.md)
- [💻 Ubuntu Lite](./ubuntu/lite/index.md)
- [💻 Ubuntu Standard](./ubuntu/standard/index.md)

### Recommended Starting Points
- Minimal-first, lean hardware, or maximum package control: [💻 Ubuntu Lite](./ubuntu/lite/index.md)
- Faster landing on a fuller daily driver: [💻 Ubuntu Standard](./ubuntu/standard/index.md)

### Recovery-Heavy Reading
- [✅ Verify the ISO](./ubuntu/lite/how-to/verify-iso.md)
- [🛠️ Create a Bootable USB](./ubuntu/lite/how-to/create-bootable-usb.md)
- [🔐 Fix BitLocker Issues](./ubuntu/lite/how-to/fix-bitlocker.md)
- [🧩 Fix Intel RST Issues](./ubuntu/lite/how-to/fix-intel-rst.md)
- [🚑 Recover After a Failed Boot](./ubuntu/lite/how-to/recover-after-failed-boot.md)

## Related Sections
- [☁️ Virtualization](../virtualization/index.md)
- [🖥️ Server](../server/index.md)
- [🛡️ Security](../security/index.md)
- [💾 Backup](../backup/index.md)

Next: translate to id
