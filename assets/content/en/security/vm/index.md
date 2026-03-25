# 🧱 VM Security

## Overview
VM security is about guest hygiene plus the control plane around the guest: templates, networks, snapshots, backups, console access, and the evidence you will need if a clone or workload becomes suspicious.

## Who This Section Is For
- Operators who clone Linux guests, manage templates, or maintain lab and production VM estates.
- Administrators who need guest security guidance that includes hypervisor-side reality.
- Learners who want repeatable VM hygiene instead of one-off cloning habits.

## Prerequisites
- Shell access to at least one guest and, where possible, CLI access to the hypervisor host.
- A rollback point before sealing templates, pruning snapshots, or rotating backups.
- A simple inventory of guest roles and trust zones.

## Learning Path
1. Read [Template Discipline](./concepts/template-discipline.md), [VM Hardening Baseline](./concepts/vm-hardening-baseline.md), and [Network Isolation Thinking](./concepts/network-isolation-thinking.md).
2. Apply the how-to guides for template sealing, snapshot review, backup rotation, and isolated networking.
3. Use the references during reviews and then run tutorials `01` through `10` in order.

## What To Read First
- Start with [Template Discipline](./concepts/template-discipline.md) if you build or publish reusable images.
- Read [Set Up an Isolated Network](./how-to/set-up-isolated-network.md) before mixing trust zones.
- Use [01 Introduction](./tutorials/01-introduction.md) if you want a guided operator path.

## Section Map
### Concepts
- [🧠 Template Discipline](./concepts/template-discipline.md) — Treat templates as controlled artifacts, not as convenient clones.
- [🧱 VM Hardening Baseline](./concepts/vm-hardening-baseline.md) — Define the minimum expectations for every guest and template.
- [🌐 Network Isolation Thinking](./concepts/network-isolation-thinking.md) — Separate guest trust zones before they collapse into one flat network.

### How-To
- [🧰 Create a Golden Template](./how-to/create-golden-template.md) — Seal a reusable guest image without carrying old identity or secrets.
- [📸 Review Snapshot Policy](./how-to/review-snapshot-policy.md) — Keep snapshots short-lived and purposeful.
- [💾 Rotate VM Backups](./how-to/rotate-vm-backups.md) — Rotate retained backups with restore metadata and integrity checks.
- [🌐 Set Up an Isolated Network](./how-to/set-up-isolated-network.md) — Create a segment with clear trust boundaries and testable rules.

### Reference
- [📋 Backup Checklist](./reference/backup-checklist.md) — Review whether VM backups are actually restorable.
- [🚨 Incident Checklist](./reference/incident-checklist.md) — Preserve evidence and contain a suspicious guest deliberately.
- [📋 Network Isolation Checklist](./reference/network-isolation-checklist.md) — Verify guest trust zones and their real boundaries.
- [📋 VM Hardening Checklist](./reference/vm-hardening-checklist.md) — Run a compact guest and template posture review.

### Tutorials
- [🛡️ 01 Introduction](./tutorials/01-introduction.md) — Define the VM estate and the trust model.
- [🧱 02 Hypervisor Baseline](./tutorials/02-hypervisor-baseline.md) — Review host-side assumptions and inventory.
- [🌐 03 Network Isolation](./tutorials/03-network-isolation.md) — Verify that guests are placed in deliberate segments.
- [🧼 04 Template Hygiene](./tutorials/04-template-hygiene.md) — Prepare a reusable and safe template source.
- [📸 05 Snapshot Policy](./tutorials/05-snapshot-policy.md) — Separate rollback points from real backups.
- [🔐 06 Access Control](./tutorials/06-access-control.md) — Review console, guest, and template access paths.
- [🧾 07 Logging](./tutorials/07-logging.md) — Make guest and hypervisor-adjacent actions reviewable.
- [💾 08 Backups](./tutorials/08-backups.md) — Check backup scope, naming, and restore readiness.
- [✅ 09 Hardening](./tutorials/09-hardening.md) — Run a final VM and template review.
- [📘 10 Closeout](./tutorials/10-closeout.md) — Package rollback data and the next review schedule.

## Related Sections
- [🛡️ Security Root](../index.md)
- [🛡️ Server Security](../server/index.md)
- [🌐 Web Security](../web/index.md)
- [☁️ Virtualization](../../virtualization/index.md)
- [💾 Backup](../../backup/index.md)

Next: translate to id
