# 💾 Back Up Coolify Config

        ## Objective
        Execute the backup config workflow for Coolify with Linux-side validation.

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
sudo find /data /var/lib/docker -maxdepth 3 -type d \( -name '*coolify*' -o -name volumes -o -name containers \) 2>/dev/null | sort

sudo tar -czf /root/coolify-config-$(date +%F-%H%M).tgz /data/coolify 2>/dev/null || true
docker ps --format 'table {{.Names}}\t{{.Image}}\t{{.Ports}}' > /root/coolify-containers.txt
docker volume ls > /root/coolify-volumes.txt
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
