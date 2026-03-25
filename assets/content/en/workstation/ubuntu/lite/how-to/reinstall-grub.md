# 🛠️ Reinstall GRUB

## Objective
Repair Ubuntu boot loader installation from a live environment when the installed system no longer boots cleanly on its own.

## Use Case
Use this when GRUB is missing, points to the wrong disk, fails after a partitioning change, or no longer presents the expected operating systems.

## Prerequisites
- A live Ubuntu USB that can boot on the target machine.
- Knowledge of the installed root partition and, on UEFI systems, the EFI System Partition.
- Enough familiarity to mount partitions carefully before you chroot.

## ⚠️ Risk Notes
- Running `grub-install` against the wrong disk or ESP can make the boot problem worse.
- Do not guess partition names; inspect them first.

## Environment Assumptions
- You are repairing an existing install, not building the workstation for the first time.
- You can boot the live environment in the same hardware mode as the installed OS where possible.

## Step-by-Step Procedure
### 1. Identify the installed partitions
From the live session, determine the root filesystem and any EFI System Partition before mounting anything.

```bash
lsblk -f
sudo parted -l
```

### 2. Mount the installed system and prepare the chroot
Replace the example device names with the real partitions from your machine.

```bash
sudo mount /dev/nvme0n1p2 /mnt
sudo mount /dev/nvme0n1p1 /mnt/boot/efi 2>/dev/null || true
for d in /dev /dev/pts /proc /sys /run; do sudo mount --bind "$d" "/mnt$d"; done
sudo chroot /mnt
```

### 3. Reinstall GRUB and rebuild the menu
Use the correct command for the system boot mode. On UEFI, GRUB writes EFI files. On legacy BIOS, it writes to the target disk MBR or BIOS boot path.

```bash
# Inside chroot for UEFI systems
update-grub
grub-install

# Example for legacy BIOS systems if the target disk is /dev/nvme0n1
# grub-install /dev/nvme0n1
```

### 4. Exit cleanly and test reboot behavior
Unmount the bind mounts and reboot only after the GRUB reinstall completed without errors.

```bash
exit
for d in /run /sys /proc /dev/pts /dev; do sudo umount "/mnt$d"; done
sudo umount /mnt/boot/efi 2>/dev/null || true
sudo umount /mnt
sudo reboot
```

## ✅ Validation Checkpoints
- The system boots without depending on the live USB.
- GRUB sees the installed Ubuntu system and any expected secondary OS entries.
- The repair procedure is recorded in your notes for future recovery work.

## Troubleshooting Notes
- If `grub-install` fails, re-check whether you mounted the correct root and EFI partitions.
- If `update-grub` finds no other OS entries, inspect those partitions before editing configuration files by hand.

## ↩️ Rollback / Recovery Notes
- If boot remains broken after a careful repair, do not keep improvising. Reassess the disk layout and reinstall if that is cheaper than compounding uncertainty.
- Keep the live USB until the workstation survives multiple cold boots.

## Related Docs
- [🚑 Recover After a Failed Boot](./recover-after-failed-boot.md)
- [🖥️ Install on UEFI](./install-on-uefi.md)
- [🖥️ Install on BIOS / Legacy](./install-on-bios-legacy.md)

Next: translate to id
