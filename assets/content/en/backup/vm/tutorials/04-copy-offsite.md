# ☁️ Tutorial 04: Copy Offsite

## Objective
Copy the verified VM backup generation to a remote location outside the source failure domain.

## Prerequisites
- Shell access to the hypervisor or recovery host.
- Backup storage separate from the source guest.
- An isolated restore target or lab VLAN for validation.

## Environment Assumptions
- A validated local backup generation already exists.
- An SSH-reachable remote backup host or offsite mount is available.

## Sequential Steps
### 1. Transfer the generation
Use a transport that preserves timestamps and can resume if large image files are interrupted.

```bash
BACKUP_DIR=/srv/backup/vm/app01/$(ls -1 /srv/backup/vm/app01 | sort | tail -n1)
REMOTE=backup@example.net:/srv/offsite/vm/app01/
rsync -aH --numeric-ids --partial "$BACKUP_DIR" "$REMOTE"
```

### 2. Verify the remote copy exists
Remote verification is what turns transfer into an offsite protection step.

```bash
ssh backup@example.net 'find /srv/offsite/vm/app01 -maxdepth 2 -type f | sort | tail -n 10'
ssh backup@example.net 'cd /srv/offsite/vm/app01 && find . -name SHA256SUMS -print'
```

## ✅ Validation Checkpoints
- The remote location contains the same generation directory and checksum file.
- The local copy remains available until the remote copy is confirmed.

## ⚠️ Warnings
- Do not prune local generations just because the transfer command exited successfully once.

## Cleanup / Post-Check
- Record remote path, date, and transfer result in the backup notes.

## Next Tutorial
[↩️ Tutorial 05: Restore VM](./05-restore-vm.md)

Next: translate to id
