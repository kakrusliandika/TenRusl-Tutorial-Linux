# 📋 Directory Layout

        ## Purpose
        Use this page to discover where aaPanel stores or influences configuration, content, and runtime state on Linux.

        ## Structured Data / Reference
        | Area | Typical Location or Discovery Rule | Why It Matters |
| --- | --- | --- |
| Panel-managed config roots | Discover with shell, do not assume UI labels are enough | sudo find /www /etc -maxdepth 3 -type d \( -name server -o -name panel -o -name wwwroot -o -name backup \) 2>/dev/null | sort |
| Recently changed config files | Useful after a panel action to see what actually changed | sudo find /www/server /etc/nginx /etc/apache2 -maxdepth 3 -type f -mtime -2 2>/dev/null | sort | tail -n 40 |
| Web roots | aaPanel often creates site roots under `/www/wwwroot`, but always verify the actual generated path and ownership on the host. | Confirm ownership and backup scope per site. |
| Database or runtime state | Depends on product and install choices | Inventory local services before promising backup coverage. |

        ## Command Snippets
        ```bash
sudo find /www /etc -maxdepth 3 -type d \( -name server -o -name panel -o -name wwwroot -o -name backup \) 2>/dev/null | sort

sudo find /www/server /etc/nginx /etc/apache2 -maxdepth 3 -type f -mtime -2 2>/dev/null | sort | tail -n 40
```

        ## Interpretation Notes
        - aaPanel commonly manages LNMP or LAMP style services and stores panel-owned state under `/www/server` plus related roots. Exact package combinations vary by install choices.
        - Prefer discovery commands over hardcoded assumptions when install method or release may differ.
        - Keep directory inventory alongside backup procedures so restore scope is obvious.

        ## Related Docs
        - [💾 Back Up Panel Config](../how-to/backup-config.md)
        - [📋 Service Map](./service-map.md)

Next: translate to id
