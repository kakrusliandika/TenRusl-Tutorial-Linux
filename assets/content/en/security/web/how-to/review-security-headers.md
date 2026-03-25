# 🔍 Review Security Headers

## Objective
Inspect the live response headers and decide which browser-side controls are missing, weak, or inconsistent.

## Use Case
Use this as a fast audit step before deploying CSP, HSTS, or a broader edge hardening pass.

## Prerequisites
- Shell access from any host that can reach the site.
- A list of hostnames or endpoints to review.

## Environment Assumptions
- This is a live-response review, not only a config review.
- The examples use `curl` because it is present on most Linux systems.

## ⚠️ Risk Notes
- Do not treat a single good response as proof that every hostname or vhost is consistent.

## Step-by-Step Procedure
### 1. Fetch the response headers
Start with the canonical HTTPS hostname.

```bash
curl -I https://example.com
```

### 2. Check expected security headers
Look for transport, content-type, framing, and referrer controls.

```bash
curl -I https://example.com | egrep -i 'strict-transport-security|content-security-policy|x-content-type-options|referrer-policy|x-frame-options' || true
```

### 3. Compare multiple hostnames or paths
APIs, dashboards, and alternate hosts may behave differently.

```bash
for url in https://example.com https://www.example.com https://api.example.com; do
  echo "=== $url ==="
  curl -I "$url" | egrep -i 'HTTP/|server:|strict-transport-security|content-security-policy|x-content-type-options|referrer-policy|x-frame-options' || true
done
```

## ✅ Validation Checkpoints
- You can describe which headers are present, missing, or inconsistent.
- You know whether the site is ready for stricter CSP or HSTS rollout.

## Troubleshooting
- If a header appears on one hostname but not another, inspect vhost separation, CDN behavior, or proxy config inheritance.
- If a header is duplicated, review whether both the app and proxy set it.

## ↩️ Rollback / Recovery Notes
- This procedure is read-only. The rollback is simply to avoid making changes until the audit is written down.

## Related Docs
- [🧩 Security Headers First](../concepts/security-headers-first.md)
- [📋 Header Matrix](../reference/header-matrix.md)
- [🧩 04 Security Headers](../tutorials/04-security-headers.md)

Next: translate to id
