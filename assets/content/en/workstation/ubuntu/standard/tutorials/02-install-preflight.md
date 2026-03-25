# 📋 02 Install Preflight

## Objective
Complete the same critical pre-install checks required by Lite, but with Standard’s fuller desktop expectations in mind.

## Prerequisites
- A downloaded Ubuntu ISO and a writable USB if installing on real hardware.
- Backups of any data already on the target machine.

## Environment Assumptions
- You still need to verify ISO, USB, boot mode, dual-boot risk, BitLocker, and Intel RST before installation.

## Sequential Steps
### 1. Verify the ISO and create the installer media
Even on Standard, media integrity comes before convenience.

```bash
sha256sum <ubuntu-iso>.iso
grep '<ubuntu-iso>.iso' SHA256SUMS
lsblk -d -o NAME,SIZE,MODEL,TRAN
```

### 2. Confirm boot mode and storage readiness
Know whether the system will use UEFI or legacy BIOS and whether dual-boot blockers exist.

```bash
if [ -d /sys/firmware/efi ]; then echo UEFI; else echo BIOS; fi
lsblk -f
```

### 3. Read the Lite recovery pages if the machine is not simple
BitLocker, Intel RST, and dual-boot complexity do not disappear just because Standard is the chosen track.

## ✅ Validation Checkpoints
- The installer media is trustworthy and the machine’s boot and storage context is understood.
- You know whether you can proceed safely or must first resolve vendor or dual-boot blockers.

## ⚠️ Warnings
- Do not treat Standard as a shortcut around pre-install risk management.

## Cleanup / Post-Check
- Keep the USB and preflight notes until after Standard tutorial 10.

## Next Tutorial
[🖥️ 03 Install Core](./03-install-core.md)

## Related Docs
- [✅ Verify the ISO](../../lite/how-to/verify-iso.md)
- [🛠️ Create a Bootable USB](../../lite/how-to/create-bootable-usb.md)
- [🔐 Fix BitLocker Issues](../../lite/how-to/fix-bitlocker.md)

Next: translate to id
