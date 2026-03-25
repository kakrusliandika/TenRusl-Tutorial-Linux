# 🌐 Reverse Proxy

## Overview
Reverse proxy modules cover the front door of web-facing Linux services: listener ownership, HTTP-to-HTTPS flow, certificate state, config validation, and shell-based verification of upstream health. The section starts with Caddy because it offers a clean TLS-first workflow, but the operational habits apply to any serious edge service.

## Who This Section Is For
- Operators exposing applications or websites over HTTP and HTTPS.
- Admins who want a clearer front-end service boundary before adding app complexity.
- Learners who want to validate edge services from the shell, not only from a browser.

## Prerequisites
- A Linux host with DNS control for at least one test hostname.
- SSH access and sudo privileges.
- Basic understanding of ports 80 and 443, certificates, and backend services.

## Learning Path
1. Start with [🌐 Caddy](./caddy/index.md).
2. Read the concept pages before enabling TLS or proxying live apps.
3. Use the how-to pages for site onboarding, HTTPS, backup, and restore.
4. Pair the module with [🛡️ Security](../../security/index.md) and [💾 Backup](../../backup/index.md).

## What To Read First
- [🌐 Caddy](./caddy/index.md)

## Section Map
- [🌐 Caddy](./caddy/index.md)

## Related Sections
- [☁️ Virtualization](../../virtualization/index.md)
- [💻 Workstation](../../workstation/index.md)
- [🛡️ Security](../../security/index.md)
- [💾 Backup](../../backup/index.md)

Next: translate to id
