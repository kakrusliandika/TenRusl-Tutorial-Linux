# 🎵 Enable Codecs

## Objective
Enable a comfortable media codec baseline on Ubuntu Standard so playback and browser media are less likely to fail on a general-purpose workstation.

## Use Case
Use this after the Standard desktop is already installed and networking is healthy. Standard often needs codecs earlier than Lite because media expectations are broader from the start.

## Prerequisites
- A working Standard desktop with internet access.
- A reason to support browser media, local playback, or common content formats immediately.

## ⚠️ Risk Notes
- Codec packages can bring prompts, license notices, or a wider dependency set than expected.

## Environment Assumptions
- The machine already boots and logs in normally.
- You want a fuller daily-driver media experience than the raw base may provide.

## Step-by-Step Procedure
### 1. Refresh package metadata and inspect package candidates
Standard favors quicker readiness, but you should still know what the install is about to add.

```bash
sudo apt update
apt-cache policy ubuntu-restricted-extras ffmpeg vlc
```

### 2. Install the codec baseline
A practical Standard baseline usually includes common extras plus one reliable media player.

```bash
sudo apt install ubuntu-restricted-extras ffmpeg vlc gstreamer1.0-libav
```

### 3. Verify playback tools and package state
Check both the package list and the media tools themselves.

```bash
dpkg -l | grep -E 'ubuntu-restricted-extras|ffmpeg|vlc'
ffmpeg -version | head -n 1
vlc --version | head -n 2
```

## ✅ Validation Checkpoints
- Media packages installed without broken dependencies.
- The chosen player launches and recognizes sample media files.
- The broader Standard desktop still feels stable after the codec addition.

## Troubleshooting Notes
- If packages fail to configure, finish package recovery before trying more media apps.
- If browser media still fails, check time sync and DNS too; not every playback issue is a codec issue.

## ↩️ Rollback / Recovery Notes
- Purge the last media packages if they destabilize the machine, then rebuild the media layer more narrowly.

## Related Docs
- [🎵 07 Media Tools](../tutorials/07-media-tools.md)
- [📋 Package Expanded](../reference/package-expanded.md)
- [💻 Ubuntu Lite Codec How-To](../../lite/how-to/install-codecs.md)

Next: translate to id
