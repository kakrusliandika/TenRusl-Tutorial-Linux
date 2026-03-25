# 📋 Port Matrix

    ## Purpose
    Use this page as a practical Caddy edge operations reference.

    ## Structured Data / Reference
    | Port | Purpose | Policy Guidance | Validation |
| --- | --- | --- | --- |
| 22/tcp | SSH management | Keep restricted to trusted admin networks | ss -ltnp | grep :22 || true |
| 80/tcp | HTTP and ACME challenge traffic | Open when Caddy should receive public HTTP | ss -ltnp | grep :80 || true |
| 443/tcp | HTTPS traffic | Open when Caddy serves TLS | ss -ltnp | grep :443 || true |
| 2019/tcp | Caddy admin API if enabled | Keep disabled or strictly restricted unless intentionally used | ss -ltnp | grep :2019 || true |

    ## Command Snippets
    ```bash
ss -ltnup
sudo nft list ruleset 2>/dev/null | sed -n "1,120p" || true
```

    ## Interpretation Notes
    - Backup both config and state if you want a clean restore path.
- Review the service map after every config edit, certificate event, or backend move.

    ## Related Docs
    - [💾 Back Up Caddy Config](../how-to/backup-config.md)
- [📋 Service Map](./service-map.md)
- [💾 Backup](../../../../backup/index.md)

Next: translate to id
