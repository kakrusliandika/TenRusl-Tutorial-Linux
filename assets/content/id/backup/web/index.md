# 💾 Backup Aplikasi Web

## Ringkasan
Modul ini membahas backup dan restore aplikasi web yang menggabungkan kode, upload mutable, state database, file environment, materi TLS, dan konfigurasi service. Fokus utamanya adalah konsistensi aplikasi dan validasi pasca-restore, bukan sekadar arsip file.

## Siapa yang Cocok Menggunakan Bagian Ini
- Operator yang bertanggung jawab atas aplikasi web PHP, Python, Node, CMS, atau stack sejenis di Linux.
- Admin yang membutuhkan generasi file-plus-database yang berpasangan dan disiplin test restore.
- Tim yang harus membuktikan aplikasi benar-benar berfungsi setelah restore, bukan hanya file berhasil diekstrak.

## Prasyarat
- Akses shell ke host aplikasi atau target restore.
- Mengetahui root aplikasi, jalur upload, dan engine database.
- Lingkungan staging atau lab yang aman untuk validasi restore.

## Jalur Belajar
1. Baca [Konsistensi Aplikasi](./concepts/application-consistency.md) terlebih dahulu agar Anda tahu bagian mana yang wajib dibackup bersama.
2. Baca [Strategi Dump Database](./concepts/database-dump-strategy.md) sebelum memilih format dump, kompresi, atau timing dump.
3. Gunakan [Backup Web Root](./how-to/backup-web-root.md) dan [Backup Database](./how-to/backup-database.md) untuk membangun generasi yang saling cocok.
4. Gunakan [Uji Restore Web](./how-to/test-web-restore.md) sebelum menyatakan workflow backup siap untuk produksi.
5. Ikuti tutorial dari inventarisasi aplikasi sampai backup, restore, dan validasi end-user.

## Yang Perlu Dibaca Lebih Dulu
- [🧠 Konsistensi Aplikasi](./concepts/application-consistency.md)
- [🛠️ Backup Web Root](./how-to/backup-web-root.md)
- [🧭 Tutorial 01: Pendahuluan](./tutorials/01-introduction.md)

## Peta Bagian
### Konsep
- [🧠 Konsistensi Aplikasi](./concepts/application-consistency.md)
- [🧠 Strategi Dump Database](./concepts/database-dump-strategy.md)
- [🧠 Rehearsal Restore](./concepts/restore-rehearsal.md)

### How-To
- [🛠️ Backup Web Root](./how-to/backup-web-root.md)
- [🛠️ Backup Database](./how-to/backup-database.md)
- [🛠️ Restore Aplikasi Web](./how-to/restore-web-app.md)
- [🛠️ Uji Restore Web](./how-to/test-web-restore.md)

### Referensi
- [📚 Tata Letak Backup](./reference/backup-layout.md)
- [📚 Checklist Restore](./reference/restore-checklist.md)
- [📚 Kebijakan Retensi](./reference/retention-policy.md)

### Tutorial
- [🧭 Tutorial 01: Pendahuluan](./tutorials/01-introduction.md)
- [🧩 Tutorial 02: Identifikasi Komponen Aplikasi](./tutorials/02-identify-app-parts.md)
- [📁 Tutorial 03: Backup File](./tutorials/03-backup-files.md)
- [🗄️ Tutorial 04: Backup Database](./tutorials/04-backup-database.md)
- [↩️ Tutorial 05: Restore Stack](./tutorials/05-restore-stack.md)
- [✅ Tutorial 06: Verifikasi Aplikasi](./tutorials/06-verify-application.md)

## Bagian Terkait
- [🖥️ Server](../../server/index.md)
- [🛡️ Security](../../security/index.md)
- [💾 Backup](../index.md)
