# 🧾 Logging Checklist

## Purpose
Use this checklist to verify that the host keeps the operational and security evidence you will actually need later.

## Structured Reference
| Logging area | Minimum expectation | Why it matters |
| --- | --- | --- |
| `journald` or syslog | Service starts, failures, auth activity | Reconstructs system behavior |
| SSH logs | Success and failure events | Explains remote-admin activity |
| Audit logs | Privileged actions or watched file changes | Improves accountability |
| Rotation | Retention and storage limits are defined | Prevents disk exhaustion |
| Time sync | Host clock is accurate | Makes timelines reliable |

## Practical Interpretation Notes
- Logs that cannot survive rotation, disk pressure, or time drift are weak evidence.
- High-volume logging without retention planning creates a different operational risk.

## Command Snippets
```bash
sudo journalctl -b --no-pager | tail -n 50
sudo journalctl -u sshd -u ssh -n 50 --no-pager
sudo timedatectl status
sudo ausearch -ts today 2>/dev/null | tail -n 20 || true
```

## Related Docs
- [🧾 Configure Audit Logging](../how-to/configure-audit-logging.md)
- [🚨 Incident Checklist](./incident-checklist.md)
- [🧾 08 Logging](../tutorials/08-logging.md)

Next: translate to id
