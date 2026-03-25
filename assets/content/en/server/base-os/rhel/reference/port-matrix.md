# 🌐 Port Matrix

        ## Purpose
        Use this matrix to keep the RHEL-family baseline listener set small and intentional before role-specific services are added.

        ## Structured Data / Reference
        | Port or Flow | Direction | Purpose | Policy Guidance | Validation |
| --- | --- | --- | --- | --- |
| 22/tcp | Inbound | SSH administration | Open only to trusted management networks | ss -ltnp | grep :22 |
| 80/tcp | Inbound | Optional future web traffic | Only after a real HTTP service exists | ss -ltnp | grep :80 || true |
| 443/tcp | Inbound | Optional future HTTPS traffic | Only after a real HTTPS service exists | ss -ltnp | grep :443 || true |
| Package egress | Outbound | Updates and repository access | Allow according to repository policy | curl -I https://example.com || true |

        ## Command Snippets
        ```bash
ss -ltnup
sudo iptables -S 2>/dev/null | sed -n "1,80p" || true
sudo nft list ruleset 2>/dev/null | sed -n "1,120p" || true
```

        ## Interpretation Notes
        - A baseline host rarely needs more than SSH inbound before workloads are added.
        - Document every exception so later operators know whether it belongs to the base OS or to an application role.
        - Keep public database listeners closed unless there is an explicit reviewed requirement.

        ## Related Docs
        - [🛡️ Configure the Firewall](../how-to/configure-firewall.md)
        - [🛡️ Tutorial 07: Security](../tutorials/07-security.md)

Next: translate to id
