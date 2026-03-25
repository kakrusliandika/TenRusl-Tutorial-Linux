# 🧠 Support Boundary

## Summary
A support boundary is the line between what you intentionally built and what you can no longer explain confidently. On a workstation, that boundary matters because package drift, emergency fixes, vendor-specific workarounds, and repeated GUI tweaks can leave the machine hard to recover even when it still boots.

## What This Concept Means
For Ubuntu Lite, the support boundary is deliberately tight. If a change is not documented, repeatable, and reversible, it should not become part of the trusted baseline. Unsupported experiments are fine in a lab, but they should not quietly become the workstation production state.

## Why It Matters On A Workstation
Operationally, a support boundary tells you when to stop piling on fixes and instead return to a known-good state. That saves time during failed boot recovery, driver problems, or package conflicts that would otherwise turn into endless “one more command” troubleshooting.

## Key Principles
- Document the base state and each major package layer.
- Prefer distro packages and known-good commands before custom hacks.
- Keep a recovery path ready before touching boot loaders, drivers, or partition tables.
- Know when reinstalling cleanly is cheaper than stacking more exceptions.

## Architecture / Mental Model
Think of the support boundary as a contract. Inside the boundary are validated packages, known settings, backed-up data, and repeatable recovery steps. Outside the boundary are ad-hoc tweaks, untracked downloads, and changes you cannot explain to the next operator.

## Decision Guidance
- Tighten the boundary on shared or important workstations.
- Allow more experimentation only if you also keep snapshots, notes, or clear rebuild instructions.
- If a change cannot be verified or rolled back, treat it as boundary expansion and decide consciously whether that is acceptable.

## Tradeoffs
- A tight boundary may feel slower because you write notes and validate more often.
- A loose boundary may feel faster right now but becomes expensive when the system breaks.
- The cost of discipline is small compared with the cost of unplanned reinstall work.

## Common Mistakes
- Installing third-party packages from random sources without recording them.
- Editing boot or graphics configuration in multiple places without keeping the old state.
- Continuing to debug after the machine has crossed into “I no longer know what changed” territory.

## Best Practices
- Export package selections before major changes.
- Back up `/etc` and user data before driver or boot-loader work.
- If the base OS becomes doubtful, pause the build and repair the base before resuming tutorials.

## Quick Checklist
- You know what “known good” means for this workstation.
- You have at least one documented recovery path.
- You can identify which recent change would be reverted first after a failure.

## Related Docs
- [↩️ Rollback Plan](../how-to/rollback-plan.md)
- [🚑 Recover After a Failed Boot](../how-to/recover-after-failed-boot.md)
- [📋 Troubleshooting Index](../reference/troubleshooting-index.md)
- [🧹 09 Cleanup](../tutorials/09-cleanup.md)

Next: translate to id
