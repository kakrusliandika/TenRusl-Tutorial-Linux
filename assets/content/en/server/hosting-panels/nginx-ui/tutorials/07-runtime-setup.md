# ⚙️ 07 Runtime Setup

    ## Objective
    Align the first site with the correct runtime layer and verify the effect from the shell.

    ## Prerequisites
    - SSH access independent of the panel.
    - A maintenance window or staging path for risky changes.

    ## Environment Assumptions
    - Nginx UI installation method matters. Some deployments run it as a native service, others in containers. Keep the web server and panel state discoverable from the shell before relying on the UI.
    - The panel is not the only source of truth about the host.

    ## Sequential Steps
    ### 1. Perform the stage-specific panel task
    - Record what changed in the UI and what should change on the host.

    ### 2. Inspect shell-visible state immediately
    ```bash
systemctl list-units --type=service | grep -Ei 'nginx|nginx-ui' || true
docker ps --format 'table {{.Names}}	{{.Status}}	{{.Ports}}' 2>/dev/null || true

ps aux --sort=-%mem | sed -n "1,25p"
curl -I http://example.com
curl -Ik https://example.com || true
```

    ### 3. Save inventory notes for the next operator
    - Hostname or domain
    - Site root or service mapping
    - Runtime or database dependency
    - Backup and rollback impact

    ## ✅ Validation Checkpoints
    - The panel intent matches shell-visible state.
    - Listener, runtime, and logs stay understandable.

    ## ⚠️ Warnings
    - Do not trust panel convenience more than shell verification.

    ## Cleanup / Post-Check
    - Save the resulting inventory snapshot with the host notes.

    ## Next Tutorial
    [➡️ 08 Admin Zone](./08-admin-zone.md)

    ## Related Docs
    - [📋 Service Map](../reference/service-map.md)
    - [🛡️ Security](../../../../security/index.md)
    - [💾 Backup](../../../../backup/index.md)

Next: translate to id
