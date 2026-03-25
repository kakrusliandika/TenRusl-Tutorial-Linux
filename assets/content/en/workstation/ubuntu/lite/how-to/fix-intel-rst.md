# 🧩 Fix Intel RST Issues

## Objective
Identify Intel RST, RAID, or VMD-related storage blockers before Ubuntu installation and handle them conservatively.

## Use Case
Use this when the installer cannot see the internal disk, the BIOS mentions RAID/RST/VMD modes, or the machine is a recent laptop with vendor storage abstraction enabled.

## Prerequisites
- Access to firmware settings and, if applicable, Windows vendor documentation.
- A current backup of the target machine.
- Patience to stop and verify storage mode rather than forcing an install around it.

## ⚠️ Risk Notes
- Switching storage mode carelessly can break the existing Windows installation.
- Vendor firmware terminology varies; do not rely on a single UI label copied from a random blog post.

## Environment Assumptions
- You suspect the machine uses Intel RST, RAID mode, or VMD on the internal storage path.
- You want a supported, predictable Linux install rather than a fragile workaround.

## Step-by-Step Procedure
### 1. Inspect how Linux sees the storage controller
Boot the live session and look for RAID, VMD, or controller drivers that explain why disks are hidden or exposed differently than expected.

```bash
lspci -nnk | grep -A4 -Ei 'RAID|SATA|VMD|NVMe'
lsblk -f
sudo dmesg -T | grep -Ei 'vmd|raid|rst|nvme' | tail -n 20
```

### 2. Confirm the firmware storage mode before changing it
Do not switch firmware from RST, RAID, or VMD to AHCI blindly. Validate the OEM guidance and understand the consequences for the existing OS first.

### 3. Make the storage-mode decision deliberately
If the machine must change from RST, RAID, or VMD to AHCI for Ubuntu, do that only after you have a documented path for the other installed OS and a known-good backup.

### 4. Reboot the live session and confirm Linux now sees the disks normally
After any storage-mode change, return to the live session and confirm the expected block devices are present before you launch the installer.

```bash
lsblk -f
sudo parted -l
```

## ✅ Validation Checkpoints
- The target disk is visible to the Ubuntu live environment.
- You can describe the current storage mode and why it is acceptable for the install.
- You have not hidden the existing OS from yourself by changing firmware without a recovery plan.

## Troubleshooting Notes
- If disks still do not appear, review firmware mode again before changing partition tables or suspecting the installer.
- If Windows was previously installed in RST mode, treat any AHCI conversion as a recovery-sensitive change, not a casual toggle.

## ↩️ Rollback / Recovery Notes
- If the machine becomes unstable after a storage-mode change, revert to the previous mode and restore the original OS path before trying again.
- Keep written notes of the firmware mode so the machine can be supported later without guesswork.

## Related Docs
- [🪟 Dual Boot](./dual-boot.md)
- [🔐 Fix BitLocker Issues](./fix-bitlocker.md)
- [📋 Disk Layout Reference](../reference/disk-layout-reference.md)

Next: translate to id
