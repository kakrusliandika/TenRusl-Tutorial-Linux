# 📘 10 Closeout

## Objective
Finish the Ubuntu Standard build with final acceptance, documentation, and next-step planning for security and backup.

## Prerequisites
- All Standard tutorial chapters are complete.
- The workstation is already working for its primary role.

## Environment Assumptions
- Closeout confirms that the broader Standard baseline is supportable, not just feature-rich.

## Sequential Steps
### 1. Capture the final inventory and acceptance notes
Record what the workstation became after the full Standard build.

```bash
hostnamectl
lsblk -f
snap list 2>/dev/null || true
systemctl --failed
```

### 2. Run a final user-workflow check
Confirm browser, office, remote support, media, and any required dev tooling in the order the real user cares about them.

### 3. Plan the next operational phase
Security hardening, backups, and optional future apps should now be explicit next steps rather than unplanned drift.

## ✅ Validation Checkpoints
- The workstation has a documented final package and workflow state.
- It can now move into Security and Backup from a stable known-good baseline.

## ⚠️ Warnings
- Do not keep expanding the app surface during closeout; document future changes for a later controlled pass.

## Cleanup / Post-Check
- Store the final notes and exports with your build records and backups.

## Next Tutorial
Return to [💻 Ubuntu Standard](../index.md) and then continue with [🛡️ Security](../../../../security/index.md) and [💾 Backup](../../../../backup/index.md).

## Related Docs
- [📋 Package Expanded](../reference/package-expanded.md)
- [🛡️ Security](../../../../security/index.md)
- [💾 Backup](../../../../backup/index.md)

Next: translate to id
