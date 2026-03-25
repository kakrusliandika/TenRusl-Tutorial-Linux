# 📘 01 Introduction

## Objective
Define what Proxmox will and will not do in your environment before guests, templates, or backup jobs start piling up.

## Prerequisites
- A lab or test target exists.
- You can save notes alongside command output.

## Environment Assumptions
- You are starting conservatively and want the first build to be explainable to another operator.

## Sequential Steps
1. **Write the platform scope**
Record the kinds of workloads that belong here, what does not belong here yet, and who operates hosts versus guests.

2. **Capture the initial platform inventory**
Save the first control-plane and host-side facts while the environment is still small.
```bash
pveversion -v
pvecm status
pvesm status
qm list
pct list
```

3. **Choose one test workload path**
Decide which guest, project, or VM will be used for later network, storage, and restore validation.

## ✅ Validation Checkpoints
- The platform scope is written in plain language.
- You have a saved baseline command output set.
- A single test workload path is chosen for later steps.

## ⚠️ Warnings
- Do not start by creating many guests. Start by creating a runbook and one safe test path.

## Cleanup / Post-Check
- Store the scope note, baseline output, and test-workload choice together.

## Next Tutorial
[📋 02 Prerequisites](./02-prerequisites.md)

Next: translate to id
