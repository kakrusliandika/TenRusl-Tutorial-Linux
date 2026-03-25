# 🧩 Utamakan Header Keamanan

## Ringkasan
Utamakan header keamanan berarti memperlakukan header respons HTTP sebagai lapisan kontrol sisi browser default, bukan sebagai penyempurnaan opsional.

## Apa Arti Konsep Ini
Header seperti `Strict-Transport-Security`, `Content-Security-Policy`, `X-Content-Type-Options`, dan `Referrer-Policy` mengubah cara browser memercayai dan merender konten Anda.

## Mengapa Itu Penting
Banyak serangan sisi browser mengeksploitasi default yang permisif. Header dapat mempersempit default tersebut dengan cepat dan terukur, terutama ketika perbaikan aplikasi memerlukan waktu lebih lama.

## Konteks Ancaman / Paparan
Header yang lemah atau tidak ada membuat situs terkena kesalahan konten campuran, kebingungan MIME, kebocoran perujuk yang berlebihan, dan resistensi clickjacking yang lebih lemah. Header yang terlalu ketat juga dapat merusak halaman sebenarnya jika diluncurkan secara sembarangan.

## Prinsip Desain
- Audit respon langsung, tidak hanya file konfigurasi.
- Mulailah dengan header berisiko rendah yang lebih sederhana sebelum menerapkan CSP yang lebih ketat.
- Perlakukan CSP sebagai proyek perubahan aplikasi, bukan hanya pengaturan proxy.
- Jaga agar header akhir tetap singkat, disengaja, dan dapat ditinjau.

## Trade-off Operasional
- CSP yang kuat meningkatkan keamanan tetapi sering kali memerlukan pembersihan front-end.
- Perubahan header cepat diterapkan tetapi mudah dilupakan jika tidak didokumentasikan.
- Aplikasi berbeda di balik edge yang sama mungkin memerlukan kebijakan berbeda.

## Kesalahan Umum
- Menyalin kumpulan header situs lain tanpa memvalidasi perilaku aplikasi.
- Mengaktifkan HSTS sebelum HTTPS stabil di mana pun yang penting.
- Mengabaikan perbedaan API atau subdomain saat menerapkan satu kebijakan menyeluruh.

## Dokumen Terkait
- [🧩 Konfigurasikan CSP](../how-to/configure-csp.md)
- [🔍 Tinjau Header Keamanan](../how-to/review-security-headers.md)
- [📋 Matriks Header](../reference/header-matrix.md)
- [🧩 04 Header Keamanan](../tutorials/04-security-headers.md)
