# 🧰 Create a Golden Template

## Objective
Prepare and seal a reusable Linux guest template without carrying old identity, logs, or secrets into every future clone.

## Use Case
Use this when you want repeatable VM deployment instead of cloning from already-used guests.

## Prerequisites
- A VM intended to become the template source.
- Shell access to the guest and ideally to the host.
- A previous template or export for rollback.

## Environment Assumptions
- Examples below combine guest-side Linux commands with optional libvirt-style host checks.
- If your platform differs, keep the same security intent and adapt the publish step to the equivalent tool.

## ⚠️ Risk Notes
- Never reset machine identity or host keys on a live workload guest.
- Do not publish a template if secrets or admin tokens may still exist inside it.

## Step-by-Step Procedure
### 1. Patch and clean the guest
Start from a current package baseline.

```bash
if command -v apt >/dev/null 2>&1; then
  sudo apt update && sudo apt full-upgrade -y && sudo apt autoremove -y && sudo apt clean
elif command -v dnf >/dev/null 2>&1; then
  sudo dnf upgrade -y && sudo dnf clean all
fi
```

### 2. Remove workload-specific state
Clear logs, shell history, and provisioning leftovers.

```bash
sudo cloud-init clean --logs 2>/dev/null || true
sudo journalctl --rotate
sudo journalctl --vacuum-time=1s
sudo rm -f /root/.bash_history /home/*/.bash_history 2>/dev/null || true
```

### 3. Reset unique identity artifacts
Only do this on a real template source.

```bash
sudo truncate -s 0 /etc/machine-id
sudo rm -f /var/lib/dbus/machine-id
sudo rm -f /etc/ssh/ssh_host_* 2>/dev/null || true
```

### 4. Record template metadata
Capture enough state to identify and roll back the template later.

```bash
hostnamectl
lsblk -f
sudo virsh dumpxml template-source 2>/dev/null || true
```

## ✅ Validation Checkpoints
- The guest is patched and cleaned.
- No workload-specific secrets or identity artifacts remain if your first-boot path will regenerate them.
- A fresh clone path is documented.

## Troubleshooting
- If cloud-init or first boot will not regenerate host keys and identity, stop and fix that before publish.
- If the template still contains app data, inspect service and home directories again.

## ↩️ Rollback / Recovery Notes
- Keep the previous template until a new clone passes validation.
- Restore the older template if the new clone boot or identity flow fails.

## Related Docs
- [🧠 Template Discipline](../concepts/template-discipline.md)
- [📋 VM Hardening Checklist](../reference/vm-hardening-checklist.md)
- [🧼 04 Template Hygiene](../tutorials/04-template-hygiene.md)

Next: translate to id
