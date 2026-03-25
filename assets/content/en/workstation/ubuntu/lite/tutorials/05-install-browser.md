# 🌐 05 Install Browser

## Objective
Add a browser layer to Ubuntu Lite only after the base system and GUI are already stable.

## Prerequisites
- The graphical session is working.
- Network and DNS checks pass.

## Environment Assumptions
- Firefox packaging differs across Ubuntu releases; the exact package transport may be deb-backed or snap-backed.

## Sequential Steps
### 1. Choose the primary browser path
For a stable Ubuntu-first choice, use Firefox. If you need a second browser, add it later only when the workload requires it.

```bash
sudo snap install firefox || sudo apt install firefox
```

### 2. Launch once and confirm the runtime baseline
A successful browser install means package availability, DNS, TLS, and the graphical stack all still behave.

```bash
firefox --version 2>/dev/null || snap list firefox
getent hosts ubuntu.com
```

### 3. Record whether a second browser is actually needed
Lite should not accumulate redundant software without a reason such as testing, development, or compatibility work.

## ✅ Validation Checkpoints
- The browser launches, renders pages, and uses the network successfully.
- DNS and TLS-dependent browsing work without certificate or time-sync errors.
- The workstation still feels stable after the new runtime layer.

## ⚠️ Warnings
- If the browser install triggers a large dependency or sandbox issue, inspect the package path rather than adding more browsers immediately.
- If pages do not load, confirm DNS and clock correctness before suspecting the browser package itself.

## Cleanup / Post-Check
- If the chosen browser path is wrong for the machine, remove it cleanly before trying an alternative so Lite stays understandable.

## Next Tutorial
[📝 06 Install Editor](./06-install-editor.md)

## Related Docs
- [📋 Network Checklist](../reference/network-checklist.md)
- [📋 Application Matrix](../reference/application-matrix.md)
- [📋 Post-Install Checklist](../reference/post-install-checklist.md)

Next: translate to id
