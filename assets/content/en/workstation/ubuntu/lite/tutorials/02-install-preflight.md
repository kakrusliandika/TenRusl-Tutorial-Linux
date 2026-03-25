# 📋 02 Install Preflight

## Objective
Finish all pre-install checks so the actual Ubuntu Lite install is boring, predictable, and recoverable.

## Prerequisites
- The target ISO has been downloaded.
- A USB drive is available if you are installing on bare metal.
- Backups exist for any existing data on the target machine.

## Environment Assumptions
- This chapter is where you resolve ISO integrity, USB media, boot mode, dual-boot blockers, and storage surprises.

## Sequential Steps
### 1. Verify the ISO checksum
Do not create installer media from an unverified image.

```bash
sha256sum <ubuntu-iso>.iso
grep '<ubuntu-iso>.iso' SHA256SUMS
```

### 2. Create the bootable USB and record the device used
Confirm the USB path twice before writing.

```bash
lsblk -d -o NAME,SIZE,MODEL,TRAN
sudo dd if=<ubuntu-iso>.iso of=/dev/sdX bs=4M status=progress oflag=sync
sync
```

### 3. Check boot mode and dual-boot blockers
For machines with existing operating systems, resolve BitLocker, Intel RST, vendor fast startup, and hibernation questions now.

```bash
if [ -d /sys/firmware/efi ]; then echo UEFI; else echo BIOS; fi
lsblk -f
```

## ✅ Validation Checkpoints
- The ISO is verified, the USB exists, and the target machine boot mode is known.
- You know whether dual boot is safe enough to attempt.
- You have not yet changed partitions without a backup.

## ⚠️ Warnings
- Skipping preflight is the fastest way to waste the next several hours.
- Do not continue if BitLocker or Intel RST status is unclear.

## Cleanup / Post-Check
- Retain the verified checksum notes and the USB identifier in your build log.

## Next Tutorial
[🖥️ 03 Install Core](./03-install-core.md)

## Related Docs
- [✅ Verify the ISO](../how-to/verify-iso.md)
- [🛠️ Create a Bootable USB](../how-to/create-bootable-usb.md)
- [🪟 Dual Boot](../how-to/dual-boot.md)

Next: translate to id
