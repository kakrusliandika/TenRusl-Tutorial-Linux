# 🌐 04 Networking

## Objective
Create or validate the first intentional network layout in Proxmox so management and guest traffic stay understandable.

## Prerequisites
- Tutorial 03 is complete.

## Environment Assumptions
- You already know the purpose of the first management path and the first guest path.

## Sequential Steps
1. **Capture the current network state**
Keep a baseline before any network change.
```bash
ip -br link
ip route
bridge link
bridge vlan show
cat /etc/network/interfaces
```

2. **Apply or validate the first intentional network path**
Use the supported workflow for this platform and keep naming tied to purpose.
```bash
sudo cp /etc/network/interfaces /etc/network/interfaces.bak.$(date +%F-%H%M%S)
sudo tee -a /etc/network/interfaces >/dev/null <<'EOF'
auto vmbr1
iface vmbr1 inet manual
    bridge-ports none
    bridge-stp off
    bridge-fd 0
    bridge-vlan-aware yes
EOF
sudo ifreload -a
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
