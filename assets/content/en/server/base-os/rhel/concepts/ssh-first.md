# 🔐 SSH First

## Summary
SSH is the operational control plane for a Linux server. If SSH is unclear, untested, or exposed too broadly, every later admin task becomes fragile.

## What The Concept Means
SSH-first administration means treating remote access as an early baseline concern: install the service, confirm the listener, create a named admin account, test key-based access, and only then tighten policy.

## Why It Matters On Linux Servers
- It is the main path for automation, support, and incident response.
- It forces you to validate hostname, firewall, DNS, and user state early.
- It reduces the chance that later changes lock you out of the host.

## Design Principles
- Keep console or rescue access available until SSH is proven.
- Validate service, listener, and firewall together.
- Prefer a named admin account plus sudo rather than permanent root login.
- Record which IPs or networks should reach SSH in normal operation.

## Operational Tradeoffs
- Broad SSH reachability is convenient but increases exposure.
- Early lockdown is valuable, but only after you have a tested fallback path.
- Aggressive hardening without validation often creates self-inflicted outages.

## Common Mistakes
- Changing firewall or SSH config from one session with no fallback.
- Enforcing key-only access before authorized keys are proven.
- Leaving root login enabled out of habit.
- Ignoring host key changes after rebuilds or restores.

## Related Docs
- [📦 RHEL-family Server Baseline](./rhel-baseline.md)
- [🔐 Install OpenSSH](../how-to/install-openssh.md)
- [🛡️ Configure the Firewall](../how-to/configure-firewall.md)
- [🔐 Tutorial 05: Users and SSH](../tutorials/05-users-and-ssh.md)

Next: translate to id
