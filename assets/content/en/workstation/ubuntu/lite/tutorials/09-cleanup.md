# 🧹 09 Cleanup

## Objective
Stabilize the Lite workstation after package layering so the final system is documented, lean enough, and easier to support.

## Prerequisites
- The planned packages for the workstation are already installed.
- The machine can reboot, reach the network, and launch the main user tools.

## Environment Assumptions
- Cleanup is not optional in Lite. It is where you decide which packages really belong in the baseline.

## Sequential Steps
### 1. Remove obviously unused packages and caches
Keep the package surface small enough that you still understand the build.

```bash
sudo apt autoremove --purge
sudo apt clean
```

### 2. Export the package baseline and system health snapshot
These exports make future rollback and rebuild work significantly easier.

```bash
mkdir -p ~/workstation-state
dpkg --get-selections > ~/workstation-state/dpkg-selections.txt
apt-mark showmanual > ~/workstation-state/apt-manual.txt
systemctl --failed > ~/workstation-state/failed-services.txt
journalctl -p err -b --no-pager | tail -n 80 > ~/workstation-state/boot-errors.txt
```

### 3. Review free space, enabled services, and obvious noise
The workstation should now look understandable and supportable, not merely functional.

```bash
df -h /
systemctl list-unit-files --state=enabled | sed -n '1,40p'
```

## ✅ Validation Checkpoints
- No broken packages remain and the package lists are exported.
- The machine has enough free space for normal update and browser activity.
- The service footprint looks reasonable for a Lite desktop.

## ⚠️ Warnings
- Do not purge packages aggressively if you no longer remember why they were installed; check your notes first.
- If logs still show recurring boot or graphics errors, fix them before calling the machine complete.

## Cleanup / Post-Check
- Keep the exported package and health files with your workstation notes and backups.

## Next Tutorial
[📘 10 Closeout](./10-closeout.md)

## Related Docs
- [↩️ Rollback Plan](../how-to/rollback-plan.md)
- [📋 Post-Install Checklist](../reference/post-install-checklist.md)
- [📋 Troubleshooting Index](../reference/troubleshooting-index.md)

Next: translate to id
