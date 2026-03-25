# 🧩 Enable Third-Party Drivers

## Objective
Install or confirm optional vendor drivers only after the base Ubuntu Lite system is already stable.

## Use Case
Use this when Wi-Fi, GPU acceleration, or other hardware support is incomplete with the default kernel drivers and the workstation role requires vendor packages.

## Prerequisites
- A working base install that already boots consistently.
- Internet access on the installed system.
- Knowledge of which hardware actually requires a third-party driver.

## ⚠️ Risk Notes
- Driver changes can break graphics login, suspend, or external display behavior.
- Do not install drivers speculatively just in case.

## Environment Assumptions
- You are on the installed Ubuntu Lite system, not just the live session.
- You have kept the installer USB so recovery remains possible if the driver change goes badly.

## Step-by-Step Procedure
### 1. Inventory the current hardware and active drivers
Record what the kernel is already using before you change anything.

```bash
lspci -nnk
lsusb
ubuntu-drivers devices || true
```

### 2. Install only the driver class you actually need
Use Ubuntu tools first instead of pulling random packages from third-party guides.

```bash
sudo apt update
sudo ubuntu-drivers autoinstall
```

### 3. Reboot and test the affected hardware path
Driver success is not just that the package installed. Test login, rendering, Wi-Fi, suspend, resume, and external displays as relevant.

```bash
systemctl reboot
```

### 4. Confirm the new driver is actually in use
Use inspection commands appropriate to the hardware class.

```bash
lspci -nnk | sed -n '1,160p'
modinfo -F filename $(lspci -nnk | awk '/Kernel modules:/ {print $3; exit}') 2>/dev/null || true
nvidia-smi 2>/dev/null || true
```

## ✅ Validation Checkpoints
- The machine still boots cleanly and reaches the graphical session.
- The hardware problem the driver was meant to solve is actually improved.
- Suspend, resume, and reboot still work after the driver change.

## Troubleshooting Notes
- If the system drops to a black screen after login, switch to a text console and remove the last driver package before trying more changes.
- If wireless improves but suspend breaks, note that the driver choice may still be unacceptable for a laptop workflow.

## ↩️ Rollback / Recovery Notes
- Keep the previous package list and purge the newly added driver if the workstation becomes less reliable.
- If the graphics stack is broken, use recovery mode or the live USB to remove the offending package set before continuing.

## Related Docs
- [🖼️ 04 Install GUI](../tutorials/04-install-gui.md)
- [🚑 Recover After a Failed Boot](./recover-after-failed-boot.md)
- [📋 Troubleshooting Index](../reference/troubleshooting-index.md)

Next: translate to id
