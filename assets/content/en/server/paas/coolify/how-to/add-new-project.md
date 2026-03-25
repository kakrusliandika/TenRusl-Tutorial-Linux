# 🚀 Add a New Project

        ## Objective
        Execute the add new project workflow for Coolify with Linux-side validation.

        ## When To Use This Procedure
        Use this during a real Coolify change window or during lab rehearsal before production use.

        ## Prerequisites
        - Coolify is reachable or recoverable.
        - SSH access is available independent of the platform.

        ## Environment Assumptions
        - `/data/coolify` is common but must still be verified on the real host.

        ## Exact Steps
        ### 1. Perform the platform task and record intent
        - Project or service name
        - Domain or route
        - Stateful versus stateless impact

        ### 2. Inspect shell-visible state immediately
        ```bash
docker ps --format 'table {{.Names}}\t{{.Status}}\t{{.Ports}}'
docker volume ls
sudo ss -ltnp
curl -I http://example.com
curl -Ik https://example.com || true
```

        ## ✅ Validation Checkpoints
        - Platform intent matches Docker, volume, listener, and HTTP state.

        ## Troubleshooting
        - Separate source-control, build, container, domain, and volume failures instead of assuming one root cause.

        ## ↩️ Rollback / Recovery Notes
        - Keep at least one known-good config archive before risky changes.

        ## Related Docs
        - [📋 Service Map](../reference/service-map.md)
        - [💾 Backup](../../../../backup/index.md)

Next: translate to id
