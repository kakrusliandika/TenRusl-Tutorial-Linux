# 📋 Hardware Requirements

## Purpose
Use this guide to decide whether the machine can sustain the broader Standard desktop profile comfortably.

## Structured Reference Material
| Resource | Minimum realistic | Comfortable Standard target | Notes |
|---|---|---|---|
| CPU | Modern 2-core and 4-thread | 4 or more cores | Background desktop services and browsers benefit from stronger CPUs |
| RAM | 8 GiB | 16 GiB | Standard remains usable on 8 GiB, but multitasking improves significantly above that |
| Storage | 64 GiB SSD | 128 GiB or more SSD | Media, office caches, dev tools, and updates need room |
| Graphics | Stable integrated GPU | Integrated or supported discrete GPU | GNOME-class desktops want reliable graphics more than extreme performance |
| Network | Stable wired or Wi-Fi | Reliable dual-band Wi-Fi or docked Ethernet | Important for updates, remote work, and media workloads |

## Commands / Inspection Snippets
```bash
lscpu | sed -n '1,20p'
free -h
lsblk -d -o NAME,SIZE,MODEL,ROTA
```

## Practical Notes
- A machine that technically boots Standard may still feel poor if RAM or SSD headroom is too tight.
- When in doubt, compare the hardware against the actual user workload, not just the installer minimum.

## Related Docs
- [🧠 When To Choose Standard](../concepts/when-to-choose-standard.md)
- [📋 02 Install Preflight](../tutorials/02-install-preflight.md)
- [💻 Ubuntu Lite Hardware Reference](../../lite/reference/hardware-requirements.md)

Next: translate to id
