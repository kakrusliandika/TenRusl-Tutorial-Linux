# 💾 Back Up Panel Config

    ## Objective
    Capture Nginx UI configuration and enough surrounding Linux context that the panel can be restored with the same routing and service expectations.

    ## When To Use This Procedure
    Use this during a real change window on a host where the panel and SSH access both remain available.

    ## Prerequisites
    - SSH access independent of the panel.
    - A staging or production hostname if the task touches routing or TLS.
    - A backup or rollback path before the change starts.

    ## Environment Assumptions
    - UI wording may vary by release, but host-side verification stays stable.
    - Nginx UI installation method matters. Some deployments run it as a native service, others in containers. Keep the web server and panel state discoverable from the shell before relying on the UI.

    ## Exact Steps
    ### 1. Discover the relevant config and content locations
```bash
sudo find /etc/nginx /var/log/nginx /usr/share/nginx -maxdepth 3 -type d 2>/dev/null | sort\n\nsudo find /etc/nginx -maxdepth 4 -type f -mtime -2 2>/dev/null | sort | tail -n 40
```

### 2. Capture service inventory and listener state before archiving
```bash
systemctl list-units --type=service | grep -Ei 'nginx|nginx-ui' || true
docker ps --format 'table {{.Names}}	{{.Status}}	{{.Ports}}' 2>/dev/null || true\n\nss -ltnp
```

### 3. Create an archive of panel and site state
```bash
sudo tar -czf /root/panel-backup-$(date +%F-%H%M).tgz /www /etc/nginx /etc/apache2 /etc/php /home 2>/dev/null || true\nsudo mysqldump --all-databases --single-transaction --quick --lock-tables=false > /root/panel-databases-$(date +%F-%H%M).sql 2>/dev/null || true
```

    ## ✅ Validation Checkpoints
    - Shell-level state matches the panel intent.
    - Services, listeners, and logs remain understandable after the change.

    ## Troubleshooting
    - Compare panel intent with actual config, listeners, and logs before making more UI changes.
    - Separate DNS, web service, runtime, and database problems instead of assuming one root cause.

    ## ↩️ Rollback / Recovery Notes
    - Restore the last known-good config or remove the failing change before improvising further.
    - Keep one untouched backup from before the current maintenance window.

    ## Related Docs
    - [📋 Service Map](../reference/service-map.md)
    - [📋 Directory Layout](../reference/directory-layout.md)
    - [🛡️ Security](../../../../security/index.md)

Next: translate to id
