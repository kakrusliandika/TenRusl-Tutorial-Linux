# 🧠 When To Choose Standard

## Summary
Choose Standard when the workstation should become broadly useful quickly and the hardware can support that expectation without compromise.

## What This Concept Means
On real desktops this usually means users need browser, office, media, remote access, and development tools relatively early. The stronger the “this must feel ready on day one” requirement becomes, the stronger the case for Standard.

## Why It Matters On A Workstation
This matters because workstations are judged by user workflow, not by purity. If the role includes common desktop tasks from the start, a fuller baseline can be the more honest and supportable plan.

## Key Principles
- Prefer Standard on modern laptops and desktops with comfortable RAM and SSD storage.
- Prefer Standard when the user or team needs a general-purpose daily driver quickly.
- Prefer Standard when Lite’s extra assembly effort does not buy meaningful operational advantage.

## Architecture / Mental Model
A Standard workstation should still be planned in layers, but the layers are larger and more outcome-focused: preflight, core install, defaults, productivity, dev tools, media tools, optional extras, cleanup, closeout.

## Decision Guidance
- Choose Standard if the machine is a workhorse desktop rather than a constrained recovery-first build.
- Stay on Lite if the machine is older, smaller, or the operator strongly values smaller blast radius over convenience.

## Tradeoffs
- More software earlier means more places to inspect if something regresses.
- The reward is a smoother early user experience.

## Common Mistakes
- Assuming Standard removes the need for ISO verification, firmware awareness, or backup discipline.
- Calling a weak machine “Standard-capable” and only discovering the cost after installation.

## Best Practices
- Validate hardware fit before selecting Standard.
- Borrow Lite recovery docs for BitLocker, Intel RST, GRUB, and failed-boot cases.

## Quick Checklist
- The machine role needs a fuller desktop baseline.
- The system has comfortable RAM, SSD storage, and stable graphics/network support.

## Related Docs
- [📋 Package Expanded](../reference/package-expanded.md)
- [📘 01 Introduction](../tutorials/01-introduction.md)
- [💻 Ubuntu Lite](../../lite/index.md)

Next: translate to id
