# 🧭 Set Default Apps

## Objective
Make the Standard desktop predictable by setting browser, editor, mail, and file-handling defaults intentionally.

## Use Case
Use this after the main application choices are already installed and the workstation role is clear.

## Prerequisites
- The preferred applications are already installed.
- You know which user-facing actions matter most: web links, text files, mailto links, PDFs, images, and media files.

## ⚠️ Risk Notes
- Changing defaults without user agreement can feel like breakage on shared machines.

## Environment Assumptions
- You are configuring a local desktop session, not a fleet-wide policy engine.

## Step-by-Step Procedure
### 1. Inspect current defaults
Read the current application associations before you change them.

```bash
xdg-settings get default-web-browser
xdg-mime query default text/plain
xdg-mime query default x-scheme-handler/mailto
```

### 2. Apply the new defaults
Use the desktop tools that the session actually honors. MIME names vary by app package, so confirm them after installation.

```bash
xdg-settings set default-web-browser firefox.desktop
xdg-mime default org.gnome.TextEditor.desktop text/plain
xdg-mime default thunderbird.desktop x-scheme-handler/mailto
```

### 3. Re-check the associations after logout or login if needed
Some desktop sessions cache parts of the default association state until the user session refreshes.

## ✅ Validation Checkpoints
- The intended browser, editor, and mail handler are now the active defaults.
- The workstation role and defaults are documented together.

## Troubleshooting Notes
- If a desktop environment ignores the setting, inspect the real `.desktop` file name and MIME association rather than applying the same command repeatedly.

## ↩️ Rollback / Recovery Notes
- Keep a short note of the chosen defaults so a later reinstall or user-profile reset can be restored quickly.

## Related Docs
- [🧭 04 Default Apps](../tutorials/04-default-apps.md)
- [📦 Install Extra Apps](./install-extra-apps.md)
- [📋 Application Matrix](../reference/application-matrix.md)

Next: translate to id
