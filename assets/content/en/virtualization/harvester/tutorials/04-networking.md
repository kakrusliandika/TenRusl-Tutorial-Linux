# 🌐 04 Networking

## Objective
Create or validate the first intentional network layout in Harvester so management and guest traffic stay understandable.

## Prerequisites
- Tutorial 03 is complete.

## Environment Assumptions
- You already know the purpose of the first management path and the first guest path.

## Sequential Steps
1. **Capture the current network state**
Keep a baseline before any network change.
```bash
kubectl get network-attachment-definitions -A 2>/dev/null || kubectl api-resources | grep -i networkattachment
ip -br addr
bridge vlan show 2>/dev/null || true
```

2. **Apply or validate the first intentional network path**
Use the supported workflow for this platform and keep naming tied to purpose.
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
