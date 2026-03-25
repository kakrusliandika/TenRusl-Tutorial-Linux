# 📦 Package Baseline

        ## Purpose
        Keep this page as the deliberate package floor for a clean Debian server before role-specific software is added.

        ## Structured Data / Reference
        | Purpose | Package or Tool | Why It Matters |
| --- | --- | --- |
| Remote access | `openssh-server` | Stable SSH path for admin and automation. |
| Firewall | `ufw` | Readable baseline firewall policy. |
| Diagnostics | `curl`, `jq`, `rsync`, `less` | Health checks, transfer, and inspection. |
| Editing and privilege | `vim-tiny`, `sudo` | Safe maintenance edits and controlled escalation. |
| Update automation | `unattended-upgrades`, `apt-listchanges` | Routine patching with review clues. |

        ## Command Snippets
        ```bash
sudo apt-get update
sudo apt-get full-upgrade -y
sudo apt-get install -y sudo curl ca-certificates rsync jq less vim-tiny gnupg openssh-server ufw unattended-upgrades apt-listchanges
```

        ## Interpretation Notes
        - Keep optional role packages out of the baseline until the workload really arrives.
        - Review the manual package list after every maintenance window that adds new tooling.

        ## Related Docs
        - [📦 Debian Server Baseline](../concepts/debian-baseline.md)
        - [📦 Tutorial 03: Install Core](../tutorials/03-install-core.md)

Next: translate to id
