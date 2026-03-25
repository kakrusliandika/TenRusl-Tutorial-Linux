# 📝 06 Install Editor

## Objective
Install a dependable editing toolchain so the Lite workstation can handle configuration, notes, and code without drifting into tool sprawl.

## Prerequisites
- The base system, GUI, and browser layers are stable.
- You know whether this machine needs a terminal-first editor, a simple GUI editor, or both.

## Environment Assumptions
- This chapter is about dependable editing, not about building the final perfect IDE.

## Sequential Steps
### 1. Install the editing baseline
Keep one console editor and one simple GUI editor if the workstation role benefits from both.

```bash
sudo apt update
sudo apt install micro vim mousepad
```

### 2. Test editing from both terminal and GUI contexts
Open, save, and reopen a test file from both environments so you know the workflow is real.

```bash
printf 'lite workstation note
' > ~/workstation-note.txt
micro ~/workstation-note.txt
mousepad ~/workstation-note.txt 2>/dev/null || true
```

### 3. Decide which editor is the default operational tool
The point is consistency. The machine should have one editor you trust for recovery sessions and normal configuration work.

## ✅ Validation Checkpoints
- You can edit and save files from both terminal and graphical sessions if desired.
- The chosen editor set matches the workstation role instead of being a random collection.

## ⚠️ Warnings
- Do not jump into a heavy IDE here unless the development workload truly requires it and the machine is already stable.

## Cleanup / Post-Check
- If the editor choice feels wrong, remove the extra tool now before later tutorials add more software.

## Next Tutorial
[🧪 07 Install Dev](./07-install-dev.md)

## Related Docs
- [📋 Application Matrix](../reference/application-matrix.md)
- [📋 Package Baseline](../reference/package-baseline.md)
- [📋 Package Optional](../reference/package-optional.md)

Next: translate to id
