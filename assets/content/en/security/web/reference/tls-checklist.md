# 📋 TLS Checklist

## Purpose
Use this checklist to review certificate health, listener scope, and redirect consistency at the public edge.

## Structured Reference
### TLS review points
- The correct hostname and certificate chain are presented on port 443.
- HTTP redirects to HTTPS consistently.
- Alternate ports and stale hostnames are not unexpectedly reachable.
- Certificate renewal ownership and monitoring are documented.
- HSTS is enabled only after HTTPS is stable.


## Practical Interpretation Notes
- A valid certificate alone does not prove a safe TLS surface. Hostname inventory and listener scope matter too.
- Run the check against every public hostname, not just the main one.

## Command Snippets
```bash
curl -I http://example.com
curl -I https://example.com
openssl s_client -connect example.com:443 -servername example.com </dev/null | openssl x509 -noout -subject -issuer -dates
```

## Related Docs
- [🔒 TLS Surface Reduction](../concepts/tls-surface-reduction.md)
- [🔒 Enable HSTS](../how-to/enable-hsts.md)
- [🔒 03 TLS Baseline](../tutorials/03-tls-baseline.md)

Next: translate to id
