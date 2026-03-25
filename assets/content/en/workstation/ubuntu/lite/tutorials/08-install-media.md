# 🎵 08 Install Media

## Objective
Add media playback and creator-friendly tools only after the workstation already behaves like a stable daily machine.

## Prerequisites
- Core install, GUI, browser, editor, and any required dev tools are already working.
- The workstation role genuinely includes audio or video playback or creation tasks.

## Environment Assumptions
- Media stacks can pull many dependencies and should arrive late in a Lite build.

## Sequential Steps
### 1. Install the planned media package set
Keep the package set intentional and tied to real use cases.

```bash
sudo apt update
sudo apt install vlc mpv ffmpeg pavucontrol
```

### 2. Add codec support if it is still missing
Only add extra codec packages if the media role requires them and playback testing shows the need.

```bash
dpkg -l | grep -E 'ffmpeg|vlc|mpv|gstreamer1.0' | sed -n '1,20p'
```

### 3. Test playback and audio routing
Use known-good sample files and check the actual output device selection.

```bash
aplay -l 2>/dev/null || true
pactl list short sinks 2>/dev/null || true
ffmpeg -version | head -n 1
```

## ✅ Validation Checkpoints
- Audio output is visible and at least one sample file plays successfully.
- The workstation still logs in and reboots cleanly after the media-layer addition.

## ⚠️ Warnings
- If playback fails, determine whether the issue is codec, player, GPU, or audio-routing related before adding more packages.

## Cleanup / Post-Check
- If the media layer becomes noisy or unstable, purge the last media package set and return to the pre-media baseline while you reassess the requirement.

## Next Tutorial
[🧹 09 Cleanup](./09-cleanup.md)

## Related Docs
- [🎵 Install Codecs](../how-to/install-codecs.md)
- [📋 Application Matrix](../reference/application-matrix.md)
- [📋 Troubleshooting Index](../reference/troubleshooting-index.md)

Next: translate to id
