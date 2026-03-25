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
sudo dnf install -y firewalld
sudo systemctl enable --now firewalld
sudo firewall-cmd --permanent --add-service=ssh
sudo firewall-cmd --reload
sudo firewall-cmd --list-all
```

        ### 2. Enable automatic update policy
        ```bash
sudo dnf install -y dnf-automatic
sudo systemctl enable --now dnf-automatic.timer
systemctl status dnf-automatic.timer --no-pager
```

        ### 3. Review the resulting security-relevant state
        ```bash
ss -ltnup\nsystemctl --failed\ngetenforce 2>/dev/null || true
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
