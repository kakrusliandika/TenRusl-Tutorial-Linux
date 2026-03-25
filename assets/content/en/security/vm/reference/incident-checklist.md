# 🚨 Incident Checklist

## Purpose
Use this checklist when a guest appears compromised, suspicious, or unexpectedly noisy.

## Structured Reference
### Immediate actions
- Record guest name, IP, host node, and current role.
- Preserve volatile evidence before shutdown or snapshot actions.
- Decide whether containment means network isolation, console restriction, or power-off.
- Keep backup and snapshot actions deliberate so you do not destroy a clean recovery point.

### Evidence to preserve
- Guest process tree and listening sockets.
- Recent auth, sudo, and service logs inside the guest.
- Hypervisor-side event or task logs if available.
- Current snapshot and backup inventory for the guest.


## Practical Interpretation Notes
- Shutting the guest down too early can erase useful volatile evidence.
- Snapshotting a compromised guest can be useful, but only if it is labeled clearly and not mistaken for a clean rollback point.

## Command Snippets
```bash
hostnamectl
ip -br addr
sudo ss -tulpn
sudo ps -ef --forest
sudo journalctl -S -2h --no-pager > incident-journal.txt
sudo virsh domiflist vm-name 2>/dev/null || true
```

## Related Docs
- [🌐 Network Isolation Thinking](../concepts/network-isolation-thinking.md)
- [🧾 07 Logging](../tutorials/07-logging.md)
- [🧱 VM Security](../index.md)

Next: translate to id
