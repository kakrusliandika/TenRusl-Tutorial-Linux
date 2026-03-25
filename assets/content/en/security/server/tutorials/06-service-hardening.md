# 🧰 06 Service Hardening

## Objective
Remove or tighten unnecessary services.

## Prerequisites
- Sudo access to the host or the relevant inspection path.
- A writable notes file for findings and exceptions.

## Environment Assumptions
- The host is stable enough for review work and any risky edits are backed up first.

## Sequential Steps
### 1. Review enabled units
Unused services should disappear before deeper hardening.

```bash
sudo systemctl list-unit-files --state=enabled --no-pager | sed -n "1,80p"
```

### 2. Disable obvious leftovers
Only after confirming the host role does not need them.

```bash
sudo systemctl disable --now avahi-daemon 2>/dev/null || true
sudo systemctl disable --now cups 2>/dev/null || true
```

### 3. Review unit hardening options
Use service drop-ins carefully.

```bash
sudo systemctl cat sshd 2>/dev/null || sudo systemctl cat ssh
sudo systemctl edit sshd 2>/dev/null || sudo systemctl edit ssh
```

## ✅ Validation Checkpoints
- The step output matches the documented host role and no new unknown services, users, or listeners appear.

## ⚠️ Warnings
- Never treat an untested config change as finished just because the command returned zero.

## Cleanup / Post-Check
- Store outputs that matter in your host record or change log.

## Next Tutorial
[Next: 07 File Permissions](./07-file-permissions.md)

Next: translate to id
