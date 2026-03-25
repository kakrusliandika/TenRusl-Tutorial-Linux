# 🌐 Set Up an Isolated Network

## Objective
Create a VM segment that keeps sensitive or lab guests separated from broader guest traffic.

## Use Case
Use this when you need a restricted guest segment instead of one flat network.

## Prerequisites
- A list of guests that belong in the segment.
- Access to hypervisor network controls or host bridge config.
- Console access to at least one guest.

## Environment Assumptions
- The libvirt example below is one shell-friendly model on Linux hosts.
- If your platform differs, keep the same security intent and validate from the guest afterward.

## ⚠️ Risk Notes
- Do not build an isolated segment with no documented update or backup path.
- Do not accidentally attach production and disposable lab guests to the same segment.

## Step-by-Step Procedure
### 1. Define the isolated virtual network
This example creates a dedicated libvirt-backed segment.

```bash
cat <<'EOF' > isolated-lab.xml
<network>
  <name>isolated-lab</name>
  <bridge name='virbr20'/>
  <ip address='192.168.250.1' netmask='255.255.255.0'>
    <dhcp>
      <range start='192.168.250.100' end='192.168.250.200'/>
    </dhcp>
  </ip>
</network>
EOF
sudo virsh net-define isolated-lab.xml 2>/dev/null || true
sudo virsh net-start isolated-lab 2>/dev/null || true
sudo virsh net-autostart isolated-lab 2>/dev/null || true
```

### 2. Review guest attachment
Check that the intended guest is mapped to the right network.

```bash
sudo virsh domiflist vm-name 2>/dev/null || true
sudo virsh net-info isolated-lab 2>/dev/null || true
```

### 3. Validate from inside the guest
Routes and addresses should match the intended design.

```bash
ip -br addr
ip route
ping -c 2 192.168.250.1
```

## ✅ Validation Checkpoints
- The new segment exists and only intended guests are attached.
- Guest routing matches the design.
- Unexpected east-west reachability is absent or blocked.

## Troubleshooting
- If the guest still reaches forbidden networks, review bridge attachments, upstream routing, and NAT defaults.
- If the guest cannot update, document the egress path instead of flattening the network again.

## ↩️ Rollback / Recovery Notes
- Detach the guest from the new segment and restore the previous mapping if validation fails.
- Keep a copy of the older network definition before introducing the isolated one.

## Related Docs
- [🌐 Network Isolation Thinking](../concepts/network-isolation-thinking.md)
- [📋 Network Isolation Checklist](../reference/network-isolation-checklist.md)
- [🌐 03 Network Isolation](../tutorials/03-network-isolation.md)

Next: translate to id
