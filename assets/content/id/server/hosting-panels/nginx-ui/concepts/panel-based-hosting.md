# 🧠 Hosting Berbasis Panel

## Ringkasan
Hosting berbasis panel adalah alur kerja di mana tugas situs web, TLS, database, dan runtime dimulai dari bidang kontrol tetapi masih bergantung pada layanan Linux yang harus Anda audit dan pulihkan dari shell.

## Apa Arti Konsepnya
Dalam model Nginx UI, panel mengoordinasikan konfigurasi server web, akar situs, pengikatan runtime, dan tugas administratif. Operator masih memiliki patching host, kebijakan firewall, tinjauan layanan, cakupan pencadangan, dan respons insiden.

## Mengapa Penting Di Server Linux
- Ini mengubah cara situs dimasukkan dan dimodifikasi.
- Hal ini dapat mengaburkan batasan antara maksud bidang kontrol dan status host sebenarnya.
- Membutuhkan disiplin sehingga kenyamanan panel tidak menghapus visibilitas tingkat Linux.

## Prinsip Desain
- Pisahkan tugas dasar host dari tugas situs yang dikelola panel.
- Simpan inventaris situs, inventaris basis data, dan inventaris cadangan dalam catatan yang sama.
- Verifikasi perubahan panel dengan pendengar, log, dan pemeriksaan HTTP.
- Batasi paparan publik pada permukaan admin panel.

## Pengorbanan Operasional
- Orientasi yang lebih cepat dapat mengurangi kerja keras namun meningkatkan penyimpangan diam jika tuan rumah tidak ditinjau.
- Fleksibilitas hosting bersama dapat menciptakan lebih banyak runtime dan konfigurasi sprawl dibandingkan host aplikasi tujuan tunggal.
- Pemulihan lebih sulit jika status yang dihasilkan panel tidak dicadangkan dengan konfigurasi Linux di sekitarnya.

## Kesalahan Umum
- Mengekspos panel secara luas ke internet.
- Melupakan bahwa situs yang dikelola panel masih mengandalkan layanan web, runtime, dan database di bawah UI.
- Mencadangkan konten situs tetapi bukan konfigurasi yang membuat situs dapat dirutekan.
- Memperlakukan pembuatan database secara lengkap tanpa menguji jalur koneksi runtime yang sebenarnya.

## Dokumen Terkait
- [🧠 Ikhtisar Nginx UI](./nginx-ui-overview.md)
- [💾 Konfigurasi Panel Cadangan](../how-to/backup-config.md)
- [📋 Matriks Port](../reference/port-matrix.md)
