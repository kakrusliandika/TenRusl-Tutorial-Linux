# 🧠 Coolify Overview

## Summary
Coolify is best treated as a self-hosted application control plane layered on top of Linux and Docker, not as a replacement for understanding containers, storage, DNS, and reverse proxy state.

## What The Concept Means
Coolify coordinates projects, apps, variables, domains, and supporting services through a platform workflow. The Linux host still owns Docker, disk usage, outbound connectivity, backup storage, and emergency recovery when the platform or deploy path fails.

## Why It Matters On Linux Servers
- It can accelerate application delivery without outsourcing your platform.
- It introduces another control layer that must be backed up, secured, and audited.
- It changes failure modes from simple container errors into source-control, build, storage, network, or platform-state issues.

## Design Principles
- Keep SSH access and host inspection paths independent of Coolify.
- Treat Git access, runtime state, and persistent storage as separate trust boundaries.
- Back up platform config and stateful volumes before production cutover.
- Validate deploys from both the platform and the shell.

## Operational Tradeoffs
- A platform can reduce manual deployment work but increase dependency on platform state.
- Centralized deploy UX helps teams move faster, but only if Docker, DNS, and backup scope remain visible.
- Self-hosting reduces vendor lock-in but increases responsibility for availability.

## Common Mistakes
- Letting Coolify be the only place where runtime truth is visible.
- Deploying stateful apps without first defining backup ownership.
- Giving the platform overly broad Git credentials.
- Ignoring container, volume, and reverse proxy state because the UI shows success.

## Related Docs
- [🚀 Add a New Project](../how-to/add-new-project.md)
- [📋 Service Map](../reference/service-map.md)
- [💾 Backup](../../../../backup/index.md)

Next: translate to id
