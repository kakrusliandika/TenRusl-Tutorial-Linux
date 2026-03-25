# 🛡️ Server Security

## Overview
Server security is the Linux host baseline: identity, SSH, update posture, network exposure, service review, logging, and evidence preservation. The focus is measurable controls you can prove from the shell.

## Who This Section Is For
- Operators managing Linux servers, VPS instances, or self-hosted infrastructure.
- Administrators who need practical hardening work instead of abstract security theory.
- Learners building the foundation required before web, PaaS, or hosting-panel layers are added.

## Prerequisites
- Root or sudo access to a Linux server or disposable lab host.
- A second terminal session or console path before touching SSH.
- A backup of SSH, firewall, and service configs before risky edits.

## Learning Path
1. Read [Hardening Baseline](./concepts/hardening-baseline.md), [SSH Policy](./concepts/ssh-policy.md), and [Least Privilege](./concepts/least-privilege.md).
2. Apply focused tasks from the how-to guides, beginning with [Disable Password Login](./how-to/disable-password-login.md) and [Review Open Ports](./how-to/review-open-ports.md).
3. Use the references for repeatable checks and then run tutorials `01` through `10` in order.

## What To Read First
- Start with [Hardening Baseline](./concepts/hardening-baseline.md) if you need a minimum secure state.
- Read [SSH Policy](./concepts/ssh-policy.md) before any remote-access change.
- Use [01 Introduction](./tutorials/01-introduction.md) if you want a guided workflow instead of a checklist-first approach.

## Section Map
### Concepts
- [🧠 Hardening Baseline](./concepts/hardening-baseline.md) — Define the minimum secure state for a Linux host.
- [🔐 SSH Policy](./concepts/ssh-policy.md) — Set durable remote-admin rules and authentication posture.
- [👥 Least Privilege](./concepts/least-privilege.md) — Reduce admin and service blast radius.

### How-To
- [🔐 Disable Password Login](./how-to/disable-password-login.md) — Move remote access to keys and remove the weakest login path.
- [🧾 Configure Audit Logging](./how-to/configure-audit-logging.md) — Capture privileged actions and sensitive file changes.
- [🌐 Review Open Ports](./how-to/review-open-ports.md) — Compare real listeners to intended exposure.
- [🚨 Set Up Fail2ban](./how-to/set-up-fail2ban.md) — Add a lightweight brute-force brake around exposed services.

### Reference
- [📋 Firewall Checklist](./reference/firewall-checklist.md) — Quickly review exposure, ownership, and policy drift.
- [🚨 Incident Checklist](./reference/incident-checklist.md) — Preserve evidence before cleanup and containment drift apart.
- [🧾 Logging Checklist](./reference/logging-checklist.md) — Confirm the host keeps the logs you will need later.
- [📋 SSH Checklist](./reference/ssh-checklist.md) — Review remote access posture before and after changes.

### Tutorials
- [🛡️ 01 Introduction](./tutorials/01-introduction.md) — Scope the host and define the baseline.
- [📋 02 Baseline Audit](./tutorials/02-baseline-audit.md) — Capture the current host state from the shell.
- [🔐 03 Users and SSH](./tutorials/03-users-and-ssh.md) — Stabilize admin access and remote login policy.
- [🌐 04 Firewall](./tutorials/04-firewall.md) — Reduce exposure and document allowed traffic.
- [📦 05 Updates](./tutorials/05-updates.md) — Make patching predictable and reviewable.
- [🧰 06 Service Hardening](./tutorials/06-service-hardening.md) — Remove or tighten unnecessary services.
- [📁 07 File Permissions](./tutorials/07-file-permissions.md) — Fix risky ownership and world-writable paths.
- [🧾 08 Logging](./tutorials/08-logging.md) — Make the host auditable and easier to investigate.
- [✅ 09 Hardening](./tutorials/09-hardening.md) — Run a final host review and record exceptions.
- [📘 10 Closeout](./tutorials/10-closeout.md) — Bundle rollback notes and the next review loop.

## Related Sections
- [🛡️ Security Root](../index.md)
- [🧱 VM Security](../vm/index.md)
- [🌐 Web Security](../web/index.md)
- [🖥️ Server](../../server/index.md)
- [💾 Backup](../../backup/index.md)

Next: translate to id
