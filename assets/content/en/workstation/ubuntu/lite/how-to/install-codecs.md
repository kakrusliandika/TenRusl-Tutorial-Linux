# 🎵 Install Codecs

## Objective
Add a practical audio and video codec baseline to Ubuntu Lite without turning the workstation into an unplanned media bundle.

## Use Case
Use this after the graphical session, browser, and package networking are already working. Do not make codecs your first post-install change.

## Prerequisites
- A stable installed system with networking.
- A reason to add media playback support now, not later.
- Enough disk space for codec packages and updates.

## ⚠️ Risk Notes
- Some codec packages prompt for license acceptance or pull a wider dependency set than expected.
- Add codecs after basic boot and graphics validation so you know later regressions are not base-OS issues.

## Environment Assumptions
- You already finished the core install and basic GUI checks.
- You are comfortable testing playback from a known-good sample file afterward.

## Step-by-Step Procedure
### 1. Refresh package metadata and inspect the candidate codec set
Review what Ubuntu will install before you accept a large dependency pull.

```bash
sudo apt update
apt-cache depends ubuntu-restricted-extras | sed -n '1,80p'
```

### 2. Install the core media packages
This gives a practical workstation baseline without assuming every proprietary codec must be present immediately.

```bash
sudo apt install ubuntu-restricted-extras ffmpeg gstreamer1.0-plugins-good gstreamer1.0-plugins-bad gstreamer1.0-libav
```

### 3. Verify playback and codec visibility
Check that the packages landed and that local playback works with at least one known-good sample.

```bash
dpkg -l | grep -E 'ubuntu-restricted-extras|ffmpeg|gstreamer1.0'
ffmpeg -codecs | sed -n '1,40p'
```

## ✅ Validation Checkpoints
- The package install completed without broken dependencies.
- A sample audio or video file plays successfully in the intended player.
- The workstation still boots and logs in normally after the media stack change.

## Troubleshooting Notes
- If package configuration prompts were interrupted, recover with `sudo dpkg --configure -a`.
- If media playback still fails, check whether the issue is codec-related or player-related before adding more packages.

## ↩️ Rollback / Recovery Notes
- If the codec install introduced dependency problems, purge the last package set and return to the pre-media package list before trying a narrower combination.
- Keep media additions documented so later cleanup does not accidentally remove something essential.

## Related Docs
- [🎵 08 Install Media](../tutorials/08-install-media.md)
- [📋 Package Optional](../reference/package-optional.md)
- [📋 Troubleshooting Index](../reference/troubleshooting-index.md)

Next: translate to id
