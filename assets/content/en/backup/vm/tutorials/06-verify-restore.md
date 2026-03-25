# ✅ Tutorial 06: Verify Restore

## Objective
Prove that the restored guest is healthy enough to trust and close the rehearsal with actionable notes.

## Prerequisites
- Shell access to the hypervisor or recovery host.
- Backup storage separate from the source guest.
- An isolated restore target or lab VLAN for validation.

## Environment Assumptions
- The guest is already restored and powered on in an isolated target.

## Sequential Steps
### 1. Run hypervisor and guest checks
Validate both the outer VM state and the inner service state.

```bash
VM=app01
virsh domstate "$VM"
virsh domiflist "$VM"
# inside the guest after login
hostnamectl
systemctl --failed
ss -tulpn
```

### 2. Capture the rehearsal result
A restore drill is only complete when the outcome is recorded for the next operator.

```bash
printf '%s\n' "restore_test=$(date +%F)"   'result=pass-or-fail'   'notes=update runbook with any manual fixes'   >> /srv/backup/vm/app01/restore-history.txt
cat /srv/backup/vm/app01/restore-history.txt | tail -n 5
```

## ✅ Validation Checkpoints
- The guest reaches the intended boot state and critical services respond as expected.
- The restore history file records what passed and what still needs improvement.

## ⚠️ Warnings
- If validation fails, do not promote that generation or workflow as “tested”.

## Cleanup / Post-Check
- Review the module index and schedule the next rehearsal window.

## Next Tutorial
[💾 VM Backup](../index.md)

Next: translate to id
