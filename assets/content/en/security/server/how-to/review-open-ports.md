# 🌐 Review Open Ports

## Objective
Inventory the host’s real listeners and compare them to intended service exposure.

## Use Case
Use this after software installs, before firewall changes, and whenever the host role changes.

## Prerequisites
- Root or sudo access.
- A written idea of what the server is supposed to run.
- Optional access from a second host for an external scan.

## Environment Assumptions
- The host provides `ss` and `systemctl`.
- One or more firewall tools may be present depending on distro policy.

## ⚠️ Risk Notes
- Do not close ports blindly without identifying the owning service.
- Remember localhost-only listeners still matter for internal abuse paths.

## Step-by-Step Procedure
### 1. Capture the current listener inventory
Collect TCP and UDP listeners with owning processes.

```bash
sudo ss -tulpn
sudo lsof -i -P -n | grep LISTEN || true
```

### 2. Compare listeners to running services
Find the service units that likely own those ports.

```bash
sudo systemctl list-units --type=service --state=running --no-pager
sudo systemctl list-unit-files --state=enabled --no-pager
```

### 3. Review firewall posture
Check whether the host firewall matches the listener inventory.

```bash
sudo nft list ruleset 2>/dev/null || true
sudo ufw status verbose 2>/dev/null || true
sudo firewall-cmd --list-all 2>/dev/null || true
```

### 4. Validate externally if possible
A remote scan catches surprises that a localhost review can miss.

```bash
nmap -Pn -sT -sU --top-ports 50 server.example.com
```

## ✅ Validation Checkpoints
- Every listening port maps to an expected service.
- Unexpected listeners are disabled, firewalled, or documented as exceptions.
- External scan results match the intended exposure.

## Troubleshooting
- If a port reappears after stopping a service, review socket units, containers, and supervisors.
- If the external view shows more ports than expected, inspect upstream firewalls and load balancers too.

## ↩️ Rollback / Recovery Notes
- Restore the last known-good firewall or service state if cleanup breaks the application path.

## Related Docs
- [🧠 Hardening Baseline](../concepts/hardening-baseline.md)
- [📋 Firewall Checklist](../reference/firewall-checklist.md)
- [🌐 04 Firewall](../tutorials/04-firewall.md)

Next: translate to id
