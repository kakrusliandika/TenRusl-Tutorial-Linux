# 📋 Port Matrix

        ## Purpose
        Use this matrix to keep CloudPanel hosting traffic separated from management traffic and to keep local-only data services off the public edge.

        ## Structured Data / Reference
        | Port or Class | Purpose | Policy Guidance | Validation |
| --- | --- | --- | --- |
| 22/tcp | SSH management | Restrict to trusted admin networks | ss -ltnp | grep :22 || true |
| 80/tcp | HTTP site traffic and certificate challenges | Open only if the host should answer web traffic | ss -ltnp | grep :80 || true |
| 443/tcp | HTTPS site traffic | Open only for intended sites | ss -ltnp | grep :443 || true |
| Panel admin listener | Installation-dependent | Restrict aggressively; discover the real listener from the shell | ss -ltnp | grep -Ei "panel|bt|clp|nginx-ui|8443|8888|7800" || true |
| Database ports | Usually local only | Do not publish unless there is a reviewed requirement | ss -ltnp | grep -Ei ":3306|:5432|:6379" || true |

        ## Command Snippets
        ```bash
ss -ltnup
sudo nft list ruleset 2>/dev/null | sed -n "1,120p" || true
sudo iptables -S 2>/dev/null | sed -n "1,120p" || true
```

        ## Interpretation Notes
        - The panel admin listener should be treated separately from customer-facing site traffic.
        - If database listeners appear on public addresses, stop and verify whether that exposure is intentional.
        - Keep upstream and host firewalls aligned with the same documented port policy.

        ## Related Docs
        - [🔒 Set Up SSL](../how-to/set-up-ssl.md)
        - [🔐 08 Admin Zone](../tutorials/08-admin-zone.md)
        - [✅ 09 Hardening](../tutorials/09-hardening.md)

Next: translate to id
