# 📦 Debian Server Baseline

## Summary
Debian favors a conservative package set, long-lived stability, and a small baseline that stays explainable over time.

## What The Concept Means
A Debian server baseline is the minimal, explainable set of packages, services, network decisions, identities, and storage rules you apply before workload-specific software arrives.

## Why It Matters On Linux Servers
- It gives later modules a stable starting point.
- It limits surprise listeners, surprise packages, and surprise ownership drift.
- It makes troubleshooting faster because the host remains intentionally small and reviewed.

## Design Principles
- Patch before exposing the host to real traffic.
- Set hostname, SSH, firewall, update policy, network, and storage before adding applications.
- Keep changes shell-verifiable and reversible.
- Document every open port, mount point, and admin path.

## Operational Tradeoffs
- Smaller baselines are easier to reason about, but require more deliberate package additions later.
- Heavier baselines feel convenient early on, but enlarge your service map and patch surface.
- Distro-native tooling should win over ad hoc third-party control layers at baseline time.

## Common Mistakes
- Mixing multiple network managers before identifying the active renderer.
- Letting installer defaults define the long-term package and service baseline.
- Opening ports before the service behind them is configured and tested.
- Mounting data by fragile device names instead of UUID.

## Related Docs
- [🔐 SSH First](./ssh-first.md)
- [🧹 Service Minimization](./service-minimization.md)
- [🔐 Install OpenSSH](../how-to/install-openssh.md)
- [📋 Service Checklist](../reference/service-checklist.md)

Next: translate to id
