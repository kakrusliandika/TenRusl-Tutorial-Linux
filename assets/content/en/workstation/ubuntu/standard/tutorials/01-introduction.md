# 📘 01 Introduction

## Objective
Define why the workstation should follow the fuller Standard profile so convenience, package scope, and support expectations stay aligned.

## Prerequisites
- A candidate machine and a place to keep workstation notes.
- A backup if the machine already contains important user data.

## Environment Assumptions
- You want a broader Ubuntu desktop sooner rather than assembling it in many small Lite layers.

## Sequential Steps
### 1. Record hardware and intended workload
The Standard choice should still be justified, not assumed.

```bash
lscpu | sed -n '1,20p'
free -h
lsblk -f
```

### 2. Write the required day-one experience
Examples: browser plus office plus remote support, or mixed admin plus media plus dev workstation.

### 3. Confirm Standard is a hardware-fit decision, not just a preference
If the machine is older or storage-starved, re-evaluate Lite now.

## ✅ Validation Checkpoints
- The Standard choice is documented against hardware and workload.
- You know what usable on day one means for this desktop.

## ⚠️ Warnings
- Do not assume Standard is automatically right just because it feels more familiar.

## Cleanup / Post-Check
- Keep the role description in your notes for later cleanup and closeout.

## Next Tutorial
[📋 02 Install Preflight](./02-install-preflight.md)

## Related Docs
- [🧠 Standard Overview](../concepts/standard-overview.md)
- [🧠 When To Choose Standard](../concepts/when-to-choose-standard.md)
- [💻 Ubuntu Lite](../../lite/index.md)

Next: translate to id
