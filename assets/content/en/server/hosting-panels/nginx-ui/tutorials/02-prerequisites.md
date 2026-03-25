# 📋 02 Prerequisites

    ## Objective
    Confirm that the Linux host, DNS plan, backup target, and management path are ready before installing Nginx UI.

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
hostnamectl
systemctl --failed
ss -ltnp
df -h
dig +short example.com || true
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
    [➡️ 03 Install Base](./03-install-base.md)

    ## Related Docs
    - [📋 Service Map](../reference/service-map.md)
    - [🛡️ Security](../../../../security/index.md)
    - [💾 Backup](../../../../backup/index.md)

Next: translate to id
