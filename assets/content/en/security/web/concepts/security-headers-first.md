# 🧩 Security Headers First

## Summary
Security headers first means treating HTTP response headers as a default browser-side control layer, not as optional polish.

## What This Concept Means
Headers such as `Strict-Transport-Security`, `Content-Security-Policy`, `X-Content-Type-Options`, and `Referrer-Policy` change how browsers trust and render your content.

## Why It Matters
Many browser-side attacks exploit permissive defaults. Headers can narrow those defaults quickly and measurably, especially when app fixes will take longer.

## Threat / Exposure Framing
Weak or absent headers expose the site to mixed-content mistakes, MIME confusion, excessive referrer leakage, and weaker clickjacking resistance. Overly strict headers can also break real pages if rolled out carelessly.

## Design Principles
- Audit the live response, not only the config file.
- Start with simpler low-risk headers before enforcing a stricter CSP.
- Treat CSP as an application-change project, not only a proxy setting.
- Keep the final header set short, intentional, and reviewable.

## Operational Tradeoffs
- A strong CSP improves safety but often requires front-end cleanup.
- Header changes are fast to deploy but easy to forget if they are not documented.
- Different apps behind the same edge may need different policies.

## Common Mistakes
- Copying another site’s header set without validating app behavior.
- Enabling HSTS before HTTPS is stable everywhere that matters.
- Ignoring API or subdomain differences when applying one blanket policy.

## Related Docs
- [🧩 Configure CSP](../how-to/configure-csp.md)
- [🔍 Review Security Headers](../how-to/review-security-headers.md)
- [📋 Header Matrix](../reference/header-matrix.md)
- [🧩 04 Security Headers](../tutorials/04-security-headers.md)

Next: translate to id
