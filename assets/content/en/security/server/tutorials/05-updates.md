# 📦 05 Updates

## Objective
Make patching predictable and reviewable.

## Prerequisites
- Sudo access to the host or the relevant inspection path.
- A writable notes file for findings and exceptions.

## Environment Assumptions
- The host is stable enough for review work and any risky edits are backed up first.

## Sequential Steps
### 1. Inspect current automation
Check update timers and pending packages.

```bash
systemctl list-timers --all | grep -Ei "apt|dnf|packagekit|unattended" || true
```

### 2. Apply a controlled update cycle
Patch intentionally and watch the result.

```bash
if command -v apt >/dev/null 2>&1; then
  sudo apt update && sudo apt upgrade -y
elif command -v dnf >/dev/null 2>&1; then
  sudo dnf upgrade -y
fi
```

### 3. Review reboot and service state
A successful package transaction is not the end of the task.

```bash
needs-restarting -r 2>/dev/null || true
sudo systemctl --failed --no-pager
sudo ss -tulpn
```

## ✅ Validation Checkpoints
- The step output matches the documented host role and no new unknown services, users, or listeners appear.

## ⚠️ Warnings
- Never treat an untested config change as finished just because the command returned zero.

## Cleanup / Post-Check
- Store outputs that matter in your host record or change log.

## Next Tutorial
[Next: 06 Service Hardening](./06-service-hardening.md)

Next: translate to id
