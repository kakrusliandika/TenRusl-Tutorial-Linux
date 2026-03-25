# 🌐 Nginx UI

    ## Overview
    This module treats Nginx UI as a Linux hosting control plane, not as magic. The focus is host preparation, site onboarding, runtime verification, admin-surface control, backup scope, and shell-based recovery when the panel or generated config does not behave as expected. Nginx UI is an admin layer for Nginx-centric configuration management rather than a full shared-hosting suite. The operational center of gravity remains the Nginx config tree, listeners, logs, and upstream health.

    ## Who This Section Is For
    - Operators who want a lighter GUI around Nginx while keeping direct awareness of the actual reverse-proxy and web-server config.
    - Teams comparing panel-managed hosting against direct shell administration.
    - Operators who need a backup and restore path outside the panel UI.

    ## Prerequisites
    - A Linux host with SSH access independent of the panel.
    - DNS control for at least one staging domain.
    - Basic familiarity with web services, TLS, and database-backed site workflows.

    ## Learning Path
    1. Start with [🧠 Nginx UI Overview](./concepts/nginx-ui-overview.md) and the concept pages so the control-plane boundaries are clear.
2. Implement backup and restore before onboarding production sites.
3. Use the references to keep ports, directories, and services understandable during every change window.
4. Walk the tutorial series on a lab host before trusting the panel with real domains or customer data.

    ## What To Read First
    - Concept: [🧠 Nginx UI Overview](./concepts/nginx-ui-overview.md)
    - How-to: [🌐 Add a New Site](./how-to/add-new-site.md)
    - Reference: [📋 Service Map](./reference/service-map.md)
    - Tutorial: [📘 01 Introduction](./tutorials/01-introduction.md)

    ## Section Map
### Concepts
- [🧠 Nginx UI Overview](./concepts/nginx-ui-overview.md)
- [🧠 Panel-Based Hosting](./concepts/panel-based-hosting.md)
- [🧠 Admin Zone Design](./concepts/admin-zone-design.md)

### How-To
- [🌐 Add a New Site](./how-to/add-new-site.md)
- [💾 Back Up Panel Config](./how-to/backup-config.md)
- [↩️ Restore Panel Config](./how-to/restore-config.md)
- [🔒 Set Up SSL](./how-to/set-up-ssl.md)

### Reference
- [📋 Directory Layout](./reference/directory-layout.md)
- [📋 Port Matrix](./reference/port-matrix.md)
- [📋 Service Map](./reference/service-map.md)

### Tutorials
- [📘 01 Introduction](./tutorials/01-introduction.md)
- [📋 02 Prerequisites](./tutorials/02-prerequisites.md)
- [🖥️ 03 Install Base](./tutorials/03-install-base.md)
- [🧰 04 Install Panel](./tutorials/04-install-panel.md)
- [🌐 05 Add Sites](./tutorials/05-add-sites.md)
- [🗄️ 06 Database Setup](./tutorials/06-database-setup.md)
- [⚙️ 07 Runtime Setup](./tutorials/07-runtime-setup.md)
- [🔐 08 Admin Zone](./tutorials/08-admin-zone.md)
- [✅ 09 Hardening](./tutorials/09-hardening.md)
- [📘 10 Closeout](./tutorials/10-closeout.md)

    ## Related Sections
    - [🖥️ Server](../../../server/index.md)
    - [🛡️ Security](../../../security/index.md)
    - [💾 Backup](../../../backup/index.md)
    - [🌐 Reverse Proxy](../../reverse-proxy/index.md)

Next: translate to id
