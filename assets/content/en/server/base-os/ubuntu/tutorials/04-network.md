# 🌐 Tutorial 04: Network

        ## Objective
        Make hostname, addressing, routing, and resolver behavior predictable enough for stable SSH, DNS, and later service publishing.

        ## Prerequisites
        - Core package baseline is installed.

        ## Environment Assumptions
        - Network changes can briefly interrupt connectivity.
        - You can recover from the console if routing breaks.

        ## Sequential Steps
        ### 1. Set or confirm hostname identity
        ```bash
sudo hostnamectl set-hostname server01.example.internal\nhostnamectl\ngetent hosts $(hostname -f) 2>/dev/null || true
```

        ### 2. Inspect the current network renderer and route state
        ```bash
ip -br addr
ip route
resolvectl status || systemd-resolve --status || true
ls -la /etc/netplan 2>/dev/null || true
sudo netplan get 2>/dev/null || true
cloud-init status 2>/dev/null || true
```

        ### 3. Apply the chosen static or predictable configuration model
        ```bash
sudo cp /etc/netplan/00-installer-config.yaml /etc/netplan/00-installer-config.yaml.bak 2>/dev/null || true
sudo editor /etc/netplan/01-static.yaml
sudo netplan try
sudo netplan apply
ip -br addr
ip route
```


    ## ✅ Validation Checkpoints
    - The stated objective for this tutorial is verifiable from the shell.
    - Notes for the next operator are clearer than before the tutorial began.

    ## ⚠️ Warnings
    - Do not call the host ready if SSH, firewall, storage, and service review are still undocumented.

    ## Cleanup / Post-Check
    - Save the resulting host state in the server notes.

    ## Next Tutorial
    [➡️ 05 Users And Ssh](./05-users-and-ssh.md)

    ## Related Docs
    - [📋 Service Checklist](../reference/service-checklist.md)
    - [🛡️ Security](../../../../security/index.md)
    - [💾 Backup](../../../../backup/index.md)

Next: translate to id
