# 🖥️ 03 Install Base

    ## Objective
    Progress the Caddy edge rollout while keeping DNS, listeners, certificates, and upstream reachability visible from Linux.

    ## Prerequisites
    - SSH access, one test hostname, and at least one backend service.

    ## Environment Assumptions
    - The edge is not healthy until both the public route and the upstream are independently testable.

    ## Sequential Steps
    ### 1. Perform the stage-specific edge task
    - Record the hostname, upstream, and certificate expectations.

    ### 2. Inspect shell-visible state immediately
    ```bash
sudo caddy validate --config /etc/caddy/Caddyfile
sudo systemctl status caddy --no-pager
sudo ss -ltnp | egrep ":(80|443|2019)" || true
curl -I http://example.com || true
curl -Ik https://example.com || true
```

    ## ✅ Validation Checkpoints
    - Caddy config, listeners, and the route all agree.

    ## ⚠️ Warnings
    - Do not blame TLS or the proxy before confirming DNS and upstream reachability.

    ## Cleanup / Post-Check
    - Save hostname, upstream, and backup notes.

    ## Next Tutorial
    [➡️ 04 Install Caddy](./04-install-caddy.md)

    ## Related Docs
    - [📋 Service Map](../reference/service-map.md)
    - [🛡️ Security](../../../../security/index.md)
    - [💾 Backup](../../../../backup/index.md)

Next: translate to id
