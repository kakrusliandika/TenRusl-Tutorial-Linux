# 🧪 07 Install Dev

## Objective
Add a practical development baseline to Ubuntu Lite without burying the machine under unnecessary toolchains.

## Prerequisites
- The workstation is already stable with GUI, browser, and editor layers.
- Development is a real part of the machine role.

## Environment Assumptions
- You are building a general Linux development baseline, not a language-specific monster stack.

## Sequential Steps
### 1. Install the core development toolchain
Start with portable tools that help almost every Linux developer or operator.

```bash
sudo apt update
sudo apt install build-essential git curl wget unzip ca-certificates pkg-config python3 python3-venv python3-pip
```

### 2. Verify the main tools explicitly
A package install is not the same as a usable toolchain. Confirm the binaries you care about are on PATH.

```bash
gcc --version | head -n 1
git --version
python3 --version
pip3 --version
```

### 3. Add language or framework tooling only after the baseline is proven
Node.js, Go, Rust, Java, containers, and local virtualization are all valid later additions. Keep them role-driven so the workstation remains explainable.

## ✅ Validation Checkpoints
- The machine can compile basic software, clone a repository, and create a Python virtual environment.
- No broken dependencies remain after the toolchain install.
- The machine still feels healthy in memory, storage, and boot behavior.

## ⚠️ Warnings
- If development tools pull in far more than expected, stop and reassess whether Lite is still the right track or whether the toolchain should be isolated another way.

## Cleanup / Post-Check
- Export package lists before you add language-specific ecosystems or external repositories.

## Next Tutorial
[🎵 08 Install Media](./08-install-media.md)

## Related Docs
- [📋 Package Baseline](../reference/package-baseline.md)
- [📋 Package Optional](../reference/package-optional.md)
- [🧹 09 Cleanup](./09-cleanup.md)

Next: translate to id
