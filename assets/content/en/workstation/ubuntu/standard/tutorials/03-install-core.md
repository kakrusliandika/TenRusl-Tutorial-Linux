# 🖥️ 03 Install Core

## Objective
Install the Standard desktop base and confirm the machine lands on a stable, fuller Ubuntu desktop before adding more user tools.

## Prerequisites
- Preflight is complete and backups are current.
- The machine has the resources to carry a fuller desktop profile.

## Environment Assumptions
- The target outcome is a broader desktop landing zone, but not a careless one.

## Sequential Steps
### 1. Install Ubuntu in the correct boot mode
Validate the live session, inspect storage, and then run the installer with the Standard-appropriate package path for your release.

```bash
if [ -d /sys/firmware/efi ]; then echo 'UEFI installer'; else echo 'Legacy installer'; fi
lsblk -f
```

### 2. Prefer the fuller desktop path that matches Standard
Installer wording changes by release. Focus on the outcome: broader desktop defaults, correct disk target, and safe boot-loader placement.

### 3. Validate first boot as a desktop, not just as a kernel
Standard acceptance includes login, network, graphics, and enough desktop stability to move into defaults and apps.

```bash
lsblk -f
findmnt /
systemd-analyze
systemctl --failed
```

## ✅ Validation Checkpoints
- The workstation boots without USB and reaches the desktop successfully.
- Network, graphics, and storage look sane before you add more application layers.

## ⚠️ Warnings
- If the fuller desktop is already unstable, stop now instead of stacking more apps on top of it.

## Cleanup / Post-Check
- Keep the installer media until the machine survives updates, reboots, and the app-install chapters.

## Next Tutorial
[🧭 04 Default Apps](./04-default-apps.md)

## Related Docs
- [📋 Hardware Requirements](../reference/hardware-requirements.md)
- [🎵 Enable Codecs](../how-to/enable-codecs.md)
- [💻 Ubuntu Lite UEFI Guide](../../lite/how-to/install-on-uefi.md)

Next: translate to id
