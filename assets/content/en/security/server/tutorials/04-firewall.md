# 🌐 04 Firewall

## Objective
Reduce exposure and document allowed traffic.

## Prerequisites
- Sudo access to the host or the relevant inspection path.
- A writable notes file for findings and exceptions.

## Environment Assumptions
- The host is stable enough for review work and any risky edits are backed up first.

## Sequential Steps
### 1. Save current firewall state
Do this before any policy change.

```bash
sudo nft list ruleset > nft-before.txt 2>/dev/null || true
sudo ufw status verbose > ufw-before.txt 2>/dev/null || true
```

### 2. Compare open ports to intended services
Do not rely on the firewall alone.

```bash
sudo ss -tulpn
sudo systemctl --type=service --state=running --no-pager
```

### 3. Re-check the active firewall view
Confirm the current policy matches the role.

```bash
sudo nft list ruleset 2>/dev/null || true
sudo ufw status numbered 2>/dev/null || true
sudo firewall-cmd --list-all 2>/dev/null || true
```

## ✅ Validation Checkpoints
- The step output matches the documented host role and no new unknown services, users, or listeners appear.

## ⚠️ Warnings
- Never treat an untested config change as finished just because the command returned zero.

## Cleanup / Post-Check
- Store outputs that matter in your host record or change log.

## Next Tutorial
[Next: 05 Updates](./05-updates.md)

Next: translate to id
