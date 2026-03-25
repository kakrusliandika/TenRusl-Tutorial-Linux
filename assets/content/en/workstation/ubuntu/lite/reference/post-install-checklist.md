# 📋 Post-Install Checklist

## Purpose
Use this checklist after the first successful boot and again before calling the workstation finished.

## Structured Reference Material
| Area | What to confirm |
|---|---|
| Boot | Boots without USB, expected boot mode, stable reboot |
| Storage | Correct mount points, enough free space, no mystery partitions |
| Network | Interfaces, DNS, route, time sync |
| Graphics | Login works, expected resolution, no immediate rendering issues |
| Audio | Output and input devices visible if the workstation needs them |
| Packages | No broken dependencies, package metadata current |
| Logs | No obvious repeating errors after first update and reboot |
| Recovery | Installer USB retained, rollback notes written |

## Commands / Inspection Snippets
```bash
lsblk -f
ip -br addr
systemctl --failed
journalctl -p err -b --no-pager | tail -n 40
df -h /
```

## Practical Notes
- Run the checklist before large package additions and again at closeout.
- A successful login is not enough; treat boot, network, and logs as first-class validation surfaces.

## Related Docs
- [📋 Network Checklist](./network-checklist.md)
- [🧹 09 Cleanup](../tutorials/09-cleanup.md)
- [📘 10 Closeout](../tutorials/10-closeout.md)

Next: translate to id
