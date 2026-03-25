# 📋 Directory Layout

        ## Purpose
        Use this page to discover where CloudPanel stores or influences configuration, content, and runtime state on Linux.

        ## Structured Data / Reference
        | Area | Typical Location or Discovery Rule | Why It Matters |
| --- | --- | --- |
| Panel-managed config roots | Discover with shell, do not assume UI labels are enough | sudo find /home /etc/nginx /etc/php -maxdepth 3 -type d \( -name htdocs -o -name sites-enabled -o -name php -o -name mysql \) 2>/dev/null | sort |
| Recently changed config files | Useful after a panel action to see what actually changed | sudo find /etc/nginx /etc/php /home -maxdepth 4 -type f -mtime -2 2>/dev/null | sort | tail -n 40 |
| Web roots | CloudPanel site roots are often under `/home/*/htdocs`, but verify owner, document root, and PHP-FPM pool after each site change. | Confirm ownership and backup scope per site. |
| Database or runtime state | Depends on product and install choices | Inventory local services before promising backup coverage. |

        ## Command Snippets
        ```bash
sudo find /home /etc/nginx /etc/php -maxdepth 3 -type d \( -name htdocs -o -name sites-enabled -o -name php -o -name mysql \) 2>/dev/null | sort

sudo find /etc/nginx /etc/php /home -maxdepth 4 -type f -mtime -2 2>/dev/null | sort | tail -n 40
```

        ## Interpretation Notes
        - CloudPanel commonly manages Nginx, PHP-FPM, and database services with site roots under `/home/*/htdocs` or similar cloud-friendly layouts. Exact service names can vary by version.
        - Prefer discovery commands over hardcoded assumptions when install method or release may differ.
        - Keep directory inventory alongside backup procedures so restore scope is obvious.

        ## Related Docs
        - [💾 Back Up Panel Config](../how-to/backup-config.md)
        - [📋 Service Map](./service-map.md)

Next: translate to id
