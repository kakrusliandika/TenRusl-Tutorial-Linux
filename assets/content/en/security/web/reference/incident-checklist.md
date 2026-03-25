# 🚨 Incident Checklist

## Purpose
Use this checklist when the public edge behaves suspiciously, shows abuse patterns, or appears compromised.

## Structured Reference
### First-response checklist
- Record affected hostname, path, time, and client symptoms.
- Preserve access and error logs before rotation or cleanup.
- Decide whether containment means disabling a route, limiting a source, rotating credentials, or isolating a backend.
- Capture the active edge config before editing it.

### Evidence to preserve
- Recent access and error logs.
- Current response headers and TLS details.
- Current edge config and recent deployment history.
- Monitoring alerts or unusual rate-limit events.


## Practical Interpretation Notes
- Do not restart or reload the edge before preserving logs and the active config if the incident is still unfolding.
- If a CDN or managed edge is involved, collect provider-side evidence together with on-host logs.

## Command Snippets
```bash
curl -I https://example.com
openssl s_client -connect example.com:443 -servername example.com </dev/null | tail -n 20
sudo tar czf web-edge-config-$(date +%F-%H%M%S).tgz /etc/nginx /etc/caddy 2>/dev/null || true
sudo journalctl -u nginx -u caddy -S -2h --no-pager > web-edge-journal.txt 2>/dev/null || true
```

## Related Docs
- [🧾 Logging Checklist](./logging-checklist.md)
- [📋 TLS Checklist](./tls-checklist.md)
- [📝 07 Logging](../tutorials/07-logging.md)

Next: translate to id
