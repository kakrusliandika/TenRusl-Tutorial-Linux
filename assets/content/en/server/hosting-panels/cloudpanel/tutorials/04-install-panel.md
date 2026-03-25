# 🧰 04 Install Panel

    ## Objective
    Install CloudPanel using the current vendor-supported method, then inspect exactly what changed on the host.

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
systemctl list-units --type=service | grep -Ei 'nginx|php.*fpm|mysql|mariadb|redis|cloudpanel|clp' || true

ss -ltnp
sudo find /home /etc/nginx /etc/php -maxdepth 3 -type d \( -name htdocs -o -name sites-enabled -o -name php -o -name mysql \) 2>/dev/null | sort

journalctl -xe --no-pager | tail -n 60
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
    [➡️ 05 Add Sites](./05-add-sites.md)

    ## Related Docs
    - [📋 Service Map](../reference/service-map.md)
    - [🛡️ Security](../../../../security/index.md)
    - [💾 Backup](../../../../backup/index.md)

Next: translate to id
