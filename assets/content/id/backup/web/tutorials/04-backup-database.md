# 🗄️ Tutorial 04: Backup Database

## Tujuan
Membuat dump database yang cocok dengan generasi backup file yang sama.

## Prasyarat
- Akses shell ke host aplikasi atau target restore.
- Mengetahui root aplikasi, jalur upload, dan engine database.
- Lingkungan staging atau lab yang aman untuk validasi restore.

## Asumsi Lingkungan
- Generasi arsip file sudah ada.
- Engine database dan kredensialnya diketahui.

## Langkah Berurutan
### 1. Buat artefak dump
Gunakan perintah dump sesuai engine dan simpan hasilnya dalam direktori generasi yang sama.

```bash
BACKUP_DIR=$(find /srv/backup/web/example.com -maxdepth 1 -mindepth 1 -type d | sort | tail -n1)
mysqldump --single-transaction app_db | gzip > "$BACKUP_DIR/app_db.sql.gz"
pg_dump -Fc app_db > "$BACKUP_DIR/app_db.dump" 2>/dev/null || true
```

### 2. Perbarui checksum dan catatan
Target restore harus langsung tahu format dump dan engine yang dipakai.

```bash
cd "$BACKUP_DIR"
sha256sum app_db.sql.gz app_db.dump 2>/dev/null | sed '/^$/d' >> SHA256SUMS
printf '%s\n' 'database=app_db' 'engine=mysql-or-postgresql' > database-notes.txt
```

## ✅ Titik Validasi
- Artefak dump dan checksum berada pada direktori generasi yang sama dengan arsip file.

## ⚠️ Peringatan
- Jangan memisahkan arsip file dan dump database ke bucket retensi yang berbeda.

## Pembersihan / Pemeriksaan Akhir
- Gunakan path generasi yang sama untuk tutorial restore.

## Tutorial Berikutnya
[↩️ Tutorial 05: Restore Stack](./05-restore-stack.md)
