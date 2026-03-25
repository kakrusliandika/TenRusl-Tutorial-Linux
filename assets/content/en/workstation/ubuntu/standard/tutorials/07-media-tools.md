# 🎵 07 Media Tools

## Objective
Install a fuller Standard media toolkit for playback and light creation work without ignoring codec, audio, and GPU validation.

## Prerequisites
- The Standard desktop and productivity layers are already healthy.
- The workstation role includes media playback or light creative work.

## Environment Assumptions
- Media tools are broader than codecs alone; validate hardware acceleration and audio routing where relevant.

## Sequential Steps
### 1. Install the main media applications
A common Standard media layer includes playback plus one or two creation tools.

```bash
sudo apt update
sudo apt install vlc ffmpeg gimp obs-studio
```

### 2. Validate playback and device visibility
Check that audio sinks, playback tools, and graphics remain healthy.

```bash
pactl list short sinks 2>/dev/null || true
ffmpeg -version | head -n 1
vlc --version | head -n 2
```

### 3. Keep the scope proportional
If the machine only needs playback, do not keep installing creator tools out of habit.

## ✅ Validation Checkpoints
- The workstation can play media and the required tools launch.
- No obvious graphics or audio regressions appeared after the media install.

## ⚠️ Warnings
- If OBS or GPU-heavy media tools destabilize the machine, remove them and return to a simpler playback-first baseline.

## Cleanup / Post-Check
- Keep only the media tools that match the workload; Standard is broader than Lite, not infinite.

## Next Tutorial
[🧰 08 Optional Tools](./08-optional-tools.md)

## Related Docs
- [🎵 Enable Codecs](../how-to/enable-codecs.md)
- [📋 Package Expanded](../reference/package-expanded.md)
- [💻 Ubuntu Lite Media Chapter](../../lite/tutorials/08-install-media.md)

Next: translate to id
