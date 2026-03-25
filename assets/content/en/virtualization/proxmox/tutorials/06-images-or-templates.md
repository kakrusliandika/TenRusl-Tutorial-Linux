# 📦 06 Images or Templates

## Objective
Build the first controlled VM templates and cloud images in Proxmox and prove they can launch a healthy test workload.

## Prerequisites
- Tutorial 05 is complete.
- A safe source artifact exists.

## Environment Assumptions
- You will test the new artifact before promoting it for routine use.

## Sequential Steps
1. **Inspect the current artifact inventory**
Review existing images or templates so you do not create avoidable naming drift.
```bash
qm list
qm config 9000 2>/dev/null
pvesm status
```

2. **Import, publish, or register one golden artifact**
Use the supported workflow and record its source and purpose immediately.
```bash
qm create 9000 --name debian12-golden --memory 2048 --cores 2 --net0 virtio,bridge=vmbr0 --scsihw virtio-scsi-pci
qm importdisk 9000 /srv/images/debian-12-genericcloud-amd64.qcow2 local-lvm
qm set 9000 --scsi0 local-lvm:vm-9000-disk-0 --ide2 local-lvm:cloudinit --boot order=scsi0 --serial0 socket --vga serial0
qm template 9000
```

3. **Launch one validation workload**
Boot or attach one test workload from the new artifact and verify network, storage, and guest readiness.

## ✅ Validation Checkpoints
- The new artifact is visible in inventory.
- A test workload proves it is usable.
- Origin and validation date are documented.

## ⚠️ Warnings
- An imported artifact is not production-ready until a real test workload proves it.

## Cleanup / Post-Check
- Record the artifact name, source, validation date, and the test workload that proved it.

## Next Tutorial
[🧰 07 Operations](./07-operations.md)

Next: translate to id
