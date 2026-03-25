# 🧠 HTTPS otomatis

## Ringkasan
HTTPS otomatis berarti Caddy dapat meminta, memperbarui, dan memberikan sertifikat ketika DNS, keterjangkauan publik, dan identitas situs semuanya benar.

## Apa Arti Konsepnya
Caddy berada di antara jaringan publik dan satu atau lebih layanan backend. Ia memiliki pendengar, penghentian TLS, perutean permintaan, dan sering kali otomatisasi sertifikat. Operator masih memiliki kebenaran DNS, kesehatan upstream, jangkauan firewall, dan jalur pemulihan.

## Mengapa Penting Di Server Linux
- Ini menciptakan lapisan tepi yang bersih antara lalu lintas publik dan layanan backend.
- Ini mengurangi upacara TLS sekaligus menjaga standar operasional yang kuat tetap tersedia.
- Ini membuat verifikasi perutean dan perilaku sertifikat berbasis shell menjadi mudah.

## Prinsip Desain
- Jaga agar konfigurasi tepi tetap kecil dan mudah dibaca.
- Validasi perubahan dengan `caddy validasi`, `journalctl`, `curl`, dan `openssl`.
- Perlakukan DNS dan keterjangkauan 80 atau 443 sebagai prasyarat, bukan renungan.
- Cadangkan konfigurasi dan status sertifikat sebelum perubahan berisiko.

## Pengorbanan Operasional
- HTTPS otomatis memang nyaman, tetapi hanya jika DNS dan kepemilikan pendengar sudah benar.
- Caddyfile sederhana lebih mudah dipelihara, namun perutean situs yang rumit masih memerlukan dokumentasi.
- Menjalankan edge dan aplikasi pada satu host memang mudah, namun meningkatkan radius ledakan kecuali batasnya tetap jelas.

## Kesalahan Umum
- Menyalahkan TLS sebelum mengonfirmasi DNS dan jangkauan port.
- Membiarkan beberapa server web bersaing untuk mendapatkan 80 atau 443.
- Lupa bahwa status sertifikat adalah data sensitif cadangan.
- Menguji hanya dari browser, bukan dari shell.

## Dokumen Terkait
- [🌐 Tambahkan Situs Baru](../how-to/add-new-site.md)
- [📋 Peta Layanan](../reference/service-map.md)
- [🛡️ Keamanan](../../../../security/index.md)
