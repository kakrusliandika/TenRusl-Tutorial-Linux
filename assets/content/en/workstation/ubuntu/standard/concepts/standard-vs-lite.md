# 🧠 Standard vs Lite

## Summary
Standard and Lite solve the same workstation problem from different angles. Standard optimizes for faster everyday usability. Lite optimizes for tighter control and lower initial complexity.

## What This Concept Means
From the Standard side, the main question is whether the user benefits from a fuller application and desktop surface on day one. If the answer is yes and the hardware is ready, Standard is often the cleaner path because it avoids rebuilding a common desktop one small package set at a time.

## Why It Matters On A Workstation
This matters because some teams overuse Lite even when the real acceptance criteria clearly demand office tools, browser readiness, media support, and broad desktop comfort. Other teams overuse Standard on weak hardware and then spend time stripping packages back down.

## Key Principles
- Match the track to the real workstation outcome, not to ideology.
- Let hardware, user expectations, and support burden drive the choice.
- A fuller baseline is acceptable when it shortens the path to the correct result.

## Architecture / Mental Model
If Lite is a staged custom build, Standard is a broader default landing zone. You still tune it, but you begin closer to a finished workstation. The cost is a larger package surface and sometimes less clarity about which single package changed behavior.

## Decision Guidance
- Choose Standard for stronger hardware, mixed-use desktops, and users who need a fuller desktop sooner.
- Choose Lite for constrained hardware, stricter support boundaries, or operators who want to add functionality one layer at a time.

## Tradeoffs
- Standard uses more disk, RAM, and default services.
- Lite takes more assembly work and often more patience.
- Either can be correct when chosen deliberately.

## Common Mistakes
- Picking Standard only because it feels easier without checking hardware fit.
- Picking Lite and then recreating a Standard workload immediately through many separate packages.

## Best Practices
- Review package baselines before committing to a track.
- Use Lite references for pre-install risk items even when Standard is the final destination.

## Quick Checklist
- You can justify the track choice against hardware and user outcome.
- The track choice reduces, not increases, operational ambiguity.

## Related Docs
- [💻 Ubuntu Lite](../../lite/index.md)
- [🧠 Lite vs Standard](../../lite/concepts/lite-vs-standard.md)
- [📋 Hardware Requirements](../reference/hardware-requirements.md)

Next: translate to id
