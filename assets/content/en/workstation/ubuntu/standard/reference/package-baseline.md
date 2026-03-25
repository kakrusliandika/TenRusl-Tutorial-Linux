# 📋 Package Baseline

## Purpose
Use this page as the expected first-wave package surface for Ubuntu Standard after the base install.

## Structured Reference Material
| Package or group | Why it belongs early on Standard |
|---|---|
| Browser stack | A workstation is rarely complete without dependable browsing |
| LibreOffice | Common productivity baseline |
| Thunderbird or equivalent mail tool | Useful on mixed-use daily desktops |
| Remmina | Common remote support or admin need |
| Basic media player plus codec layer | Frequent daily-driver expectation |
| git plus basic dev tools | Standard desktops often still need practical admin and dev utility |

## Commands / Inspection Snippets
```bash
dpkg -l | grep -E 'firefox|libreoffice|thunderbird|remmina|vlc|git' | sed -n '1,40p'
```

## Practical Notes
- The Standard baseline is intentionally broader than Lite, but it still benefits from documentation and review.

## Related Docs
- [📋 Package Expanded](./package-expanded.md)
- [📚 05 Productivity](../tutorials/05-productivity.md)
- [🎵 07 Media Tools](../tutorials/07-media-tools.md)

Next: translate to id
