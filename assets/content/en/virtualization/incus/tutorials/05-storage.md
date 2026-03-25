# 💽 05 Storage

## Objective
Create the first intentional storage layout in Incus so workload disks, artifacts, and backups do not compete by accident.

## Prerequisites
- Tutorial 04 is complete.

## Environment Assumptions
- You know the role of the first storage target before you create or register it.

## Sequential Steps
1. **Inspect current storage state**
Confirm capacity, backend visibility, and current role separation.
```bash
incus storage list
incus storage show default 2>/dev/null
lsblk -f
df -h
```

2. **Add or validate the first named storage target**
Use the supported workflow and keep the role narrow.
```bash
incus storage create labpool dir source=/var/lib/incus/storage-pools/labpool
incus storage show labpool
incus storage volume list labpool
```

3. **Record what belongs there**
Write down whether the target is for workloads, artifacts, backups, or staging.

## ✅ Validation Checkpoints
- The storage target exists and is visible from the platform and Linux.
- Its purpose is documented clearly.
- There is enough headroom for the next tutorial.

## ⚠️ Warnings
- Do not call the storage work complete until you can explain the role of each target in one sentence.

## Cleanup / Post-Check
- Add free-space and role notes to the runbook now.

## Next Tutorial
[📦 06 Images or Templates](./06-images-or-templates.md)

Next: translate to id
