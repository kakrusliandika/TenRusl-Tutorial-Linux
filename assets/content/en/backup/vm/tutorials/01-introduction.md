# 🧭 Tutorial 01: Introduction

## Objective
Understand the minimum parts of a recoverable VM backup set and why exported disks alone are not enough.

## Prerequisites
- Shell access to the hypervisor or recovery host.
- Backup storage separate from the source guest.
- An isolated restore target or lab VLAN for validation.

## Environment Assumptions
- The example uses a libvirt/KVM guest named `app01`.
- You are documenting the guest before you automate anything.

## Sequential Steps
### 1. Inventory the guest from the hypervisor
Start by confirming the guest exists, what storage it uses, and what network assumptions it has.

```bash
VM=app01
virsh dominfo "$VM"
virsh domblklist "$VM"
virsh domiflist "$VM"
```

### 2. Record what a restore would need
Write down the future restore target, expected VLAN, and where backup generations will live.

```bash
printf '%s\n' 'guest=app01'   'target_network=isolated-lab'   'backup_root=/srv/backup/vm/app01'   > /tmp/app01-recovery-notes.txt
cat /tmp/app01-recovery-notes.txt
```

## ✅ Validation Checkpoints
- You can name the guest definition, disk artifact, and validation steps a restore would require.
- You have a written staging path for backup generations.

## ⚠️ Warnings
- Do not confuse a snapshot with a durable backup generation.
- Do not start automation until a manual restore path is clear.

## Cleanup / Post-Check
- Keep the recovery notes file and refine it through the remaining tutorials.

## Next Tutorial
[💽 Tutorial 02: Prepare Storage](./02-prepare-storage.md)

Next: translate to id
