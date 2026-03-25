# 🧠 Minimal First

## Summary
Minimal-first does not mean underpowered or unfinished. It means each package layer must earn its place. The base system should boot cleanly, mount storage correctly, reach the network, and pass driver checks before you move on to browsers, editors, media tools, or developer stacks.

## What This Concept Means
On Ubuntu workstations, minimal-first means you delay optional packages until the base OS proves stable. It also means you prefer direct package sets over giant convenience bundles when the bundles would hide which dependency changed behavior.

## Why It Matters On A Workstation
This approach matters because workstation issues often hide inside package sprawl: too many services on boot, too many graphics components at once, and too many desktop changes before you confirm that suspend, Wi-Fi, display scaling, and firmware updates are already healthy.

## Key Principles
- Establish a stable base operating system before you optimize convenience.
- Measure the system after each package layer: boot time, memory pressure, and device support.
- Prefer reversible changes and keep package lists exportable.
- Add complexity only after the current layer is explained and validated.

## Architecture / Mental Model
Picture the workstation as a staircase. The first steps are firmware mode, storage plan, and base install. The next steps are graphical login, browser, editor, dev stack, and media support. If one stair feels weak, you stop there and fix it before climbing higher.

## Decision Guidance
- Use minimal-first if you expect to troubleshoot hardware or package interactions yourself.
- Use it if you want lower idle resource use or are rehabilitating older hardware.
- Skip it only when the machine role clearly demands a fuller desktop immediately and you can tolerate a broader dependency footprint.

## Tradeoffs
- More deliberate setup time on day one.
- More notes to keep during installation and post-install checks.
- Better long-term clarity when you later remove, replace, or troubleshoot software.

## Common Mistakes
- Confusing “minimal-first” with “never install productivity tools.”
- Adding PPAs, third-party bundles, and desktop metapackages before validating the distro baseline.
- Ignoring memory or storage pressure after each layer and only noticing problems when the system is already cluttered.

## Best Practices
- Keep `apt-mark showmanual` exports as the workstation grows.
- Add one class of software at a time: GUI, browser, editor, dev, media.
- Use reference checklists so the build remains repeatable.

## Quick Checklist
- You know which layer you are adding next and why.
- You can reverse or purge the last major change without reinstalling the whole machine.
- The workstation remains understandable to someone other than the original installer.

## Related Docs
- [📋 Package Baseline](../reference/package-baseline.md)
- [📋 Package Optional](../reference/package-optional.md)
- [🧪 07 Install Dev](../tutorials/07-install-dev.md)
- [🧹 09 Cleanup](../tutorials/09-cleanup.md)

Next: translate to id
