# 🧠 Panel-Based Hosting

## Summary
Panel-based hosting is a workflow where website, TLS, database, and runtime tasks are initiated from a control plane but still depend on Linux services you must audit and recover from the shell.

## What The Concept Means
In the CloudPanel model, the panel coordinates web-server config, site roots, runtime bindings, and administrative tasks. The operator still owns host patching, firewall policy, service review, backup scope, and incident response.

## Why It Matters On Linux Servers
- It changes how sites are onboarded and modified.
- It can blur the boundary between control-plane intent and real host state.
- It requires discipline so panel convenience does not erase Linux-level visibility.

## Design Principles
- Separate host baseline tasks from panel-managed site tasks.
- Keep site inventory, database inventory, and backup inventory in the same notes.
- Verify panel changes with listeners, logs, and HTTP checks.
- Limit public exposure of the panel admin surface.

## Operational Tradeoffs
- Faster onboarding can reduce toil but increase silent drift if the host is not reviewed.
- Shared-hosting flexibility can create more runtime and config sprawl than a single-purpose app host.
- Recovery is harder if panel-generated state is not backed up with surrounding Linux config.

## Common Mistakes
- Exposing the panel broadly to the internet.
- Forgetting that panel-managed sites still rely on web, runtime, and database services below the UI.
- Backing up site content but not the config that makes the site routable.
- Treating database creation as complete without testing the actual runtime connection path.

## Related Docs
- [🧠 CloudPanel Overview](./cloudpanel-overview.md)
- [💾 Back Up Panel Config](../how-to/backup-config.md)
- [📋 Port Matrix](../reference/port-matrix.md)

Next: translate to id
