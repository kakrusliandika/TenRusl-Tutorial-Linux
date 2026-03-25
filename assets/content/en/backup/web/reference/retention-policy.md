# 📚 Retention Policy

## Purpose
Retention for web applications must keep matching file and database generations long enough to recover from bad deploys, content mistakes, and slower-detected corruption.

## Structured Reference
| Layer | Example Count | Storage Tier | Recovery Role |
| --- | --- | --- | --- |
| Daily | 7 | Local backup disk | Quick rollback for recent content or deploy issues. |
| Weekly | 4 | Local plus remote | Broader history for slower-detected problems. |
| Monthly | 3 | Offsite | Longer historical recovery for important sites. |
| Rehearsed generation | At least one recent set | Local or offsite | Known-good restore reference for drills. |

## Practical Interpretation Notes
- Keep file and database generations paired under the same timestamp when pruning or copying offsite.
- At least one recent generation should have passed a full restore rehearsal.
- Do not let CDN or provider snapshots replace application-aware file-plus-database retention.

## Useful Inspection Snippet
```bash
find /srv/backup/web/example.com -maxdepth 1 -mindepth 1 -type d | sort
# compare retained generations with the written policy before pruning
```

## Related Docs
- [🧠 Restore Rehearsal](../concepts/restore-rehearsal.md)
- [🛠️ Test a Web Restore](../how-to/test-web-restore.md)
- [✅ Tutorial 06: Verify Application](../tutorials/06-verify-application.md)

Next: translate to id
