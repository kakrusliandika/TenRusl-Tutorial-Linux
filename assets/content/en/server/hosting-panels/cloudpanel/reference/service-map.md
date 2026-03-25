# 📋 Service Map

    ## Purpose
    Keep one operational view of the services CloudPanel depends on so control-plane changes are always cross-checked against real host state.

    ## Structured Data / Reference
    | Area | What To Confirm | Interpretation |
| --- | --- | --- |
| Panel service | The admin layer is running and restartable | Use systemctl, container inspection, or both depending on install method. |
| Web server | Listener and config owner are understood | Validate listeners and recent logs after every panel change. |
| Runtime layer | Runtime work in CloudPanel often means PHP version selection, queues, scheduled jobs, database access, and domain mapping for app stacks. | Check PHP-FPM, upstream processes, or containers explicitly. |
| Database layer | Local database services are known and intentionally local-only or exposed | Do not assume panel UI health means database health. |

    ## Command Snippets
    ```bash
systemctl list-units --type=service | grep -Ei 'nginx|php.*fpm|mysql|mariadb|redis|cloudpanel|clp' || true

systemctl status mysql mariadb redis-server redis --no-pager 2>/dev/null || true

ss -ltnp
systemctl --failed
```

    ## Interpretation Notes
    - A green panel dashboard is not a substitute for host-side service validation.
    - Review service maps after upgrades, runtime changes, site creation, and restore operations.

    ## Related Docs
    - [🌐 Add a New Site](../how-to/add-new-site.md)
    - [↩️ Restore Panel Config](../how-to/restore-config.md)
    - [✅ 09 Hardening](../tutorials/09-hardening.md)

Next: translate to id
