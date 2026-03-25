# 📋 02 Prerequisites

## Objective
Validate the real prerequisites for Harvester: host readiness, network clarity, storage visibility, and a safe path for testing.

## Prerequisites
- Tutorial 01 is complete.

## Environment Assumptions
- You still have console or rollback access if you discover a gap in host or network readiness.

## Sequential Steps
1. **Validate host and platform readiness**
Confirm virtualization support, service visibility, and current inventory before changing anything.
```bash
egrep -c "(vmx|svm)" /proc/cpuinfo
lsblk -f
ip -br addr
kubectl get nodes -o wide
```

2. **Review naming and documentation gaps**
Make sure node names, pools, networks, and backup destinations are already understandable.

3. **Reserve a validation target**
Pick one guest, VM, project, or tenant path that will be used for every later test.

## ✅ Validation Checkpoints
- You know the current host and platform state.
- The test target for later validation is clearly identified.

## ⚠️ Warnings
- If the prerequisite picture is still fuzzy, later tutorials will only hide that problem.

## Cleanup / Post-Check
- Update the build notes with the host checks and the selected validation target.

## Next Tutorial
[🧱 03 Install Core](./03-install-core.md)

Next: translate to id
