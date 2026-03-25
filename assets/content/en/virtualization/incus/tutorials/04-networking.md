# 🌐 04 Networking

## Objective
Create or validate the first intentional network layout in Incus so management and guest traffic stay understandable.

## Prerequisites
- Tutorial 03 is complete.

## Environment Assumptions
- You already know the purpose of the first management path and the first guest path.

## Sequential Steps
1. **Capture the current network state**
Keep a baseline before any network change.
```bash
incus network list
incus network show incusbr0 2>/dev/null
ip -br addr
ip route
```

2. **Apply or validate the first intentional network path**
Use the supported workflow for this platform and keep naming tied to purpose.
```bash
incus network create incusbr1 ipv4.address=10.90.0.1/24 ipv4.nat=true ipv6.address=none
incus profile device add default eth0 nic nictype=bridged parent=incusbr1 name=eth0
incus network show incusbr1
```

3. **Test the path end to end**
Validate from the host and from one test workload or endpoint.

## ✅ Validation Checkpoints
- Management access still works.
- The intended guest or workload path is visible and functional.
- The network object or host definition is documented.

## ⚠️ Warnings
- Never change the management path remotely without console or rollback access.

## Cleanup / Post-Check
- Record the exact bridge, VLAN, or network-object names that are now part of the baseline.

## Next Tutorial
[💽 05 Storage](./05-storage.md)

Next: translate to id
