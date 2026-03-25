# 📘 10 Closeout

## Objective
Finish the Ubuntu Lite build with final validation, documentation, and a next-step plan for security and backup.

## Prerequisites
- All previous Lite tutorial chapters are complete.
- The machine already behaves like a usable workstation.

## Environment Assumptions
- Closeout is where you confirm the workstation is supportable, not where you keep adding optional software.

## Sequential Steps
### 1. Capture the final workstation inventory
Export the system identity and the final installed-tool view so the machine can be rebuilt or audited later.

```bash
hostnamectl
lsblk -f
snap list 2>/dev/null || true
systemctl --failed
```

### 2. Run one final acceptance pass
Check boot, network, browser, editor, audio, and any workload-specific tools. Acceptance is about repeatable behavior, not just one lucky login.

### 3. Create the next-step plan
Decide what security hardening, backup coverage, and optional package growth will happen next so the workstation does not drift unowned.

## ✅ Validation Checkpoints
- The workstation has a final inventory and a known-good acceptance result.
- Installer media, notes, and rollback artifacts are still available if the next stage introduces risk.
- You can now move into security and backup planning from a stable base.

## ⚠️ Warnings
- Do not declare success if boot, suspend, network, or the primary workload is still inconsistent.
- Resist the temptation to keep adding optional tools during closeout; document them for a later intentional pass.

## Cleanup / Post-Check
- Store the final notes and exports with your external backup or build documentation.

## Next Tutorial
Return to [💻 Ubuntu Lite](../index.md) and then continue with [🛡️ Security](../../../../security/index.md) and [💾 Backup](../../../../backup/index.md).

## Related Docs
- [📋 Post-Install Checklist](../reference/post-install-checklist.md)
- [🛡️ Security](../../../../security/index.md)
- [💾 Backup](../../../../backup/index.md)

Next: translate to id
