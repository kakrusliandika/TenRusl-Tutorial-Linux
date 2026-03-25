# 🧠 Lite vs Standard

## Summary
Lite and Standard are two valid Ubuntu workstation operating models in this repository. The difference is not quality. The difference is package timing, support surface, hardware tolerance, and how much manual control you want over the desktop build.

## What This Concept Means
Lite means you begin smaller and stay closer to individual packages. Standard means you accept a fuller initial package surface so the workstation becomes comfortable sooner. The right choice depends on hardware, support expectations, and how willing you are to debug the machine layer by layer.

## Why It Matters On A Workstation
This choice matters because changing tracks late can cost time. A user who wants office, browser, media, and dev tools immediately may resent the slower Lite build. A user who wants maximum clarity on old hardware may regret a Standard build that lands more packages than the machine comfortably carries.

## Key Principles
- Match the track to the machine role before installation, not after the first boot feels heavy.
- Use Lite when observability and smaller blast radius matter more than convenience.
- Use Standard when a fuller desktop baseline is part of the acceptance criteria.
- Reuse the Lite recovery docs even when the final decision is Standard.

## Architecture / Mental Model
Lite is like building a tool chest one tool at a time. Standard is like starting with a well-filled chest and then tuning it. Both can end up excellent. The main question is whether you want fewer starting parts or more immediate utility.

## Decision Guidance
- Choose Standard for stronger hardware, mixed-use desktops, and users who need office, browser, and media readiness sooner.
- Choose Lite for constrained hardware, stricter support boundaries, or operators who want to add functionality one layer at a time.

## Tradeoffs
- Lite trades speed for control and lower early complexity.
- Standard trades a broader package surface for a faster daily-driver outcome.
- Lite often wins on weaker hardware; Standard often wins on modern hardware with mixed-use workloads.

## Common Mistakes
- Deciding based only on disk size and ignoring RAM, graphics support, or user expectations.
- Choosing Lite and then immediately installing large desktop bundles that erase the distinction.
- Choosing Standard for weak hardware and expecting Lite-style responsiveness later without compromise.

## Best Practices
- Write down the machine role before you choose the track.
- Plan browser, editor, office, dev, and media requirements explicitly.
- Treat dual boot, BitLocker, and Intel RST as installation-risk factors independent of track choice.

## Quick Checklist
- You can explain why Lite or Standard was selected in one sentence.
- The choice matches the hardware and support model.
- You know which recovery docs you will keep nearby during installation.

## Related Docs
- [💻 Ubuntu Standard](../../standard/index.md)
- [🧠 Standard vs Lite](../../standard/concepts/standard-vs-lite.md)
- [📋 Hardware Requirements](../reference/hardware-requirements.md)
- [📋 02 Install Preflight](../tutorials/02-install-preflight.md)

Next: translate to id
