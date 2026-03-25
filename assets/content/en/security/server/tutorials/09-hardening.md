# ✅ 09 Hardening

## Objective
Run a final host review and record remaining exceptions.

## Prerequisites
- Sudo access to the host or the relevant inspection path.
- A writable notes file for findings and exceptions.

## Environment Assumptions
- The host is stable enough for review work and any risky edits are backed up first.

## Sequential Steps
### 1. Re-run core baseline checks
Use the commands you will trust later.

```bash
hostnamectl
sudo ss -tulpn
sudo systemctl --failed --no-pager
sudo sshd -T | egrep "passwordauthentication|permitrootlogin|pubkeyauthentication"
```

### 2. Review access and logging again
Hardening is a combination of controls.

```bash
getent passwd | grep -E "/bin/(bash|zsh|sh)$"
sudo journalctl -u sshd -u ssh -n 30 --no-pager
sudo auditctl -l 2>/dev/null || true
```

### 3. Record unresolved exceptions
Temporary exceptions must be visible to the next operator.

```bash
printf "%s\n" "Open exceptions:" "Next review date:" >> security-baseline-notes.txt
```

## ✅ Validation Checkpoints
- The step output matches the documented host role and no new unknown services, users, or listeners appear.

## ⚠️ Warnings
- Never treat an untested config change as finished just because the command returned zero.

## Cleanup / Post-Check
- Store outputs that matter in your host record or change log.

## Next Tutorial
[Next: 10 Closeout](./10-closeout.md)

Next: translate to id
