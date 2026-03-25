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
nmcli connection show
nmcli device status
```

        ### 3. Apply the chosen static or predictable configuration model
        ```bash
nmcli connection show
sudo nmcli connection modify enp1s0 ipv4.method manual ipv4.addresses 192.0.2.10/24 ipv4.gateway 192.0.2.1 ipv4.dns "1.1.1.1 9.9.9.9"
sudo nmcli connection up enp1s0
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
