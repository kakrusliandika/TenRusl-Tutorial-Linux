# 🧾 Configure Audit Logging

## Objective
Enable host-side audit logging for privileged actions and sensitive file changes.

## Use Case
Use this when standard service logs are not enough for accountability or incident reconstruction.

## Prerequisites
- Root or sudo access.
- Enough storage for audit logs.
- A backup of existing audit rules.

## Environment Assumptions
- Examples below use `auditd` because it is common on Linux servers.
- Package names vary slightly across Debian/Ubuntu and RHEL-like systems.

## ⚠️ Risk Notes
- Broad audit rules can generate noisy logs and unnecessary disk pressure.
- Do not replace an existing managed rule set without reviewing it first.

## Step-by-Step Procedure
### 1. Install and enable auditd
Use the host package manager and start the service.

```bash
if command -v apt >/dev/null 2>&1; then
  sudo apt update && sudo apt install -y auditd audispd-plugins
elif command -v dnf >/dev/null 2>&1; then
  sudo dnf install -y audit audit-libs
fi
sudo systemctl enable --now auditd
```

### 2. Back up and review the current rules
Capture the current policy before adding more.

```bash
sudo mkdir -p /root/audit-backups
sudo cp -a /etc/audit /root/audit-backups/audit.$(date +%F-%H%M%S)
sudo auditctl -l
```

### 3. Add focused rules
Start with identity files and privileged execution.

```bash
cat <<'EOF' | sudo tee /etc/audit/rules.d/99-security-baseline.rules
-w /etc/passwd -p wa -k identity
-w /etc/group -p wa -k identity
-w /etc/sudoers -p wa -k privilege
-w /etc/ssh/sshd_config -p wa -k ssh_policy
-a always,exit -F arch=b64 -S execve -C uid!=euid -F euid=0 -k privileged_exec
EOF
sudo augenrules --load
```

### 4. Generate and query a test event
Validate that events can be found by rule key.

```bash
sudo true
sudo ausearch -k privileged_exec --start recent
sudo ausearch -k ssh_policy --start recent
```

## ✅ Validation Checkpoints
- `auditd` is active and enabled.
- The custom rules appear after `augenrules --load`.
- A test event can be found with `ausearch`.

```bash
sudo systemctl status auditd --no-pager
sudo auditctl -l
sudo ausearch -k privileged_exec --start today | tail -n 20
```

## Troubleshooting
- If `auditd` will not start, inspect `journalctl -u auditd` and rule syntax.
- If events are missing, confirm the action actually matches the rule conditions.

## ↩️ Rollback / Recovery Notes
- Remove the custom rules file and reload the baseline if needed.

```bash
sudo rm -f /etc/audit/rules.d/99-security-baseline.rules
sudo augenrules --load
sudo systemctl restart auditd
```

## Related Docs
- [🧠 Hardening Baseline](../concepts/hardening-baseline.md)
- [🧾 Logging Checklist](../reference/logging-checklist.md)
- [🧾 08 Logging](../tutorials/08-logging.md)

Next: translate to id
