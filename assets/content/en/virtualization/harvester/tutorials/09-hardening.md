# 🔐 09 Hardening

## Objective
Run a final design and exposure review so Harvester is cleaner, tighter, and safer before normal operation continues.

## Prerequisites
- Tutorials 01 through 08 are complete.

## Environment Assumptions
- You can compare the current platform state with the initial baseline and build notes.

## Sequential Steps
1. **Review health, exposure, and artifacts together**
Look for stale test objects, broad access, or muddy boundaries that should not survive into steady state.
```bash
kubectl get nodes -o wide
kubectl -n longhorn-system get pods
ss -lntp
journalctl -n 50 --no-pager
kubectl get nodes -o wide
kubectl get vm -A 2>/dev/null || true
kubectl get sc
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
- Limit unnecessary management exposure and keep node access paths well controlled.
- Review cluster certificates, kubeconfig handling, and who can modify VM or storage resources.
- Do not let stale test attachment definitions, VM images, or temporary backup settings survive into steady-state operations.

## Cleanup / Post-Check
- Archive the cleaned baseline and note what was deliberately removed, retained, or deferred.

## Next Tutorial
[✅ 10 Closeout](./10-closeout.md)

Next: translate to id
