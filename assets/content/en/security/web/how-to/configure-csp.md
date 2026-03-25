# 🧩 Configure CSP

## Objective
Introduce a Content-Security-Policy that reduces script and resource trust without breaking the site blindly.

## Use Case
Use this when the site is ready for a more deliberate browser-side policy than a basic header baseline.

## Prerequisites
- A staging environment or safe rollout window.
- Access to the reverse proxy or web-server config.
- A way to test site behavior after deployment.

## Environment Assumptions
- Examples below show Nginx and Caddy because both are common Linux-side edge tools.
- Legacy apps with inline scripts may need a report-only or staged rollout first.

## ⚠️ Risk Notes
- A strict CSP can break login flows, front-end logic, or third-party integrations.
- Do not enforce a production CSP if you do not yet understand the site’s current script behavior.

## Step-by-Step Procedure
### 1. Draft a minimal policy
Start with a small allow-list that reflects the real application.

```bash
echo "default-src 'self'; img-src 'self' data:; object-src 'none'; base-uri 'self'; frame-ancestors 'none'"
```

### 2. Apply the policy in the edge config
Keep the config change reviewable and versioned.

```bash
# Nginx example
add_header Content-Security-Policy "default-src 'self'; img-src 'self' data:; object-src 'none'; base-uri 'self'; frame-ancestors 'none'" always;

# Caddy example
header {
  Content-Security-Policy "default-src 'self'; img-src 'self' data:; object-src 'none'; base-uri 'self'; frame-ancestors 'none'"
}
```

### 3. Validate the live response
Do not trust the config file alone.

```bash
curl -I https://example.com | grep -i content-security-policy
curl -I https://example.com | grep -i x-content-type-options
```

## ✅ Validation Checkpoints
- The live response contains the intended CSP.
- The application still renders and logs in successfully.
- If report-only is used first, the reports are collected somewhere useful.

## Troubleshooting
- If the site breaks, inspect browser console output and identify which directive blocked the content.
- If the header is missing live, test and reload the web-server config before assuming the app removed it.

## ↩️ Rollback / Recovery Notes
- Restore the previous config if the policy breaks essential functionality.
- Keep the last known-good edge config until the rollout is stable.

## Related Docs
- [🧩 Security Headers First](../concepts/security-headers-first.md)
- [🔍 Review Security Headers](./review-security-headers.md)
- [🧩 04 Security Headers](../tutorials/04-security-headers.md)

Next: translate to id
