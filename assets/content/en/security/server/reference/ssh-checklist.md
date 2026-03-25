# 📋 SSH Checklist

## Purpose
Use this checklist before and after SSH changes so remote administration remains secure and recoverable.

## Structured Reference
### Policy review points
- Each administrator uses a named account.
- Key-based authentication works for every required admin.
- Password and keyboard-interactive posture is documented.
- Root login policy is explicit.
- A rollback path and second session exist before risky changes.

### Recovery review points
- A backup of the last working SSH config exists.
- Out-of-band or console access is documented.
- Recent SSH logs are easy to review.


## Practical Interpretation Notes
- SSH reviews should cover both policy and recovery. Strong access control without a recovery path is still operationally weak.

## Command Snippets
```bash
sudo sshd -T | egrep 'port|listenaddress|passwordauthentication|kbdinteractiveauthentication|pubkeyauthentication|permitrootlogin'
sudo journalctl -u sshd -u ssh -n 50 --no-pager
getent passwd | grep -E '/bin/(bash|zsh|sh)$'
```

## Related Docs
- [🔐 SSH Policy](../concepts/ssh-policy.md)
- [🔐 Disable Password Login](../how-to/disable-password-login.md)
- [🔐 03 Users and SSH](../tutorials/03-users-and-ssh.md)

Next: translate to id
