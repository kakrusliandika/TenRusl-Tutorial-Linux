# 🔒 Enable HSTS

## Objective
Enable HTTP Strict Transport Security after HTTPS is stable and complete.

## Use Case
Use this when the site already redirects cleanly to HTTPS and you want browsers to stop using insecure HTTP for repeat visits.

## Prerequisites
- A valid HTTPS deployment for the target hostname.
- No remaining mixed-content or HTTP-only dependency that users still need.
- A rollback copy of the edge config.

## Environment Assumptions
- HSTS should only be enabled after HTTPS is consistent across the hostname you are protecting.
- Be especially careful with subdomains if you plan to widen scope later.

## ⚠️ Risk Notes
- Once browsers cache HSTS, mistakes are harder to reverse quickly.
- Do not treat preload-style behavior casually.

## Step-by-Step Procedure
### 1. Confirm HTTPS and redirect behavior
Check transport before sending strict instructions to browsers.

```bash
curl -I http://example.com
curl -I https://example.com
openssl s_client -connect example.com:443 -servername example.com </dev/null | openssl x509 -noout -subject -issuer -dates
```

### 2. Add a conservative HSTS header
Start with a shorter max-age if the site is new to HSTS.

```bash
# Nginx example
add_header Strict-Transport-Security "max-age=86400" always;

# Caddy example
header {
  Strict-Transport-Security "max-age=86400"
}
```

### 3. Reload and test
The live HTTPS response should now include HSTS.

```bash
curl -I https://example.com | grep -i strict-transport-security
curl -I http://example.com
```

## ✅ Validation Checkpoints
- HTTPS responses include the HSTS header.
- HTTP still redirects to HTTPS.
- No application dependency still requires plain HTTP.

## Troubleshooting
- If the header is missing, inspect the active site block and the reload status.
- If users report breakage, review embedded HTTP resources or legacy callback URLs.

## ↩️ Rollback / Recovery Notes
- Remove the header and reload the web server if the rollout must be reversed.
- Remember cached browser behavior may persist if you later raised max-age significantly.

## Related Docs
- [🔒 TLS Surface Reduction](../concepts/tls-surface-reduction.md)
- [📋 TLS Checklist](../reference/tls-checklist.md)
- [🔒 03 TLS Baseline](../tutorials/03-tls-baseline.md)

Next: translate to id
