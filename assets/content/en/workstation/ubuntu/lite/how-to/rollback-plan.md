# ↩️ Rollback Plan

## Objective
Prepare a practical rollback path for Ubuntu Lite before risky package, boot, or driver work turns recovery into guesswork.

## Use Case
Use this before major install phases, graphics-driver changes, boot-loader repair, or broad package additions.

## Prerequisites
- Enough free storage to keep package lists, `/etc` copies, and user data backups.
- A live USB or second machine if the workstation later becomes unbootable.
- A clear distinction between system state you can rebuild and user data you cannot lose.

## ⚠️ Risk Notes
- A rollback plan that exists only in memory is not a rollback plan.
- Backups taken after the risky change are not useful for rolling back that change.

## Environment Assumptions
- You are preparing for future changes, not reacting after failure already made the system ambiguous.
- The workstation role is important enough that reinstall time or data loss would matter.

## Step-by-Step Procedure
### 1. Export the current package state
Capture what is installed and what was explicitly marked as manual before you change anything major.

```bash
mkdir -p ~/workstation-rollback
cd ~/workstation-rollback
dpkg --get-selections > dpkg-selections.txt
apt-mark showmanual > apt-manual.txt
snap list > snap-list.txt 2>/dev/null || true
```

### 2. Back up the critical configuration surface
On Ubuntu workstations, `/etc`, boot configuration, and user data matter more than most package caches.

```bash
sudo tar --xattrs --acls -czf etc-backup-$(date +%F).tar.gz /etc
rsync -aAX --delete --info=progress2 "$HOME/" /path/to/backup/home/
```

### 3. Record baseline health before the risky change
A rollback target should describe what good meant before you touched the system.

```bash
systemd-analyze
systemctl --failed
journalctl -p err -b --no-pager | tail -n 40
```

### 4. Write the recovery trigger in plain language
For example: if graphics login fails after the driver change, boot live USB, purge the last GPU package, and restore `/etc` if needed. That trigger reduces panic during the failure itself.

## ✅ Validation Checkpoints
- You have package exports, config backup, and user-data backup captured before the risky action.
- You can state the first recovery step without improvising.
- You know whether reinstalling cleanly is cheaper than deeper repair if the change fails badly.

## Troubleshooting Notes
- If your backup path is on the same disk you are about to repartition, it is not a safe rollback target.
- If package exports show unknown third-party software, document it now before recovery becomes urgent.

## ↩️ Rollback / Recovery Notes
- Practice reading your own rollback notes before you need them for real.
- Refresh the rollback artifacts after each major accepted package layer, not just once at the beginning.

## Related Docs
- [🚑 Recover After a Failed Boot](./recover-after-failed-boot.md)
- [🛠️ Reinstall GRUB](./reinstall-grub.md)
- [🧹 09 Cleanup](../tutorials/09-cleanup.md)

Next: translate to id
