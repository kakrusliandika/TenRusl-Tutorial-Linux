# 🧠 Perencanaan Restore

## Ringkasan
Perencanaan restore menangkap informasi yang dibutuhkan saat tekanan tinggi: target hypervisor, jalur storage, pemetaan VLAN, definisi guest, dan urutan validasi.

## Apa Arti Konsep Ini
Untuk recovery VM, arsip saja tidak cukup. Anda juga harus tahu di mana guest akan diimpor, bagaimana NIC akan dipasang, benturan nama apa yang harus dihindari, dan bagaimana membuktikan guest hasil restore aman sebelum cutover.

## Mengapa Ini Penting secara Operasional
- Restore VM sering gagal ketika metadata, penempatan storage, dan pemetaan jaringan tidak terdokumentasi.
- Target restore yang terisolasi mencegah benturan hostname dan IP dengan produksi.
- Rencana restore harus mendefinisikan kondisi “baik” sebelum siapa pun menyalakan guest.

## Cara Pandang Restore-First
Cara pandang restore-first mengubah pilihan layout backup. Anda terdorong menyimpan manifest, checksum, catatan konsistensi, dan definisi guest di samping artefak disk karena itulah yang benar-benar dicari operator saat recovery.

## Implikasi Retensi, Offsite, dan Konsistensi
- Retensi hanya berguna jika setiap generasi punya metadata yang cukup untuk merekonstruksi guest secara konsisten.
- Salinan offsite harus menjaga struktur direktori dan checksum yang sama agar drill restore jarak jauh tidak bergantung pada rekonstruksi manual yang tidak terdokumentasi.
- Catatan konsistensi penting agar pemilik aplikasi tahu apakah data di dalam guest langsung bisa dipercaya atau memerlukan pemeriksaan tambahan.

## Kesalahan Umum
- Melakukan restore langsung ke jaringan produksi tanpa rehearsal atau rencana isolasi.
- Melupakan mode firmware, urutan boot, atau asumsi driver guest.
- Menganggap job backup selesai sebelum guest hasil restore mencapai console dan service health.

## Dokumen Terkait
- [🧠 Strategi Salinan Offsite](./offsite-copy-strategy.md)
- [🛠️ Restore Backup VM](../how-to/restore-vm-backup.md)
- [✅ Tutorial 06: Verifikasi Restore](../tutorials/06-verify-restore.md)
