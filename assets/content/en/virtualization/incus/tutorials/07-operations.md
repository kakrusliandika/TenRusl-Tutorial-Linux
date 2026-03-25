# 🧰 07 Operations

## Objective
Define the short command set and inspection rhythm that tells you whether Incus is healthy during normal operation.

## Prerequisites
- Tutorial 06 is complete.

## Environment Assumptions
- You want a repeatable day-2 routine that another operator can follow without improvising.

## Sequential Steps
1. **Re-run the core health checks**
Capture the command output that you would trust first during an outage.
```bash
incus info
incus profile list
incus network list
incus storage list
incus project list
incus list
```

2. **Compare control-plane and host views**
Make sure the platform story matches the Linux host story.

3. **Write the daily-check routine**
Decide what must be checked daily, before change, and after change.

## ✅ Validation Checkpoints
- You have a small, repeatable health-check routine.
- The control plane and host checks agree for the baseline state.

## ⚠️ Warnings
- If each operator uses a different improvised command set, incident handling will drift too.

## Cleanup / Post-Check
- Place the daily-check commands next to the restore and inventory notes.

## Next Tutorial
[💾 08 Backups](./08-backups.md)

Next: translate to id
