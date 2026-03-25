# 🧪 Ubuntu Workstations

## Overview
This Ubuntu section is the decision point for the workstation subtree. It does not pretend one installation path fits every machine. Instead, it separates a minimal-first Lite track from a fuller Standard track so hardware age, storage limits, boot-risk tolerance, and package-control needs are handled deliberately. Both tracks assume you verify media first, think about BIOS vs UEFI before partitioning, and keep a recovery path ready before you overwrite a disk.

## Who This Section Is For
- Users installing Ubuntu on personal laptops, desktops, or lab workstations.
- Operators who need a Linux desktop that can be rebuilt and debugged without guessing which package changed the system behavior.
- Learners choosing between a lean custom workstation and a broader out-of-box desktop experience.

## Lite vs Standard Orientation
Pick Lite when you want tighter package control, less background software, and clearer fault isolation. Pick Standard when the machine has enough RAM and storage for a fuller desktop and you want browser, office, media, and dev workflows to land faster. If the machine involves dual boot, BitLocker, Intel RST/VMD, or uncertain firmware behavior, read the Lite recovery-oriented how-to pages even if you ultimately choose Standard.

## Prerequisites
- A recent Ubuntu Desktop ISO and a way to verify it.
- A USB flash drive you can safely erase if you are doing a bare-metal install.
- A current backup and a clear understanding of whether the machine boots in BIOS/legacy mode or UEFI mode.

## Learning Path
1. Read the Lite and Standard orientation pages before you choose an installer flow.
2. Validate ISO, boot mode, storage mode, and vendor disk-protection features before you partition or shrink anything.
3. Finish the selected tutorial sequence from start to closeout, not just the installation chapter.
4. After the workstation is usable, continue into Security and Backup so recovery remains possible after updates and package changes.

## What To Read First
- [💻 Ubuntu Lite](./lite/index.md) for controlled layering and stronger recovery discipline.
- [💻 Ubuntu Standard](./standard/index.md) for a fuller daily-driver baseline.
- [🧠 Lite vs Standard](./lite/concepts/lite-vs-standard.md) if you are still undecided.

## Section Map
### Lite Track
- [💻 Ubuntu Lite](./lite/index.md)
- [🧠 What Ubuntu Lite Means Here](./lite/concepts/what-is-lite.md)
- [✅ Verify the ISO](./lite/how-to/verify-iso.md)
- [📚 00 Tutorial Index](./lite/tutorials/00-index.md)

### Standard Track
- [💻 Ubuntu Standard](./standard/index.md)
- [🧠 Standard Overview](./standard/concepts/standard-overview.md)
- [🎵 Enable Codecs](./standard/how-to/enable-codecs.md)
- [📘 01 Introduction](./standard/tutorials/01-introduction.md)

### Shared Decision Topics
- [🧠 Lite vs Standard](./lite/concepts/lite-vs-standard.md)
- [🧠 Standard vs Lite](./standard/concepts/standard-vs-lite.md)
- [🔐 Fix BitLocker Issues](./lite/how-to/fix-bitlocker.md)
- [🧩 Fix Intel RST Issues](./lite/how-to/fix-intel-rst.md)

## Related Sections
- [☁️ Virtualization](../../virtualization/index.md)
- [🖥️ Server](../../server/index.md)
- [🛡️ Security](../../security/index.md)
- [💾 Backup](../../backup/index.md)

Next: translate to id
