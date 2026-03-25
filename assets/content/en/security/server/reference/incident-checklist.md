# 🚨 Incident Checklist

## Purpose
Use this reference during the first response window on a suspicious Linux server so evidence collection does not get lost in cleanup pressure.

## Structured Reference
### First-response checklist
- Record host identity, responder name, date, and time zone.
- Preserve volatile evidence before rebooting or reloading major services.
- Decide whether containment means network isolation, service stop, or credential rotation.
- Keep one shell for evidence collection and one for containment actions.

### Evidence to preserve
- Process tree and listening sockets.
- Recent auth, sudo, and service logs.
- Copies of suspicious configs, unit files, or scripts.
- Current firewall and SSH posture before editing them.


## Practical Interpretation Notes
- Containment without evidence collection creates blind spots.
- If business pressure forces rapid action, at least capture processes, sockets, and recent logs first.

## Command Snippets
```bash
hostnamectl
sudo ss -tulpn
sudo ps -ef --forest
sudo last -a | head -n 20
sudo journalctl -S -2h --no-pager > /root/incident-journal.txt
```

## Related Docs
- [🧾 Logging Checklist](./logging-checklist.md)
- [🧾 Configure Audit Logging](../how-to/configure-audit-logging.md)
- [🧾 08 Logging](../tutorials/08-logging.md)

Next: translate to id
