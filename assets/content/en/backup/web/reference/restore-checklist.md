# 📚 Restore Checklist

## Purpose
Use this checklist to keep web restore work ordered and auditable from integrity verification through HTTP validation.

## Structured Reference
| Step | Check or Command | Why It Matters |
| --- | --- | --- |
| Verify checksums | `sha256sum -c SHA256SUMS` | Avoids restoring a corrupt generation. |
| Restore files first | `tar --xattrs --acls --numeric-owner -xzf ... -C /` | Recreates paths and ownership before the DB import. |
| Import database | `mysql`, `psql`, or `pg_restore` | Restores the mutable data layer. |
| Reapply secrets and ownership | env-file review, `chown` | Prevents runtime failures caused by missing config or wrong permissions. |
| Restart services in order | `systemctl restart ...` | Makes the first failing layer obvious. |
| Validate HTTP and app behavior | `curl`, logs, app smoke test | Proves the restore is actually useful. |

## Practical Interpretation Notes
- Files plus database plus secrets reference equals one restore unit; splitting them across different generations weakens recovery.
- If TLS keys or `.env` files are excluded deliberately, their secure recovery path must be in the runbook.
- Functional testing should include at least one data-backed path and one uploaded/static asset path.

## Useful Inspection Snippet
```bash
systemctl --failed
journalctl -u nginx -u apache2 -u httpd -u php*-fpm -n 50 --no-pager 2>/dev/null || true
curl -I http://127.0.0.1 2>/dev/null || true
```

## Related Docs
- [🛠️ Restore the Web App](../how-to/restore-web-app.md)
- [🧠 Restore Rehearsal](../concepts/restore-rehearsal.md)
- [↩️ Tutorial 05: Restore Stack](../tutorials/05-restore-stack.md)

Next: translate to id
