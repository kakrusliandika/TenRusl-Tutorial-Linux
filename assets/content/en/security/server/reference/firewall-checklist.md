# 📋 Firewall Checklist

## Purpose
Use this checklist to verify that exposed services, host rules, and intended traffic still agree after change.

## Structured Reference
| Check | Why it matters | Quick verification |
| --- | --- | --- |
| Default inbound stance is documented | Prevents silent rule drift | `sudo nft list ruleset` |
| Every open port has a service owner | Reduces orphaned listeners | `sudo ss -tulpn` |
| Admin ports are source-restricted where possible | Shrinks brute-force exposure | Review host and upstream rules |
| Egress expectations are understood | Limits hidden outbound paths | Inspect firewall and route policy |
| Temporary exceptions have expiry notes | Prevents permanent emergency holes | Review change notes |

## Practical Interpretation Notes
- A firewall review is incomplete unless you compare listeners, rules, and upstream controls together.
- If the host role changed recently, rebuild the service map before trusting the rule set.

## Command Snippets
```bash
sudo ss -tulpn
sudo nft list ruleset 2>/dev/null || true
sudo ufw status verbose 2>/dev/null || true
sudo firewall-cmd --list-all 2>/dev/null || true
```

## Related Docs
- [🌐 Review Open Ports](../how-to/review-open-ports.md)
- [🌐 04 Firewall](../tutorials/04-firewall.md)
- [🛡️ Server Security](../index.md)

Next: translate to id
