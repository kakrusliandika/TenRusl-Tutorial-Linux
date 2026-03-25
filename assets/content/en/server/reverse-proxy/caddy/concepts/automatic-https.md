# 🧠 Automatic HTTPS

## Summary
Automatic HTTPS means Caddy can request, renew, and present certificates when DNS, public reachability, and site identity are all correct.

## What The Concept Means
Caddy sits between the public network and one or more backend services. It owns listeners, TLS termination, request routing, and often certificate automation. The operator still owns DNS correctness, upstream health, firewall reachability, and restore paths.

## Why It Matters On Linux Servers
- It creates a clean edge layer between public traffic and backend services.
- It reduces TLS ceremony while keeping strong operational defaults available.
- It makes shell-based verification of routing and certificate behavior straightforward.

## Design Principles
- Keep the edge configuration small and readable.
- Validate changes with `caddy validate`, `journalctl`, `curl`, and `openssl`.
- Treat DNS and 80 or 443 reachability as prerequisites, not afterthoughts.
- Back up both config and certificate state before risky changes.

## Operational Tradeoffs
- Automatic HTTPS is convenient, but only when DNS and listener ownership are correct.
- A simple Caddyfile is easier to maintain, but complex site routing still deserves documentation.
- Running the edge and the app on one host is convenient, but increases blast radius unless boundaries stay clear.

## Common Mistakes
- Blaming TLS before confirming DNS and port reachability.
- Letting multiple web servers compete for 80 or 443.
- Forgetting that certificate state is backup-sensitive data.
- Testing only from a browser instead of from the shell.

## Related Docs
- [🌐 Add a New Site](../how-to/add-new-site.md)
- [📋 Service Map](../reference/service-map.md)
- [🛡️ Security](../../../../security/index.md)

Next: translate to id
