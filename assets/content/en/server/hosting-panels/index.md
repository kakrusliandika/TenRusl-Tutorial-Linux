# 🌐 Hosting Panels

## Overview
Hosting panel modules explain how to run panel-managed website and application hosting without surrendering shell-level visibility. The panel can speed up onboarding, SSL, database creation, and runtime selection, but the operator still owns the Linux host, the backup strategy, the exposed ports, and the recovery path when the control plane fails.

## Who This Section Is For
- VPS operators hosting websites with a panel-oriented workflow.
- Admins who want faster site administration but still need host-side validation.
- Teams comparing aaPanel, CloudPanel, and Nginx UI from an operational perspective.

## Prerequisites
- A Linux host with SSH access independent of the panel.
- DNS control for at least one lab or staging domain.
- Baseline understanding of Nginx, PHP-FPM, databases, and TLS.

## Learning Path
1. Choose the control plane you actually run: [🌐 aaPanel](./aapanel/index.md), [🌐 CloudPanel](./cloudpanel/index.md), or [🌐 Nginx UI](./nginx-ui/index.md).
2. Read the concept pages first so you know what stays panel-managed versus what remains a Linux responsibility.
3. Implement backup and restore before onboarding production sites.
4. Use the tutorials to build a repeatable staging-first operating routine.

## What To Read First
- Shared-hosting style control plane: [🌐 aaPanel](./aapanel/index.md)
- Cloud-friendly hosting control plane: [🌐 CloudPanel](./cloudpanel/index.md)
- Nginx-centric control plane: [🌐 Nginx UI](./nginx-ui/index.md)

## Section Map
- [🌐 aaPanel](./aapanel/index.md)
- [🌐 CloudPanel](./cloudpanel/index.md)
- [🌐 Nginx UI](./nginx-ui/index.md)

## Related Sections
- [☁️ Virtualization](../../virtualization/index.md)
- [💻 Workstation](../../workstation/index.md)
- [🛡️ Security](../../security/index.md)
- [💾 Backup](../../backup/index.md)

Next: translate to id
