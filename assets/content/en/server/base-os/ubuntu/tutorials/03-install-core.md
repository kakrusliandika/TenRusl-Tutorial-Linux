# 📦 Tutorial 03: Install Core

        ## Objective
        Patch the host and install the lean core package set that makes a Ubuntu server manageable over time.

        ## Prerequisites
        - Repository and time checks passed in Tutorial 02.

        ## Environment Assumptions
        - A reboot window exists if the kernel or core libraries change.
        - The baseline should stay small enough that every package still has a reason.

        ## Sequential Steps
        ### 1. Apply current updates first
        ```bash
sudo apt-get update
sudo apt-get dist-upgrade -y
```

        ### 2. Install the baseline package set
        ```bash
sudo apt-get install -y sudo curl ca-certificates rsync jq less vim-tiny gnupg openssh-server ufw unattended-upgrades apt-listchanges netplan.io
```

        ### 3. Review package state and failed units immediately
        ```bash
apt-mark showmanual | sed -n "1,120p"\n\nsystemctl --failed
```


    ## ✅ Validation Checkpoints
    - The stated objective for this tutorial is verifiable from the shell.
    - Notes for the next operator are clearer than before the tutorial began.

    ## ⚠️ Warnings
    - Do not call the host ready if SSH, firewall, storage, and service review are still undocumented.

    ## Cleanup / Post-Check
    - Save the resulting host state in the server notes.

    ## Next Tutorial
    [➡️ 04 Network](./04-network.md)

    ## Related Docs
    - [📋 Service Checklist](../reference/service-checklist.md)
    - [🛡️ Security](../../../../security/index.md)
    - [💾 Backup](../../../../backup/index.md)

Next: translate to id
