# 📋 Package Expanded

## Purpose
Use this reference when the Standard workstation needs more than the first-wave baseline but you still want the growth to stay intentional.

## Structured Reference Material
| Expansion area | Common packages | Add when... |
|---|---|---|
| Productivity | `keepassxc`, `okular`, and similar tools | The workstation is used for document-heavy or knowledge-work tasks |
| Development | `build-essential`, `python3-venv`, `nodejs`, `npm`, `docker.io` only if justified | Development is a core workload |
| Media creation | `gimp`, `inkscape`, `obs-studio`, `audacity` | The machine is used for content work, not just playback |
| Virtualization client | `virt-manager`, `spice-client-gtk` | Local VM management is part of the role |
| Desktop tuning | `gnome-tweaks`, extension tooling | You intentionally own the extra customization surface |

## Commands / Inspection Snippets
```bash
apt-cache policy keepassxc okular build-essential python3-venv nodejs npm gimp inkscape obs-studio virt-manager gnome-tweaks
```

## Practical Notes
- Expanded does not mean mandatory; it means role-driven growth beyond the first wave.
- If the package set keeps growing without a clear role, revisit whether the workstation is drifting.

## Related Docs
- [📦 Install Extra Apps](../how-to/install-extra-apps.md)
- [🧪 06 Dev Tools](../tutorials/06-dev-tools.md)
- [🧰 08 Optional Tools](../tutorials/08-optional-tools.md)

Next: translate to id
