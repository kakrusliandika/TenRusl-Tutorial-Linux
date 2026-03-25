# 📦 Package Baseline

        ## Purpose
        Keep this page as the deliberate package floor for a clean RHEL-family server before role-specific software is added.

        ## Structured Data / Reference
        | Purpose | Package or Tool | Why It Matters |
| --- | --- | --- |
| Remote access | `openssh-server` | Persistent SSH administration on enterprise-style hosts. |
| Firewall | `firewalld` | Zone-aware baseline firewall management. |
| Diagnostics | `curl`, `jq`, `rsync`, `less` | Health checks, API inspection, and transfer tooling. |
| Editing and privilege | `vim-minimal`, `sudo` | Maintenance edits and controlled escalation. |
| Update automation | `dnf-automatic` | Timer-based patch cadence. |
| SELinux tooling | `policycoreutils-python-utils` | Context and policy support for later workloads. |

        ## Command Snippets
        ```bash
sudo dnf makecache
sudo dnf upgrade -y
sudo dnf install -y sudo curl ca-certificates rsync jq less vim-minimal policycoreutils-python-utils openssh-server firewalld dnf-automatic xfsprogs
```

        ## Interpretation Notes
        - Keep optional role packages out of the baseline until the workload really arrives.
        - Review the manual package list after every maintenance window that adds new tooling.

        ## Related Docs
        - [📦 RHEL-family Server Baseline](../concepts/rhel-baseline.md)
        - [📦 Tutorial 03: Install Core](../tutorials/03-install-core.md)

Next: translate to id
