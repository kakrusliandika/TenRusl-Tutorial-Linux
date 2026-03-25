# 🌐 Proksi Terbalik

## Ringkasan
Modul proksi terbalik mencakup pintu depan layanan Linux yang terhubung ke web: kepemilikan pendengar, aliran HTTP-ke-HTTPS, status sertifikat, validasi konfigurasi, dan verifikasi kesehatan upstream berbasis shell. Bagian ini dimulai dengan Caddy karena menawarkan alur kerja bersih yang mengutamakan TLS, tetapi kebiasaan operasional berlaku untuk layanan edge apa pun yang serius.

## Untuk Siapa Bagian Ini
- Operator mengekspos aplikasi atau situs web melalui HTTP dan HTTPS.
- Admin yang menginginkan batasan layanan front-end yang lebih jelas sebelum menambahkan kompleksitas aplikasi.
- Pelajar yang ingin memvalidasi layanan edge dari shell, tidak hanya dari browser.

## Prasyarat
- Host Linux dengan kontrol DNS untuk setidaknya satu nama host pengujian.
- Akses SSH dan hak istimewa sudo.
- Pemahaman dasar tentang port 80 dan 443, sertifikat, dan layanan backend.

## Jalur Pembelajaran
1. Mulailah dengan [🌐 Caddy](./caddy/index.md).
2. Baca halaman konsep sebelum mengaktifkan TLS atau mem-proxy aplikasi langsung.
3. Gunakan halaman petunjuk untuk orientasi situs, HTTPS, pencadangan, dan pemulihan.
4. Pasangkan modul dengan [🛡️ Keamanan](../../security/index.md) dan [💾 Cadangan](../../backup/index.md).

## Yang Harus Dibaca Terlebih Dahulu
- [🌐 Caddy](./caddy/index.md)

## Peta Bagian
- [🌐 Caddy](./caddy/index.md)

## Bagian Terkait
- [☁️ Virtualisasi](../../virtualization/index.md)
- [💻 Stasiun Kerja](../../workstation/index.md)
- [🛡️ Keamanan](../../security/index.md)
- [💾 Cadangan](../../backup/index.md)
