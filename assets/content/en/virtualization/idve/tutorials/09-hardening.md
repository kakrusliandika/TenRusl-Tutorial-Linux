# 🔐 09 Hardening

## Objective
Run a final design and exposure review so IDVE is cleaner, tighter, and safer before normal operation continues.

## Prerequisites
- Tutorials 01 through 08 are complete.

## Environment Assumptions
- You can compare the current platform state with the initial baseline and build notes.

## Sequential Steps
1. **Review health, exposure, and artifacts together**
Look for stale test objects, broad access, or muddy boundaries that should not survive into steady state.
```bash
ss -lntp
systemctl list-units --type=service | grep -Ei 'idve|libvirt|qemu|virt' || true
journalctl -n 50 --no-pager
egrep -c "(vmx|svm)" /proc/cpuinfo
ip -br addr
lsblk -f
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
- Favor durable Linux controls such as controlled service exposure, SSH hygiene, artifact integrity, and documented recovery paths.
- Do not rely on UI wording staying the same across releases.
- Keep the runbook conservative and explicit so another operator can use it without vendor-specific tribal knowledge.

## Cleanup / Post-Check
- Archive the cleaned baseline and note what was deliberately removed, retained, or deferred.

## Next Tutorial
[✅ 10 Closeout](./10-closeout.md)

Next: translate to id
