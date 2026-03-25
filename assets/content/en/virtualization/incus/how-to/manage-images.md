# 📦 Manage Images and Golden Instances

## Objective
Keep images and golden instances controlled, documented, and validated before they become the default source for new workloads.

## When To Use This Procedure
Use this when you are importing, publishing, updating, or retiring images.

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
incus image list
incus profile list
incus project list
```

2. **Import, publish, or register the new artifact**
Use the supported workflow for the platform. Record source, date, and purpose immediately.
```bash
incus image copy images:debian/12/cloud local: --alias debian-12-cloud
incus init debian-12-cloud debian12-golden --vm
incus publish debian12-golden --alias debian-12-golden-v1
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
- [🧠 Incus Architecture and Operating Model](../concepts/incus-overview.md)
- [📋 Operations Checklist](../reference/operations-checklist.md)

Next: translate to id
