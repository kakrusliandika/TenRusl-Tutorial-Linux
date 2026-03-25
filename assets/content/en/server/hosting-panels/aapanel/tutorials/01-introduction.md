# 📘 01 Introduction

    ## Objective
    Define why this server should use aaPanel instead of a raw Linux-only workflow and what the control plane is expected to manage.

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
printf "role=panel-hosting\npanel=aaPanel\nowner=ops-team\n"
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
    [➡️ 02 Prerequisites](./02-prerequisites.md)

    ## Related Docs
    - [📋 Service Map](../reference/service-map.md)
    - [🛡️ Security](../../../../security/index.md)
    - [💾 Backup](../../../../backup/index.md)

Next: translate to id
