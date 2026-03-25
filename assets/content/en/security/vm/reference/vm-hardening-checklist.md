# 📋 VM Hardening Checklist

## Purpose
Use this checklist for a compact review of guest, template, and recovery posture before calling the VM baseline complete.

## Structured Reference
### Guest and template review
- Guest role and trust zone are documented.
- Template source and patch date are known.
- Machine identity and secrets are handled intentionally.
- Admin access path is documented and reviewable.
- Logs and backup metadata are reachable from the shell.

### Recovery review
- Recent backup exists and is cataloged.
- Snapshot policy is written down.
- A previous known-good template or clone exists for rollback.


## Practical Interpretation Notes
- A VM review should include the surrounding control plane, not only the guest shell.
- If you cannot explain how the guest would be rebuilt tomorrow, the baseline is incomplete.

## Command Snippets
```bash
systemd-detect-virt || true
hostnamectl
sudo ss -tulpn
sudo journalctl -b --no-pager | tail -n 30
```

## Related Docs
- [🧱 VM Hardening Baseline](../concepts/vm-hardening-baseline.md)
- [🧼 04 Template Hygiene](../tutorials/04-template-hygiene.md)
- [✅ 09 Hardening](../tutorials/09-hardening.md)

Next: translate to id
