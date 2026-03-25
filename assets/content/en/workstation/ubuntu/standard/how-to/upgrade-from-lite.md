# ⬆️ Upgrade From Lite

## Objective
Move a working Ubuntu Lite build toward the Standard profile without forgetting that broader defaults increase package surface and support cost.

## Use Case
Use this when a previously lean machine now needs a broader desktop stack and reinstalling from scratch is either unnecessary or too disruptive.

## Prerequisites
- A healthy Ubuntu Lite install with backups and package exports.
- Enough storage and RAM to support the broader Standard profile.

## ⚠️ Risk Notes
- A broad metapackage install can pull in many dependencies quickly; treat this as a major change, not a casual tweak.

## Environment Assumptions
- The Lite base is already stable enough that you are upgrading from strength, not from a broken machine.
- You know which parts of Standard you actually want: full desktop meta-package, app bundle, or selected features only.

## Step-by-Step Procedure
### 1. Export the current Lite state before the upgrade
Do not expand the package surface without preserving the clean Lite baseline first.

```bash
mkdir -p ~/pre-standard-upgrade
dpkg --get-selections > ~/pre-standard-upgrade/dpkg-selections.txt
apt-mark showmanual > ~/pre-standard-upgrade/apt-manual.txt
```

### 2. Choose the upgrade style
If you want the closest Standard-style landing, install the broader Ubuntu desktop metapackage. If you only need selected functionality, install smaller role-based bundles instead. Package membership can vary by Ubuntu release, so inspect dependencies first.

```bash
apt-cache depends ubuntu-desktop | sed -n '1,120p'
# Example full-profile path
sudo apt install ubuntu-desktop
```

### 3. Validate the broader desktop profile after reboot
Check the default target, login behavior, major applications, and package consistency.

```bash
systemctl get-default
systemctl --failed
dpkg -l | grep ubuntu-desktop
```

## ✅ Validation Checkpoints
- The system still boots reliably and reaches the expected graphical session.
- The added Standard features justify the broader package surface.
- You retained the pre-upgrade package exports for rollback or audit.

## Troubleshooting Notes
- If the metapackage path adds far more than you intended, stop and compare the result against the planned role before adding even more apps.
- If graphics or boot regress after the upgrade, use the pre-upgrade package exports and recovery notes instead of improvising.

## ↩️ Rollback / Recovery Notes
- If the upgrade path produces too much uncertainty, a clean Standard rebuild may be safer than trying to hand-trim the result forever.

## Related Docs
- [💻 Ubuntu Lite](../../lite/index.md)
- [📋 Package Expanded](../reference/package-expanded.md)
- [📘 01 Introduction](../tutorials/01-introduction.md)

Next: translate to id
