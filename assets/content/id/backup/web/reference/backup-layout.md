# 📚 Tata Letak Backup

## Tujuan
Gunakan tata letak backup aplikasi web yang menjaga arsip file, dump database, checksum, dan catatan restore tetap sejajar di bawah satu stamp generasi.

## Referensi Terstruktur
| Item | Contoh File | Alasan |
| --- | --- | --- |
| Arsip web root | `web-root.tar.gz` | Mengembalikan code, upload, dan file aplikasi yang dipilih. |
| Dump database | `app_db.sql.gz` atau `app_db.dump` | Mengembalikan record mutable untuk generasi yang sama. |
| Checksum | `SHA256SUMS` | Memvalidasi integritas sebelum restore. |
| Catatan DB | `database-notes.txt` | Merekam engine, nama DB, atau asumsi dump. |
| Listing file | `web-root.contents.txt` | Memudahkan review scope saat drill restore. |
| Referensi runbook aman | catatan eksternal atau terenkripsi | Menjelaskan env file, kunci TLS, dan kredensial yang tidak disimpan di arsip. |

## Catatan Interpretasi Praktis
- Gunakan satu direktori generasi agar file dan dump database tidak terpisah secara tidak sengaja.
- Jika secret tidak disimpan bersama backup, runbook harus menjelaskan dengan tepat bagaimana menerapkannya kembali.
- Tegaskan path upload/media jika letaknya di luar document root utama.

## Cuplikan Pemeriksaan
```bash
BACKUP_DIR=/srv/backup/web/example.com/2026-03-25-0200
find "$BACKUP_DIR" -maxdepth 1 -type f -printf '%f\n' | sort
sha256sum -c "$BACKUP_DIR/SHA256SUMS"
```

## Dokumen Terkait
- [🛠️ Backup Web Root](../how-to/backup-web-root.md)
- [🛠️ Backup Database](../how-to/backup-database.md)
- [📁 Tutorial 03: Backup File](../tutorials/03-backup-files.md)
