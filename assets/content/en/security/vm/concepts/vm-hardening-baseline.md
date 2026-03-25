# 🧱 VM Hardening Baseline

## Summary
A VM hardening baseline defines the minimum security expectations for guests, templates, and the workflows that surround them.

## What This Concept Means
It covers guest identity, update state, network placement, access control, snapshot discipline, backup readiness, and log visibility. Unlike generic host hardening, it must also account for cloning behavior and the hypervisor-facing layer.

## Why It Matters
VMs are easy to create and easy to forget. A baseline keeps the estate measurable instead of allowing drift to become normal.

## Threat / Exposure Framing
Weak VM baselines expose you to duplicated identity, uncontrolled east-west traffic, brittle restores, and unmanaged console access.

## Design Principles
- Treat the guest and the surrounding control plane as one security system.
- Keep role, trust zone, template source, and restore path visible.
- Prefer fewer permanent snapshots and fewer shared networks.
- Validate from both the guest shell and the host inventory when possible.

## Operational Tradeoffs
- More segmentation improves security but adds network and firewall maintenance.
- Short snapshot retention reduces storage debt but shrinks rollback windows.
- Strong guest controls still do not remove the need for hypervisor-side access control.

## Common Mistakes
- Assuming a hardened guest stays hardened after repeated cloning.
- Calling snapshots backups.
- Ignoring restore tests because exports exist somewhere.

## Related Docs
- [🧠 Template Discipline](./template-discipline.md)
- [📋 VM Hardening Checklist](../reference/vm-hardening-checklist.md)
- [✅ 09 Hardening](../tutorials/09-hardening.md)

Next: translate to id
