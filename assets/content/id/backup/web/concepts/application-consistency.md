# 🧠 Konsistensi Aplikasi

## Ringkasan
Backup aplikasi web hanya berguna jika file, state database, konfigurasi environment, dan asumsi runtime berasal dari generasi recovery yang sama dan dapat dijalankan kembali bersama.

## Apa Arti Konsep Ini
Konsistensi aplikasi berarti web root, jalur upload, dump database, dan referensi config atau secret penting cukup sinkron sehingga aplikasi bisa start dan melayani trafik dengan benar setelah restore.

## Mengapa Ini Penting secara Operasional
- Arsip file yang diambil di waktu berbeda dari dump database dapat memunculkan korupsi halus yang baru terlihat setelah restore.
- Upload, generated asset, cache, dan path tmp runtime tidak otomatis berada pada tier backup yang sama.
- Banyak aplikasi web gagal setelah restore karena satu file `.env`, storage path, atau aturan ownership terlewat dari scope.

## Cara Pandang Restore-First
Cara pandang restore-first menanyakan apakah aplikasi bisa boot, autentikasi, membaca database, dan menyajikan konten setelah drill restore. Jika tidak, “backup” itu hanyalah arsip parsial.

## Implikasi Retensi, Offsite, dan Konsistensi
- Retensi sebaiknya menjaga file archive dan dump database yang berpasangan di bawah satu timestamp.
- Salinan offsite harus mempertahankan kedua sisi state aplikasi, bukan hanya arsip web root.
- Catatan konsistensi perlu menjelaskan apakah service di-quiesce atau backup hanya crash-consistent.

## Kesalahan Umum
- Membackup kode tetapi melupakan upload atau storage directory.
- Mendump database beberapa jam terpisah dari arsip file tetapi tetap menganggapnya satu generasi.
- Memasukkan cache disposable sambil mengabaikan secret reference, vhost config, atau material TLS.

## Dokumen Terkait
- [🧠 Strategi Dump Database](./database-dump-strategy.md)
- [🛠️ Backup Web Root](../how-to/backup-web-root.md)
- [📚 Tata Letak Backup](../reference/backup-layout.md)
