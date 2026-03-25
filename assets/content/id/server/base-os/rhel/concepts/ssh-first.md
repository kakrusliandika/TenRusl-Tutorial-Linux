# 🔐 SSH Pertama

## Ringkasan
SSH adalah bidang kendali operasional untuk server Linux. Jika SSH tidak jelas, belum teruji, atau terekspos terlalu luas, setiap tugas admin selanjutnya menjadi rapuh.

## Apa Arti Konsepnya
Administrasi yang mengutamakan SSH berarti memperlakukan akses jarak jauh sebagai masalah dasar awal: menginstal layanan, mengonfirmasi pendengar, membuat akun admin bernama, menguji akses berbasis kunci, dan baru kemudian memperketat kebijakan.

## Mengapa Penting Di Server Linux
- Ini adalah jalur utama untuk otomatisasi, dukungan, dan respons insiden.
- Ini memaksa Anda untuk memvalidasi nama host, firewall, DNS, dan status pengguna lebih awal.
- Ini mengurangi kemungkinan perubahan di kemudian hari mengunci Anda dari host.

## Prinsip Desain
- Tetap sediakan akses konsol atau penyelamatan hingga SSH terbukti.
- Validasi layanan, pendengar, dan firewall bersama-sama.
- Lebih memilih akun admin bernama plus sudo daripada login root permanen.
- Catat IP atau jaringan mana yang harus mencapai SSH dalam operasi normal.

## Pengorbanan Operasional
- Jangkauan SSH yang luas memang nyaman tetapi meningkatkan eksposur.
- Penguncian dini sangat berharga, tetapi hanya setelah Anda memiliki jalur mundur yang teruji.
- Pengerasan yang agresif tanpa validasi sering kali menyebabkan pemadaman listrik yang diakibatkan oleh diri sendiri.

## Kesalahan Umum
- Mengubah konfigurasi firewall atau SSH dari satu sesi tanpa fallback.
- Menegakkan akses hanya kunci sebelum kunci resmi dibuktikan.
- Membiarkan login root diaktifkan karena kebiasaan.
- Mengabaikan perubahan kunci host setelah membangun kembali atau memulihkan.

## Dokumen Terkait
- [📦 Dasar Server keluarga RHEL](./rhel-baseline.md)
- [🔐 Instal OpenSSH](../how-to/install-openssh.md)
- [🛡️ Konfigurasikan Firewall](../how-to/configure-firewall.md)
- [🔐 Tutorial 05: Pengguna dan SSH](../tutorials/05-users-and-ssh.md)
