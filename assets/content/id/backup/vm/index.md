# 💾 Backup VM

## Ringkasan
Modul ini membahas backup mesin virtual sebagai alur recovery penuh: menangkap definisi guest, melindungi data disk, memindahkan salinan ke domain kegagalan yang berbeda, lalu membuktikan bahwa guest hasil restore benar-benar bisa boot dan menjalankan workload-nya. Contoh memakai libvirt dan KVM agar perintah shell tetap realistis, tetapi prinsip recovery-nya berlaku lebih luas.

## Siapa yang Cocok Menggunakan Bagian Ini
- Operator yang membackup guest Linux di KVM, libvirt, atau platform sejenis.
- Tim yang harus membedakan snapshot jangka pendek dari artefak backup yang benar-benar tahan lama.
- Admin yang ingin validasi restore di jaringan terisolasi sebelum menyentuh produksi.

## Prasyarat
- Akses shell atau konsol ke host hypervisor.
- Penyimpanan backup yang berbeda dari datastore atau host sumber.
- Target lab, VLAN terisolasi, atau lingkungan rehearsal restore.

## Jalur Belajar
1. Baca [Snapshot vs Backup](./concepts/snapshot-vs-backup.md) terlebih dahulu agar rollback point dan generasi backup tidak tercampur.
2. Baca [Perencanaan Restore](./concepts/restore-planning.md) sebelum otomatisasi karena kebutuhan target restore menentukan layout backup.
3. Gunakan [Buat Backup VM](./how-to/create-vm-backup.md) untuk membangun backup manual yang sudah di-checksum.
4. Gunakan [Jadwalkan Backup VM](./how-to/schedule-vm-backups.md) hanya setelah backup manual dan rehearsal restore sama-sama berhasil.
5. Tuntaskan rangkaian tutorial untuk rehearsal persiapan storage, ekspor, salinan offsite, restore, dan validasi secara berurutan.

## Yang Perlu Dibaca Lebih Dulu
- [🧠 Snapshot vs Backup](./concepts/snapshot-vs-backup.md)
- [🛠️ Buat Backup VM](./how-to/create-vm-backup.md)
- [🧭 Tutorial 01: Pendahuluan](./tutorials/01-introduction.md)

## Peta Bagian
### Konsep
- [🧠 Snapshot vs Backup](./concepts/snapshot-vs-backup.md)
- [🧠 Perencanaan Restore](./concepts/restore-planning.md)
- [🧠 Strategi Salinan Offsite](./concepts/offsite-copy-strategy.md)

### How-To
- [🛠️ Buat Backup VM](./how-to/create-vm-backup.md)
- [🛠️ Restore Backup VM](./how-to/restore-vm-backup.md)
- [🛠️ Jadwalkan Backup VM](./how-to/schedule-vm-backups.md)
- [🛠️ Verifikasi Restore VM](./how-to/verify-vm-restore.md)

### Referensi
- [📚 Tata Letak Backup](./reference/backup-layout.md)
- [📚 Checklist Restore](./reference/restore-checklist.md)
- [📚 Kebijakan Retensi](./reference/retention-policy.md)

### Tutorial
- [🧭 Tutorial 01: Pendahuluan](./tutorials/01-introduction.md)
- [💽 Tutorial 02: Siapkan Storage](./tutorials/02-prepare-storage.md)
- [📦 Tutorial 03: Buat Backup](./tutorials/03-create-backup.md)
- [☁️ Tutorial 04: Salin Offsite](./tutorials/04-copy-offsite.md)
- [↩️ Tutorial 05: Restore VM](./tutorials/05-restore-vm.md)
- [✅ Tutorial 06: Verifikasi Restore](./tutorials/06-verify-restore.md)

## Bagian Terkait
- [☁️ Virtualization](../../virtualization/index.md)
- [🖥️ Server](../../server/index.md)
- [🛡️ Security](../../security/index.md)
