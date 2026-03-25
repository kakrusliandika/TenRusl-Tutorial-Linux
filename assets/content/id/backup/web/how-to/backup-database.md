# 🛠️ Backup Database

## Tujuan
Membuat dump database yang portabel dan ter-checksum, serta memakai stamp generasi yang sama dengan arsip file.

## Kasus Penggunaan
Gunakan ini ketika aplikasi web menyimpan state mutable di MySQL, MariaDB, atau PostgreSQL dan dump-nya harus bisa direstore ke host lain.

## Prasyarat
- Anda mengetahui engine database, nama database, dan kredensial yang dapat melakukan logical dump.
- Stamp generasi backup file sudah ditentukan agar kedua bagian aplikasi tetap sejajar.
- Anda bisa mengurangi aktivitas write sementara atau menempatkan aplikasi ke maintenance mode bila perlu.

## Asumsi Lingkungan
- Direktori generasi contoh adalah `/srv/backup/web/example.com/$STAMP`.
- Workflow menyimpan satu file dump per generasi.
- Sesuaikan penanganan kredensial dengan lingkungan Anda dan hindari hard-code secret di script reusable.

## Langkah Tepat
### 1. Dump MySQL atau MariaDB dengan aman
Gunakan logical dump yang ramah transaksi bila didukung.

```bash
APP=example.com
STAMP=$(date +%F-%H%M)
BACKUP_DIR=/srv/backup/web/$APP/$STAMP
mysqldump --single-transaction --routines --triggers app_db | gzip > "$BACKUP_DIR/app_db.sql.gz"
```

### 2. Dump PostgreSQL bila relevan
Dump custom-format sering paling fleksibel untuk restore parsial atau selektif.

```bash
pg_dump -Fc app_db > "$BACKUP_DIR/app_db.dump"
```

### 3. Tulis checksum dan metadata singkat
Sisi restore harus langsung tahu engine dan artefak dump apa yang digunakan.

```bash
cd "$BACKUP_DIR"
sha256sum app_db.sql.gz app_db.dump 2>/dev/null | sed '/^$/d' >> SHA256SUMS
printf '%s\n' 'engine=mysql-or-postgresql' 'database=app_db' > database-notes.txt
```

## ✅ Titik Validasi
- Artefak dump ada pada direktori generasi yang sama dengan arsip file.
- Checksum mencakup artefak dump dan operator dapat menyebutkan engine database yang dipakai.
- Timestamp dump cukup dekat dengan generasi backup file untuk digunakan saat restore.

## Pemecahan Masalah
- Jika ukuran dump terlalu kecil, pastikan database dan kredensial yang dipakai memang benar.
- Jika aplikasi sangat aktif menulis, tambahkan maintenance mode atau kontrol konsistensi lain selama jendela dump.
- Jika host memiliki perintah MySQL dan PostgreSQL sekaligus, beri label engine yang dipilih dengan eksplisit.

## ↩️ Catatan Rollback atau Pemulihan
- Pertahankan generasi pasangan sebelumnya sampai dump baru dan arsip file sama-sama tervalidasi.
- Jangan memisahkan dump database dari arsip file dalam logika retensi atau offsite.

## Dokumen Terkait
- [🧠 Strategi Dump Database](../concepts/database-dump-strategy.md)
- [📚 Checklist Restore](../reference/restore-checklist.md)
- [🗄️ Tutorial 04: Backup Database](../tutorials/04-backup-database.md)
