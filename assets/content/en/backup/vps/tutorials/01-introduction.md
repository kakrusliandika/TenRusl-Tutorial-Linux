# 🧭 Tutorial 01: Introduction

## Objective
Define what the VPS backup must contain so the rebuild path is clear before any archive is created.

## Prerequisites
- Root or sudo access to the VPS.
- Backup storage separate from the workload disk.
- A clean target VPS or rehearsal target for restore testing.

## Environment Assumptions
- The VPS hosts one or more Linux services that must survive rebuild.

## Sequential Steps
### 1. Inventory the important paths
List config, app data, databases, and any secrets references that the rebuild will need.

```bash
hostnamectl
printf '%s\n' /etc /var/www /srv /home > /tmp/vps-backup-scope.txt
cat /tmp/vps-backup-scope.txt
```

### 2. Inspect running services and open ports
This tells you what must work again after restore.

```bash
systemctl list-units --type=service --state=running
ss -tulpn
```

## ✅ Validation Checkpoints
- You have a first draft of backup scope and the current service map.

## ⚠️ Warnings
- Do not assume the entire filesystem needs to be archived blindly.

## Cleanup / Post-Check
- Refine the scope notes before installing or confirming tooling.

## Next Tutorial
[🧰 Tutorial 02: Prepare Tools](./02-prepare-tools.md)

Next: translate to id
