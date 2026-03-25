# 💾 Rotate VM Backups

## Objective
Rotate VM backups with retention, metadata, and restore verification in mind instead of only keeping the newest export.

## Use Case
Use this when backup storage is growing or restore confidence is weak.

## Prerequisites
- A backup repository path.
- Access to the metadata that identifies each backup correctly.
- A written retention rule.

## Environment Assumptions
- Examples below show Linux-side repository handling.
- Actual export commands vary by hypervisor, but retention, checksums, and restore tests still matter.

## ⚠️ Risk Notes
- Never prune older backups before the newest backup is verified.
- If the repository contains full guest disks, protect it like any other sensitive data store.

## Step-by-Step Procedure
### 1. Catalog the current backup set
Know what exists before you delete anything.

```bash
find /srv/vm-backups -maxdepth 2 -type f -printf '%TY-%Tm-%Td %TH:%TM %p\n' 2>/dev/null | sort || true
```

### 2. Add integrity metadata
Checksums make restores less guess-driven.

```bash
find /srv/vm-backups -maxdepth 1 -type f \( -name '*.img' -o -name '*.qcow2' \) 2>/dev/null | while read -r f; do
  sha256sum "$f"
done > /srv/vm-backups/SHA256SUMS
```

### 3. Record retention intent
Keep the policy written down, not assumed.

```bash
echo "keep 7 daily, 4 weekly, 6 monthly" > /srv/vm-backups/RETENTION.txt
```

## ✅ Validation Checkpoints
- Backup files are identifiable by VM name, date, and format.
- Integrity metadata exists for retained backups.
- A restore path is documented.

```bash
ls -lh /srv/vm-backups 2>/dev/null || true
sha256sum -c /srv/vm-backups/SHA256SUMS 2>/dev/null || true
```

## Troubleshooting
- If checksums fail, stop pruning until corruption is understood.
- If multiple tools wrote into the same repository, normalize naming before retention cleanup.

## ↩️ Rollback / Recovery Notes
- Keep the previous retention set until the new one is cataloged and checked.
- Recover pruned data from offsite or secondary copies if something critical is removed.

## Related Docs
- [📋 Backup Checklist](../reference/backup-checklist.md)
- [💾 08 Backups](../tutorials/08-backups.md)
- [🧱 VM Security](../index.md)

Next: translate to id
