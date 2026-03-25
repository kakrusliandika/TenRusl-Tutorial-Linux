# 💾 08 Backups

## Objective
Confirm that backup and restore thinking on Incus is concrete, testable, and ready for the first rehearsal.

## Prerequisites
- Tutorial 07 is complete.

## Environment Assumptions
- You have at least one backup or export path available for inspection.

## Sequential Steps
1. **Inspect current backup or export visibility**
Confirm what backup artifacts exist and how old they are.
```bash
incus storage list
incus list
incus info
```

2. **Pick the first restore target**
Decide exactly where a rehearsal restore will land and how you will validate it.

3. **Document scope and gaps**
Record whether the current backup path protects management state, guest state, or both.

## ✅ Validation Checkpoints
- You can explain what the current backup path protects.
- A restore target is chosen.
- The next recovery rehearsal has a clear command and validation plan.

## ⚠️ Warnings
- Do not say a platform is protected if you cannot explain the restore path without guessing.

## Cleanup / Post-Check
- Record artifact age, backup scope, and restore target in the runbook.

## Next Tutorial
[🔐 09 Hardening](./09-hardening.md)

Next: translate to id
