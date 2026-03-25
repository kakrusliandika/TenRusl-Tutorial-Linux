# 🧭 Tutorial 01: Introduction

        ## Objective
        Define why this host exists, what Debian brings to the job, and what the baseline must guarantee before applications are installed.

        ## Prerequisites
        - Candidate server or VM.
        - A place to record hostname, IP plan, and role notes.
        - Rescue access if the host later loses SSH or network connectivity.

        ## Environment Assumptions
        - Debian is a strong fit when you want a minimal baseline you can justify package by package.
        - The host can be rebuilt if the first pass exposes baseline mistakes.

        ## Sequential Steps
        ### 1. Record the intended server role, hostname, and support owner
        ```bash
printf "role=baseline\nhostname=server01\nowner=ops-team\n"
```

        ### 2. Capture the current hardware and firmware view
        ```bash
hostnamectl\nlscpu | sed -n "1,20p"\nfree -h\nlsblk -f
```

        ### 3. Decide what must be true before workload software is allowed
        - SSH must be installed and tested.
        - Firewall policy must be minimal and written down.
        - Network and storage must be predictable enough for backup and recovery.


    ## ✅ Validation Checkpoints
    - The stated objective for this tutorial is verifiable from the shell.
    - Notes for the next operator are clearer than before the tutorial began.

    ## ⚠️ Warnings
    - Do not call the host ready if SSH, firewall, storage, and service review are still undocumented.

    ## Cleanup / Post-Check
    - Save the resulting host state in the server notes.

    ## Next Tutorial
    [➡️ 02 Install Preflight](./02-install-preflight.md)

    ## Related Docs
    - [📋 Service Checklist](../reference/service-checklist.md)
    - [🛡️ Security](../../../../security/index.md)
    - [💾 Backup](../../../../backup/index.md)

Next: translate to id
