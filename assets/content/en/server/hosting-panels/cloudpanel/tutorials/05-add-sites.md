# 🌐 05 Add Sites

    ## Objective
    Create the first site in CloudPanel and confirm the resulting routing and service state from the shell.

    ## Prerequisites
    - SSH access independent of the panel.
    - A maintenance window or staging path for risky changes.

    ## Environment Assumptions
    - CloudPanel commonly manages Nginx, PHP-FPM, and database services with site roots under `/home/*/htdocs` or similar cloud-friendly layouts. Exact service names can vary by version.
    - The panel is not the only source of truth about the host.

    ## Sequential Steps
    ### 1. Perform the stage-specific panel task
    - Record what changed in the UI and what should change on the host.

    ### 2. Inspect shell-visible state immediately
    ```bash
sudo find /etc/nginx /etc/php /home -maxdepth 4 -type f -mtime -2 2>/dev/null | sort | tail -n 40

ss -ltnp | egrep ":(80|443)" || true
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
    [➡️ 06 Database Setup](./06-database-setup.md)

    ## Related Docs
    - [📋 Service Map](../reference/service-map.md)
    - [🛡️ Security](../../../../security/index.md)
    - [💾 Backup](../../../../backup/index.md)

Next: translate to id
