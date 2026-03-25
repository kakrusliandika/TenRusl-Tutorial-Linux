# 🌐 Caddy

    ## Overview
    This module uses Caddy as a practical reverse proxy and TLS front door for Linux services. The emphasis is DNS readiness, Caddyfile structure, automatic HTTPS behavior, service health, upstream visibility, and backup of both config and certificate state.

    ## Who This Section Is For
    - Operators who need this module in real Linux server workflows.
    - Teams who still want shell-level verification and recovery.

    ## Prerequisites
    - SSH access, maintenance notes, and a rollback path.
    - Enough DNS, network, and storage control for the platform role.

    ## Learning Path
    1. Read the concept pages first.
    2. Use the how-to pages for focused tasks and backups.
    3. Keep the reference pages nearby during every change window.
    4. Walk the tutorial sequence on a lab host before production use.

    ## What To Read First
    - Concept pages in this module
    - Reference service and port maps

    ## Section Map
### Concepts
- [🧠 Caddy Overview](./concepts/caddy-overview.md)
- [🧠 Automatic HTTPS](./concepts/automatic-https.md)
- [🧠 Reverse Proxy Patterns](./concepts/reverse-proxy-patterns.md)

### How-To
- [🌐 Add a New Site](./how-to/add-new-site.md)
- [💾 Back Up Caddy Config](./how-to/backup-config.md)
- [🔒 Enable HTTPS](./how-to/enable-https.md)
- [↩️ Restore Caddy Config](./how-to/restore-config.md)

### Reference
- [📋 Directory Layout](./reference/directory-layout.md)
- [📋 Port Matrix](./reference/port-matrix.md)
- [📋 Service Map](./reference/service-map.md)

### Tutorials
- [📘 01 Introduction](./tutorials/01-introduction.md)
- [📋 02 Prerequisites](./tutorials/02-prerequisites.md)
- [🖥️ 03 Install Base](./tutorials/03-install-base.md)
- [🧰 04 Install Caddy](./tutorials/04-install-caddy.md)
- [🌐 05 Add Sites](./tutorials/05-add-sites.md)
- [🔒 06 Enable TLS](./tutorials/06-enable-tls.md)
- [🧰 07 Services](./tutorials/07-services.md)
- [✅ 08 Hardening](./tutorials/08-hardening.md)
- [💾 09 Backup](./tutorials/09-backup.md)
- [📘 10 Closeout](./tutorials/10-closeout.md)

    ## Related Sections
    - [🖥️ Server](../../../server/index.md)
- [🛡️ Security](../../../security/index.md)
- [💾 Backup](../../../backup/index.md)
- [🌐 Hosting Panels](../../hosting-panels/index.md)

Next: translate to id
