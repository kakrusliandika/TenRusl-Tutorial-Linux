# 📁 07 File Permissions

## Objective
Correct risky ownership and world-writable paths.

## Prerequisites
- Sudo access to the host or the relevant inspection path.
- A writable notes file for findings and exceptions.

## Environment Assumptions
- The host is stable enough for review work and any risky edits are backed up first.

## Sequential Steps
### 1. Search for obvious risky modes
World-writable paths deserve explanation or correction.

```bash
sudo find /etc -xdev \( -type f -o -type d \) -perm -0002 -ls
sudo find /usr/local -xdev \( -type f -o -type d \) -perm -0002 -ls
```

### 2. Review sensitive files
Administrative configs should have narrow modes.

```bash
sudo ls -l /etc/ssh/sshd_config /etc/shadow /etc/sudoers 2>/dev/null
sudo find /home -maxdepth 2 -name authorized_keys -ls
```

### 3. Fix specific problems
Change only the paths you understand.

```bash
sudo chmod 600 /path/to/secret
sudo chown root:root /path/to/secret
```

## ✅ Validation Checkpoints
- The step output matches the documented host role and no new unknown services, users, or listeners appear.

## ⚠️ Warnings
- Never treat an untested config change as finished just because the command returned zero.

## Cleanup / Post-Check
- Store outputs that matter in your host record or change log.

## Next Tutorial
[Next: 08 Logging](./08-logging.md)

Next: translate to id
