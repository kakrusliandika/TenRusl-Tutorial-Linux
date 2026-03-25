# 🔐 09 Hardening

## Objective
Run a final design and exposure review so Incus is cleaner, tighter, and safer before normal operation continues.

## Prerequisites
- Tutorials 01 through 08 are complete.

## Environment Assumptions
- You can compare the current platform state with the initial baseline and build notes.

## Sequential Steps
1. **Review health, exposure, and artifacts together**
Look for stale test objects, broad access, or muddy boundaries that should not survive into steady state.
```bash
incus config show
incus project list
ss -lntp | grep 8443
journalctl -u incus -n 50 --no-pager
incus info
incus profile list
incus network list
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
- Review remote API exposure, trust relationships, and which projects are allowed to create which kinds of instances.
- Keep profile defaults narrow and avoid broad devices or permissions in the default profile.
- Document image provenance and retire stale artifacts instead of letting them become silent dependencies.

## Cleanup / Post-Check
- Archive the cleaned baseline and note what was deliberately removed, retained, or deferred.

## Next Tutorial
[✅ 10 Closeout](./10-closeout.md)

Next: translate to id
