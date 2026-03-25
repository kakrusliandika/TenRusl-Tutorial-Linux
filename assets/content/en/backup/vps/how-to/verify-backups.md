# 🛠️ Verify Backups

## Objective
Verify that each VPS backup generation is readable, complete, and recent enough to trust before retention pruning or offsite promotion.

## Use Case
Use this after every backup job and before declaring the generation safe for long-term retention.

## Prerequisites
- A backup generation already exists locally or on the offsite target.
- Checksums were written during backup creation.
- You can inspect archive contents from the shell.

## Environment Assumptions
- Verification should happen before deletion of any older known-good generation.
- The archive includes package inventory and a simple service note.

## Exact Steps
### 1. Validate checksums and list archive contents
Integrity and human-readable content listing are the fastest first line of defense.

```bash
BACKUP_DIR=/srv/backup/vps/host01/2026-03-25-0100
cd "$BACKUP_DIR"
sha256sum -c SHA256SUMS
tar -tzf system-data.tar.gz | head -n 50
```

### 2. Review freshness and context files
A backup that is technically valid but too old or incomplete is still operationally weak.

```bash
stat system-data.tar.gz packages.tsv SHA256SUMS
wc -l packages.tsv
sed -n '1,20p' service-status.txt 2>/dev/null || true
```

### 3. Optionally verify the offsite copy
The offsite generation should match the local one before local pruning begins.

```bash
ssh backup@example.net 'cd /srv/offsite/vps/host01/2026-03-25-0100 && sha256sum -c SHA256SUMS'
```

## ✅ Validation Checkpoints
- Checksums pass locally and, if applicable, remotely.
- The archive contains expected high-value paths and a useful package inventory.
- The generation timestamp matches the retention and SLA expectations for the workload.

## Troubleshooting
- If the archive lists fewer paths than expected, review exclusions before assuming the workload changed harmlessly.
- If checksum verification fails, treat the generation as bad and keep the older known-good copy.
- If offsite verification fails, do not delete the local generation yet.

## ↩️ Rollback or Recovery Notes
- Tag failed generations clearly so they are not selected during an incident.
- Repeat the backup immediately if the newest generation is incomplete or corrupted.

## Related Docs
- [🧠 Restore-First Thinking](../concepts/restore-first-thinking.md)
- [📚 Restore Checklist](../reference/restore-checklist.md)
- [✅ Tutorial 06: Verify Restore](../tutorials/06-verify-restore.md)

Next: translate to id
