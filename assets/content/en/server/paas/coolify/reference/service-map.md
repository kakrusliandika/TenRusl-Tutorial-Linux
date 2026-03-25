# 📋 Service Map

    ## Purpose
    Use this page as a practical Coolify operations reference.

    ## Structured Data / Reference
    | Area | What To Confirm | Why It Matters |
| --- | --- | --- |
| Docker engine | Running, restartable, and healthy | Platform state depends on it directly. |
| Coolify control-plane containers | Visible and stable in `docker ps` | If they are missing, the UI is not the only problem. |
| Proxy or ingress layer | Listeners and routes match intended domains | Required for external reachability. |
| Application containers | Running with expected images, ports, and volumes | Needed for per-app troubleshooting and rollback. |

    ## Command Snippets
    ```bash
docker ps --format 'table {{.Names}}	{{.Status}}	{{.Ports}}'
docker volume ls
systemctl status docker --no-pager

systemctl --failed
ss -ltnp
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
