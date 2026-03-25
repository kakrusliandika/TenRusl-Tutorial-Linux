# 🧰 Hardware Requirements

        ## Purpose
        Use this page as a practical sizing baseline for a Debian server before application-specific growth changes the requirements.

        ## Structured Data / Reference
        | Resource | Minimum Lab | Practical Baseline | Interpretation |
| --- | --- | --- | --- |
| CPU | 2 vCPU | 4 vCPU or more | Enough headroom for package work, logs, backups, and the first application role. |
| Memory | 2 GiB | 4-8 GiB | Prevents baseline services and updates from competing with workload memory too early. |
| System disk | 20 GiB | 40 GiB or more | Leaves room for packages, logs, rollback artifacts, and snapshots. |
| Data disk | Optional | Separate disk or volume | Recommended for service data, web roots, or backup staging. |
| Network | 1 stable NIC | Predictable addressing plus DNS | Management access and service reachability depend on consistent networking. |

        ## Command Snippets
        ```bash
lscpu | sed -n "1,20p"
free -h
lsblk -f
ip -br addr
```

        ## Interpretation Notes
        - Debian is comfortable on small lab footprints, but a serious server still needs headroom for logs, updates, and rollback artifacts.
        - Size for logs, backups, and maintenance windows, not only for first boot.
        - If the host will later run a panel, reverse proxy, or containers, budget above the base OS minimum.

        ## Related Docs
        - [📦 Package Baseline](./package-baseline.md)
        - [🧪 Tutorial 02: Install Preflight](../tutorials/02-install-preflight.md)

Next: translate to id
