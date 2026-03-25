# 🧾 Logging Checklist

## Purpose
Use this checklist to verify that the web edge records enough detail to investigate abuse, outages, and deployment mistakes.

## Structured Reference
| Logging area | Minimum expectation | Why it matters |
| --- | --- | --- |
| Access logs | Method, path, status, client IP, user agent, upstream timing if possible | Reconstructs request behavior |
| Error logs | Startup failures, TLS issues, upstream failures | Speeds root-cause work |
| Rate-limit or WAF signals | Evidence that abuse controls triggered | Distinguishes abuse from outage |
| Deployment notes | When configs changed and by whom | Correlates incidents to change events |
| Clock sync | Reliable timestamps | Makes timelines trustworthy |


## Practical Interpretation Notes
- If the edge logs only status codes without context, later investigation becomes guesswork.
- Access logs should be useful but not reckless with secrets or bodies.

## Command Snippets
```bash
sudo journalctl -u nginx -u caddy -n 50 --no-pager 2>/dev/null || true
sudo tail -n 50 /var/log/nginx/access.log 2>/dev/null || true
sudo tail -n 50 /var/log/nginx/error.log 2>/dev/null || true
timedatectl status
```

## Related Docs
- [🚨 Incident Checklist](./incident-checklist.md)
- [🚦 Set Up Rate Limiting](../how-to/set-up-rate-limiting.md)
- [📝 07 Logging](../tutorials/07-logging.md)

Next: translate to id
