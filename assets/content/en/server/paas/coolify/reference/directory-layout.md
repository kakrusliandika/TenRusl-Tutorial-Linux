# 📋 Directory Layout

    ## Purpose
    Use this page as a practical Coolify operations reference.

    ## Structured Data / Reference
    | Area | Path or Discovery Rule | Why It Matters |
| --- | --- | --- |
| Platform config root | `/data/coolify` is common; verify actual path | Needed for config backup and migration planning. |
| Docker data root | `/var/lib/docker` unless overridden | Affects image storage, volumes, and capacity planning. |
| Container inventory | `docker ps --format ...` | Shows what the platform actually started. |
| Volume inventory | `docker volume ls` | Defines stateful backup scope. |

    ## Command Snippets
    ```bash
sudo find /data /var/lib/docker -maxdepth 3 -type d \( -name '*coolify*' -o -name volumes -o -name containers \) 2>/dev/null | sort

docker ps --format 'table {{.Names}}	{{.Status}}	{{.Ports}}'
docker volume ls
systemctl status docker --no-pager
```

    ## Interpretation Notes
    - Discovery beats assumption.
- Review platform state after every deploy, upgrade, or restore.
- Record which workloads are stateful before you promise recoverability.

    ## Related Docs
    - [💾 Back Up Coolify Config](../how-to/backup-config.md)
- [📋 Service Map](./service-map.md)
- [💾 Backup](../../../../backup/index.md)

Next: translate to id
