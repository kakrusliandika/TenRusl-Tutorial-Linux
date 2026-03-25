# 🖥️ RHEL-family Server Baseline

    ## Overview
    This module turns a fresh RHEL-family install into a dependable Linux server baseline: host naming, package discipline, SSH access, network predictability, storage mounts, service review, and a clean handoff into security or workload-specific guides. RHEL-family systems favor enterprise-style package lifecycles, SELinux-aware operations, and NetworkManager-driven networking.

    ## Who This Section Is For
    - Admins preparing a new RHEL-family host for production or a serious lab.
    - Teams standardizing a shell-verifiable baseline before application roles are added.
    - Learners who need distro-specific commands without losing the common Linux operating model.

    ## Prerequisites
    - Console or rescue access for network, firewall, and SSH rollback.
    - A planned hostname, DNS expectation, IP model, and storage layout.
    - A second shell or independent access path before touching remote-control settings.

    ## Learning Path
    1. Start with [📦 RHEL-family Server Baseline](./concepts/rhel-baseline.md) to understand the distro-specific baseline philosophy.
2. Use the how-to pages for focused tasks such as OpenSSH, firewall, automatic updates, networking, and extra-disk mounting.
3. Keep the reference pages nearby while building the host so package, service, and port decisions remain deliberate.
4. Follow the tutorials in order if you want a full baseline build from fresh install to closeout.

    ## What To Read First
    - Concept: [📦 RHEL-family Server Baseline](./concepts/rhel-baseline.md)
    - How-to: [🔐 Install OpenSSH](./how-to/install-openssh.md)
    - Reference: [📋 Service Checklist](./reference/service-checklist.md)
    - Tutorial: [🧭 Tutorial 01: Introduction](./tutorials/01-introduction.md)

    ## Section Map
### Concepts
- [📦 RHEL-family Server Baseline](./concepts/rhel-baseline.md)
- [🔐 SSH First](./concepts/ssh-first.md)
- [🧹 Service Minimization](./concepts/service-minimization.md)

### How-To
- [🛡️ Configure the Firewall](./how-to/configure-firewall.md)
- [🔄 Enable Automatic Updates](./how-to/enable-automatic-updates.md)
- [🔐 Install OpenSSH](./how-to/install-openssh.md)
- [🌐 Set a Static IP](./how-to/set-static-ip.md)
- [💽 Mount an Extra Disk](./how-to/mount-extra-disk.md)

### Reference
- [🧰 Hardware Requirements](./reference/hardware-requirements.md)
- [📦 Package Baseline](./reference/package-baseline.md)
- [🌐 Port Matrix](./reference/port-matrix.md)
- [📋 Service Checklist](./reference/service-checklist.md)

### Tutorials
- [🧭 Tutorial 01: Introduction](./tutorials/01-introduction.md)
- [🧪 Tutorial 02: Install Preflight](./tutorials/02-install-preflight.md)
- [📦 Tutorial 03: Install Core](./tutorials/03-install-core.md)
- [🌐 Tutorial 04: Network](./tutorials/04-network.md)
- [🔐 Tutorial 05: Users and SSH](./tutorials/05-users-and-ssh.md)
- [💽 Tutorial 06: Storage](./tutorials/06-storage.md)
- [🛡️ Tutorial 07: Security](./tutorials/07-security.md)
- [📋 Tutorial 08: Services](./tutorials/08-services.md)
- [🧽 Tutorial 09: Cleanup](./tutorials/09-cleanup.md)
- [✅ Tutorial 10: Closeout](./tutorials/10-closeout.md)

    ## Related Sections
    - [☁️ Virtualization](../../../virtualization/index.md)
    - [💻 Workstation](../../../workstation/index.md)
    - [🛡️ Security](../../../security/index.md)
    - [💾 Backup](../../../backup/index.md)

Next: translate to id
