# 📋 Troubleshooting Index

## Purpose
Use this index to map workstation symptoms to the first Linux commands you should run before guessing at fixes.

## Structured Reference Material
| Symptom | First commands | Likely area |
|---|---|---|
| System does not boot | `lsblk -f`, `journalctl -xb`, `efibootmgr -v` | GRUB, disk layout, boot mode |
| Graphical login fails | `systemctl status display-manager`, `journalctl -b -u display-manager` | GPU stack, display manager |
| No Wi-Fi | `ip -br link`, `nmcli device`, `lspci -nnk` | Driver or NetworkManager |
| No sound | `aplay -l`, `pactl list short sinks`, `journalctl --user -b` | Audio stack or device selection |
| Package errors | `dpkg --configure -a`, `apt --fix-broken install` | Interrupted package state |
| Slow system | `systemd-analyze`, `free -h`, `top` | Memory pressure, service sprawl |

## Commands / Inspection Snippets
```bash
systemctl --failed
journalctl -xb -p warning..alert | tail -n 80
dmesg -T | tail -n 80
```

## Practical Notes
- Always identify the failure domain before you change packages or config.
- If the symptom appeared right after one change, start there instead of making five more changes.
- When the evidence becomes unclear, fall back to the rollback plan.

## Related Docs
- [🚑 Recover After a Failed Boot](../how-to/recover-after-failed-boot.md)
- [↩️ Rollback Plan](../how-to/rollback-plan.md)
- [📋 Post-Install Checklist](./post-install-checklist.md)

Next: translate to id
