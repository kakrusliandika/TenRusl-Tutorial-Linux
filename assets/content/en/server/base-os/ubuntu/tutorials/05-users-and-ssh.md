# 🔐 Tutorial 05: Users and SSH

        ## Objective
        Establish a safe admin access path using named users, SSH, and a second-session test before later hardening.

        ## Prerequisites
        - Network identity is stable.
        - You have the admin public key ready.

        ## Environment Assumptions
        - Console access is still available if SSH policy needs to be reverted.

        ## Sequential Steps
        ### 1. Install and validate the SSH service if it is not already active
        ```bash
sudo apt-get update
sudo apt-get install -y openssh-server
sudo systemctl enable --now ssh\n\nsystemctl status ssh --no-pager
```

        ### 2. Create an admin account and load the public key
        ```bash
id adminops 2>/dev/null || sudo useradd -m -s /bin/bash adminops\nsudo usermod -aG sudo adminops 2>/dev/null || sudo usermod -aG wheel adminops 2>/dev/null || true\nsudo install -d -m 0700 -o adminops -g adminops /home/adminops/.ssh\nsudo install -m 0600 -o adminops -g adminops /dev/stdin /home/adminops/.ssh/authorized_keys <<'EOF'\nssh-ed25519 AAAA...replace-with-real-key... adminops@example\nEOF
```

        ### 3. Test SSH from a second session before closing the first
        ```bash
ssh adminops@server-ip
```


    ## ✅ Validation Checkpoints
    - The stated objective for this tutorial is verifiable from the shell.
    - Notes for the next operator are clearer than before the tutorial began.

    ## ⚠️ Warnings
    - Do not call the host ready if SSH, firewall, storage, and service review are still undocumented.

    ## Cleanup / Post-Check
    - Save the resulting host state in the server notes.

    ## Next Tutorial
    [➡️ 06 Storage](./06-storage.md)

    ## Related Docs
    - [📋 Service Checklist](../reference/service-checklist.md)
    - [🛡️ Security](../../../../security/index.md)
    - [💾 Backup](../../../../backup/index.md)

Next: translate to id
