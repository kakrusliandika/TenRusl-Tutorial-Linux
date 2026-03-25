# 🧠 Template Discipline

## Summary
Template discipline means treating VM templates as controlled security artifacts instead of as convenient clones of a once-working machine.

## What This Concept Means
A disciplined template process covers patch level, first-boot behavior, identity reset, secret removal, and version tracking. A template should be safe to clone repeatedly without inheriting stale trust.

## Why It Matters
Every clone inherits the template’s strengths and mistakes. Poor template hygiene multiplies risk across the entire estate.

## Threat / Exposure Framing
Weak template practice spreads duplicate machine identity, stale packages, retained credentials, and noisy troubleshooting data into every new guest.

## Design Principles
- Build templates from a known baseline, not from a random live guest.
- Reset identity-bearing artifacts before publishing the template.
- Version and retire templates intentionally.
- Keep a previous known-good template available for rollback.

## Operational Tradeoffs
- A stricter seal-and-release process slows down ad hoc cloning but prevents repeated inherited mistakes.
- Cleaner templates require better first-boot automation and testing.
- Retaining older templates helps rollback but adds inventory overhead.

## Common Mistakes
- Publishing a template straight from a troubleshooting VM.
- Forgetting to remove secrets, host keys, or machine IDs.
- Keeping old templates forever without clear deprecation notes.

## Related Docs
- [🧱 VM Hardening Baseline](./vm-hardening-baseline.md)
- [🧰 Create a Golden Template](../how-to/create-golden-template.md)
- [🧼 04 Template Hygiene](../tutorials/04-template-hygiene.md)

Next: translate to id
