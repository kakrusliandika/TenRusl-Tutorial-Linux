# 🛡️ Tutorial 07: Security

        ## Objective
        Apply the first defensive controls: minimal firewall, patch policy, and a review of exposed services.

        ## Prerequisites
        - SSH access is stable.
        - Networking and storage changes are complete for the baseline stage.

        ## Environment Assumptions
        - Only management access should be public at this point.

        ## Sequential Steps
        ### 1. Apply the baseline firewall policy
        ```bash
sudo apt-get update
sudo apt-get install -y ufw
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow OpenSSH
sudo ufw --force enable
sudo ufw status verbose
```

        ### 2. Enable automatic update policy
        ```bash
sudo apt-get update
sudo apt-get install -y unattended-upgrades apt-listchanges
sudo dpkg-reconfigure -plow unattended-upgrades
systemctl status unattended-upgrades --no-pager || true
```

        ### 3. Review the resulting security-relevant state
        ```bash
ss -ltnup\nsystemctl --failed\njournalctl -p warning -b --no-pager | tail -n 30 || true
```


    ## ✅ Validation Checkpoints
    - The stated objective for this tutorial is verifiable from the shell.
    - Notes for the next operator are clearer than before the tutorial began.

    ## ⚠️ Warnings
    - Do not call the host ready if SSH, firewall, storage, and service review are still undocumented.

    ## Cleanup / Post-Check
    - Save the resulting host state in the server notes.

    ## Next Tutorial
    [➡️ 08 Services](./08-services.md)

    ## Related Docs
    - [📋 Service Checklist](../reference/service-checklist.md)
    - [🛡️ Security](../../../../security/index.md)
    - [💾 Backup](../../../../backup/index.md)

Next: translate to id
