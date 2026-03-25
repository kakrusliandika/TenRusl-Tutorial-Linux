# 🔐 Install OpenSSH

        ## Objective
        Install and verify OpenSSH on Ubuntu so the server has a stable, testable remote administration path before later role changes.

        ## When To Use This Procedure
        Use this immediately after the base OS is installed or when the SSH server package is missing, disabled, or untrusted.

        ## Prerequisites
        - Console, rescue, or hypervisor access.
        - A planned admin account and at least one allowed management network.

        ## Environment Assumptions
        - Package repositories and time sync already work.
        - You can keep one session open while testing a second session.

        ## Exact Steps
        ### 1. Install the SSH server and enable the service
        ```bash
sudo apt-get update
sudo apt-get install -y openssh-server
sudo systemctl enable --now ssh
```

        ### 2. Confirm the daemon is listening and review recent logs
        ```bash
systemctl status ssh --no-pager
ss -ltnp | grep ':22' || true
journalctl -u ssh -n 50 --no-pager
```

        ### 3. Create or confirm a named admin account before tightening policy
        ```bash
id adminops 2>/dev/null || sudo useradd -m -s /bin/bash adminops
sudo usermod -aG sudo adminops 2>/dev/null || sudo usermod -aG wheel adminops 2>/dev/null || true
sudo install -d -m 0700 -o adminops -g adminops /home/adminops/.ssh
```

        ### 4. Test SSH from a second terminal
        ```bash
ssh adminops@server-ip
```

        ## ✅ Validation Checkpoints
        - The SSH service is enabled and active.
        - Port 22 is listening on the expected addresses.
        - A second SSH session succeeds before the original session is closed.

        ## Troubleshooting
        - Service fails after install: inspect the unit status and recent logs first.
        - Port 22 is missing: confirm whether the daemon listens on a different address or failed to start.
        - Login fails: verify shell, home ownership, and firewall policy together.

        ## ↩️ Rollback / Recovery Notes
        - If the daemon fails and you do not need remote access yet, remove the package and troubleshoot from the console.
        - Never disable the current access path until the replacement path is proven.

        ## Related Docs
        - [🔐 SSH First](../concepts/ssh-first.md)
        - [🛡️ Configure the Firewall](./configure-firewall.md)
        - [🔐 Tutorial 05: Users and SSH](../tutorials/05-users-and-ssh.md)

Next: translate to id
