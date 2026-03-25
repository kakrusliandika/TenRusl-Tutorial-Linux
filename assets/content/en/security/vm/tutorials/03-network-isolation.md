# 🌐 03 Network Isolation

## Objective
Verify that guests are placed in deliberate segments.

## Prerequisites
- Shell access to the guest or the relevant host-side inventory path.
- A writable notes file for the estate review.

## Environment Assumptions
- The guest or host is stable enough for review and any risky operation is backed up first.

## Sequential Steps
### 1. Record the intended zone map
Make segmentation explicit.

```bash
printf "%s\n" "guest | zone | allowed peers | allowed egress" >> vm-security-notes.txt
```

### 2. Inspect guest routing
Check whether the guest view matches the design.

```bash
ip -br addr
ip route
resolvectl status 2>/dev/null | sed -n "1,40p" || true
```

### 3. Compare with host-side network inventory
Use whatever CLI the environment exposes.

```bash
sudo virsh net-list --all 2>/dev/null || true
sudo virsh domiflist vm-name 2>/dev/null || true
```

## ✅ Validation Checkpoints
- The current state matches the documented trust zones, template lineage, and recovery path.

## ⚠️ Warnings
- Do not call the VM baseline complete if restore or isolation assumptions still live only in memory.

## Cleanup / Post-Check
- Store notes, exports, and checksums where the next operator can find them securely.

## Next Tutorial
[Next: 04 Template Hygiene](./04-template-hygiene.md)

Next: translate to id
