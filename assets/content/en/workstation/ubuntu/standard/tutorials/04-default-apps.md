# 🧭 04 Default Apps

## Objective
Set the Standard desktop defaults so users land on the intended browser, editor, and mail flow instead of a random post-install state.

## Prerequisites
- The Standard base install is healthy.
- The preferred default applications are either already installed or selected.

## Environment Assumptions
- Defaults should reflect the workstation role and user expectations, not the package that happened to install first.

## Sequential Steps
### 1. Inspect the current defaults
Know what the session does today before you change it.

```bash
xdg-settings get default-web-browser
xdg-mime query default text/plain
xdg-mime query default x-scheme-handler/mailto
```

### 2. Set the chosen defaults
Apply only the associations the workstation actually needs.

```bash
xdg-settings set default-web-browser firefox.desktop
xdg-mime default org.gnome.TextEditor.desktop text/plain
xdg-mime default thunderbird.desktop x-scheme-handler/mailto
```

### 3. Test real user actions
Open a web link, a text file, and a mailto link to confirm the settings work outside the shell.

## ✅ Validation Checkpoints
- The intended defaults are active and repeatable.
- The defaults are documented alongside the workstation role.

## ⚠️ Warnings
- If an association does not stick, check the real `.desktop` identifier instead of issuing the same command repeatedly.

## Cleanup / Post-Check
- Keep a small record of defaults so profile resets or rebuilds can be restored quickly.

## Next Tutorial
[📚 05 Productivity](./05-productivity.md)

## Related Docs
- [🧭 Set Default Apps](../how-to/set-default-apps.md)
- [📋 Application Matrix](../reference/application-matrix.md)
- [📦 Install Extra Apps](../how-to/install-extra-apps.md)

Next: translate to id
