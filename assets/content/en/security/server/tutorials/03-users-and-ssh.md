# 🔐 03 Users and SSH

## Objective
Stabilize admin identity, key distribution, and remote access policy.

## Prerequisites
- Sudo access to the host or the relevant inspection path.
- A writable notes file for findings and exceptions.

## Environment Assumptions
- The host is stable enough for review work and any risky edits are backed up first.

## Sequential Steps
### 1. Create or review the named admin account
Avoid shared identities.

```bash
sudo useradd -m -s /bin/bash adminops 2>/dev/null || true
sudo usermod -aG sudo adminops 2>/dev/null || sudo usermod -aG wheel adminops 2>/dev/null || true
id adminops
```

### 2. Install the admin public key
Set correct permissions before touching SSH policy.

```bash
sudo install -d -m 700 -o adminops -g adminops /home/adminops/.ssh
sudo install -m 600 -o adminops -g adminops /dev/null /home/adminops/.ssh/authorized_keys
sudoedit /home/adminops/.ssh/authorized_keys
```

### 3. Validate SSH posture
Syntax-check before reload.

```bash
sudo sshd -t
sudo systemctl reload sshd 2>/dev/null || sudo systemctl reload ssh
```

## ✅ Validation Checkpoints
- The step output matches the documented host role and no new unknown services, users, or listeners appear.

## ⚠️ Warnings
- Never treat an untested config change as finished just because the command returned zero.

## Cleanup / Post-Check
- Store outputs that matter in your host record or change log.

## Next Tutorial
[Next: 04 Firewall](./04-firewall.md)

Next: translate to id
