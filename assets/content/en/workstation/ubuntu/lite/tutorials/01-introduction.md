# 📘 01 Introduction

## Objective
Define the workstation role and confirm Ubuntu Lite is the right operating model before installation begins.

## Prerequisites
- A target machine or VM and a place to record notes.
- Enough time to think through workload, hardware, and recovery expectations.

## Environment Assumptions
- You have not yet written to disk.
- You want a minimal-first build rather than a broad default desktop.

## Sequential Steps
### 1. Capture hardware and storage facts
Record what the workstation is physically working with before you pick packages.

```bash
lscpu | sed -n '1,20p'
free -h
lsblk -f
```

### 2. Write the workstation role in plain language
Examples: low-overhead dev laptop, helpdesk support desktop, or older laptop for browser plus editor plus SSH. The role should explain why Lite makes sense.

### 3. List the must-have outcomes
Decide whether the first successful build must already include browser, editor, remote access, audio, Bluetooth, or development tools.

## ✅ Validation Checkpoints
- The notes explain why Lite was chosen instead of Standard.
- You can describe the hardware limits and the target workload without guesswork.

## ⚠️ Warnings
- Do not start partitioning just because the ISO is downloaded.
- If the required outcome actually sounds like a fuller default desktop, reconsider Standard now instead of later.

## Cleanup / Post-Check
- Keep the role statement and hardware facts in your build notes so later package choices stay grounded.

## Next Tutorial
[📋 02 Install Preflight](./02-install-preflight.md)

## Related Docs
- [🧠 Lite vs Standard](../concepts/lite-vs-standard.md)
- [📋 Hardware Requirements](../reference/hardware-requirements.md)
- [📚 00 Tutorial Index](./00-index.md)

Next: translate to id
