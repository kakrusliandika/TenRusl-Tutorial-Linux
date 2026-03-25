# 🛠️ Create a Bootable USB

## Objective
Create Ubuntu installer media from Linux in a way that is deliberate, verifiable, and safe for the target USB device.

## Use Case
Use this when you already have a verified Ubuntu ISO and need installation media for a laptop, desktop, or recovery session.

## Prerequisites
- A verified Ubuntu ISO file.
- A USB flash drive you can completely erase.
- Shell access on a Linux machine with `lsblk`, `umount`, and `dd` available.

## ⚠️ Risk Notes
- Writing to the wrong block device will destroy data immediately.
- Some desktop auto-mounters remount the USB after insertion; unmount again before writing.

## Environment Assumptions
- You are creating media from Linux, not from Windows or macOS.
- You know the USB device path before running `dd`.

## Step-by-Step Procedure
### 1. Identify the correct USB device
Plug in the USB drive, list block devices, and confirm the model and size twice before you write anything.

```bash
lsblk -d -o NAME,SIZE,MODEL,TRAN
sudo fdisk -l | sed -n '1,120p'
```

### 2. Unmount any mounted partitions on the USB drive
If the desktop auto-mounted the USB, unmount every partition first. Replace `sdX` with the real device name you confirmed in the previous step.

```bash
sudo umount /dev/sdX?* 2>/dev/null || true
lsblk -o NAME,MOUNTPOINT /dev/sdX
```

### 3. Write the ISO to the raw device
Use `dd` only after you are certain the target device is correct. A block size of 4 MiB with sync flags is a practical default.

```bash
sudo dd if=<ubuntu-iso>.iso of=/dev/sdX bs=4M status=progress oflag=sync
sync
```

### 4. Power off and reinsert the USB for a quick read-back check
Safely remove the drive, reinsert it, and confirm the system now sees installer-style partitions.

```bash
sudo udisksctl power-off -b /dev/sdX
lsblk -f
```

## ✅ Validation Checkpoints
- The USB device is detected after reinsertion and no longer shows the old filesystem layout.
- The machine firmware can see the USB as a boot option.
- You can still identify the USB device cleanly with `lsblk -f`.

## Troubleshooting Notes
- If `dd` reports “target is busy,” check again for mounted partitions with `lsblk` and `mount`.
- If the USB does not boot, recreate it after re-verifying the ISO checksum.
- If the target machine is UEFI-only, test the USB on a known-good UEFI system before suspecting the laptop firmware.

## ↩️ Rollback / Recovery Notes
- If you wrote to the wrong device, stop immediately and recover from backups; there is no safe undo for overwriting a disk image.
- If the USB media behaves oddly, rewrite it after wiping signatures with `sudo wipefs -a /dev/sdX` only when you are certain the device is the USB drive.

## Related Docs
- [✅ Verify the ISO](./verify-iso.md)
- [🖥️ Install on UEFI](./install-on-uefi.md)
- [📋 02 Install Preflight](../tutorials/02-install-preflight.md)

Next: translate to id
