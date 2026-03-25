# 📋 Package Baseline

## Purpose
Use this reference as the default Lite package floor after the base install is healthy.

## Structured Reference Material
| Package or group | Why keep it in the baseline |
|---|---|
| `openssh-client` | Needed on many admin and developer workstations |
| `curl` and `wget` | Practical download and API inspection tools |
| `ca-certificates` | Required for trusted HTTPS traffic |
| `git` | Common workstation baseline for notes and source management |
| `vim`, `nano`, or `micro` | Always keep at least one dependable editor |
| `network-manager` tooling | Needed on laptops and desktop Wi-Fi environments |
| `pciutils`, `usbutils`, `lshw` | Fast hardware inspection during troubleshooting |

## Commands / Inspection Snippets
```bash
apt-cache policy openssh-client curl wget ca-certificates git vim nano micro pciutils usbutils lshw
```

## Practical Notes
- The baseline should remain small enough that you can explain every package on the machine.
- If a package is only for a one-time task, install it later and consider purging it after use.

## Related Docs
- [🧠 Minimal First](../concepts/minimal-first.md)
- [📋 Package Optional](./package-optional.md)
- [🧪 07 Install Dev](../tutorials/07-install-dev.md)

Next: translate to id
