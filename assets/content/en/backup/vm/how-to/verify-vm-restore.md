# 🛠️ Verify a VM Restore

## Objective
Confirm that a restored VM is not only imported, but also bootable, network-reachable in the correct isolation zone, and healthy enough to trust in a real incident.

## Use Case
Use this after every restore rehearsal and before considering a restored guest ready for production cutover.

## Prerequisites
- A restore target already imported the guest successfully.
- You can reach the guest through console, SSH, or application health checks.
- The guest is still isolated from production traffic during validation.

## Environment Assumptions
- The guest should be validated from both hypervisor and guest viewpoints.
- The operator has access to boot console, network inspection, and service logs.
- The example expects the workload to expose SSH and optionally an application port.

## Exact Steps
### 1. Check hypervisor-side state
Verify that the guest is running with the expected disks and interfaces.

```bash
VM=app01
virsh domstate "$VM"
virsh domblklist "$VM"
virsh domiflist "$VM"
```

### 2. Validate guest boot and identity
Log in through console or SSH and confirm hostname, mounts, and important services.

```bash
hostnamectl
findmnt -rno TARGET,SOURCE,FSTYPE
systemctl --failed
journalctl -p err -b --no-pager | tail -n 50
```

### 3. Run service-level checks
A VM restore is only useful if the workload inside the guest also passes health checks.

```bash
ip -brief address
ss -tulpn
curl -I http://127.0.0.1:8080 2>/dev/null || true
```

## ✅ Validation Checkpoints
- The guest reaches the expected boot target and shows no unresolved critical boot errors.
- The restored interfaces, routes, and application listeners match the recovery plan.
- The operator can name any manual remediation still required before a production cutover.

## Troubleshooting
- If the guest boots but services fail, inspect application-specific logs before assuming the disk copy is bad.
- If mounts are missing, compare `/etc/fstab` against the restore target disk mapping.
- If the guest gets network but not application health, confirm secrets, certificates, and dependent services were restored too.

## ↩️ Rollback or Recovery Notes
- If validation fails, keep the guest isolated and preserve logs for the next rehearsal iteration.
- Do not overwrite the backup generation until the cause of failure is understood.

## Related Docs
- [🧠 Restore Planning](../concepts/restore-planning.md)
- [📚 Restore Checklist](../reference/restore-checklist.md)
- [✅ Tutorial 06: Verify Restore](../tutorials/06-verify-restore.md)

Next: translate to id
