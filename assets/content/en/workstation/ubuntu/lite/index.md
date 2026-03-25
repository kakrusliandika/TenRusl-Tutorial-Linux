# 💻 Ubuntu Lite

## Overview
Ubuntu Lite in this repository is a workstation method, not a separate Ubuntu SKU. The idea is to install a lean, observable base; confirm storage, networking, graphics, and boot behavior; and then add only the desktop layers you actually need. That makes package decisions explicit, rollback easier, and troubleshooting much cleaner on weak hardware, shared lab machines, or workstations where you value control more than convenience.

## Who This Section Is For
- Users who want a minimal-first Ubuntu workstation and do not mind adding packages in deliberate layers.
- Operators installing Linux on older or lower-spec hardware where every background service matters.
- Learners who want a clearer support boundary and a better chance of recovering from failed installs, driver problems, or boot regressions.

## Lite vs Standard Orientation
Lite is the right fit when you want to understand what the workstation actually needs before you add a full desktop stack. Standard is the better fit when you want a broader default experience sooner. Lite is slower to assemble, but it is easier to debug because browser, editor, dev tools, media stack, codecs, and optional extras are added in visible stages rather than bundled into one large decision.

## Prerequisites
- A verified Ubuntu Desktop ISO and a bootable USB workflow.
- A backup of any important data on the target machine and clear awareness of dual-boot consequences.
- Basic shell comfort so you can run validation commands after each stage.

## Learning Path
1. Read the Lite concepts first so you understand the support boundary and the minimal-first operating model.
2. Work through media creation, ISO verification, boot-mode planning, and dual-boot caveats before you write to disk.
3. Use the references during partitioning, package selection, and post-install validation.
4. Follow the tutorials in order so the workstation grows from a stable base instead of becoming a random package pile.

## What To Read First
- [🧠 What Ubuntu Lite Means Here](./concepts/what-is-lite.md)
- [✅ Verify the ISO](./how-to/verify-iso.md)
- [📋 Post-Install Checklist](./reference/post-install-checklist.md)
- [📚 00 Tutorial Index](./tutorials/00-index.md)

## Section Map
### Concepts
- [🧠 What Ubuntu Lite Means Here](./concepts/what-is-lite.md)
- [🧠 Minimal First](./concepts/minimal-first.md)
- [🧠 Lite vs Standard](./concepts/lite-vs-standard.md)
- [🧠 Support Boundary](./concepts/support-boundary.md)

### How-To
- [🛠️ Create a Bootable USB](./how-to/create-bootable-usb.md)
- [✅ Verify the ISO](./how-to/verify-iso.md)
- [🖥️ Install on UEFI](./how-to/install-on-uefi.md)
- [🖥️ Install on BIOS / Legacy](./how-to/install-on-bios-legacy.md)
- [🪟 Dual Boot](./how-to/dual-boot.md)
- [🔐 Fix BitLocker Issues](./how-to/fix-bitlocker.md)
- [🧩 Fix Intel RST Issues](./how-to/fix-intel-rst.md)
- [🧩 Enable Third-Party Drivers](./how-to/enable-third-party-drivers.md)
- [🎵 Install Codecs](./how-to/install-codecs.md)
- [🛠️ Reinstall GRUB](./how-to/reinstall-grub.md)
- [🚑 Recover After a Failed Boot](./how-to/recover-after-failed-boot.md)
- [↩️ Rollback Plan](./how-to/rollback-plan.md)

### Reference
- [📋 Application Matrix](./reference/application-matrix.md)
- [📋 Disk Layout Reference](./reference/disk-layout-reference.md)
- [📋 Glossary](./reference/glossary.md)
- [📋 Hardware Requirements](./reference/hardware-requirements.md)
- [📋 Installer Options](./reference/installer-options.md)
- [📋 Network Checklist](./reference/network-checklist.md)
- [📋 Package Baseline](./reference/package-baseline.md)
- [📋 Package Optional](./reference/package-optional.md)
- [📋 Post-Install Checklist](./reference/post-install-checklist.md)
- [📋 Troubleshooting Index](./reference/troubleshooting-index.md)

### Tutorials
- [📚 00 Tutorial Index](./tutorials/00-index.md)
- [📘 01 Introduction](./tutorials/01-introduction.md)
- [📋 02 Install Preflight](./tutorials/02-install-preflight.md)
- [🖥️ 03 Install Core](./tutorials/03-install-core.md)
- [🖼️ 04 Install GUI](./tutorials/04-install-gui.md)
- [🌐 05 Install Browser](./tutorials/05-install-browser.md)
- [📝 06 Install Editor](./tutorials/06-install-editor.md)
- [🧪 07 Install Dev](./tutorials/07-install-dev.md)
- [🎵 08 Install Media](./tutorials/08-install-media.md)
- [🧹 09 Cleanup](./tutorials/09-cleanup.md)
- [📘 10 Closeout](./tutorials/10-closeout.md)

## Related Sections
- [💻 Workstation](../../index.md)
- [💻 Ubuntu Standard](../standard/index.md)
- [🛡️ Security](../../../security/index.md)
- [💾 Backup](../../../backup/index.md)

Next: translate to id
