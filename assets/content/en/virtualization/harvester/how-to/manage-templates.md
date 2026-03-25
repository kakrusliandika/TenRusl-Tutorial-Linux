# 📦 Manage VM Images and Templates

## Objective
Keep VM images and templates controlled, documented, and validated before they become the default source for new workloads.

## When To Use This Procedure
Use this when you are importing, publishing, updating, or retiring templates.

## Prerequisites
- You know the origin of the artifact and whether it is trusted, versioned, and appropriate for this platform.
- A test workload can be launched from the artifact before it is promoted for wider use.

## Environment Assumptions
- Artifact lifecycle differs by platform and release.
- You will verify both inventory visibility and one real launch or attach workflow.

## Step-by-Step Procedure
1. **Inspect the current artifact inventory**
Review existing images or templates first so you do not create naming drift or duplicate artifacts.
```bash
kubectl get virtualmachineimages.harvesterhci.io -A 2>/dev/null || kubectl api-resources | grep -i virtualmachineimage
kubectl get vm -A 2>/dev/null || true
```

2. **Import, publish, or register the new artifact**
Use the supported workflow for the platform. Record source, date, and purpose immediately.
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
A successful import is not enough. Boot a test workload, verify network identity, and confirm expected services or guest agents.

## ✅ Validation Checkpoints
- The artifact inventory shows the new item clearly.
- One test workload launches or clones successfully.
- Origin, validation date, and intended use are documented.

## ⚠️ Troubleshooting Notes
- The artifact imports but the test workload fails: inspect storage placement, guest boot logs, and platform task output.
- If naming is already messy, stop and clean the inventory before adding another artifact.
- If the artifact is version-sensitive, keep the old known-good item until the new one is proven.

## ↩️ Rollback Or Recovery Notes
- Keep or re-activate the previous known-good artifact.
- Remove the new artifact from normal use until its validation issue is understood.

## Related Docs
- [🧠 Harvester Architecture and Operating Model](../concepts/harvester-overview.md)
- [📋 Operations Checklist](../reference/operations-checklist.md)

Next: translate to id
