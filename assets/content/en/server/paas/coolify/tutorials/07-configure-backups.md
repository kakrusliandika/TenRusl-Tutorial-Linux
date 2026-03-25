# 💾 07 Configure Backups

    ## Objective
    Progress the Coolify deployment flow while keeping Docker, DNS, backups, and admin access visible from Linux.

    ## Prerequisites
    - SSH access and a maintenance window.
    - A test domain or application source where relevant.

    ## Environment Assumptions
    - The platform is not the only source of truth about runtime state.

    ## Sequential Steps
    ### 1. Perform the stage-specific platform task
    - Record app name, route, and persistence needs.

    ### 2. Inspect shell-visible state immediately
    ```bash
docker ps --format 'table {{.Names}}	{{.Status}}	{{.Ports}}'
docker volume ls
systemctl status docker --no-pager

ss -ltnp
curl -I http://example.com || true
curl -Ik https://example.com || true
```

    ## ✅ Validation Checkpoints
    - Platform intent matches Docker and route state.

    ## ⚠️ Warnings
    - Do not trust the UI more than the shell during early rollout.

    ## Cleanup / Post-Check
    - Save container, volume, domain, and backup notes.

    ## Next Tutorial
    [➡️ 08 Admin Zone](./08-admin-zone.md)

    ## Related Docs
    - [📋 Service Map](../reference/service-map.md)
    - [💾 Backup](../../../../backup/index.md)

Next: translate to id
