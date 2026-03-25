# 🔒 Set Up SSL

    ## Objective
    Enable TLS for a Nginx UI-managed site and verify the resulting certificate and listener state from the shell.

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
    ### 1. Verify DNS and current listeners before requesting or attaching certificates
```bash
dig +short example.com\nsudo ss -ltnp | egrep ":(80|443)" || true
```

### 2. Use the panel workflow to request or attach the certificate
- Prefer a staging hostname the first time if the environment is new.
- Confirm whether the panel stores certificate files locally or delegates management to the web server.

### 3. Validate the live certificate from the shell
```bash
curl -Ik https://example.com\nopenssl s_client -connect example.com:443 -servername example.com </dev/null | openssl x509 -noout -subject -issuer -dates
```

### 4. Review service logs if issuance or reload fails
```bash
sudo journalctl -u nginx -u apache2 -u httpd -n 80 --no-pager 2>/dev/null || true
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
