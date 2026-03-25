# 📸 Review Snapshot Policy

## Objective
Review whether snapshots are being used as short-term rollback points instead of as indefinite backup substitutes.

## Use Case
Use this when snapshots keep accumulating, storage use is climbing, or teams rely on snapshots without a restore plan.

## Prerequisites
- An inventory of important VMs.
- CLI or API access to snapshot inventory if available.
- A place to record retention decisions.

## Environment Assumptions
- Snapshot tooling varies by platform. The libvirt commands below are one concrete shell-side example.
- The security goal stays the same across platforms: short-lived rollback points, clear reason, and regular cleanup.

## ⚠️ Risk Notes
- Deleting the wrong snapshot can remove the only rollback point for a recent change.
- Long-lived snapshots create storage and restore risk silently.

## Step-by-Step Procedure
### 1. Inventory guests and snapshots
Count what exists today before deciding what should stay.

```bash
sudo virsh list --all 2>/dev/null || true
sudo virsh snapshot-list vm-name 2>/dev/null || true
```

### 2. Document purpose and retention
Every retained snapshot needs a reason and an expiry decision.

```bash
cat <<'EOF' > snapshot-policy-review.md
VM | Snapshot | Reason | Created | Expiry | Action
--- | --- | --- | --- | --- | ---
EOF
```

### 3. Separate snapshot thinking from backup thinking
Write down the actual backup path next to the snapshot note.

```bash
printf "%s\n" "backup source for vm-name:" >> snapshot-policy-review.md
```

## ✅ Validation Checkpoints
- Every retained snapshot has a purpose and an expiry decision.
- No one is calling snapshots backups without a separate backup and restore plan.

## Troubleshooting
- If snapshot counts are unexpectedly high, review automation and failed cleanup.
- If external databases or attached storage matter, snapshot usefulness may be limited and should be documented.

## ↩️ Rollback / Recovery Notes
- Keep the snapshot until a verified alternate rollback or backup path exists.
- If uncertain, mark the snapshot for urgent review instead of deleting blindly.

## Related Docs
- [🧱 VM Hardening Baseline](../concepts/vm-hardening-baseline.md)
- [📋 Backup Checklist](../reference/backup-checklist.md)
- [📸 05 Snapshot Policy](../tutorials/05-snapshot-policy.md)

Next: translate to id
