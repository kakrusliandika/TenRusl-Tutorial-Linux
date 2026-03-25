# 📋 Service Map

    ## Purpose
    Use this page as a practical Caddy edge operations reference.

    ## Structured Data / Reference
    | Area | What To Confirm | Why It Matters |
| --- | --- | --- |
| Caddy service | Running, reloadable, and logging cleanly | Edge ownership must be explicit. |
| Caddyfile | Valid before reload or restart | Prevents config typos from causing edge outages. |
| Certificate state | Present and readable under the service account | Needed for TLS continuity and backup coverage. |
| Backend service | Reachable without the proxy | Separates edge failures from app failures. |

    ## Command Snippets
    ```bash
sudo systemctl status caddy --no-pager
sudo caddy validate --config /etc/caddy/Caddyfile
sudo journalctl -u caddy -n 80 --no-pager
sudo ss -ltnp | egrep ":(80|443|2019)" || true
```

    ## Interpretation Notes
    - Backup both config and state if you want a clean restore path.
- Review the service map after every config edit, certificate event, or backend move.

    ## Related Docs
    - [💾 Back Up Caddy Config](../how-to/backup-config.md)
- [📋 Service Map](./service-map.md)
- [💾 Backup](../../../../backup/index.md)

Next: translate to id
