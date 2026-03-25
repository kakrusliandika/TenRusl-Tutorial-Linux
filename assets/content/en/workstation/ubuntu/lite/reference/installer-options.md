# 📋 Installer Options

## Purpose
Use this page to compare installer choices and keep Ubuntu Lite aligned with a minimal-first outcome.

## Structured Reference Material
| Installer decision | Prefer when... | Avoid when... | Notes |
|---|---|---|---|
| Minimal install option | You want a smaller default application set | The release no longer offers the label or the system role demands broad defaults | UI wording may vary by release |
| Normal or fuller install option | You are drifting toward Standard behavior anyway | You want Lite package visibility | Reassess track choice if this keeps happening |
| Guided partitioning | Single-purpose disk with good backups | Dual boot, unusual layouts, or strict partition goals | Simplicity beats cleverness |
| Manual partitioning | You need explicit control over root, home, or ESP reuse | You do not yet understand the current disk layout | Use only after inspecting disks first |
| Third-party driver selection in installer | You already know the hardware requires it | You are still unsure whether default kernel drivers suffice | Post-install driver enablement is often easier to reason about |

## Commands / Inspection Snippets
```bash
lsblk -f
sudo parted -l
```

## Practical Notes
- Choose the smallest installer path that still matches the workstation role.
- When the installer language changes between releases, translate it back into outcomes: package size, disk behavior, driver inclusion, and boot mode correctness.

## Related Docs
- [🖥️ Install on UEFI](../how-to/install-on-uefi.md)
- [🖥️ Install on BIOS / Legacy](../how-to/install-on-bios-legacy.md)
- [🧠 Minimal First](../concepts/minimal-first.md)

Next: translate to id
