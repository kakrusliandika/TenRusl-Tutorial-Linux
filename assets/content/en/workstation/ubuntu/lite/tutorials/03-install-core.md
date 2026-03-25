# 🖥️ 03 Install Core

## Objective
Install the Lite base operating system and confirm the machine boots cleanly before any desktop-heavy package layering begins.

## Prerequisites
- Preflight checks are complete.
- You know whether the machine will use UEFI or legacy BIOS.
- You have a disk layout plan.

## Environment Assumptions
- This chapter ends only when the installed system boots without USB and the base OS is trustworthy.

## Sequential Steps
### 1. Boot the installer in the correct mode and verify disks
From the live session, confirm the boot mode and inspect storage one more time before installation.

```bash
if [ -d /sys/firmware/efi ]; then echo 'UEFI installer'; else echo 'Legacy installer'; fi
lsblk -f
sudo parted -l
```

### 2. Run the installer with the leanest path that still matches Lite
Choose the smallest practical package set, keep partitioning conservative, and avoid extra options you do not yet need. The exact installer labels vary by Ubuntu release, so focus on outcomes rather than memorizing UI text.

### 3. Boot the installed system and perform base validation
Do not continue to GUI expansion until the base system survives a reboot and reports the expected filesystems and boot mode.

```bash
lsblk -f
findmnt /
if [ -d /sys/firmware/efi ]; then echo 'Installed OS is UEFI'; else echo 'Installed OS is legacy'; fi
systemd-analyze
```

## ✅ Validation Checkpoints
- The machine boots without the installer USB present.
- The root filesystem and boot mode match the planned layout.
- No obvious package or service failures appear on first boot.

## ⚠️ Warnings
- If the system does not boot reliably now, stop and fix that before you install a GUI or browser.
- Do not confuse a successful installer finish screen with a successful workstation base.

## Cleanup / Post-Check
- Keep the live USB and install notes nearby; this is still early enough that reinstall may be cheaper than layered repair if the base is wrong.

## Next Tutorial
[🖼️ 04 Install GUI](./04-install-gui.md)

## Related Docs
- [🖥️ Install on UEFI](../how-to/install-on-uefi.md)
- [🖥️ Install on BIOS / Legacy](../how-to/install-on-bios-legacy.md)
- [📋 Post-Install Checklist](../reference/post-install-checklist.md)

Next: translate to id
