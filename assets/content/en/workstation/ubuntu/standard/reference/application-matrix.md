# 📋 Application Matrix

## Purpose
Use this matrix to shape a broader Ubuntu Standard workstation without losing track of which software belongs in the first wave.

## Structured Reference Material
| Category | Baseline Standard choice | Extra choice | Why it fits Standard |
|---|---|---|---|
| Browser | Firefox | Second browser for testing if needed | A general-purpose desktop should browse comfortably immediately |
| Office | LibreOffice | PDF or note tools later | Common office workflows are expected earlier than in Lite |
| Mail and calendar | Thunderbird | Additional sync tools later | Helps mixed-use daily-driver scenarios |
| Remote support | Remmina | SSH, VNC, or RDP extras | Common on admin and support desktops |
| Graphics | Image viewer plus screenshot tools | GIMP or Inkscape later | Useful but still role-dependent |
| Media | VLC plus codec baseline | OBS Studio or creator tools later | Standard often handles everyday playback early |
| Dev | git plus build tools plus Python | extra language runtimes later | Frequent on mixed-use Linux desktops |

## Commands / Inspection Snippets
```bash
apt-cache policy firefox libreoffice thunderbird remmina vlc gimp git build-essential python3
```

## Practical Notes
- Standard is broader than Lite, but every category should still have a role-based justification.
- A second or third application per category should be a conscious exception, not the default.

## Related Docs
- [📋 Package Baseline](./package-baseline.md)
- [📋 Package Expanded](./package-expanded.md)
- [📚 05 Productivity](../tutorials/05-productivity.md)

Next: translate to id
