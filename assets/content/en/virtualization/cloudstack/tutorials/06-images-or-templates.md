# 📦 06 Images or Templates

## Objective
Build the first controlled templates and base images in CloudStack and prove they can launch a healthy test workload.

## Prerequisites
- Tutorial 05 is complete.
- A safe source artifact exists.

## Environment Assumptions
- You will test the new artifact before promoting it for routine use.

## Sequential Steps
1. **Inspect the current artifact inventory**
Review existing images or templates so you do not create avoidable naming drift.
```bash
cloudmonkey list templates templatefilter=self 2>/dev/null || true
cloudmonkey list zones 2>/dev/null || true
df -h
```

2. **Import, publish, or register one golden artifact**
Use the supported workflow and record its source and purpose immediately.
```bash
cloudmonkey register template name=debian12-kvm displaytext="Debian 12 KVM" format=QCOW2 hypervisor=KVM zoneid=<ZONE_ID> url=https://images.example/debian-12.qcow2 isextractable=true 2>/dev/null || true
cloudmonkey list templates keyword=debian12-kvm 2>/dev/null || true
cloudmonkey list templates templatefilter=self 2>/dev/null || true
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
