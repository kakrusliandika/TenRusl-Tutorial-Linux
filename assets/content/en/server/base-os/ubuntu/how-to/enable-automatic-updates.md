# 🔄 Enable Automatic Updates

        ## Objective
        Configure Ubuntu to handle routine update activity in a controlled, reviewable way.

        ## When To Use This Procedure
        Use this after the server has stable network reachability and a known repository policy.

        ## Prerequisites
        - Package repositories are reachable.
        - You have decided whether the host may auto-apply updates or only stage them for review.

        ## Environment Assumptions
        - Baseline hosts need patch cadence, but still require log review and rollback awareness.

        ## Exact Steps
        ### 1. Install and enable the distro-native automation component
        ```bash
sudo apt-get update
sudo apt-get install -y unattended-upgrades apt-listchanges
sudo dpkg-reconfigure -plow unattended-upgrades
systemctl status unattended-upgrades --no-pager || true
```

        ### 2. Review the resulting configuration and timer or service state
        ```bash
systemctl list-timers --all | grep -Ei 'unattended|dnf' || true
grep -R '1' /etc/apt/apt.conf.d/20auto-upgrades /etc/apt/apt.conf.d/50unattended-upgrades 2>/dev/null || true
systemctl cat dnf-automatic.timer 2>/dev/null || true
```

        ### 3. Confirm recent update history is visible for audits
        ```bash
grep -R . /var/log/unattended-upgrades 2>/dev/null | tail -n 20 || true
journalctl -u unattended-upgrades -u dnf-automatic.timer -u dnf-automatic.service -n 40 --no-pager 2>/dev/null || true
```

        ## ✅ Validation Checkpoints
        - Update automation tooling is installed.
        - A timer, service, or policy file clearly shows expected behavior.
        - You know where to review the next automatic run.

        ## Troubleshooting
        - No timer activity is visible: check whether the distro uses a service trigger instead of a timer.
        - Updates fail silently: inspect unit logs and repository reachability.
        - Auto-updates feel too risky: switch to review-first policy rather than abandoning patch discipline.

        ## ↩️ Rollback / Recovery Notes
        - Disable the timer or revert the config if the policy proves too aggressive.
        - Record any exception so later operators know whether patching is manual or automated.

        ## Related Docs
        - [📦 Package Baseline](../reference/package-baseline.md)
        - [🛡️ Tutorial 07: Security](../tutorials/07-security.md)
        - [🧽 Tutorial 09: Cleanup](../tutorials/09-cleanup.md)

Next: translate to id
