# 🧪 06 Dev Tools

## Objective
Add a solid development and admin tool baseline to Ubuntu Standard so the machine can support real work beyond browsing and office use.

## Prerequisites
- The Standard desktop is already stable and networked.
- Development or admin work is part of the machine role.

## Environment Assumptions
- Language ecosystems multiply quickly. Start with the portable baseline before you add language-specific stacks.

## Sequential Steps
### 1. Install the development baseline
This toolchain covers a large percentage of daily Linux development and admin workflows.

```bash
sudo apt update
sudo apt install build-essential git curl wget unzip ca-certificates python3 python3-venv python3-pip nodejs npm
```

### 2. Validate the development tools
Check both compiler and runtime tooling directly.

```bash
gcc --version | head -n 1
git --version
python3 --version
node --version
npm --version
```

### 3. Add heavier ecosystems later only if justified
Containers, JVM stacks, or GPU development stacks should be intentional follow-on work, not automatic add-ons.

## ✅ Validation Checkpoints
- Core compilers, Python, and Node tooling are installed and callable.
- The machine still feels stable enough for the remaining Standard chapters.

## ⚠️ Warnings
- If the repo packages for a language are too old for your role, document that constraint rather than silently switching to risky sources without a plan.

## Cleanup / Post-Check
- Export package selections before you introduce external repositories or larger dev ecosystems later.

## Next Tutorial
[🎵 07 Media Tools](./07-media-tools.md)

## Related Docs
- [📋 Package Expanded](../reference/package-expanded.md)
- [🧰 08 Optional Tools](./08-optional-tools.md)
- [💻 Ubuntu Lite Dev Chapter](../../lite/tutorials/07-install-dev.md)

Next: translate to id
