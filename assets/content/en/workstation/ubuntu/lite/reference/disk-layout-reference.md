# 📋 Disk Layout Reference

## Purpose
Use this reference to choose a safer disk layout for Ubuntu Lite installations and recoveries.

## Structured Reference Material
| Scenario | Recommended layout | Notes |
|---|---|---|
| Single-disk, UEFI, Ubuntu only | ESP + root + swapfile | Simplest default for most modern systems |
| Single-disk, UEFI, dual boot | Existing ESP + root + optional separate home + swapfile | Reuse the correct ESP; do not create random extra EFI partitions |
| Older BIOS system | MBR with root + swapfile or conservative GPT plus BIOS boot design | Keep the layout simple for GRUB recovery |
| Small SSD laptop | root + swapfile | Fewer partitions make later recovery easier |
| Workstation with separate user-data concerns | root + separate `/home` + swapfile | Helps with rebuilds if planned deliberately |

## Commands / Inspection Snippets
```bash
lsblk -f
findmnt /
sudo parted -l
```

## Practical Notes
- Swapfiles are usually simpler than dedicated swap partitions unless you have a clear reason to do otherwise.
- A separate `/home` can help with rebuilds, but only if you also understand permissions, backups, and reinstall workflow.
- Dual-boot layouts should optimize for recovery clarity, not theoretical elegance.

## Related Docs
- [🖥️ Install on UEFI](../how-to/install-on-uefi.md)
- [🖥️ Install on BIOS / Legacy](../how-to/install-on-bios-legacy.md)
- [🪟 Dual Boot](../how-to/dual-boot.md)

Next: translate to id
