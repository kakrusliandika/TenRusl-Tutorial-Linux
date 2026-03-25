# 🧹 09 Cleanup

## Objective
Stabilize the Standard workstation after the major application waves so the machine is broad enough for work but still supportable.

## Prerequisites
- The planned Standard app layers are already installed.
- The machine is functionally usable for its intended role.

## Environment Assumptions
- Cleanup on Standard is where you trim excess and lock in the final baseline.

## Sequential Steps
### 1. Clean package residue and inspect the installed footprint
A fuller desktop still benefits from removing unnecessary leftovers.

```bash
sudo apt autoremove --purge
sudo apt clean
df -h /
```

### 2. Export the final package state and health snapshot
This makes later rebuilds or audits much easier.

```bash
mkdir -p ~/standard-workstation-state
dpkg --get-selections > ~/standard-workstation-state/dpkg-selections.txt
apt-mark showmanual > ~/standard-workstation-state/apt-manual.txt
systemctl --failed > ~/standard-workstation-state/failed-services.txt
```

### 3. Review the machine against the original role definition
If the workstation now includes software nobody asked for, remove it before closeout.

## ✅ Validation Checkpoints
- The final package surface matches the intended role closely enough to be supportable.
- Package lists and health snapshots are exported for future use.

## ⚠️ Warnings
- A Standard workstation can still become noisy if nobody owns the final package surface.

## Cleanup / Post-Check
- Keep the exported state with your notes and backup targets before you move on to closeout.

## Next Tutorial
[📘 10 Closeout](./10-closeout.md)

## Related Docs
- [📋 Package Baseline](../reference/package-baseline.md)
- [📋 Package Expanded](../reference/package-expanded.md)
- [💾 Backup](../../../../backup/index.md)

Next: translate to id
