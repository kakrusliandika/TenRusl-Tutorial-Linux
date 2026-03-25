# 💽 05 Storage

## Objective
Create the first intentional storage layout in CloudStack so workload disks, artifacts, and backups do not compete by accident.

## Prerequisites
- Tutorial 04 is complete.

## Environment Assumptions
- You know the role of the first storage target before you create or register it.

## Sequential Steps
1. **Inspect current storage state**
Confirm capacity, backend visibility, and current role separation.
```bash
lsblk -f
df -h
mount | egrep "nfs|ceph|cifs" || true
cloudmonkey list storagepools 2>/dev/null || true
```

2. **Add or validate the first named storage target**
Use the supported workflow and keep the role narrow.
```bash
cloudmonkey list clusters 2>/dev/null || true
cloudmonkey create storagepool name=primary-nfs clusterid=<CLUSTER_ID> zoneid=<ZONE_ID> podid=<POD_ID> url=nfs://10.0.0.20/export/primary 2>/dev/null || true
cloudmonkey list storagepools keyword=primary-nfs 2>/dev/null || true
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
