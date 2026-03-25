# 🔐 Disable Password Login

## Objective
Move SSH access to keys and remove password-based remote login without locking yourself out.

## Use Case
Use this after every required admin account has a tested SSH key and you have a second session or console path available.

## Prerequisites
- Root or sudo access.
- A tested SSH public key for each required admin.
- A second connected session.

## Environment Assumptions
- The host uses OpenSSH.
- You can reload SSH safely after syntax validation.

## ⚠️ Risk Notes
- Do not close the original session until a new key-based login works.
- If break-glass root SSH must remain, prefer `PermitRootLogin prohibit-password`.

## Step-by-Step Procedure
### 1. Back up the current configuration
Save the active SSH config before editing.

```bash
sudo cp /etc/ssh/sshd_config /etc/ssh/sshd_config.bak.$(date +%F-%H%M%S)
```

### 2. Inspect the effective settings
Confirm the current auth posture first.

```bash
sudo sshd -T | egrep 'passwordauthentication|kbdinteractiveauthentication|pubkeyauthentication|permitrootlogin'
```

### 3. Edit the policy
Enable key auth and disable password-style auth methods.

```bash
sudoedit /etc/ssh/sshd_config
# Ensure these lines are present and not overridden later
PubkeyAuthentication yes
PasswordAuthentication no
KbdInteractiveAuthentication no
PermitRootLogin prohibit-password
```

### 4. Validate and reload
Never reload before a successful syntax check.

```bash
sudo sshd -t
sudo systemctl reload sshd 2>/dev/null || sudo systemctl reload ssh
```

### 5. Test from a new session
Confirm key auth works and password-only auth fails.

```bash
ssh -o PreferredAuthentications=publickey admin@server.example.com
ssh -o PreferredAuthentications=password -o PubkeyAuthentication=no admin@server.example.com
```

## ✅ Validation Checkpoints
- A new key-based login succeeds.
- Password-only login fails.
- The effective config still shows `PasswordAuthentication no`.
- Recent SSH logs are clean.

```bash
sudo sshd -T | egrep 'passwordauthentication|kbdinteractiveauthentication|pubkeyauthentication|permitrootlogin'
sudo journalctl -u sshd -u ssh -n 50 --no-pager
```

## Troubleshooting
- If `sshd -t` fails, review duplicates and malformed directives.
- If key login fails, check permissions on `~/.ssh` and `authorized_keys`.

## ↩️ Rollback / Recovery Notes
- Restore the backup config if validation fails.
- Reload only after the restored config passes `sshd -t`.

```bash
sudo cp /etc/ssh/sshd_config.bak.YYYY-MM-DD-HHMMSS /etc/ssh/sshd_config
sudo sshd -t
sudo systemctl reload sshd 2>/dev/null || sudo systemctl reload ssh
```

## Related Docs
- [🔐 SSH Policy](../concepts/ssh-policy.md)
- [📋 SSH Checklist](../reference/ssh-checklist.md)
- [🔐 03 Users and SSH](../tutorials/03-users-and-ssh.md)

Next: translate to id
