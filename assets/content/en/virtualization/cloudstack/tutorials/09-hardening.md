# 🔐 09 Hardening

## Objective
Run a final design and exposure review so CloudStack is cleaner, tighter, and safer before normal operation continues.

## Prerequisites
- Tutorials 01 through 08 are complete.

## Environment Assumptions
- You can compare the current platform state with the initial baseline and build notes.

## Sequential Steps
1. **Review health, exposure, and artifacts together**
Look for stale test objects, broad access, or muddy boundaries that should not survive into steady state.
```bash
ss -lntp
sudo journalctl -u cloudstack-management -u cloudstack-agent -n 50 --no-pager
sudo systemctl status cloudstack-management --no-pager
sudo systemctl status cloudstack-management --no-pager
sudo systemctl status cloudstack-agent --no-pager
ip -br addr
```

2. **Tighten the baseline**
Remove or quarantine unused networks, stale artifacts, overly broad permissions, and temporary exceptions.

3. **Schedule or confirm restore rehearsal**
Security is incomplete if recovery cannot be proven.

## ✅ Validation Checkpoints
- The platform baseline is easier to explain than when you started.
- Unnecessary temporary objects are removed or documented intentionally.
- Restore rehearsal is scheduled or already complete.

## ⚠️ Warnings
- Protect management services, API credentials, and database backups as first-class assets.
- Review exposed services and keep management-node access intentionally narrow.
- Do not let unused templates, networks, or broad offerings accumulate without owners.

## Cleanup / Post-Check
- Archive the cleaned baseline and note what was deliberately removed, retained, or deferred.

## Next Tutorial
[✅ 10 Closeout](./10-closeout.md)

Next: translate to id
