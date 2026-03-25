# 🚦 Set Up Rate Limiting

## Objective
Apply a basic rate-limiting control at the web edge so repetitive abuse slows down before it reaches the application core.

## Use Case
Use this when login paths, APIs, or public endpoints are attracting repeated abuse or noisy probing.

## Prerequisites
- A reverse proxy or web server that can enforce request-rate controls.
- An understanding of which paths are high-risk.
- A safe test path that will not create a customer-visible outage.

## Environment Assumptions
- The example below uses Nginx because it offers a common Linux-side pattern.
- If your edge uses another tool, translate the same intent instead of copying syntax blindly.

## ⚠️ Risk Notes
- Overly strict rate limits can block normal users, health checks, or automation.
- Rate limiting does not replace authentication, patching, or app-layer protections.

## Step-by-Step Procedure
### 1. Choose a narrow starting target
Login paths and high-cost endpoints are better first targets than the whole site.

```bash
printf "%s\n" "/login" "/wp-login.php" "/api/auth" > rate-limit-targets.txt
```

### 2. Apply a conservative Nginx limit
Start small and test before expanding.

```bash
# Nginx example
limit_req_zone $binary_remote_addr zone=loginlimit:10m rate=5r/m;
location /login {
    limit_req zone=loginlimit burst=10 nodelay;
    proxy_pass http://app_backend;
}
```

### 3. Validate with repeated requests
Use a small loop to confirm the control triggers.

```bash
for i in $(seq 1 20); do
  curl -s -o /dev/null -w "%{http_code}\n" https://example.com/login
done
```

## ✅ Validation Checkpoints
- Normal traffic still works.
- Repeated requests show the intended behavior such as 429 or throttling.
- The logs record enough detail to explain why requests were limited.

## Troubleshooting
- If legitimate clients are blocked, widen the rate window or narrow the target location.
- If you see no effect, verify the requests are actually reaching the edge where the rule was applied.

## ↩️ Rollback / Recovery Notes
- Restore the previous config if the rule causes production impact.
- Keep a copy of the last known-good edge config before expanding scope.

## Related Docs
- [🧠 Web Hardening Baseline](../concepts/web-hardening-baseline.md)
- [🧾 Logging Checklist](../reference/logging-checklist.md)
- [🚦 05 Rate Limiting](../tutorials/05-rate-limiting.md)

Next: translate to id
