# 🧠 Server Hardening Baseline

## Summary
A server hardening baseline is the minimum secure operating state every Linux host should meet before it is trusted with real workloads.

## What This Concept Means
It combines host identity, package hygiene, SSH posture, exposed-service review, firewall policy, logging, time sync, and rollback awareness into one repeatable standard.

## Why It Matters
Most host compromise paths exploit missing basics: stale packages, forgotten accounts, unnecessary listeners, or missing logs. A baseline narrows those easy wins early.

## Threat / Exposure Framing
Without a baseline, small weaknesses stack together. Weak SSH, broad sudo, open ports, and no audit trail create both higher compromise risk and worse incident response.

## Design Principles
- Inventory first, then harden.
- Keep fewer listening services and fewer permanent exceptions.
- Make every major control testable from the shell.
- Capture rollback material before risky edits.

## Operational Tradeoffs
- Stricter defaults improve security but demand better documentation and validation.
- Automatic updates reduce patch lag but increase the need for reboot and service checks.
- Strong firewall posture is only useful if service ownership is still clear.

## Common Mistakes
- Hardening before collecting a service and user inventory.
- Treating the first secure build as permanent and never reviewing it again.
- Applying changes with no second session and no config backup.

## Related Docs
- [🔐 SSH Policy](./ssh-policy.md)
- [👥 Least Privilege](./least-privilege.md)
- [🔐 Disable Password Login](../how-to/disable-password-login.md)
- [📋 02 Baseline Audit](../tutorials/02-baseline-audit.md)

Next: translate to id
