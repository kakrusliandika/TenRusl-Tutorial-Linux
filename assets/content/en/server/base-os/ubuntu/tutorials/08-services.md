# 📋 Tutorial 08: Services

        ## Objective
        Review enabled services, failed units, and listening sockets so the final baseline is deliberate rather than accidental.

        ## Prerequisites
        - Core, network, SSH, storage, and baseline security work are complete.

        ## Environment Assumptions
        - You are still working on the base OS, not yet on a higher-level application role.

        ## Sequential Steps
        ### 1. Review enabled and failed units
        ```bash
systemctl list-unit-files --state=enabled | sed -n "1,120p"\nsystemctl --failed
```

        ### 2. Review active listeners and compare them to the intended role
        ```bash
ss -ltnup\nps aux --sort=-%mem | sed -n "1,20p"
```

        ### 3. Capture a service inventory snapshot for handoff or later audits
        ```bash
systemctl list-units --type=service --state=running | sed -n "1,120p" > /tmp/running-services.txt\ncat /tmp/running-services.txt
```


    ## ✅ Validation Checkpoints
    - The stated objective for this tutorial is verifiable from the shell.
    - Notes for the next operator are clearer than before the tutorial began.

    ## ⚠️ Warnings
    - Do not call the host ready if SSH, firewall, storage, and service review are still undocumented.

    ## Cleanup / Post-Check
    - Save the resulting host state in the server notes.

    ## Next Tutorial
    [➡️ 09 Cleanup](./09-cleanup.md)

    ## Related Docs
    - [📋 Service Checklist](../reference/service-checklist.md)
    - [🛡️ Security](../../../../security/index.md)
    - [💾 Backup](../../../../backup/index.md)

Next: translate to id
