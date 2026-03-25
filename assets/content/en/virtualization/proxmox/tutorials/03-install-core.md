# 🧱 03 Install Core

## Objective
Bring the core Proxmox control plane into a known-good state before networks, storage, and guest artifacts are expanded.

## Prerequisites
- Tutorial 02 is complete.
- The supported installation or bootstrap workflow for your release is available.

## Environment Assumptions
- Exact package names or installer steps may vary by release, but health verification should still be explicit.

## Sequential Steps
1. **Complete or confirm the supported bootstrap path**
For a fresh Proxmox deployment, complete the supported installer first, then move immediately into CLI validation and baseline networking rather than creating guests blindly.

2. **Validate core control-plane health**
Run the minimum command set that proves the platform is up, visible, and ready for the next layer of work.
```bash
pveversion -v
pvecm status
pvesm status
qm list
pct list
```

3. **Record any warnings before continuing**
If there are degraded services, quorum issues, cluster warnings, or missing components, document them now instead of layering more change on top.

## ✅ Validation Checkpoints
- Core services or platform objects are visible.
- You have a written list of any unresolved warnings.
- The platform is healthy enough to continue into network work.

## ⚠️ Warnings
- Do not add storage, networks, or real workloads to a platform whose core health is still uncertain.

## Cleanup / Post-Check
- Save the core-health output next to the baseline inventory from Tutorial 01.

## Next Tutorial
[🌐 04 Networking](./04-networking.md)

Next: translate to id
