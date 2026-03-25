# 🌐 Set a Static IP

        ## Objective
        Make network identity on Debian predictable enough that SSH, DNS, reverse proxy routing, and monitoring do not depend on changing DHCP leases.

        ## When To Use This Procedure
        Use this when the host needs a fixed address, predictable DNS, or stable interface policy for production workloads.

        ## Prerequisites
        - Console or out-of-band access in case the host loses connectivity.
        - The intended address, gateway, prefix, and DNS servers.
        - Knowledge of which interface should carry the management address.

        ## Environment Assumptions
        - Debian can arrive with ifupdown, NetworkManager, cloud-init, or systemd-networkd depending on installer and image lineage. Identify the active renderer before editing network state.
        - You will inspect the active renderer before editing anything.

        ## Exact Steps
        ### 1. Discover the active network model and current state
        ```bash
ip -br addr
ip route
resolvectl status || systemd-resolve --status || true
ls -la /etc/network /etc/systemd/network /etc/netplan 2>/dev/null || true
systemctl is-active networking NetworkManager systemd-networkd 2>/dev/null || true
cloud-init status 2>/dev/null || true
```

        ### 2. Create a static configuration using the renderer the host actually uses
        Example configuration:
        ```ini
[Match]
Name=enp1s0

[Network]
Address=192.0.2.10/24
Gateway=192.0.2.1
DNS=1.1.1.1
DNS=9.9.9.9
```

        ### 3. Apply the change carefully and re-test routing before closing the session
        ```bash
sudo install -d -m 0755 /etc/systemd/network
sudo editor /etc/systemd/network/10-enp1s0.network
sudo networkctl reload || true
sudo systemctl restart systemd-networkd || true
ip -br addr
ip route
```

        ### 4. Validate name resolution after the network change
        ```bash
getent hosts example.com
ping -c 2 1.1.1.1 || true
```

        ## ✅ Validation Checkpoints
        - The intended interface keeps the expected static address after reload.
        - Default route and DNS resolution still work.
        - SSH remains reachable from a second session.

        ## Troubleshooting
        - Multiple renderers appear active: stop and identify which one is authoritative before editing again.
        - The host loses DNS: verify nameserver config and whether cloud-init reapplied old settings.
        - The address applies but routes are wrong: re-check gateway, prefix length, and policy routes.

        ## ↩️ Rollback / Recovery Notes
        - Restore the previous config from the console if the host becomes unreachable.
        - Keep one copy of the last-known-good network file before any edit.

        ## Related Docs
        - [📋 Service Checklist](../reference/service-checklist.md)
        - [🌐 Tutorial 04: Network](../tutorials/04-network.md)

Next: translate to id
