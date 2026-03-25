# 🛡️ 01 Introduction

## Objective
Define the VM estate and the trust model.

## Prerequisites
- Shell access to the guest or the relevant host-side inventory path.
- A writable notes file for the estate review.

## Environment Assumptions
- The guest or host is stable enough for review and any risky operation is backed up first.

## Sequential Steps
### 1. List guests and roles
Write down production, staging, lab, and template candidates.

```bash
printf "%s\n" "VM name | role | trust zone | template source" > vm-security-notes.txt
```

### 2. Capture guest identity from inside one representative VM
Start with shell-verifiable data.

```bash
hostnamectl
systemd-detect-virt || true
ip -br addr
```

### 3. Record current recovery paths
A hardening plan without rollback paths is incomplete.

```bash
printf "%s\n" "Latest backup:" "Latest snapshot:" "Template version:" >> vm-security-notes.txt
```

## ✅ Validation Checkpoints
- The current state matches the documented trust zones, template lineage, and recovery path.

## ⚠️ Warnings
- Do not call the VM baseline complete if restore or isolation assumptions still live only in memory.

## Cleanup / Post-Check
- Store notes, exports, and checksums where the next operator can find them securely.

## Next Tutorial
[Next: 02 Hypervisor Baseline](./02-hypervisor-baseline.md)

Next: translate to id
