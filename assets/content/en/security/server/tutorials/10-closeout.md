# 📘 10 Closeout

## Objective
Bundle rollback notes and the next review loop.

## Prerequisites
- Sudo access to the host or the relevant inspection path.
- A writable notes file for findings and exceptions.

## Environment Assumptions
- The host is stable enough for review work and any risky edits are backed up first.

## Sequential Steps
### 1. Package the key artifacts
Keep baseline notes and saved outputs together.

```bash
tar czf server-security-pack-$(date +%F).tgz security-baseline-notes.txt nft-before.txt ufw-before.txt 2>/dev/null || true
```

### 2. Record recovery notes
Future operators should not guess the rollback path.

```bash
printf "%s\n" "Console path:" "SSH rollback file:" "Firewall rollback file:" > closeout-notes.txt
```

### 3. Schedule the next review
Security posture decays without ownership.

```bash
printf "%s\n" "Next security review: YYYY-MM-DD" >> closeout-notes.txt
```

## ✅ Validation Checkpoints
- The step output matches the documented host role and no new unknown services, users, or listeners appear.

## ⚠️ Warnings
- Never treat an untested config change as finished just because the command returned zero.

## Cleanup / Post-Check
- Store outputs that matter in your host record or change log.

## Next Tutorial
[Return to Server Security](../index.md)

Next: translate to id
