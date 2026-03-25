# 🌐 Add a New Site

    ## Objective
    Create a new site in Nginx UI and verify the resulting web-server, runtime, and DNS state from the shell.

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
    ### 1. Prepare DNS and note the intended document root and runtime
```bash
dig +short example.com\ngetent hosts example.com
```

### 2. Create the site through the current panel workflow, then inspect what changed on the host
```bash
sudo find /etc/nginx -maxdepth 4 -type f -mtime -2 2>/dev/null | sort | tail -n 40\n\nsudo ss -ltnp | egrep ':(80|443)' || true
```

### 3. Test HTTP and HTTPS responses from the shell
```bash
curl -I http://example.com\ncurl -Ik https://example.com
```

### 4. Review recent service logs if the site does not answer as expected
```bash
sudo journalctl -u nginx -u apache2 -u httpd -u php8.2-fpm -u php8.1-fpm -u php-fpm -n 80 --no-pager 2>/dev/null || true
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
