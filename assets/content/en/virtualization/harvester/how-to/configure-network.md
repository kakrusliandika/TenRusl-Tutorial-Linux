# 🌐 Configure Networking Without Guesswork

## Objective
Implement or adjust a network path in Harvester while keeping management access, guest access, and rollback under control.

## When To Use This Procedure
Use this before adding a new bridge, VLAN, network object, or attachment path for workloads or platform traffic.

## Prerequisites
- You know the purpose of the network change: management, guest, storage, backup, or tenant isolation.
- You have console or out-of-band access in case the management path is affected.

## Environment Assumptions
- The change is being made one network boundary at a time.
- You will validate from both the host side and at least one guest or test endpoint.

## Step-by-Step Procedure
1. **Capture the current network state**
Record the baseline before you change anything.
```bash
kubectl get network-attachment-definitions -A 2>/dev/null || kubectl api-resources | grep -i networkattachment
ip -br addr
bridge vlan show 2>/dev/null || true
```

2. **Apply the intended network change**
Use the supported host or platform workflow. Keep the object name tied to purpose, not convenience.
```bash
cat >/tmp/harvester-vlan-120.yaml <<'EOF'
apiVersion: k8s.cni.cncf.io/v1
kind: NetworkAttachmentDefinition
metadata:
  name: vlan-120
  namespace: default
spec:
  config: '{"cniVersion":"0.3.1","type":"bridge","bridge":"mgmt-br","vlan":120}'
EOF
kubectl apply -f /tmp/harvester-vlan-120.yaml
kubectl get network-attachment-definitions -A 2>/dev/null || true
```

3. **Validate traffic with a real endpoint**
Test management reachability and at least one guest or workload path. Do not stop at object creation success.

## ✅ Validation Checkpoints
- Management access still works.
- The new path is visible from the platform and from Linux.
- A real endpoint confirms the intended traffic flow.

## ⚠️ Troubleshooting Notes
- The object exists but traffic still fails: compare host interface state, upstream switch expectations, and guest attachment together.
- If the management path changed, use console access rather than guessing remotely.
- Remove unused extra interfaces or attachments if they are complicating diagnosis.

## ↩️ Rollback Or Recovery Notes
- Restore the previous host or platform network definition from the saved baseline.
- Detach the test workload from the new path if you need to isolate the problem quickly.

## Related Docs
- [🌐 Network Design](../concepts/network-design.md)
- [📋 Network Layout](../reference/network-layout.md)

Next: translate to id
