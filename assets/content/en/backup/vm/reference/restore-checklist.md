# 📚 Restore Checklist

## Purpose
Use this checklist when restoring a VM into a lab, recovery host, or isolated VLAN. The checklist keeps the process deliberate and reduces the chance of bringing up a broken or colliding guest.

## Structured Reference
| Step | Check | Why It Matters |
| --- | --- | --- |
| 1 | Verify checksums | Avoids importing corrupt disks or metadata. |
| 2 | Review guest XML or metadata | Confirms NIC, storage, and firmware assumptions. |
| 3 | Confirm isolated target network | Prevents IP or hostname collision with production. |
| 4 | Import disk and define guest | Rebuilds the VM predictably. |
| 5 | Boot to console first | Surfaces boot issues before app traffic exists. |
| 6 | Validate guest services | Proves the restore is useful, not merely bootable. |

## Practical Interpretation Notes
- Treat “imports cleanly” and “serves the workload correctly” as different gates.
- If the guest depends on external storage or VLAN-specific reachability, capture that in the restore notes before the incident.
- Keep a place to record manual fixes discovered during rehearsal so the next restore becomes more deterministic.

## Useful Inspection Snippet
```bash
VM=app01
virsh define app01.xml
virsh start "$VM"
virsh console "$VM"
virsh domiflist "$VM"
```

## Related Docs
- [🧠 Restore Planning](../concepts/restore-planning.md)
- [🛠️ Verify a VM Restore](../how-to/verify-vm-restore.md)
- [↩️ Tutorial 05: Restore VM](../tutorials/05-restore-vm.md)

Next: translate to id
