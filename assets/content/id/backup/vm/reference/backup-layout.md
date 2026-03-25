# 📚 Tata Letak Backup

## Tujuan
Gunakan tata letak yang menyimpan definisi VM, disk, data integritas, dan catatan konsistensi bersama-sama agar pekerjaan restore tidak dimulai dengan tebakan.

## Referensi Terstruktur
| Item | Contoh | Fungsi |
| --- | --- | --- |
| Root backup | `/srv/backup/vm/app01/2026-03-25-0100/` | Riwayat per guest yang mudah diprediksi dan aman untuk pruning. |
| Definisi guest | `app01.xml` | Menciptakan kembali asumsi CPU, RAM, NIC, storage, dan firmware. |
| Artefak disk | `app01.qcow2` | Payload storage utama guest. |
| File integritas | `SHA256SUMS` | Memungkinkan verifikasi sebelum impor. |
| Manifest | `manifest.txt` | Merekam nama guest, waktu ekspor, dan catatan konsistensi. |
| Catatan opsional | `FILES.txt` atau entri runbook | Inventaris yang mudah dibaca manusia saat drill restore. |

## Catatan Interpretasi Praktis
- Pastikan setiap generasi berdiri sendiri sehingga operator remote bisa merestore dari satu direktori tanpa mengejar metadata yang hilang.
- Namai direktori berdasarkan guest dan timestamp agar otomatisasi retensi aman.
- Jika platform mengekspor beberapa volume, simpan tiap disk dengan pemetaan yang jelas ke definisi guest.

## Cuplikan Pemeriksaan
```bash
BACKUP_DIR=/srv/backup/vm/app01/2026-03-25-0100
find "$BACKUP_DIR" -maxdepth 1 -type f -printf '%f\n' | sort
sha256sum -c "$BACKUP_DIR/SHA256SUMS"
```

## Dokumen Terkait
- [🛠️ Buat Backup VM](../how-to/create-vm-backup.md)
- [📚 Checklist Restore](./restore-checklist.md)
- [📦 Tutorial 03: Buat Backup](../tutorials/03-create-backup.md)
