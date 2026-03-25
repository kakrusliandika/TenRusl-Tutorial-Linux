# 🛠️ Restore a VM Backup

## Objective
Import a backed-up VM into a safe restore target using the guest definition and the exported disk image as a matched set.

## Use Case
Use this procedure during a restore rehearsal, after hypervisor loss, or when rebuilding a guest onto replacement infrastructure.

## Prerequisites
- You have a restore target with enough CPU, RAM, and storage for the guest.
- The backup generation includes guest metadata and the disk image together.
- You have an isolated network or a plan to prevent IP and hostname collisions.

## Environment Assumptions
- The backup set is stored under `/srv/backup/vm/app01/<stamp>`.
- The restore target is another libvirt/KVM host or a lab host with compatible storage and drivers.
- The guest should be restored into a test network first.

## Exact Steps
### 1. Verify the backup set before import
Validate integrity before the target host is changed.

```bash
BACKUP_DIR=/srv/backup/vm/app01/2026-03-25-0100
cd "$BACKUP_DIR"
sha256sum -c SHA256SUMS
ls -lh
```

### 2. Stage the disk and review the guest definition
Confirm storage placement and check that the XML still matches the intended boot model.

```bash
sudo mkdir -p /var/lib/libvirt/images/restore
sudo rsync -aH --sparse app01.qcow2 /var/lib/libvirt/images/restore/
qemu-img info /var/lib/libvirt/images/restore/app01.qcow2
less app01.xml
```

### 3. Define the guest and attach it to an isolated network
Update XML or use a temporary network so the restored guest cannot collide with production.

```bash
virsh net-list --all
virsh define app01.xml
virsh domblklist app01
virsh start app01
```

### 4. Open the console and record first-boot issues
Boot output often reveals driver, fstab, or interface mapping problems quickly.

```bash
virsh console app01
# exit console with Ctrl+] when finished
```

## ✅ Validation Checkpoints
- The guest definition imports cleanly and the disk image reports expected virtual size and format.
- The VM boots on the isolated target and reaches console or network login.
- Any required XML edits or network mapping adjustments are documented for the next rehearsal.

## Troubleshooting
- If `virsh define` fails, inspect the XML for storage paths or network definitions that do not exist on the target.
- If the guest hangs at boot, verify disk bus, firmware assumptions, and whether the restored disk path matches the XML.
- If networking fails, compare original NIC names and VLAN assumptions against the lab target.

## ↩️ Rollback or Recovery Notes
- If the restored guest was accidentally connected to a production VLAN, power it off immediately and fix the network mapping before retrying.
- Keep the original backup generation read-only while testing imported guests.

## Related Docs
- [🧠 Restore Planning](../concepts/restore-planning.md)
- [📚 Restore Checklist](../reference/restore-checklist.md)
- [↩️ Tutorial 05: Restore VM](../tutorials/05-restore-vm.md)

Next: translate to id
