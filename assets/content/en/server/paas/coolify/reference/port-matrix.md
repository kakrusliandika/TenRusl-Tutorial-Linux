# 📋 Port Matrix

    ## Purpose
    Use this page as a practical Coolify operations reference.

    ## Structured Data / Reference
    | Port or Class | Purpose | Policy Guidance | Validation |
| --- | --- | --- | --- |
| 22/tcp | SSH management | Keep restricted to trusted admin networks | ss -ltnp | grep :22 || true |
| 80/tcp | HTTP entry and certificate flow | Expose only when the platform should serve web traffic | ss -ltnp | grep :80 || true |
| 443/tcp | HTTPS entry for deployed apps | Expose only when TLS traffic is intended | ss -ltnp | grep :443 || true |
| Platform admin listener | Installation-dependent | Document and restrict aggressively | ss -ltnp | grep -Ei "coolify|8000|3000|8080|8443" || true |
| Container backends | Usually private or bridge-local | Do not publish directly unless reviewed | docker ps --format "table {{.Names}}\t{{.Ports}}" |

    ## Command Snippets
    ```bash
ss -ltnup
docker ps --format "table {{.Names}}	{{.Ports}}"
sudo nft list ruleset 2>/dev/null | sed -n "1,120p" || true
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
