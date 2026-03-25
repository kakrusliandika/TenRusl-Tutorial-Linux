# 🧾 08 Logging

## Objective
Make the host auditable enough for review and incident response.

## Prerequisites
- Sudo access to the host or the relevant inspection path.
- A writable notes file for findings and exceptions.

## Environment Assumptions
- The host is stable enough for review work and any risky edits are backed up first.

## Sequential Steps
### 1. Review current log sources
Start with journald and auth logs.

```bash
sudo journalctl -b --no-pager | tail -n 50
sudo journalctl -u sshd -u ssh -n 50 --no-pager
```

### 2. Review audit state
Check whether audit logging exists and whether it is useful.

```bash
sudo systemctl status auditd --no-pager 2>/dev/null || true
sudo auditctl -l 2>/dev/null || true
```

### 3. Confirm retention and time sync
Log quality depends on both.

```bash
sudo timedatectl status
sudo logrotate --debug /etc/logrotate.conf 2>/dev/null | tail -n 20 || true
```

## ✅ Validation Checkpoints
- The step output matches the documented host role and no new unknown services, users, or listeners appear.

## ⚠️ Warnings
- Never treat an untested config change as finished just because the command returned zero.

## Cleanup / Post-Check
- Store outputs that matter in your host record or change log.

## Next Tutorial
[Next: 09 Hardening](./09-hardening.md)

Next: translate to id
