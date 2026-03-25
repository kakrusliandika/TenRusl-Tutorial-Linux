# 🚑 Recover After a Failed Boot

## Objective
Triage and recover an Ubuntu Lite workstation after a boot failure without turning the machine into a pile of random rescue commands.

## Use Case
Use this when the system fails before the graphical login, loops on boot, drops into emergency mode, or regresses immediately after package or driver changes.

## Prerequisites
- A way to reach a text console, recovery mode, or a live USB.
- Basic notes about what changed before the failure.
- Patience to diagnose before applying more fixes.

## ⚠️ Risk Notes
- Repeated forced power cycles can damage evidence in logs or dirty the filesystem further.
- Do not install unrelated packages during recovery until you know what failed.

## Environment Assumptions
- You want to recover the current install if it is still trustworthy.
- You can stop and reinstall cleanly if the support boundary has already been crossed.

## Step-by-Step Procedure
### 1. Get to the most stable shell you can reach
Try a text console or recovery shell first. A graphical black screen is not the same as total system failure.

```bash
systemctl --failed
journalctl -xb -p warning..alert | tail -n 80
```

### 2. Inspect logs for the most recent failure indicators
Look for the last package change, driver load failure, filesystem problem, or service that now blocks boot.

```bash
dmesg -T | tail -n 80
journalctl -b -1 -p warning..alert | tail -n 80 2>/dev/null || true
```

### 3. Repair package state before changing configuration
If the failure followed updates or interrupted package work, restore package consistency first.

```bash
sudo dpkg --configure -a
sudo apt --fix-broken install
sudo apt update
```

### 4. Decide whether the issue is boot loader, graphics, or service related
GRUB failures, GPU login failures, and broken services have different recovery paths. Do not mix them into one guess-driven repair attempt.

## ✅ Validation Checkpoints
- You can name the main failure domain: boot loader, filesystem, graphics, package state, or one failing service.
- The system either returns to a usable state or you have enough evidence to choose reinstall or rollback deliberately.
- You did not continue layering packages during recovery.

## Troubleshooting Notes
- If logs are empty or inconsistent, consider whether multiple forced reboots or storage issues are part of the story.
- If the machine only fails after graphics starts, test from a text target before editing random boot parameters.

## ↩️ Rollback / Recovery Notes
- If the root cause is unclear after a disciplined triage, return to the rollback plan or reinstall from a known-good checkpoint instead of improvising indefinitely.
- Preserve important logs or package lists before you wipe or rebuild the system.

## Related Docs
- [🛠️ Reinstall GRUB](./reinstall-grub.md)
- [↩️ Rollback Plan](./rollback-plan.md)
- [📋 Troubleshooting Index](../reference/troubleshooting-index.md)

Next: translate to id
