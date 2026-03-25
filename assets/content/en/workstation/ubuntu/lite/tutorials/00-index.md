# 📚 00 Tutorial Index

## Objective
Use this chapter map to build Ubuntu Lite in controlled layers and avoid turning the workstation into a random package experiment.

## Prerequisites
- You already decided Lite is the correct track for this machine.
- You can commit to finishing the sequence rather than stopping after the installer succeeds.

## Environment Assumptions
- The workstation will be built in stages: preflight, base install, GUI, browser, editor, dev, media, cleanup, closeout.
- You will pause the sequence if one layer is unstable rather than blindly continuing.

## Sequential Steps
### 1. Review the chapter order before you begin
This order is designed to keep failures attributable to one layer at a time, not because the numbers look neat.

```text
01 Introduction -> 02 Install Preflight -> 03 Install Core -> 04 Install GUI -> 05 Install Browser -> 06 Install Editor -> 07 Install Dev -> 08 Install Media -> 09 Cleanup -> 10 Closeout
```

### 2. Prepare your build notes and rollback notes up front
A Lite install is easiest to support when you record package additions and validation results after each tutorial.

```bash
mkdir -p ~/workstation-notes
printf 'Host: %s
Date: %s
' "$(hostnamectl --static 2>/dev/null || echo target-host)" "$(date -Iseconds)" > ~/workstation-notes/build-notes.txt
```

## ✅ Validation Checkpoints
- You know the next file to read before touching installer media.
- Your notes directory exists and can hold package lists and health checks later in the sequence.

## ⚠️ Warnings
- Do not treat the tutorial index as optional reading; it defines the recovery-friendly order.
- If your machine is dual-booted, read the BitLocker and Intel RST how-to pages before tutorial 03.

## Cleanup / Post-Check
- Keep the note directory and installer USB available until tutorial 10 is complete.

## Next Tutorial
[📘 01 Introduction](./01-introduction.md)

## Related Docs
- [🧠 What Ubuntu Lite Means Here](../concepts/what-is-lite.md)
- [✅ Verify the ISO](../how-to/verify-iso.md)
- [↩️ Rollback Plan](../how-to/rollback-plan.md)

Next: translate to id
