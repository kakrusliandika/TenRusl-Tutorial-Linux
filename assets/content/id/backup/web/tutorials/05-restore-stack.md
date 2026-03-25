# ↩️ Tutorial 05: Restore Stack

## Tujuan
Merestore file dan database ke host staging yang bersih dengan urutan yang sama seperti saat insiden nyata.

## Prasyarat
- Akses shell ke host aplikasi atau target restore.
- Mengetahui root aplikasi, jalur upload, dan engine database.
- Lingkungan staging atau lab yang aman untuk validasi restore.

## Asumsi Lingkungan
- Target restore yang bersih tersedia.
- Generasi yang dipilih sudah lolos checksum.

## Langkah Berurutan
### 1. Verifikasi dan restore file
Mulai dari integritas, lalu ekstrak file dan kembalikan ownership.

```bash
BACKUP_DIR=/srv/backup/web/example.com/2026-03-25-0200
cd "$BACKUP_DIR"
sha256sum -c SHA256SUMS
sudo tar --xattrs --acls --numeric-owner -xzf web-root.tar.gz -C /
sudo chown -R www-data:www-data /var/www/example.com 2>/dev/null || true
```

### 2. Impor database dan restart service
Nyalakan data tier terlebih dahulu lalu web tier, sambil menjaga target tetap terisolasi.

```bash
gunzip -c app_db.sql.gz | mysql app_db 2>/dev/null || true
pg_restore -d app_db app_db.dump 2>/dev/null || true
sudo systemctl restart mariadb mysql postgresql 2>/dev/null || true
sudo systemctl restart nginx apache2 httpd php*-fpm 2>/dev/null || true
```

## ✅ Titik Validasi
- Stack berhasil direstore tanpa error ekstraksi atau impor yang jelas.
- Aplikasi mencapai state yang siap diuji pada target staging.

## ⚠️ Peringatan
- Jangan arahkan trafik ke host restore dulu.

## Pembersihan / Pemeriksaan Akhir
- Simpan catatan secret atau env file yang diterapkan ulang secara manual.

## Tutorial Berikutnya
[✅ Tutorial 06: Verifikasi Aplikasi](./06-verify-application.md)
