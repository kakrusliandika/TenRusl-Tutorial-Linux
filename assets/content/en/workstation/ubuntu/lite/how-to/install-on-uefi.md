# 🖥️ Install on UEFI

## Objective
Install Ubuntu Lite on a machine that boots in UEFI mode while keeping partitioning, EFI System Partition handling, and post-install verification explicit.

## Use Case
Use this on most modern laptops and desktops. UEFI should be the expected path unless the hardware or existing disk layout clearly depends on legacy BIOS.

## Prerequisites
- A verified installer USB.
- A backup of all important data on the target system.
- A basic partitioning plan, especially if the machine already dual-boots another OS.

## ⚠️ Risk Notes
- Deleting or reusing the wrong EFI System Partition can break existing operating systems.
- Secure Boot and vendor firmware options can affect third-party driver behavior later.

## Environment Assumptions
- The machine firmware is configured to boot the installer in UEFI mode.
- You understand whether the disk will be wiped, shrunk, or manually partitioned.

## Step-by-Step Procedure
### 1. Confirm the installer session is actually in UEFI mode
Do this from the live session before you open the installer. If the session booted in legacy mode, stop and reboot the installer correctly.

```bash
if [ -d /sys/firmware/efi ]; then echo 'UEFI boot confirmed'; else echo 'Not UEFI'; fi
sudo efibootmgr -v
```

### 2. Inspect disks and identify the EFI System Partition
On dual-boot systems, you often already have an ESP. Reusing the correct ESP is safer than creating duplicate EFI partitions without a plan.

```bash
lsblk -f
sudo parted -l
sudo blkid | grep -Ei 'vfat|fat32'
```

### 3. Run the installer and choose the smallest install path that fits Lite
Installer screen labels change across Ubuntu releases, so focus on the outcome: lean package selection, correct target disk, correct mount points, and reuse of the right EFI partition if dual booting. If you need manual control, use manual partitioning rather than guessing what guided mode will do.

### 4. Verify the installed system after first boot
Confirm the machine still boots in UEFI mode, the root filesystem is where you expect it, and boot-loader files are present.

```bash
if [ -d /sys/firmware/efi ]; then echo 'Installed system is UEFI'; fi
lsblk -f
findmnt /
sudo efibootmgr -v
```

## ✅ Validation Checkpoints
- The installed system boots without the USB inserted.
- The machine reports UEFI mode from the installed OS, not just from the live session.
- The root filesystem, ESP, and any separate `/home` or swap choices match the intended design.

## Troubleshooting Notes
- If the system only boots with the USB present, inspect boot entries with `efibootmgr -v` and reinstall GRUB if necessary.
- If the wrong disk was chosen for boot files, stop layering packages and fix boot order first.
- If Windows disappeared from the boot menu, do not repartition immediately; inspect the existing ESP and GRUB configuration first.

## ↩️ Rollback / Recovery Notes
- If the new install is not trustworthy, boot the live USB again, mount the installed system, and either repair GRUB or reinstall cleanly before adding desktop packages.
- Keep the installer USB until the workstation survives multiple cold boots and suspend/resume tests.

## Related Docs
- [📋 Disk Layout Reference](../reference/disk-layout-reference.md)
- [🛠️ Reinstall GRUB](./reinstall-grub.md)
- [🖥️ 03 Install Core](../tutorials/03-install-core.md)

Next: translate to id
