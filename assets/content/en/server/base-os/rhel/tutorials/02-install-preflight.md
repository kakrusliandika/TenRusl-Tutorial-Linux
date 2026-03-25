# 🧪 Tutorial 02: Install Preflight

        ## Objective
        Confirm that repositories, time, network links, and console fallback are ready before baseline package work begins.

        ## Prerequisites
        - Tutorial 01 notes are complete.

        ## Environment Assumptions
        - The host can reach required package mirrors.
        - You can still reach the server through console or rescue tools if package or network work goes badly.

        ## Sequential Steps
        ### 1. Validate identity, time, and current networking
        ```bash
hostnamectl\ntimedatectl\nip -br addr\nip route
```

        ### 2. Validate package repository reachability
        ```bash
ping -c 2 1.1.1.1 || true\ngetent hosts example.com\nsudo dnf makecache
```

        ### 3. Review disk layout before you add packages or mounts
        ```bash
lsblk -f\ndf -h\nmount | sed -n "1,40p"
```


    ## ✅ Validation Checkpoints
    - The stated objective for this tutorial is verifiable from the shell.
    - Notes for the next operator are clearer than before the tutorial began.

    ## ⚠️ Warnings
    - Do not call the host ready if SSH, firewall, storage, and service review are still undocumented.

    ## Cleanup / Post-Check
    - Save the resulting host state in the server notes.

    ## Next Tutorial
    [➡️ 03 Install Core](./03-install-core.md)

    ## Related Docs
    - [📋 Service Checklist](../reference/service-checklist.md)
    - [🛡️ Security](../../../../security/index.md)
    - [💾 Backup](../../../../backup/index.md)

Next: translate to id
