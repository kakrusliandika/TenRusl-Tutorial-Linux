# 📘 10 Closeout

    ## Objective
    Close the first aaPanel build with an inventory you can hand to another operator or use during recovery.

    ## Prerequisites
    - SSH access independent of the panel.
    - A maintenance window or staging path for risky changes.

    ## Environment Assumptions
    - aaPanel commonly manages LNMP or LAMP style services and stores panel-owned state under `/www/server` plus related roots. Exact package combinations vary by install choices.
    - The panel is not the only source of truth about the host.

    ## Sequential Steps
    ### 1. Perform the stage-specific panel task
    - Record what changed in the UI and what should change on the host.

    ### 2. Inspect shell-visible state immediately
    ```bash
systemctl list-units --type=service | grep -Ei 'nginx|apache|php|mysql|mariadb|bt|panel' || true

ss -ltnp
sudo find /www /etc -maxdepth 3 -type d \( -name server -o -name panel -o -name wwwroot -o -name backup \) 2>/dev/null | sort
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
    [🌐 aaPanel](../index.md)

    ## Related Docs
    - [📋 Service Map](../reference/service-map.md)
    - [🛡️ Security](../../../../security/index.md)
    - [💾 Backup](../../../../backup/index.md)

Next: translate to id
