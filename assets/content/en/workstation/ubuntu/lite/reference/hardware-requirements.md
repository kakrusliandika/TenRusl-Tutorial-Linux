# 📋 Hardware Requirements

## Purpose
Use this hardware guide to judge whether Ubuntu Lite is actually the right fit for the target workstation.

## Structured Reference Material
| Resource | Barely workable | Comfortable for Lite | Notes |
|---|---|---|---|
| CPU | 2 cores with 64-bit support | 4 or more modern cores | Check power-management behavior separately if the workstation also runs local labs |
| RAM | 4 GiB | 8 GiB or more | Lite benefits greatly from more RAM when browsers and dev tools appear later |
| Storage | 32 to 64 GiB | 128 GiB or more SSD | Leave headroom for updates, logs, browser caches, and optional packages |
| Graphics | Basic integrated GPU | Any stable integrated or supported discrete GPU | Driver quality matters more than raw power for Lite |
| Networking | Wired or supported Wi-Fi | Reliable Wi-Fi plus Ethernet or dock support | Test after install, not just in the live session |

## Commands / Inspection Snippets
```bash
lscpu | sed -n '1,20p'
free -h
lsblk -d -o NAME,SIZE,MODEL,ROTA
lspci -nnk | grep -A3 -Ei 'VGA|3D|Network'
```

## Practical Notes
- Lite can run on weaker hardware than Standard, but very weak hardware still needs realistic expectations.
- SSD storage improves the perceived quality of Lite more than many users expect.
- Suspend, resume, and Wi-Fi stability can matter more than raw benchmark numbers on a real laptop.

## Related Docs
- [🧠 Lite vs Standard](../concepts/lite-vs-standard.md)
- [📋 02 Install Preflight](../tutorials/02-install-preflight.md)
- [📋 Network Checklist](./network-checklist.md)

Next: translate to id
