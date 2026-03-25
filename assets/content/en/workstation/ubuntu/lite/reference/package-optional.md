# 📋 Package Optional

## Purpose
Use this page to decide which non-essential packages should be layered onto Ubuntu Lite only when the workstation role justifies them.

## Structured Reference Material
| Package or group | Why it is optional | Add when... |
|---|---|---|
| `vlc` or `mpv` | Media playback is not required on every workstation | The machine is also used for audio and video playback |
| `libreoffice` | Heavy for some lean builds | Office workflow is part of the role |
| `remmina` | Only needed for remote admin or support | You routinely reach remote desktops |
| `gnome-disk-utility` | Useful but not required everywhere | The machine often handles external media |
| `flatpak` | Broadens app sources and support surface | You intentionally want that tradeoff |
| `virt-manager` | Not every workstation hosts local VMs | The machine is also a local virtualization console |

## Commands / Inspection Snippets
```bash
apt-cache policy vlc mpv libreoffice remmina gnome-disk-utility flatpak virt-manager
```

## Practical Notes
- Optional does not mean bad; it means role-dependent.
- Each optional package should have a written reason to exist on Lite.

## Related Docs
- [📋 Application Matrix](./application-matrix.md)
- [🎵 Install Codecs](../how-to/install-codecs.md)
- [🧰 08 Optional Tools](../../standard/tutorials/08-optional-tools.md)

Next: translate to id
