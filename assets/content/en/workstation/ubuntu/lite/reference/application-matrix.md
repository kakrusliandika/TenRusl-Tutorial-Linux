# 📋 Application Matrix

## Purpose
Use this matrix to decide which application layer to add first on Ubuntu Lite and which categories can safely wait.

## Structured Reference Material
| Category | Lean choice | Fuller choice | Add now when... | Delay when... |
|---|---|---|---|---|
| Browser | Firefox | Firefox plus a second browser for testing | Web access is part of initial acceptance | You are still validating graphics or Wi-Fi |
| Editor | micro or vim | GUI editor or IDE later | You need immediate editing on the box | You have not settled package sources yet |
| Media playback | mpv or VLC | VLC plus codec extras and GUI media tools | The workstation is for daily playback now | You are still stabilizing audio or GPU |
| Office | none at first | LibreOffice | The machine is a productivity desktop from day one | The role is admin or dev first |
| Remote support | OpenSSH client | Remmina, RDP, VNC tools | You must reach other machines immediately | Network identity and VPN are still unsettled |
| Dev toolchain | git, curl, build-essential | language runtimes and IDEs later | Development is a core role | The base workstation is not yet healthy |

## Commands / Inspection Snippets
```bash
apt-cache policy firefox micro vim vlc libreoffice remmina git build-essential
```

## Practical Notes
- Lite is strongest when you avoid adding multiple large categories in one session.
- A category can be postponed without meaning the workstation is incomplete; it simply means the layer has not been justified yet.
- If a category brings many dependencies, add it near the end of the tutorial flow so rollback remains simple.

## Related Docs
- [📋 Package Baseline](./package-baseline.md)
- [📋 Package Optional](./package-optional.md)
- [📚 00 Tutorial Index](../tutorials/00-index.md)

Next: translate to id
