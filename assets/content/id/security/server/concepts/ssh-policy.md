# 🔐 Kebijakan SSH

## Ringkasan
Kebijakan SSH menentukan siapa yang boleh masuk, dari mana, dengan metode apa, dan cara kerja pemulihan jika perubahan kebijakan gagal.

## Apa Arti Konsep Ini
Kebijakan SSH sebenarnya lebih dari satu perubahan `sshd_config`. Ini mencakup akun admin bernama, penanganan kunci, postur login root, pembatasan sumber, logging, dan jalur rollback.

## Mengapa Itu Penting
SSH sering kali menjadi pintu admin utama di server Linux. Kebijakan SSH yang lemah mengubah setiap penguatan lainnya menjadi batas yang lebih lemah.

## Konteks Ancaman / Paparan
Kebijakan yang lemah membuat host terkena gangguan brute-force, kunci yang sudah usang, akses root yang terlalu luas, dan akuntabilitas yang buruk. Kebijakan yang terlalu ketat tanpa perencanaan pemulihan juga dapat menghalangi operator.

## Prinsip Desain
- Lebih memilih akun bernama ditambah otentikasi berbasis kunci.
- Perlakukan login root, sudo, dan distribusi kunci sebagai keputusan terpisah.
- Validasi dari sesi kedua sebelum menutup sesi asli.
- Jaga agar log SSH terbaru mudah ditinjau.

## Trade-off Operasional
- Pembatasan sumber meningkatkan keamanan tetapi dapat mempersulit akses admin roaming.
- Benteng meningkatkan ketertelusuran tetapi menambah ketergantungan ekstra.
- Batas waktu sesi yang singkat meningkatkan keselamatan namun dapat menggagalkan alur kerja operasional.

## Kesalahan Umum
- Menonaktifkan kata sandi sebelum mengonfirmasi setiap kunci admin yang diperlukan berfungsi.
- Mengizinkan akun admin bersama.
- Mengabaikan kunci lama dan pengguna lama setelah perubahan peran.

## Dokumen Terkait
- [🧠 Dasar Pengerasan](./hardening-baseline.md)
- [📋 Checklist SSH](../reference/ssh-checklist.md)
- [🔐 Nonaktifkan Login Kata Sandi](../how-to/disable-password-login.md)
- [🔐 03 Pengguna dan SSH](../tutorials/03-users-and-ssh.md)
