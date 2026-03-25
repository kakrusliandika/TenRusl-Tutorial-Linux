# 🔒 Pengurangan Permukaan TLS

## Ringkasan
Pengurangan permukaan TLS berarti meminimalkan titik masuk HTTPS yang lemah, membingungkan, atau tidak diperlukan.

## Apa Arti Konsep Ini
Ini mencakup kebersihan sertifikat, tinjauan pendengar, konsistensi pengalihan, inventaris nama host, dan kebiasaan operasional dalam menguji apa yang sebenarnya dihadirkan oleh tepi publik.

## Mengapa Itu Penting
Ketika postur TLS berubah, operator akan mendapatkan nama host yang tidak cocok, pendengar yang terlupakan, domain pengujian yang sudah usang, dan kejutan pembaruan.

## Konteks Ancaman / Paparan
Permukaan TLS yang berlebihan menciptakan risiko masa berlaku sertifikat, pemroses alternatif yang tersembunyi, perilaku pengalihan yang beragam, dan lebih banyak tempat bagi kesalahan untuk tetap bersifat publik.

## Prinsip Desain
- Ketahui domain dan port mana yang bersifat publik, pribadi, atau usang.
- Gunakan satu jalur HTTPS yang jelas dan pengalihan yang disengaja.
- Pertahankan kepemilikan dan pemantauan pembaruan sertifikat secara eksplisit.
- Validasi dengan alat shell setelah setiap pendengar atau perubahan sertifikat.

## Trade-off Operasional
- Postur TLS yang lebih ketat meningkatkan keselamatan tetapi dapat mengecualikan klien lama.
- Mengkonsolidasikan edge mengurangi kebingungan tetapi mungkin memerlukan DNS atau pembersihan aplikasi.
- Perpanjangan otomatis menurunkan risiko kedaluwarsa namun tetap memerlukan pemantauan dan pengujian.

## Kesalahan Umum
- Membiarkan nama host lama atau domain uji dapat dijangkau dengan sertifikat yang sudah habis masa berlakunya.
- Mempercayai file konfigurasi tanpa memeriksa pendengar langsung.
- Lupa bahwa titik akhir admin dan port alternatif juga memperluas permukaan TLS.

## Dokumen Terkait
- [🔒 Aktifkan HSTS](../how-to/enable-hsts.md)
- [📋 Checklist TLS](../reference/tls-checklist.md)
- [🔒 03 TLS Baseline](../tutorials/03-tls-baseline.md)
