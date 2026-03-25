# 🪟 Dual Boot

## Objective
Plan and execute a safer Ubuntu Lite dual-boot installation without treating the other operating system as an afterthought.

## Use Case
Use this when the target machine must keep another installed OS, typically Windows, and you want Ubuntu alongside it instead of replacing it completely.

## Prerequisites
- A full backup of the existing OS and user data.
- Enough free disk space for Ubuntu and future growth.
- Time to suspend or resolve BitLocker, Intel RST, vendor fast-boot features, and hibernation-related risks.

## ⚠️ Risk Notes
- Dual boot is always riskier than a clean single-OS install because storage, firmware, and boot-loader assumptions are shared.
- Never shrink partitions or touch the ESP without confirmed backups.

## Environment Assumptions
- You intend to keep both operating systems bootable.
- You can still boot the original OS right now before making changes.

## Step-by-Step Procedure
### 1. Capture the current disk and boot state before changing anything
Record disk layout, boot mode, and filesystem types so you can tell later whether Ubuntu changed the plan unexpectedly.

```bash
lsblk -f
sudo parted -l
if [ -d /sys/firmware/efi ]; then echo UEFI; else echo BIOS; fi
```

### 2. Resolve blocking vendor or Windows-side conditions first
BitLocker, Intel RST/VMD, fast startup, and hibernation are not optional details. Resolve them before you partition or shrink disks.

### 3. Install Ubuntu into free space with deliberate partition choices
Prefer leaving the existing OS partitions untouched beyond the shrink operation you planned. Reuse the correct EFI partition on UEFI systems instead of creating random additional EFI partitions.

### 4. Rebuild and inspect the boot menu after installation
Ubuntu should detect the other OS cleanly. Validate the boot menu before you continue with workstation package layering.

```bash
sudo os-prober || true
sudo update-grub
grep menuentry /boot/grub/grub.cfg | sed -n '1,20p'
```

## ✅ Validation Checkpoints
- Both operating systems boot successfully after installation.
- The GRUB menu includes the expected entries, or you know exactly why it does not.
- Ubuntu has enough free space for later package and log growth.

## Troubleshooting Notes
- If the other OS disappears from GRUB, inspect the disk and boot partitions before editing random GRUB settings.
- If Windows filesystems mount dirty or read-only, verify fast startup and hibernation are disabled on the Windows side.

## ↩️ Rollback / Recovery Notes
- If dual boot becomes unstable, prefer restoring the original OS from backup or reinstalling Ubuntu with a simpler disk plan over repeated blind boot-loader edits.
- Keep the installer USB until both systems survive multiple cold boots.

## Related Docs
- [🔐 Fix BitLocker Issues](./fix-bitlocker.md)
- [🧩 Fix Intel RST Issues](./fix-intel-rst.md)
- [🛠️ Reinstall GRUB](./reinstall-grub.md)

Next: translate to id
