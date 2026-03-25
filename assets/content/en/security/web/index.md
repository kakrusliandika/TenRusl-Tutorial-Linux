# 🌐 Web Security

## Overview
Web security in this library focuses on the public edge: TLS, redirects, response headers, rate limiting, logging, monitoring, and realistic incident handling for Linux-operated sites and APIs.

## Who This Section Is For
- Operators responsible for public websites, APIs, dashboards, or reverse proxies on Linux.
- Administrators who need practical edge hardening and browser-aware safety checks.
- Learners who want shell-verifiable web security instead of vague web-security advice.

## Prerequisites
- Access to the web host, reverse proxy, or deployment config.
- A rollback copy of the active site or edge config before edits.
- A staging path or safe maintenance window for TLS and header changes.

## Learning Path
1. Read [Web Hardening Baseline](./concepts/web-hardening-baseline.md), [Security Headers First](./concepts/security-headers-first.md), and [TLS Surface Reduction](./concepts/tls-surface-reduction.md).
2. Use the how-to guides for CSP, HSTS, header review, and rate limiting.
3. Run tutorials `01` through `10` in order once the public edge is ready for measured changes.

## What To Read First
- Start with [Review Security Headers](./how-to/review-security-headers.md) for a fast live audit path.
- Read [TLS Surface Reduction](./concepts/tls-surface-reduction.md) before enabling strict HTTPS behavior.
- Use [01 Introduction](./tutorials/01-introduction.md) if you want a guided end-to-end workflow.

## Section Map
### Concepts
- [🧠 Web Hardening Baseline](./concepts/web-hardening-baseline.md) — Define the minimum public-edge controls every site should have.
- [🧩 Security Headers First](./concepts/security-headers-first.md) — Use response headers to reduce avoidable browser trust.
- [🔒 TLS Surface Reduction](./concepts/tls-surface-reduction.md) — Reduce weak listeners, weak redirects, and unclear certificate handling.

### How-To
- [🧩 Configure CSP](./how-to/configure-csp.md) — Introduce a controlled Content-Security-Policy.
- [🔒 Enable HSTS](./how-to/enable-hsts.md) — Force repeat visits onto HTTPS only after TLS is stable.
- [🔍 Review Security Headers](./how-to/review-security-headers.md) — Audit the live response header set, not just config files.
- [🚦 Set Up Rate Limiting](./how-to/set-up-rate-limiting.md) — Slow repetitive abuse before it reaches the application core.

### Reference
- [📋 Header Matrix](./reference/header-matrix.md) — Keep a compact map of headers worth reviewing.
- [🚨 Incident Checklist](./reference/incident-checklist.md) — Preserve web-edge evidence before cleanup hides it.
- [🧾 Logging Checklist](./reference/logging-checklist.md) — Review whether the edge logs what future investigations need.
- [📋 TLS Checklist](./reference/tls-checklist.md) — Review certificate, listener, and redirect posture quickly.

### Tutorials
- [🛡️ 01 Introduction](./tutorials/01-introduction.md) — Define the public edge and trust boundaries.
- [🗺️ 02 Surface Mapping](./tutorials/02-surface-mapping.md) — Inventory hostnames, listeners, redirects, and public paths.
- [🔒 03 TLS Baseline](./tutorials/03-tls-baseline.md) — Verify certificate health and HTTPS behavior first.
- [🧩 04 Security Headers](./tutorials/04-security-headers.md) — Apply browser-side guardrails with measured validation.
- [🚦 05 Rate Limiting](./tutorials/05-rate-limiting.md) — Introduce a first abuse-control rule at the edge.
- [🧱 06 WAF Baseline](./tutorials/06-waf-baseline.md) — Document realistic filtering and edge protection boundaries.
- [📝 07 Logging](./tutorials/07-logging.md) — Make request and edge events reviewable.
- [📈 08 Monitoring](./tutorials/08-monitoring.md) — Catch TLS and availability issues before users report them.
- [✅ 09 Hardening](./tutorials/09-hardening.md) — Run a final public-edge posture review.
- [📘 10 Closeout](./tutorials/10-closeout.md) — Package tests, configs, and the next review cycle.

## Related Sections
- [🛡️ Security Root](../index.md)
- [🛡️ Server Security](../server/index.md)
- [🧱 VM Security](../vm/index.md)
- [🖥️ Server](../../server/index.md)
- [💾 Backup](../../backup/index.md)

Next: translate to id
