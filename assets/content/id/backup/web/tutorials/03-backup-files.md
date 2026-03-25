# 📁 Tutorial 03: Backup File

## Tujuan
Membuat arsip file web dengan inclusion dan exclusion yang disengaja.

## Prasyarat
- Akses shell ke host aplikasi atau target restore.
- Mengetahui root aplikasi, jalur upload, dan engine database.
- Lingkungan staging atau lab yang aman untuk validasi restore.

## Asumsi Lingkungan
- Komponen aplikasi dan exclusion sudah diidentifikasi.

## Langkah Berurutan
### 1. Buat generasi dan arsip file
Gunakan satu direktori bertanggal yang nanti akan menerima dump database pasangannya.

```bash
APP=example.com
STAMP=$(date +%F-%H%M)
BACKUP_DIR=/srv/backup/web/$APP/$STAMP
mkdir -p "$BACKUP_DIR"
sudo tar --xattrs --acls --numeric-owner -czf "$BACKUP_DIR/web-root.tar.gz" \
  /var/www/example.com \
  /etc/nginx/sites-available/example.com.conf \
  --exclude=/var/www/example.com/storage/framework/cache
```

### 2. Periksa dan checksum arsip
Listing isi dan checksum mempercepat drill restore berikutnya.

```bash
cd "$BACKUP_DIR"
sha256sum web-root.tar.gz > SHA256SUMS
tar -tzf web-root.tar.gz | head -n 100 > web-root.contents.txt
```

## ✅ Titik Validasi
- Arsip ada dan content listing mengonfirmasi path penting memang ikut.

## ⚠️ Peringatan
- Jangan pindah ke retensi atau offsite sampai dump database pasangannya ada.

## Pembersihan / Pemeriksaan Akhir
- Pertahankan stamp generasi untuk langkah berikutnya.

## Tutorial Berikutnya
[🗄️ Tutorial 04: Backup Database](./04-backup-database.md)
