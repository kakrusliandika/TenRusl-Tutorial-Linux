# 🖼️ 04 Install GUI

## Objective
Add a lean graphical desktop layer to the stable Lite base without turning the workstation into a full Standard-style stack all at once.

## Prerequisites
- The base system boots cleanly and networking works.
- You can log into the text system and use `sudo`.

## Environment Assumptions
- A minimal desktop shell is enough for Lite. You are not required to install a broad desktop metapackage here.

## Sequential Steps
### 1. Install a lean graphical session
Use an explicit package set so you know what the GUI layer actually adds.

```bash
sudo apt update
sudo apt install xorg lightdm xfce4 xfce4-terminal thunar network-manager-gnome
```

### 2. Set the default target and reboot into graphics
A desktop install is only real when the system reaches the graphical login reliably.

```bash
sudo systemctl set-default graphical.target
sudo reboot
```

### 3. Validate graphics and input behavior
Test resolution, keyboard layout, pointing devices, and at least one logout and login cycle before you continue to browser installation.

```bash
systemctl get-default
loginctl session-status
xrandr --query 2>/dev/null || true
```

## ✅ Validation Checkpoints
- The graphical login appears and the workstation survives logout and reboot.
- Display resolution and input devices are functional.
- The machine still feels stable enough to continue the package layering plan.

## ⚠️ Warnings
- If graphics login fails, switch to a text console and inspect the display manager before adding more desktop packages.
- Do not install browsers, editors, and codecs first and only later notice the GUI itself is unstable.

## Cleanup / Post-Check
- If the desktop layer destabilizes the machine, purge the last GUI package set or reinstall from the stable base instead of improvising multiple desktop environments.

## Next Tutorial
[🌐 05 Install Browser](./05-install-browser.md)

## Related Docs
- [🧩 Enable Third-Party Drivers](../how-to/enable-third-party-drivers.md)
- [🚑 Recover After a Failed Boot](../how-to/recover-after-failed-boot.md)
- [📋 Troubleshooting Index](../reference/troubleshooting-index.md)

Next: translate to id
