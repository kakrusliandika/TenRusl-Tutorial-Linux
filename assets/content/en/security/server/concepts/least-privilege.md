# 👥 Least Privilege

## Summary
Least privilege means giving users, services, and automation only the access they truly need.

## What This Concept Means
On Linux servers this includes sudo rules, service accounts, file ownership, secret access, and network reachability. It is a design habit, not just a permission bit.

## Why It Matters
Most severe incidents become worse because the first foothold lands in an account or service with too much reach. Least privilege keeps mistakes and compromise smaller.

## Threat / Exposure Framing
Over-privileged sudoers entries, shared accounts, and writable config trees widen both accidental and malicious damage. The danger is often invisible until review time.

## Design Principles
- Separate human admin access from service identities.
- Prefer explicit sudo rules over blanket elevation.
- Use ownership and group design intentionally.
- Review tokens, keys, and secrets like you review users.

## Operational Tradeoffs
- Granular sudo rules improve traceability but add maintenance work.
- Running services as non-root users can require extra setup around files and low ports.
- Tighter ownership models reduce convenience for ad hoc fixes.

## Common Mistakes
- Using one shared admin account for multiple people.
- Granting `NOPASSWD:ALL` because it is convenient.
- Ignoring world-writable paths and broad group ownership.

## Related Docs
- [🧠 Hardening Baseline](./hardening-baseline.md)
- [🔐 SSH Policy](./ssh-policy.md)
- [📁 07 File Permissions](../tutorials/07-file-permissions.md)
- [🚨 Incident Checklist](../reference/incident-checklist.md)

Next: translate to id
