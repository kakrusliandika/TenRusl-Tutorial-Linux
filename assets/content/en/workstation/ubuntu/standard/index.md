# 💻 Ubuntu Standard

## Overview
Ubuntu Standard in this repository is the fuller workstation profile. It assumes the machine can carry a broader desktop stack and that the operator wants a usable browser, media, office, development, and productivity baseline sooner. It is still a disciplined Linux build, not a careless “install everything” approach. The goal is to land quickly on a stable daily driver while preserving enough package visibility to troubleshoot drivers, codecs, defaults, and post-install drift.

## Who This Section Is For
- Users who want a broader Ubuntu desktop out of the box and do not need the strict minimal layering of Lite.
- Teams building admin, productivity, or mixed-use workstations that should be usable sooner after installation.
- Learners who want a richer desktop profile but still need validation, cleanup, and recovery awareness.

## Lite vs Standard Orientation
Standard is the better choice when hardware is reasonably modern, the desktop should be useful earlier, and the workload includes office, browser, media, and development tools from the start. Lite is better when you want smaller blast radius, lower resource pressure, or tighter package control. Standard still benefits from Lite recovery pages for ISO verification, BitLocker, Intel RST, and boot repair.

## Prerequisites
- A supported Ubuntu Desktop ISO and a system with enough RAM and storage for a fuller desktop profile.
- A backup if the target system already contains user data.
- Willingness to validate defaults, drivers, and package choices after installation instead of assuming the desktop is finished on first boot.

## Learning Path
1. Read the Standard concepts so you understand where convenience is worth the extra package surface.
2. Use the Lite pre-install recovery how-to pages if the machine is dual-booted or vendor firmware features complicate installation.
3. Follow the Standard tutorials in order to land on a complete desktop without skipping validation.
4. Finish with cleanup, default-app review, and a backup plan so the machine remains maintainable after updates.

## What To Read First
- [🧠 Standard Overview](./concepts/standard-overview.md)
- [🎵 Enable Codecs](./how-to/enable-codecs.md)
- [📋 Package Expanded](./reference/package-expanded.md)
- [📘 01 Introduction](./tutorials/01-introduction.md)

## Section Map
### Concepts
- [🧠 Standard Overview](./concepts/standard-overview.md)
- [🧠 Standard vs Lite](./concepts/standard-vs-lite.md)
- [🧠 When To Choose Standard](./concepts/when-to-choose-standard.md)

### How-To
- [🎵 Enable Codecs](./how-to/enable-codecs.md)
- [📦 Install Extra Apps](./how-to/install-extra-apps.md)
- [🧭 Set Default Apps](./how-to/set-default-apps.md)
- [⬆️ Upgrade From Lite](./how-to/upgrade-from-lite.md)

### Reference
- [📋 Application Matrix](./reference/application-matrix.md)
- [📋 Hardware Requirements](./reference/hardware-requirements.md)
- [📋 Package Baseline](./reference/package-baseline.md)
- [📋 Package Expanded](./reference/package-expanded.md)

### Tutorials
- [📘 01 Introduction](./tutorials/01-introduction.md)
- [📋 02 Install Preflight](./tutorials/02-install-preflight.md)
- [🖥️ 03 Install Core](./tutorials/03-install-core.md)
- [🧭 04 Default Apps](./tutorials/04-default-apps.md)
- [📚 05 Productivity](./tutorials/05-productivity.md)
- [🧪 06 Dev Tools](./tutorials/06-dev-tools.md)
- [🎵 07 Media Tools](./tutorials/07-media-tools.md)
- [🧰 08 Optional Tools](./tutorials/08-optional-tools.md)
- [🧹 09 Cleanup](./tutorials/09-cleanup.md)
- [📘 10 Closeout](./tutorials/10-closeout.md)

## Related Sections
- [💻 Workstation](../../index.md)
- [💻 Ubuntu Lite](../lite/index.md)
- [🛡️ Security](../../../security/index.md)
- [💾 Backup](../../../backup/index.md)

Next: translate to id
