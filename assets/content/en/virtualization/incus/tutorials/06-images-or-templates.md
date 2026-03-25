# 📦 06 Images or Templates

## Objective
Build the first controlled images and golden instances in Incus and prove they can launch a healthy test workload.

## Prerequisites
- Tutorial 05 is complete.
- A safe source artifact exists.

## Environment Assumptions
- You will test the new artifact before promoting it for routine use.

## Sequential Steps
1. **Inspect the current artifact inventory**
Review existing images or templates so you do not create avoidable naming drift.
```bash
incus image list
incus profile list
incus project list
```

2. **Import, publish, or register one golden artifact**
Use the supported workflow and record its source and purpose immediately.
```bash
incus image copy images:debian/12/cloud local: --alias debian-12-cloud
incus init debian-12-cloud debian12-golden --vm
incus publish debian12-golden --alias debian-12-golden-v1
```

3. **Launch one validation workload**
Boot or attach one test workload from the new artifact and verify network, storage, and guest readiness.

## ✅ Validation Checkpoints
- The new artifact is visible in inventory.
- A test workload proves it is usable.
- Origin and validation date are documented.

## ⚠️ Warnings
- An imported artifact is not production-ready until a real test workload proves it.

## Cleanup / Post-Check
- Record the artifact name, source, validation date, and the test workload that proved it.

## Next Tutorial
[🧰 07 Operations](./07-operations.md)

Next: translate to id
