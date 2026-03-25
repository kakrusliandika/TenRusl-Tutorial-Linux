# 🛡️ Configure the Firewall

        ## Objective
        Apply a minimal inbound firewall policy on Ubuntu so the host exposes only what the baseline stage actually requires.

        ## When To Use This Procedure
        Use this after SSH is installed and tested, before exposing the host to public traffic or adding application ports.

        ## Prerequisites
        - A second SSH session or console access.
        - A written list of ports that must stay reachable now.

        ## Environment Assumptions
        - Baseline stage usually requires only SSH inbound.
        - Web, database, or application ports will be added later when the related service is ready.

        ## Exact Steps
        ### 1. Apply the distro-native firewall policy
        ```bash
sudo apt-get update
sudo apt-get install -y ufw
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow OpenSSH
sudo ufw --force enable
sudo ufw status verbose
```

        ### 2. Compare firewall state with real listeners
        ```bash
ss -ltnup
systemctl --failed
```

        ### 3. Re-test SSH from a second session before you continue
        ```bash
ssh adminops@server-ip
```

        ## ✅ Validation Checkpoints
        - The firewall tool reports an active policy.
        - Only intended management ports remain reachable.
        - SSH reconnection works before the maintenance window ends.

        ## Troubleshooting
        - SSH fails after applying the firewall: use the console, review the last rule change, and compare listeners with firewall state.
        - Too many ports remain open: identify the owning service before adding more rules.
        - Cloud firewall and host firewall disagree: document both layers and align them intentionally.

        ## ↩️ Rollback / Recovery Notes
        - If management access breaks, revert the last change from the console immediately.
        - Keep policy minimal until the application role is fully installed and tested.

        ## Related Docs
        - [🔐 Install OpenSSH](./install-openssh.md)
        - [🌐 Port Matrix](../reference/port-matrix.md)
        - [🛡️ Tutorial 07: Security](../tutorials/07-security.md)

Next: translate to id
