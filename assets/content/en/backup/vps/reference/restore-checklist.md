# 📚 Restore Checklist

## Purpose
Use this checklist when rebuilding a VPS on fresh infrastructure so you restore in a safe order instead of unpacking everything and hoping the service graph repairs itself.

## Structured Reference
| Step | Command or Check | Why It Matters |
| --- | --- | --- |
| Verify archive integrity | `sha256sum -c SHA256SUMS` | Prevents corrupted restore attempts. |
| Review package inventory | `less packages.tsv` | Explains the software baseline. |
| Stop or isolate services | `systemctl stop ...` | Prevents fresh writes during extraction. |
| Extract with preserved ownership | `tar --xattrs --acls --numeric-owner -xzf ... -C /` | Restores permissions and ACLs accurately. |
| Restore database if present | `mysql` / `psql` / `pg_restore` | Rebuilds mutable state after files. |
| Restart and inspect services | `systemctl restart ...` and `journalctl -u ...` | Surfaces runtime failures early. |

## Practical Interpretation Notes
- Treat package inventory as rebuild guidance, not an excuse for blind mass installation on a different distribution.
- Keep a place for manual post-restore steps such as secret re-application, certificate placement, or hostname changes.
- Validation should include SSH, ports, service status, logs, and application-specific health checks.

## Useful Inspection Snippet
```bash
systemctl --failed
ss -tulpn
journalctl -p err -b --no-pager | tail -n 50
```

## Related Docs
- [🛠️ Restore from Backup](../how-to/restore-from-backup.md)
- [🧠 Restore-First Thinking](../concepts/restore-first-thinking.md)
- [↩️ Tutorial 05: Restore on a New VPS](../tutorials/05-restore-on-new-vps.md)

Next: translate to id
