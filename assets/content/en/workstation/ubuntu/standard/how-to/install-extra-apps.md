# 📦 Install Extra Apps

## Objective
Add productivity and daily-use applications to Ubuntu Standard without losing sight of package scope and supportability.

## Use Case
Use this when the workstation has already completed core install and you are ready to expand the application set beyond the initial desktop defaults.

## Prerequisites
- A stable Standard base install.
- Enough disk space for a broader user-facing package set.

## ⚠️ Risk Notes
- Broad app bundles can hide which package later caused a problem. Group installs by role and test after each group.

## Environment Assumptions
- The workstation is intended for mixed-use daily work.
- You can still identify which app categories are truly required.

## Step-by-Step Procedure
### 1. Decide the first extra application group
Typical groups are office, remote support, graphics, password management, and note-taking. Install by group rather than by impulse.

### 2. Install a practical extra-app baseline
This example keeps to widely available Ubuntu packages.

```bash
sudo apt update
sudo apt install libreoffice thunderbird remmina keepassxc gimp
```

### 3. Validate launch behavior and package health
Launch the apps you actually care about and verify package consistency afterward.

```bash
dpkg -l | grep -E 'libreoffice|thunderbird|remmina|keepassxc|gimp'
systemctl --failed
```

## ✅ Validation Checkpoints
- The applications needed by the workstation role are installed and launchable.
- No broken package state remains after the install.

## Troubleshooting Notes
- If one app pulls in far more than expected, pause and decide whether it really belongs in the Standard baseline.

## ↩️ Rollback / Recovery Notes
- Remove unwanted applications promptly so the broader Standard package surface does not sprawl without ownership.

## Related Docs
- [📚 05 Productivity](../tutorials/05-productivity.md)
- [📋 Application Matrix](../reference/application-matrix.md)
- [📋 Package Expanded](../reference/package-expanded.md)

Next: translate to id
