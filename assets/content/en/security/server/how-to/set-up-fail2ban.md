# 🚨 Set Up Fail2ban

## Objective
Add a lightweight host-side control that reacts to repeated authentication abuse on exposed services.

## Use Case
Use this when SSH or another log-producing service is internet reachable and you want noisy brute-force traffic to slow down.

## Prerequisites
- Root or sudo access.
- A service with readable logs, usually SSH.
- A supported firewall backend.

## Environment Assumptions
- The starting point is usually an SSH jail.
- Fail2ban supports the baseline but does not replace good SSH policy.

## ⚠️ Risk Notes
- If the log source is wrong, bans will never trigger.
- Aggressive thresholds can ban legitimate operators.

## Step-by-Step Procedure
### 1. Install the package
Use the package manager available on the host.

```bash
if command -v apt >/dev/null 2>&1; then
  sudo apt update && sudo apt install -y fail2ban
elif command -v dnf >/dev/null 2>&1; then
  sudo dnf install -y fail2ban fail2ban-firewalld
fi
```

### 2. Create a local jail policy
Keep local policy in `jail.local` or an equivalent drop-in.

```bash
cat <<'EOF' | sudo tee /etc/fail2ban/jail.local
[DEFAULT]
bantime = 1h
findtime = 10m
maxretry = 5
backend = systemd

[sshd]
enabled = true
port = ssh
logpath = %(sshd_log)s
EOF
```

### 3. Enable and inspect the service
Confirm that the intended jail is loaded.

```bash
sudo systemctl enable --now fail2ban
sudo fail2ban-client status
sudo fail2ban-client status sshd
```

## ✅ Validation Checkpoints
- The service is active.
- The intended jail appears in `fail2ban-client status`.
- Recent fail2ban logs show normal startup.

```bash
sudo systemctl status fail2ban --no-pager
sudo fail2ban-client status
sudo journalctl -u fail2ban -n 100 --no-pager
```

## Troubleshooting
- If the SSH jail shows no activity, verify the backend and the log source.
- If bans do not apply, inspect firewall-backend support on the host.

## ↩️ Rollback / Recovery Notes
- Disable the service and remove the local jail if it causes production impact.
- Unban trusted addresses manually before re-enabling the policy.

```bash
sudo fail2ban-client set sshd unbanip 203.0.113.10
sudo systemctl disable --now fail2ban
```

## Related Docs
- [🔐 SSH Policy](../concepts/ssh-policy.md)
- [🔐 Disable Password Login](./disable-password-login.md)
- [📋 SSH Checklist](../reference/ssh-checklist.md)

Next: translate to id
