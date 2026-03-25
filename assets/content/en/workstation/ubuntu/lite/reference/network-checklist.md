# 📋 Network Checklist

## Purpose
Use this checklist to confirm the Lite workstation has stable network fundamentals before you add large package layers.

## Structured Reference Material
| Check | Why it matters | Command |
|---|---|---|
| Interface detection | Confirms the kernel sees wired and wireless devices | `ip -br link` |
| IP addressing | Confirms DHCP or static config is working | `ip -br addr` |
| Default route | Confirms outbound path exists | `ip route` |
| DNS resolution | Confirms package installs and browsing will work | `resolvectl status` or `getent hosts ubuntu.com` |
| Time sync | Package validation and TLS depend on correct time | `timedatectl` |
| Packet reachability | Confirms basic connectivity | `ping -c 4 1.1.1.1` and `ping -c 4 ubuntu.com` |

## Commands / Inspection Snippets
```bash
ip -br link
ip -br addr
ip route
getent hosts ubuntu.com
timedatectl
```

## Practical Notes
- Run this checklist after install and again after Wi-Fi or VPN changes.
- A browser opening a cached page is not enough evidence that the network is healthy.
- Time sync problems can look like package or certificate problems until you inspect them directly.

## Related Docs
- [🖥️ 03 Install Core](../tutorials/03-install-core.md)
- [🧩 Enable Third-Party Drivers](../how-to/enable-third-party-drivers.md)
- [📋 Post-Install Checklist](./post-install-checklist.md)

Next: translate to id
