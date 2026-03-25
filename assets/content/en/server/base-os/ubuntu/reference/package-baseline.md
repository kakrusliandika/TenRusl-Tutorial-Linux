# 📦 Package Baseline

        ## Purpose
        Keep this page as the deliberate package floor for a clean Ubuntu server before role-specific software is added.

        ## Structured Data / Reference
        | Purpose | Package or Tool | Why It Matters |
| --- | --- | --- |
| Remote access | `openssh-server` | Standard SSH control plane for Ubuntu hosts. |
| Firewall | `ufw` | Simple host firewall for predictable baseline policy. |
| Diagnostics | `curl`, `jq`, `rsync`, `less` | Network, API, and log inspection. |
| Editing and privilege | `vim-tiny`, `sudo` | Maintenance edits and escalation discipline. |
| Update automation | `unattended-upgrades`, `apt-listchanges` | Automatic patching with review clues. |
| Networking | `netplan.io` | Persistent renderer-driven network configuration. |

        ## Command Snippets
        ```bash
sudo apt-get update
sudo apt-get dist-upgrade -y
sudo apt-get install -y sudo curl ca-certificates rsync jq less vim-tiny gnupg openssh-server ufw unattended-upgrades apt-listchanges netplan.io
```

        ## Interpretation Notes
        - Keep optional role packages out of the baseline until the workload really arrives.
        - Review the manual package list after every maintenance window that adds new tooling.

        ## Related Docs
        - [📦 Ubuntu Server Baseline](../concepts/ubuntu-baseline.md)
        - [📦 Tutorial 03: Install Core](../tutorials/03-install-core.md)

Next: translate to id
