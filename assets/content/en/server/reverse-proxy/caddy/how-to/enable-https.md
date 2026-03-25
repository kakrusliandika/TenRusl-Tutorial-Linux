# 🔒 Enable HTTPS

        ## Objective
        Execute the enable https workflow for Caddy with shell-based validation.

        ## When To Use This Procedure
        Use this during a real edge-service change window or during lab rehearsal before production use.

        ## Prerequisites
        - A hostname, backend service, and SSH access.
        - A rollback path for config and certificate state.

        ## Environment Assumptions
        - Caddy should be the intentional owner of 80 and 443 unless a migration plan says otherwise.

        ## Exact Steps
        ```bash
dig +short example.com
sudo ss -ltnp | egrep ":(80|443)" || true
curl -Ik https://example.com
openssl s_client -connect example.com:443 -servername example.com </dev/null | openssl x509 -noout -subject -issuer -dates
sudo journalctl -u caddy -n 100 --no-pager | tail -n 40
```

        ## ✅ Validation Checkpoints
        - Config, listeners, and live HTTP or HTTPS behavior all agree.

        ## Troubleshooting
        - Separate DNS, listener, certificate, and upstream failures instead of guessing.

        ## ↩️ Rollback / Recovery Notes
        - Revert to the last known-good Caddyfile and state archive before improvising on a broken edge.

        ## Related Docs
        - [📋 Service Map](../reference/service-map.md)
        - [💾 Backup](../../../../backup/index.md)

Next: translate to id
