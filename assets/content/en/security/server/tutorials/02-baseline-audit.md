# 📋 02 Baseline Audit

## Objective
Collect a shell-verified audit of packages, users, network, mounts, and enabled services.

## Prerequisites
- Sudo access to the host or the relevant inspection path.
- A writable notes file for findings and exceptions.

## Environment Assumptions
- The host is stable enough for review work and any risky edits are backed up first.

## Sequential Steps
### 1. Review patch posture
Check pending updates with the host package manager.

```bash
if command -v apt >/dev/null 2>&1; then
  apt list --upgradable 2>/dev/null | sed -n "1,20p"
elif command -v dnf >/dev/null 2>&1; then
  sudo dnf check-update || true
fi
```

### 2. Review users and elevation paths
Find interactive accounts and obvious privilege concentration.

```bash
getent passwd | grep -E "/bin/(bash|zsh|sh)$"
sudo getent group sudo wheel || true
sudo ls -l /etc/sudoers /etc/sudoers.d 2>/dev/null
```

### 3. Review network and storage
Capture enough state to spot surprises later.

```bash
ip -br addr
ip route
findmnt -lo TARGET,SOURCE,FSTYPE,OPTIONS
df -hT
```

## ✅ Validation Checkpoints
- The step output matches the documented host role and no new unknown services, users, or listeners appear.

## ⚠️ Warnings
- Never treat an untested config change as finished just because the command returned zero.

## Cleanup / Post-Check
- Store outputs that matter in your host record or change log.

## Next Tutorial
[Next: 03 Users and SSH](./03-users-and-ssh.md)

Next: translate to id
