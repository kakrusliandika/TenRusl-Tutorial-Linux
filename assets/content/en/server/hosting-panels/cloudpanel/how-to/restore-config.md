# ↩️ Restore Panel Config

    ## Objective
    Restore CloudPanel configuration and surrounding hosting state after a failed change, host rebuild, or migration test.

    ## When To Use This Procedure
    Use this during a real change window on a host where the panel and SSH access both remain available.

    ## Prerequisites
    - SSH access independent of the panel.
    - A staging or production hostname if the task touches routing or TLS.
    - A backup or rollback path before the change starts.

    ## Environment Assumptions
    - UI wording may vary by release, but host-side verification stays stable.
    - CloudPanel commonly manages Nginx, PHP-FPM, and database services with site roots under `/home/*/htdocs` or similar cloud-friendly layouts. Exact service names can vary by version.

    ## Exact Steps
    ### 1. Inspect the current host before overwriting state
```bash
systemctl list-units --type=service | grep -Ei 'nginx|php.*fpm|mysql|mariadb|redis|cloudpanel|clp' || true\n\nss -ltnp
```

### 2. Stop or isolate panel-managed services during file restore
```bash
sudo systemctl stop nginx apache2 httpd php8.2-fpm php8.1-fpm php-fpm mysql mariadb 2>/dev/null || true
```

### 3. Restore files and, if needed, database state
```bash
sudo tar -xzf /root/panel-backup-latest.tgz -C /\nmysql < /root/panel-databases-latest.sql 2>/dev/null || mariadb < /root/panel-databases-latest.sql 2>/dev/null || true
```

### 4. Start services and validate again
```bash
sudo systemctl start nginx apache2 httpd php8.2-fpm php8.1-fpm php-fpm mysql mariadb 2>/dev/null || true\nss -ltnp\ncurl -I http://example.com\ncurl -Ik https://example.com
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
