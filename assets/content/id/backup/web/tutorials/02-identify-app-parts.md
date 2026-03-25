# 🧩 Tutorial 02: Identifikasi Komponen Aplikasi

## Tujuan
Memisahkan komponen aplikasi yang esensial dari data runtime yang disposable agar scope backup benar-benar disengaja.

## Prasyarat
- Akses shell ke host aplikasi atau target restore.
- Mengetahui root aplikasi, jalur upload, dan engine database.
- Lingkungan staging atau lab yang aman untuk validasi restore.

## Asumsi Lingkungan
- Anda dapat menginspeksi host live dengan aman.

## Langkah Berurutan
### 1. Periksa path file dan storage
Bedakan code, upload, cache, dan log.

```bash
find /var/www/example.com -maxdepth 2 -type d | sort | head -n 50
find /var/www/example.com -maxdepth 2 -type f | egrep '\.env|composer\.json|package\.json' || true
```

### 2. Identifikasi referensi database dan konfigurasi web
Restore membutuhkan nama DB, path vhost, dan override service jika ada.

```bash
grep -R "DB_\|DATABASE_" /var/www/example.com 2>/dev/null | head -n 20 || true
ls -l /etc/nginx/sites-available /etc/apache2/sites-available 2>/dev/null || true
```

## ✅ Titik Validasi
- Anda dapat menjelaskan path mana yang esensial, opsional, atau disposable.
- Anda tahu di mana database dan konfigurasi web server didefinisikan.

## ⚠️ Peringatan
- Jangan memasukkan tree cache yang besar secara default kecuali memang tak tergantikan.

## Pembersihan / Pemeriksaan Akhir
- Perbarui catatan scope sebelum mengambil arsip file pertama.

## Tutorial Berikutnya
[📁 Tutorial 03: Backup File](./03-backup-files.md)
