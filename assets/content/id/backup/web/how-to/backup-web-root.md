# 🛠️ Backup Web Root

## Tujuan
Membuat backup web root yang menangkap code aplikasi, upload, file konfigurasi penting, dan aset runtime terpilih tanpa mencampurkannya dengan database.

## Kasus Penggunaan
Gunakan ini ketika file aplikasi harus dilindungi terpisah dari dump database, atau ketika Anda sedang membangun generasi file-plus-database yang saling cocok.

## Prasyarat
- Anda mengetahui root aplikasi, jalur upload, dan direktori mana yang aman untuk dikecualikan.
- Anda memiliki ruang cukup untuk satu generasi arsip penuh.
- Anda tahu di mana file konfigurasi service atau vhost berada jika itu bagian dari scope recovery.

## Asumsi Lingkungan
- Contoh app root adalah `/var/www/example.com` dan path staging backup `/srv/backup/web/example.com/$STAMP`.
- Direktori cache disposable dapat dikecualikan jika aman diregenerasi dan terdokumentasi.
- State database dibackup terpisah dan harus memakai stamp generasi yang sama.

## Langkah Tepat
### 1. Buat direktori generasi
Gunakan satu timestamp untuk file dan database backup agar pairing restore tetap jelas.

```bash
APP=example.com
STAMP=$(date +%F-%H%M)
BACKUP_DIR=/srv/backup/web/$APP/$STAMP
mkdir -p "$BACKUP_DIR"
```

### 2. Arsipkan file aplikasi
Tangkap web root, storage, dan config terpilih sambil mengecualikan cache yang dapat dibuang.

```bash
sudo tar --xattrs --acls --numeric-owner -czf "$BACKUP_DIR/web-root.tar.gz" \
  /var/www/example.com \
  /etc/nginx/sites-available/example.com.conf \
  --exclude=/var/www/example.com/storage/framework/cache \
  --exclude=/var/www/example.com/tmp
```

### 3. Buat checksum dan inventaris
Inventaris yang mudah dibaca mempercepat pemeriksaan restore berikutnya.

```bash
cd "$BACKUP_DIR"
sha256sum web-root.tar.gz > SHA256SUMS
tar -tzf web-root.tar.gz | head -n 100 > web-root.contents.txt
```

## ✅ Titik Validasi
- Arsip memuat code dan path upload yang diharapkan, tetapi mengecualikan direktori disposable yang sudah ditentukan.
- Checksum tervalidasi dan content listing memudahkan review scope.

## Pemecahan Masalah
- Jika arsip terlalu besar, pisahkan upload atau media menjadi artefak backup sendiri dengan stamp generasi yang sama.
- Jika ownership salah saat restore nanti, pastikan arsip dibuat dengan preserving numeric owner.
- Jika config hilang, tinjau apakah vhost, PHP-FPM, systemd, atau env file memang masuk ke scope.

## ↩️ Catatan Rollback atau Pemulihan
- Jangan ganti generasi sebelumnya sampai dump database pasangannya selesai dan tervalidasi.
- Jika ada path penting yang terlewat, buat generasi baru, jangan menambal generasi lama diam-diam.

## Dokumen Terkait
- [🧠 Konsistensi Aplikasi](../concepts/application-consistency.md)
- [📚 Tata Letak Backup](../reference/backup-layout.md)
- [📁 Tutorial 03: Backup File](../tutorials/03-backup-files.md)
