# 🧭 Tutorial 01: Pendahuluan

## Tujuan
Menentukan komponen aplikasi mana yang harus pulih bersama agar rencana backup sesuai dengan stack web yang sebenarnya.

## Prasyarat
- Akses shell ke host aplikasi atau target restore.
- Mengetahui root aplikasi, jalur upload, dan engine database.
- Lingkungan staging atau lab yang aman untuk validasi restore.

## Asumsi Lingkungan
- Aplikasi menyimpan file dan state database sekaligus.

## Langkah Berurutan
### 1. Daftar komponen aplikasi
Mulai dengan menuliskan jalur code, upload, referensi secret, konfigurasi service, dan engine database.

```bash
printf '%s\n' \
  '/var/www/example.com' \
  '/var/www/example.com/storage' \
  '/etc/nginx/sites-available/example.com.conf' \
  'database=app_db' \
  > /tmp/web-app-scope.txt
cat /tmp/web-app-scope.txt
```

### 2. Periksa stack yang sedang berjalan
Target restore harus mampu mereproduksi service penting yang sama.

```bash
systemctl list-units --type=service --state=running | egrep 'nginx|apache|httpd|php|mysql|mariadb|postgres' || true
ss -tulpn | egrep '::80|:443|:3306|:5432' || true
```

## ✅ Titik Validasi
- Anda memiliki inventaris tertulis untuk bagian file, database, dan service aplikasi.

## ⚠️ Peringatan
- Jangan perlakukan backup code saja sebagai backup aplikasi web yang utuh.

## Pembersihan / Pemeriksaan Akhir
- Gunakan inventaris ini di tutorial berikutnya untuk mengonfirmasi scope dan exclusion.

## Tutorial Berikutnya
[🧩 Tutorial 02: Identifikasi Komponen Aplikasi](./02-identify-app-parts.md)
