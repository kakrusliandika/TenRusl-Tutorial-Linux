# 💽 Mount an Extra Disk

    ## Objective
    Prepare and mount an additional disk on Debian using a persistent identifier so application data does not live unplanned on the root filesystem.

    ## When To Use This Procedure
    Use this when the host receives a new virtual or physical disk for application data, logs, backups, or site content.

    ## Prerequisites
    - You know which device is new and that it does not contain needed data.
    - You have console access if the host fails to boot because of `/etc/fstab` mistakes.

    ## Environment Assumptions
    - The new disk can be wiped or freshly partitioned.
    - The server role benefits from separating data from `/`.

    ## Exact Steps
    ### 1. Inspect the device inventory before partitioning
    ```bash
lsblk -f
blkid || true
sudo fdisk -l /dev/sdb 2>/dev/null || true
```

    ### 2. Create a partition and filesystem
    ```bash
sudo apt-get update
sudo apt-get install -y e2fsprogs
sudo parted -s /dev/sdb mklabel gpt
sudo parted -s /dev/sdb mkpart primary ext4 1MiB 100%
sudo mkfs.ext4 /dev/sdb1
```

    ### 3. Mount by UUID and add the persistent entry
    ```bash
sudo mkdir -p /srv/data
UUID=$(sudo blkid -s UUID -o value /dev/sdb1)
echo "UUID=$UUID /srv/data ext4 defaults,nofail 0 2" | sudo tee -a /etc/fstab
sudo mount -a
findmnt /srv/data
lsblk -f
```

    ### 4. Test ownership and write access
    ```bash
sudo touch /srv/data/.baseline-write-test
ls -la /srv/data
sudo rm -f /srv/data/.baseline-write-test
```

    ## ✅ Validation Checkpoints
    - The mount appears in `findmnt` and `lsblk -f`.
    - The UUID-based `fstab` entry works with `mount -a`.
    - The intended service user can use the mount point safely.

    ## Troubleshooting
    - `mount -a` fails: inspect the new `/etc/fstab` line for type, UUID, or option errors.
    - The wrong disk was selected: stop immediately and confirm inventory before reformatting again.
    - Permissions are wrong: fix ownership and SELinux context where applicable before onboarding application data.

    ## ↩️ Rollback / Recovery Notes
    - Remove or comment the bad `fstab` line from rescue mode if the host fails to boot cleanly.
    - Keep the old mount and new mount clearly separated during migration to avoid mixed data paths.

    ## Related Docs
    - [💽 Tutorial 06: Storage](../tutorials/06-storage.md)
    - [💾 Backup](../../../../backup/index.md)

Next: translate to id
