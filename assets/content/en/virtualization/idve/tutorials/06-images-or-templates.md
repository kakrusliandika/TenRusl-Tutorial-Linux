# 📦 06 Images or Templates

## Objective
Build the first controlled base images and templates in IDVE and prove they can launch a healthy test workload.

## Prerequisites
- Tutorial 05 is complete.
- A safe source artifact exists.

## Environment Assumptions
- You will test the new artifact before promoting it for routine use.

## Sequential Steps
1. **Inspect the current artifact inventory**
Review existing images or templates so you do not create avoidable naming drift.
```bash
find /srv/idve-storage/templates -maxdepth 1 -type f 2>/dev/null
qemu-img info /srv/idve-storage/templates/example.qcow2 2>/dev/null || true
sha256sum /srv/idve-storage/templates/*.qcow2 2>/dev/null || true
```

2. **Import, publish, or register one golden artifact**
Use the supported workflow and record its source and purpose immediately.
```bash
qemu-img info /srv/idve-storage/templates/debian-12-base.qcow2
sha256sum /srv/idve-storage/templates/debian-12-base.qcow2 > /srv/idve-storage/templates/debian-12-base.qcow2.sha256
find /srv/idve-storage/templates -maxdepth 1 -type f
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
