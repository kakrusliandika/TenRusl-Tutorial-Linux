# 🖥️ Install on BIOS / Legacy

## Objective
Install Ubuntu Lite on hardware that uses legacy BIOS booting or on machines where legacy boot is intentionally retained.

## Use Case
Use this only when the hardware is actually legacy-only, an existing deployment requires it, or vendor limitations make UEFI impractical. On most newer systems, UEFI is still the safer default.

## Prerequisites
- A verified installer USB.
- A backup of target data and clarity on whether the disk will use MBR.
- Confidence that legacy boot is required for this machine or environment.

## ⚠️ Risk Notes
- Mixing installer boot mode and target boot mode causes confusing GRUB failures.
- Legacy BIOS on GPT disks can work with a BIOS boot partition, but only if you design it deliberately.

## Environment Assumptions
- The installer session itself is booted in legacy mode.
- You have accepted the limitations of MBR or planned a BIOS-compatible GPT layout.

## Step-by-Step Procedure
### 1. Confirm you are not accidentally in UEFI mode
You need to know the installer mode before the first partitioning decision.

```bash
if [ -d /sys/firmware/efi ]; then echo 'Installer is UEFI, not legacy'; else echo 'Legacy boot confirmed'; fi
```

### 2. Inspect the disk label and partitioning constraints
If you are using an MBR disk, confirm the partition count and size limits fit the plan. If using GPT with BIOS boot, ensure the layout includes what GRUB requires.

```bash
lsblk -f
sudo parted -l
```

### 3. Install the base system with a simple, explicit layout
Legacy installs are easier to recover when the layout is conservative. Avoid extra partition complexity unless the machine role truly requires it.

### 4. Verify boot from the installed disk
After the first boot, confirm GRUB is installed where you expect and that the system no longer depends on the USB stick.

```bash
lsblk -f
findmnt /
sudo grub-install --version
grep -E '^GRUB_' /etc/default/grub
```

## ✅ Validation Checkpoints
- The machine boots successfully in legacy mode with the installer USB removed.
- The root filesystem and boot-loader location match the documented disk plan.
- The system survives at least one reboot before you continue with GUI and package layering.

## Troubleshooting Notes
- If the installer silently booted in UEFI mode, restart the process rather than trying to force a hybrid setup afterward.
- If the disk label is wrong for the desired boot mode, repartition deliberately; do not keep layering fixes on top of the mismatch.

## ↩️ Rollback / Recovery Notes
- If boot remains unstable, simplify the layout and reinstall rather than debugging multiple legacy/GPT edge cases at once.
- Keep a copy of the chosen disk layout and boot mode in your build notes.

## Related Docs
- [📋 Disk Layout Reference](../reference/disk-layout-reference.md)
- [🛠️ Reinstall GRUB](./reinstall-grub.md)
- [📋 Installer Options](../reference/installer-options.md)

Next: translate to id
