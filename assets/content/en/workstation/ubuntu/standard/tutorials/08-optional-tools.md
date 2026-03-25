# 🧰 08 Optional Tools

## Objective
Add optional Standard workstation tools only after the main desktop, productivity, dev, and media layers are already proven.

## Prerequisites
- All required Standard layers are already stable.
- The optional tools have a clear role such as virtualization client access, desktop tuning, or sync helpers.

## Environment Assumptions
- Optional tools are where Standard can sprawl if you stop making deliberate decisions.

## Sequential Steps
### 1. Select the optional category intentionally
Examples include virtualization client tools, desktop tuning, Flatpak support, or sync utilities.

### 2. Install only the options you can justify
This example shows a common but still bounded optional set.

```bash
sudo apt update
sudo apt install virt-manager flatpak gnome-tweaks
```

### 3. Validate that the optional tools do not disturb the baseline
The desktop should remain stable and understandable after each optional category lands.

```bash
dpkg -l | grep -E 'virt-manager|flatpak|gnome-tweaks'
systemctl --failed
```

## ✅ Validation Checkpoints
- Optional tools are installed only where justified.
- The system remains clean enough that you can still describe its role and package surface clearly.

## ⚠️ Warnings
- If optional tools now outnumber the core role-driven apps, the workstation is drifting and needs cleanup.

## Cleanup / Post-Check
- Remove optional packages quickly if they add no operational value; the longer they stay, the more baseline they start to feel.

## Next Tutorial
[🧹 09 Cleanup](./09-cleanup.md)

## Related Docs
- [📋 Package Expanded](../reference/package-expanded.md)
- [📦 Install Extra Apps](../how-to/install-extra-apps.md)
- [💻 Ubuntu Lite Optional Package Reference](../../lite/reference/package-optional.md)

Next: translate to id
