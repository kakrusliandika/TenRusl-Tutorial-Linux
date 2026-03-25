# 📋 Header Matrix

## Purpose
Use this compact matrix to review whether the public edge exposes the minimum browser-side security headers you expect.

## Structured Reference
| Header | Typical purpose | Review note |
| --- | --- | --- |
| `Strict-Transport-Security` | Keeps repeat visits on HTTPS | Enable only after HTTPS is stable |
| `Content-Security-Policy` | Restricts script and resource trust | Often needs staged rollout |
| `X-Content-Type-Options: nosniff` | Prevents MIME sniffing surprises | Low-risk baseline header |
| `Referrer-Policy` | Limits referrer leakage | Choose a value that fits analytics needs |
| `X-Frame-Options` or CSP `frame-ancestors` | Limits clickjacking exposure | Prefer one intentional framing policy |


## Practical Interpretation Notes
- Not every site needs the same final header set, but every public site benefits from a deliberate one.
- If both the app and the proxy set the same header, make sure the final response is consistent.

## Command Snippets
```bash
curl -I https://example.com | egrep -i 'strict-transport-security|content-security-policy|x-content-type-options|referrer-policy|x-frame-options' || true
```

## Related Docs
- [🔍 Review Security Headers](../how-to/review-security-headers.md)
- [🧩 Configure CSP](../how-to/configure-csp.md)
- [🧩 04 Security Headers](../tutorials/04-security-headers.md)

Next: translate to id
