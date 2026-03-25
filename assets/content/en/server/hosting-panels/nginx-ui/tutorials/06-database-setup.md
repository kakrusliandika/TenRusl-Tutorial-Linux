# 🗄️ 06 Database Setup

    ## Objective
    Create and validate the first database path used by a Nginx UI-managed site without losing track of credentials, engine choice, or backup scope.

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
echo 'Nginx UI itself does not imply a local database requirement; inspect upstream app data separately.'

ss -ltnp | grep -Ei ":3306|:5432" || true
mysql -e "SHOW DATABASES;" 2>/dev/null || mariadb -e "SHOW DATABASES;" 2>/dev/null || psql -l 2>/dev/null || true
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
    [➡️ 07 Runtime Setup](./07-runtime-setup.md)

    ## Related Docs
    - [📋 Service Map](../reference/service-map.md)
    - [🛡️ Security](../../../../security/index.md)
    - [💾 Backup](../../../../backup/index.md)

Next: translate to id
