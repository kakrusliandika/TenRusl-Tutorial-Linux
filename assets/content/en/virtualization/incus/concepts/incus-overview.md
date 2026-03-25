# 🧠 Incus Architecture and Operating Model

## What This Concept Means
Incus exposes its operating model directly: projects scope resources, profiles define reusable defaults, networks and storage pools are named objects, and images or snapshots are explicit artifacts. That transparency is powerful only if you keep naming, defaults, and verification habits disciplined.

## Why It Matters Operationally
- Containers and VMs can coexist, which is useful but easy to blur operationally if you do not document which workloads belong in which model.
- Image, profile, and project sprawl creates hidden coupling when teams start cloning defaults without review.
- Incus is easiest to trust when the CLI output, host state, and network or storage intent all agree.

## Core Design Principles
- Decide early which workloads should be containers and which should be VMs.
- Keep project and profile boundaries simple until the team can explain them from memory.
- Treat images as controlled artifacts and publish only after a test launch.
- Verify from the CLI after every structural change, not only after workload launch.

## Common Mistakes
- Using the default project and default profile for everything forever.
- Mixing storage, network, and security assumptions into ad hoc instance-level overrides.
- Publishing images without documenting origin, update method, or validation date.
- Assuming container and VM troubleshooting are identical when they are not.

## Decision Guidance
- Choose Incus when you want Linux-native instance management and are willing to keep the model explicit.
- Start with one managed bridge, one project, one storage pool, and one or two tested images.
- Add cluster, OVN, or more advanced isolation only after the base CLI workflow is reliable.

## Verification Mindset
Use the platform control plane and Linux host checks together. The commands below are the minimum command-line baseline for this concept.

```bash
incus info
incus profile list
incus project list
incus network list
incus storage list
incus list
```

## Related Files In This Module
- [🌐 Network Design](./network-design.md)
- [💽 Storage Design](./storage-design.md)
- [📋 Operations Checklist](../reference/operations-checklist.md)

Next: translate to id
