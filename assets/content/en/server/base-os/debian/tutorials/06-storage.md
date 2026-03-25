# 💽 Tutorial 06: Storage

        ## Objective
        Add predictable data storage so logs, applications, or backups do not accumulate blindly on the root filesystem.

        ## Prerequisites
        - An extra disk or volume is attached.
        - You know whether the new disk can be safely formatted.

        ## Environment Assumptions
        - The storage change is happening before production data is copied.

        ## Sequential Steps
        ### 1. Inspect current disks and mounts
        ```bash
lsblk -f\ndf -h\nfindmnt
```

        ### 2. Prepare the new disk and mount by UUID
        ```bash
sudo apt-get update
sudo apt-get install -y e2fsprogs\nsudo parted -s /dev/sdb mklabel gpt\nsudo parted -s /dev/sdb mkpart primary ext4 1MiB 100%\nsudo mkfs.ext4 /dev/sdb1\nsudo mkdir -p /srv/data\nUUID=$(sudo blkid -s UUID -o value /dev/sdb1)\necho "UUID=$UUID /srv/data ext4 defaults,nofail 0 2" | sudo tee -a /etc/fstab\nsudo mount -a
```

        ### 3. Validate the new mount and basic write path
        ```bash
findmnt /srv/data\nlsblk -f\nsudo touch /srv/data/.write-test && sudo rm -f /srv/data/.write-test
```


    ## ✅ Validation Checkpoints
    - The stated objective for this tutorial is verifiable from the shell.
    - Notes for the next operator are clearer than before the tutorial began.

    ## ⚠️ Warnings
    - Do not call the host ready if SSH, firewall, storage, and service review are still undocumented.

    ## Cleanup / Post-Check
    - Save the resulting host state in the server notes.

    ## Next Tutorial
    [➡️ 07 Security](./07-security.md)

    ## Related Docs
    - [📋 Service Checklist](../reference/service-checklist.md)
    - [🛡️ Security](../../../../security/index.md)
    - [💾 Backup](../../../../backup/index.md)

Next: translate to id
