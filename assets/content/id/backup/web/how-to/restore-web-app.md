# 🛠️ Restore Aplikasi Web

## Tujuan
Merestore arsip file dan dump database pasangan ke host bersih atau target staging, lalu mengaktifkan stack aplikasi kembali dengan urutan yang terkendali.

## Kasus Penggunaan
Gunakan ini saat rehearsal restore terencana atau insiden nyata ketika stack aplikasi harus dibangun ulang dari artefak backup.

## Prasyarat
- Anda memiliki arsip file, dump database, dan referensi config atau secret yang dibutuhkan aplikasi.
- Target restore terisolasi dari trafik produksi.
- Anda mengetahui service mana yang sebaiknya dinyalakan lebih dulu di target.

## Asumsi Lingkungan
- Contoh target memakai Nginx dan salah satu dari MySQL/MariaDB atau PostgreSQL.
- File aplikasi direstore sebelum impor database agar path dan ownership siap.
- Trafik tetap diblok sampai validasi HTTP dan aplikasi sama-sama lolos.

## Langkah Tepat
### 1. Verifikasi artefak sebelum restore
Restore tidak boleh dimulai dari generasi yang belum diperiksa.

```bash
BACKUP_DIR=/srv/backup/web/example.com/2026-03-25-0200
cd "$BACKUP_DIR"
sha256sum -c SHA256SUMS
ls -lh
```

### 2. Restore file dan ownership
Bangun kembali tree aplikasi dan ownership yang diperlukan terlebih dahulu.

```bash
sudo tar --xattrs --acls --numeric-owner -xzf web-root.tar.gz -C /
sudo chown -R www-data:www-data /var/www/example.com 2>/dev/null || true
```

### 3. Impor database dan restart service
Hidupkan data tier lebih dulu, lalu web tier.

```bash
gunzip -c app_db.sql.gz | mysql app_db 2>/dev/null || true
pg_restore -d app_db app_db.dump 2>/dev/null || true
sudo systemctl restart mariadb mysql postgresql 2>/dev/null || true
sudo systemctl restart nginx apache2 httpd php*-fpm 2>/dev/null || true
```

## ✅ Titik Validasi
- File, ownership, dan restore database selesai tanpa error yang jelas.
- Service restart dan stack mencapai keadaan yang bisa diuji di target terisolasi.
- Operator mengetahui secret atau env file apa yang masih perlu diterapkan dengan aman.

## Pemecahan Masalah
- Jika aplikasi gagal setelah restart, tinjau env file, permission, dan konektivitas database sebelum menyalahkan arsip.
- Jika impor gagal, pastikan engine, nama database, dan apakah schema target harus dibersihkan lebih dulu.
- Jika upload file hilang, verifikasi apakah path itu memang termasuk scope arsip atau tersimpan di volume lain.

## ↩️ Catatan Rollback atau Pemulihan
- Jaga target restore tetap terisolasi sampai aplikasi lolos validasi HTTP dan fungsi.
- Jangan menimpa artefak backup selama troubleshooting; copy ke scratch path bila perlu.

## Dokumen Terkait
- [🧠 Rehearsal Restore](../concepts/restore-rehearsal.md)
- [📚 Checklist Restore](../reference/restore-checklist.md)
- [↩️ Tutorial 05: Restore Stack](../tutorials/05-restore-stack.md)
