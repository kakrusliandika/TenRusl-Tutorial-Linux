# 🧠 Web Hardening Baseline

## Summary
A web hardening baseline is the minimum public-edge security state every site or API should meet before it is called production-ready.

## What This Concept Means
It includes TLS posture, redirect policy, security headers, admin-path restrictions, rate limiting, logging, rollback planning, and a simple incident workflow.

## Why It Matters
Public web services are continuously probed. A baseline gives the team a repeatable place to start instead of relying on whatever the last deploy happened to leave behind.

## Threat / Exposure Framing
Weak or inconsistent edge posture exposes old hostnames, weak redirects, missing headers, noisy admin paths, and poor evidence when something goes wrong.

## Design Principles
- Start with the edge: DNS, listeners, TLS, redirects, and headers.
- Use simple validation tools such as `curl`, `openssl`, and config tests after every change.
- Keep protective controls measurable and reversible.
- Document exceptions, especially for legacy apps.

## Operational Tradeoffs
- Strict headers and CSP improve safety but can break legacy front-end behavior until the app is cleaned up.
- Aggressive rate limits help against abuse but can punish normal automation or shared-IP users.
- Very strict TLS posture may require explicit compatibility decisions.

## Common Mistakes
- Assuming HTTPS alone means the edge is hardened.
- Deploying headers without validating live behavior.
- Treating logs as an afterthought until an incident starts.

## Related Docs
- [🧩 Security Headers First](./security-headers-first.md)
- [🔒 TLS Surface Reduction](./tls-surface-reduction.md)
- [🔍 Review Security Headers](../how-to/review-security-headers.md)
- [🛡️ 01 Introduction](../tutorials/01-introduction.md)

Next: translate to id
