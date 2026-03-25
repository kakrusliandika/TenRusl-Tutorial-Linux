# 📋 Directory Layout

        ## Purpose
        Use this page to discover where Nginx UI stores or influences configuration, content, and runtime state on Linux.

        ## Structured Data / Reference
        | Area | Typical Location or Discovery Rule | Why It Matters |
| --- | --- | --- |
| Panel-managed config roots | Discover with shell, do not assume UI labels are enough | sudo find /etc/nginx /var/log/nginx /usr/share/nginx -maxdepth 3 -type d 2>/dev/null | sort |
| Recently changed config files | Useful after a panel action to see what actually changed | sudo find /etc/nginx -maxdepth 4 -type f -mtime -2 2>/dev/null | sort | tail -n 40 |
| Web roots | Nginx UI generally manages server blocks, upstreams, and TLS material tied to the Nginx config tree. Verify generated config with `nginx -t` after every UI change. | Confirm ownership and backup scope per site. |
| Database or runtime state | Depends on product and install choices | Inventory local services before promising backup coverage. |

        ## Command Snippets
        ```bash
sudo find /etc/nginx /var/log/nginx /usr/share/nginx -maxdepth 3 -type d 2>/dev/null | sort

sudo find /etc/nginx -maxdepth 4 -type f -mtime -2 2>/dev/null | sort | tail -n 40
```

        ## Interpretation Notes
        - Nginx UI installation method matters. Some deployments run it as a native service, others in containers. Keep the web server and panel state discoverable from the shell before relying on the UI.
        - Prefer discovery commands over hardcoded assumptions when install method or release may differ.
        - Keep directory inventory alongside backup procedures so restore scope is obvious.

        ## Related Docs
        - [💾 Back Up Panel Config](../how-to/backup-config.md)
        - [📋 Service Map](./service-map.md)

Next: translate to id
