# 🔐 09 Hardening

## Objective
Run a final design and exposure review so Proxmox is cleaner, tighter, and safer before normal operation continues.

## Prerequisites
- Tutorials 01 through 08 are complete.

## Environment Assumptions
- You can compare the current platform state with the initial baseline and build notes.

## Sequential Steps
1. **Review health, exposure, and artifacts together**
Look for stale test objects, broad access, or muddy boundaries that should not survive into steady state.
```bash
pve-firewall status
ss -lntp
sudo systemctl status ssh pveproxy pvedaemon --no-pager
sudo journalctl -u pveproxy -u pvedaemon -n 50 --no-pager
pveversion -v
pvecm status
pvesm status
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
- Restrict management access and review exposed listeners before opening the platform to broader networks.
- Use host firewalls, SSH hygiene, and backup retention controls together; none of them replaces the others.
- Treat no-subscription or external repositories carefully and document exactly what the node can update from.

## Cleanup / Post-Check
- Archive the cleaned baseline and note what was deliberately removed, retained, or deferred.

## Next Tutorial
[✅ 10 Closeout](./10-closeout.md)

Next: translate to id
