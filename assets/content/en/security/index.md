# 🛡️ Security

## Overview
The security section is the operator baseline for reducing Linux attack surface, validating controls from the shell, and preparing for recovery before an incident forces rushed decisions.

## Who This Section Is For
- Linux operators responsible for servers, virtual machines, and public web services.
- Learners who want practical hardening steps instead of generic security advice.
- Administrators who need logging, access-control, TLS, and incident-readiness guidance that stays operationally useful.

## Prerequisites
- Comfort with shell basics, service management, and text editing.
- A lab system or maintenance window before production changes.
- A backup, snapshot, or rollback habit before risky edits.

## Learning Path
1. Start with [Server Security](./server/index.md) to build a host baseline around SSH, updates, firewall policy, and auditability.
2. Continue with [VM Security](./vm/index.md) if you manage templates, snapshots, guest isolation, or hypervisor-facing workflows.
3. Finish with [Web Security](./web/index.md) to harden TLS, response headers, rate limits, logging, and the public edge.

## What To Read First
- Read [Server Security](./server/index.md) first if you are hardening Linux hosts directly.
- Read [VM Security](./vm/index.md) next if guest hygiene and isolation are part of your job.
- Read [Web Security](./web/index.md) once the host baseline is stable and you are ready to secure the public surface.

## Section Map
- [🛡️ Server Security](./server/index.md) — host baseline, SSH posture, service review, firewall checks, fail2ban, and incident readiness.
- [🧱 VM Security](./vm/index.md) — template hygiene, isolation, snapshot policy, backup rotation, and guest review loops.
- [🌐 Web Security](./web/index.md) — TLS, headers, rate limiting, logging, monitoring, and public-edge hardening.

## Related Sections
- [☁️ Virtualization](../virtualization/index.md)
- [💻 Workstation](../workstation/index.md)
- [🖥️ Server](../server/index.md)
- [💾 Backup](../backup/index.md)

Next: translate to id
