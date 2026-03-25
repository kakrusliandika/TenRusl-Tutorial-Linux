# 🗺️ 02 Surface Mapping

## Objective
Inventory hostnames, listeners, redirects, and public paths.

## Prerequisites
- Shell access to the public hostname and the edge host or service logs.
- A writable notes file for findings and exceptions.

## Environment Assumptions
- The public edge is stable enough for controlled review and any risky config change is backed up first.

## Sequential Steps
### 1. Enumerate listeners on the host
The public surface starts with real listeners.

```bash
sudo ss -tulpn | egrep ':80 |:443 |:8080 |:8443 ' || true
```

### 2. Test core hostnames and redirects
Inspect each important hostname individually.

```bash
for url in http://example.com https://example.com https://www.example.com; do
  echo "=== $url ==="
  curl -I "$url" | head -n 10
done
```

### 3. Record the surface map
Keep the map in a file you can update during the rest of the module.

```bash
printf "%s\n" "hostname | listener | redirect | headers reviewed | notes" >> web-security-notes.txt
```

## ✅ Validation Checkpoints
- Live responses and logs match the expected edge design after each change.

## ⚠️ Warnings
- Do not call the edge hardened if stale hostnames, weak redirects, or missing logs remain undocumented.

## Cleanup / Post-Check
- Store notes, config backups, and test outputs in a reviewed location.

## Next Tutorial
[Next: 03 TLS Baseline](./03-tls-baseline.md)

Next: translate to id
