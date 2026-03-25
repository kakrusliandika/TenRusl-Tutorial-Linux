# 🔐 SSH Policy

## Summary
SSH policy defines who may log in, from where, with which method, and how recovery works if the policy change fails.

## What This Concept Means
A real SSH policy is more than one `sshd_config` change. It includes named admin accounts, key handling, root-login posture, source restrictions, logging, and a rollback path.

## Why It Matters
SSH is often the primary admin door on Linux servers. Weak SSH policy turns every other hardening gain into a weaker boundary.

## Threat / Exposure Framing
Weak policy exposes the host to brute-force noise, stale keys, overly broad root access, and poor accountability. Overly strict policy without recovery planning can also lock operators out.

## Design Principles
- Prefer named accounts plus key-based authentication.
- Treat root login, sudo, and key distribution as separate decisions.
- Validate from a second session before closing the original session.
- Keep recent SSH logs easy to review.

## Operational Tradeoffs
- Source restrictions improve safety but can complicate roaming admin access.
- A bastion improves traceability but adds an extra dependency.
- Short session timeouts improve safety but can frustrate operational workflows.

## Common Mistakes
- Disabling passwords before confirming every required admin key works.
- Allowing shared admin accounts.
- Ignoring old keys and old users after role changes.

## Related Docs
- [🧠 Hardening Baseline](./hardening-baseline.md)
- [📋 SSH Checklist](../reference/ssh-checklist.md)
- [🔐 Disable Password Login](../how-to/disable-password-login.md)
- [🔐 03 Users and SSH](../tutorials/03-users-and-ssh.md)

Next: translate to id
