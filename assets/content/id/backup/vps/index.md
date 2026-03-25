# 💾 Backup VPS

## Ringkasan
Modul ini membahas backup Linux VPS sebagai recovery host dan layanan: file, `/etc`, inventaris paket, catatan service, retensi, copy offsite, dan test restore ke host pengganti yang bersih. Fokus utamanya adalah recoverability, bukan sekadar pembuatan arsip.

## Siapa yang Cocok Menggunakan Bagian Ini
- Operator yang bertanggung jawab atas satu VPS Linux atau sekelompok kecil workload VPS.
- Admin yang perlu memulihkan konfigurasi, data, dan state layanan ke host baru.
- Tim yang membutuhkan salinan lokal dan offsite dengan verifikasi praktis dari shell.

## Prasyarat
- Akses root atau sudo ke VPS.
- Penyimpanan backup yang terpisah dari disk workload.
- Target VPS bersih atau rehearsal target untuk uji restore.

## Jalur Belajar
1. Baca [Strategi Backup untuk Linux VPS](./concepts/backup-strategy.md) agar scope backup jelas sebelum menulis perintah.
2. Baca [Pola Pikir Restore-First](./concepts/restore-first-thinking.md) sebelum menentukan retensi atau jadwal.
3. Bangun backup manual dengan [Buat Backup VPS](./how-to/create-backup.md).
4. Verifikasi backup itu dengan [Verifikasi Backup](./how-to/verify-backups.md) sebelum pruning atau otomatisasi offsite.
5. Gunakan rangkaian tutorial untuk rehearsal persiapan tool, pembuatan arsip, upload offsite, rebuild, dan validasi.

## Yang Perlu Dibaca Lebih Dulu
- [🧠 Strategi Backup untuk Linux VPS](./concepts/backup-strategy.md)
- [🛠️ Buat Backup VPS](./how-to/create-backup.md)
- [🧭 Tutorial 01: Pendahuluan](./tutorials/01-introduction.md)

## Peta Bagian
### Konsep
- [🧠 Strategi Backup untuk Linux VPS](./concepts/backup-strategy.md)
- [🧠 Pola Pikir Restore-First](./concepts/restore-first-thinking.md)
- [🧠 Strategi Retensi](./concepts/retention-strategy.md)

### How-To
- [🛠️ Buat Backup VPS](./how-to/create-backup.md)
- [🛠️ Restore dari Backup](./how-to/restore-from-backup.md)
- [🛠️ Jadwalkan Backup](./how-to/schedule-backups.md)
- [🛠️ Verifikasi Backup](./how-to/verify-backups.md)

### Referensi
- [📚 Tata Letak Backup](./reference/backup-layout.md)
- [📚 Checklist Restore](./reference/restore-checklist.md)
- [📚 Kebijakan Retensi](./reference/retention-policy.md)

### Tutorial
- [🧭 Tutorial 01: Pendahuluan](./tutorials/01-introduction.md)
- [🧰 Tutorial 02: Siapkan Tool](./tutorials/02-prepare-tools.md)
- [📦 Tutorial 03: Buat Backup Penuh](./tutorials/03-create-full-backup.md)
- [☁️ Tutorial 04: Upload Offsite](./tutorials/04-upload-offsite.md)
- [↩️ Tutorial 05: Restore ke VPS Baru](./tutorials/05-restore-on-new-vps.md)
- [✅ Tutorial 06: Verifikasi Restore](./tutorials/06-verify-restore.md)

## Bagian Terkait
- [🖥️ Server](../../server/index.md)
- [🛡️ Security](../../security/index.md)
- [💾 Backup](../index.md)
