# 📦 Base OS

## Overview
Base OS modules establish a predictable Linux server before web services, panels, reverse proxies, or application platforms are layered on top. Debian, Ubuntu, and RHEL-family hosts share core server habits, but they do not share package managers, update tools, networking workflows, or service defaults.

## Who This Section Is For
- Operators preparing new Linux servers for production or lab use.
- Teams standardizing first-boot tasks and validation routines.
- Learners who need a distro-specific baseline before moving into workload-specific modules.

## Prerequisites
- Console or rescue access for network and SSH rollback.
- A hostname plan, DNS expectation, IP model, and storage layout.
- A willingness to validate every control-plane change from the shell.

## Learning Path
1. Pick the distro you actually run: [🖥️ Debian](./debian/index.md), [🖥️ Ubuntu](./ubuntu/index.md), or [🖥️ RHEL-family](./rhel/index.md).
2. Read the concept pages first so the baseline policy is clear before you change packages or networking.
3. Apply the focused how-to pages for SSH, firewall, updates, storage, and static networking.
4. Follow the tutorials in order if you want a full end-to-end baseline build.

## What To Read First
- Conservative minimal baseline: [🖥️ Debian](./debian/index.md)
- Cloud and VPS-friendly baseline: [🖥️ Ubuntu](./ubuntu/index.md)
- Enterprise-style baseline: [🖥️ RHEL-family](./rhel/index.md)

## Section Map
- [🖥️ Debian](./debian/index.md)
- [🖥️ Ubuntu](./ubuntu/index.md)
- [🖥️ RHEL-family](./rhel/index.md)

## Related Sections
- [☁️ Virtualization](../../virtualization/index.md)
- [💻 Workstation](../../workstation/index.md)
- [🛡️ Security](../../security/index.md)
- [💾 Backup](../../backup/index.md)

Next: translate to id
