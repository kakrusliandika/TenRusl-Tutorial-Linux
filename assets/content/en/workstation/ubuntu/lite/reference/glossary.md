# 📋 Glossary

## Purpose
Use this glossary to keep workstation installation terms clear and stable across Lite how-to pages and tutorials.

## Structured Reference Material
| Term | Meaning |
|---|---|
| UEFI | Modern firmware boot mode that uses an EFI System Partition and firmware boot entries |
| BIOS / Legacy | Older boot model that typically relies on MBR or BIOS-targeted GRUB installation |
| ESP | EFI System Partition; FAT-formatted boot partition used by UEFI systems |
| Secure Boot | Firmware feature that restricts what signed boot components and modules can load |
| BitLocker | Windows disk-encryption feature that can complicate dual boot or partition changes |
| Intel RST / VMD | Firmware or controller mode that can hide disks from Linux installers until resolved |
| Minimal install | Installer choice that attempts to land a smaller desktop footprint |
| Metapackage | Package that mainly depends on a large group of other packages |
| initramfs | Early-boot image loaded before the root filesystem is fully mounted |
| chroot | Temporary root-environment change used during recovery and GRUB repair |

## Commands / Inspection Snippets
Use the related operational how-to pages when you need an exact runbook.

## Practical Notes
- The exact installer UI wording can vary by release, but these terms remain operationally useful.
- If a tutorial uses a term you cannot explain, pause and clear the term before you continue the build.

## Related Docs
- [📋 Installer Options](./installer-options.md)
- [🛠️ Reinstall GRUB](../how-to/reinstall-grub.md)
- [🧠 What Ubuntu Lite Means Here](../concepts/what-is-lite.md)

Next: translate to id
