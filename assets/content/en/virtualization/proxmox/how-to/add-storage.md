# 💽 Add Storage Safely

## Objective
Add or expose storage to Proxmox without guessing about role, capacity, or validation.

## When To Use This Procedure
Use this when you are onboarding a new disk, pool, datastore, or backend and want to prove the platform can consume it safely.

## Prerequisites
- You know whether the new storage is meant for live workloads, artifacts, backups, or restore staging.
- You have console or rollback access if the change affects a production node or critical backend.

## Environment Assumptions
- The exact backend workflow varies by deployment and release.
- You will validate with shell commands before placing important workloads on the new target.

## Step-by-Step Procedure
1. **Inspect the current storage picture**
Confirm current capacity, backend visibility, and mount state before you change anything.
```bash
pvesm status
lsblk -o NAME,SIZE,FSTYPE,MOUNTPOINT
df -h
findmnt -t nfs,nfs4,cifs,ceph
```

2. **Create or register the new storage target**
Use the platform-supported storage workflow that matches your backend. Keep the role narrow and the name descriptive.
```bash
sudo mkdir -p /srv/pve-backup
sudo pvesm add dir lab-backup --path /srv/pve-backup --content backup,iso,vztmpl
pvesm status
```

3. **Document the role immediately**
Write down whether the new target is for live workloads, images, backups, or restore staging. Do not leave that decision implicit.

## ✅ Validation Checkpoints
- The new storage target is visible from the platform and the Linux host.
- The storage role is documented clearly.
- A small test write, import, or workload action succeeds without ambiguity.

## ⚠️ Troubleshooting Notes
- The platform can see the backend but the role is wrong: remove or adjust it before any guest is placed there.
- Capacity looks inconsistent: re-check backend mounts, thin provisioning, replica policy, or export reachability.
- If the target is shared storage, confirm every relevant node can see it consistently.

## ↩️ Rollback Or Recovery Notes
- Remove the newly added target from the platform if the role or backend is wrong.
- Revert any mount or backend change before retrying. Do not keep a half-working storage definition in service.

## Related Docs
- [💽 Storage Design](../concepts/storage-design.md)
- [📋 Storage Layout](../reference/storage-layout.md)

Next: translate to id
