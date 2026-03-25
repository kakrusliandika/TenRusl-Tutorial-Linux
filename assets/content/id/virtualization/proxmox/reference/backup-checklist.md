# 📋 Checklist Backup

## Tujuan Referensi Ini
Gunakan halaman ini sebagai checklist ringkas sebelum, saat, dan sesudah backup di Proxmox.

## Materi Referensi Terstruktur
| Tahap | Yang Dicek | Contoh Perintah |
|---|---|---|
| Sebelum backup | Storage target, ruang kosong, identitas workload | `df -h; lsblk -f` |
| Saat backup | Aktivitas service, log tugas, dampak ke workload | `journalctl -xe | tail -n 40` |
| Setelah backup | Keberadaan arsip, metadata waktu, kesiapan restore | `ls -lh /var/backups 2>/dev/null || true` |

```bash
vzdump --mode snapshot --storage lab-backup 9100 2>/dev/null || true
pvesm status
ls -lh /srv/pve-backup 2>/dev/null || true
```

## Catatan Interpretasi Praktis
- Backup yang belum pernah dipulihkan tetap belum layak disebut jalur recovery.
- Catat nama workload, lokasi arsip, tanggal, dan operator yang menjalankan backup.
- Jika platform atau rilis berubah, pastikan checklist tetap ditopang oleh fakta host-side yang stabil.

## Dokumen Terkait
- [↩️ Pulihkan Backup dengan Validasi](../how-to/restore-backup.md)
- [📋 Checklist Operasional](./operations-checklist.md)
