# 📋 Directory Layout

    ## Purpose
    Use this page as a practical Caddy edge operations reference.

    ## Structured Data / Reference
    | Area | Path | Why It Matters |
| --- | --- | --- |
| Primary config | `/etc/caddy/Caddyfile` | Main edge routing definition. |
| Config directory | `/etc/caddy` | Useful when includes or auxiliary files are used. |
| State and certificates | `/var/lib/caddy` | Certificate and state data that must be backed up. |
| Logs | `journalctl -u caddy` | Primary service log review path on systemd hosts. |

    ## Command Snippets
    ```bash
sudo ls -la /etc/caddy
sudo ls -la /var/lib/caddy 2>/dev/null || true
sudo journalctl -u caddy -n 80 --no-pager
```

    ## Interpretation Notes
    - Backup both config and state if you want a clean restore path.
- Review the service map after every config edit, certificate event, or backend move.

    ## Related Docs
    - [💾 Back Up Caddy Config](../how-to/backup-config.md)
- [📋 Service Map](./service-map.md)
- [💾 Backup](../../../../backup/index.md)

Next: translate to id
