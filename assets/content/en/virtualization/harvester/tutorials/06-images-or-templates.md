# 📦 06 Images or Templates

## Objective
Build the first controlled VM images and templates in Harvester and prove they can launch a healthy test workload.

## Prerequisites
- Tutorial 05 is complete.
- A safe source artifact exists.

## Environment Assumptions
- You will test the new artifact before promoting it for routine use.

## Sequential Steps
1. **Inspect the current artifact inventory**
Review existing images or templates so you do not create avoidable naming drift.
```bash
kubectl get virtualmachineimages.harvesterhci.io -A 2>/dev/null || kubectl api-resources | grep -i virtualmachineimage
kubectl get vm -A 2>/dev/null || true
```

2. **Import, publish, or register one golden artifact**
Use the supported workflow and record its source and purpose immediately.
```bash
cat >/tmp/harvester-vmimage.yaml <<'EOF'
apiVersion: harvesterhci.io/v1beta1
kind: VirtualMachineImage
metadata:
  name: debian12-base
  namespace: default
spec:
  displayName: debian12-base
  url: https://cloud.debian.org/images/cloud/bookworm/latest/debian-12-genericcloud-amd64.qcow2
EOF
kubectl apply -f /tmp/harvester-vmimage.yaml
kubectl get virtualmachineimages.harvesterhci.io -A 2>/dev/null || true
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
