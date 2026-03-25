# 📚 05 Productivity

## Objective
Build the Standard productivity layer with office, mail, note, and remote-work tools that match the workstation role.

## Prerequisites
- The desktop base and defaults are already working.
- You know which productivity tools the user truly needs.

## Environment Assumptions
- Standard supports broader defaults, but productivity still needs curation rather than indiscriminate app installation.

## Sequential Steps
### 1. Install the productivity bundle
Use Ubuntu-available packages first so the machine stays supportable.

```bash
sudo apt update
sudo apt install libreoffice thunderbird remmina keepassxc
```

### 2. Launch and test the core tools
Open each application at least once and confirm the desktop remains responsive.

```bash
dpkg -l | grep -E 'libreoffice|thunderbird|remmina|keepassxc'
```

### 3. Decide what is still optional
Not every Standard workstation needs every collaboration, note-taking, or remote-support tool on day one.

## ✅ Validation Checkpoints
- The primary office and communication tools are installed and launch normally.
- The machine still feels balanced in disk space and responsiveness.

## ⚠️ Warnings
- If the bundle is already too large for the hardware, stop here and reconsider which apps are truly required.

## Cleanup / Post-Check
- Purge unnecessary apps now while the install history is still fresh.

## Next Tutorial
[🧪 06 Dev Tools](./06-dev-tools.md)

## Related Docs
- [📦 Install Extra Apps](../how-to/install-extra-apps.md)
- [📋 Application Matrix](../reference/application-matrix.md)
- [📋 Package Expanded](../reference/package-expanded.md)

Next: translate to id
