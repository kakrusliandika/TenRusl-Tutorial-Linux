# 📋 Service Checklist

    ## Purpose
    Use this checklist before handing a Ubuntu host to another team member or before layering workload-specific software on top.

    ## Structured Data / Reference
    | Area | What To Confirm | Command Snippet |
| --- | --- | --- |
| Identity | Hostname, time sync, and DNS are correct | hostnamectl; timedatectl; getent hosts $(hostname -f) 2>/dev/null || true |
| Remote access | SSH is enabled and validated | systemctl status ssh --no-pager; ss -ltnp | grep :22 || true |
| Network | Addresses, routes, and resolver state are intentional | ip -br addr; ip route; resolvectl status || true |
| Security | Firewall and update automation match policy | systemctl list-timers --all | grep -Ei "unattended|dnf" || true |
| Health | No unexplained failed units remain | systemctl --failed; journalctl -p err -b --no-pager | tail -n 40 |

    ## Command Snippets
    ```bash
systemctl list-unit-files --state=enabled | sed -n "1,120p"
systemctl --failed
ss -ltnup
```

    ## Interpretation Notes
    - Ubuntu hardening should treat cloud-init, SSH, firewall state, and unattended updates as part of the baseline, not post-install extras.
    - Keep checklist output in server notes so drift is visible over time.

    ## Related Docs
    - [🧹 Service Minimization](../concepts/service-minimization.md)
    - [📋 Tutorial 08: Services](../tutorials/08-services.md)

Next: translate to id
