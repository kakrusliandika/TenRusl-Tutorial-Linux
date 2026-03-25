# 🧠 Baseline Hardening Server

## Ringkasan
Garis dasar pengerasan server adalah kondisi pengoperasian aman minimum yang harus dipenuhi oleh setiap host Linux sebelum dipercaya dengan beban kerja sebenarnya.

## Apa Arti Konsep Ini
Ini menggabungkan identitas host, kebersihan paket, postur SSH, tinjauan layanan terbuka, kebijakan firewall, logging, sinkronisasi waktu, dan kesadaran rollback ke dalam satu standar yang dapat diulang.

## Mengapa Itu Penting
Sebagian besar jalur kompromi host mengeksploitasi dasar-dasar yang hilang: paket basi, akun yang terlupa, pendengar yang tidak perlu, atau log yang hilang. Garis dasar mempersempit kemenangan mudah di awal.

## Konteks Ancaman / Paparan
Tanpa garis dasar, kelemahan-kelemahan kecil akan bertumpuk. SSH yang lemah, sudo yang luas, port terbuka, dan tidak adanya jejak audit menciptakan risiko kompromi yang lebih tinggi dan respons insiden yang lebih buruk.

## Prinsip Desain
- Persediaan dulu, baru dikeraskan.
- Pertahankan lebih sedikit layanan mendengarkan dan lebih sedikit pengecualian permanen.
- Jadikan setiap kontrol utama dapat diuji dari shell.
- Tangkap materi rollback sebelum pengeditan berisiko.

## Trade-off Operasional
- Default yang lebih ketat meningkatkan keamanan tetapi menuntut dokumentasi dan validasi yang lebih baik.
- Pembaruan otomatis mengurangi kelambatan patch tetapi meningkatkan kebutuhan untuk reboot dan pemeriksaan layanan.
- Postur firewall yang kuat hanya berguna jika kepemilikan layanan masih jelas.

## Kesalahan Umum
- Pengerasan sebelum mengumpulkan layanan dan inventaris pengguna.
- Memperlakukan bangunan aman pertama sebagai permanen dan tidak pernah meninjaunya lagi.
- Menerapkan perubahan tanpa sesi kedua dan tanpa cadangan konfigurasi.

## Dokumen Terkait
- [🔐 Kebijakan SSH](./ssh-policy.md)
- [👥 Hak Akses Minimum](./least-privilege.md)
- [🔐 Nonaktifkan Login Kata Sandi](../how-to/disable-password-login.md)
- [📋 02 Audit Baseline](../tutorials/02-baseline-audit.md)
