# 🧠 Baseline Hardening Web

## Ringkasan
Garis dasar pengerasan web adalah kondisi keamanan tepi publik minimum yang harus dipenuhi oleh setiap situs atau API sebelum disebut siap produksi.

## Apa Arti Konsep Ini
Ini mencakup postur TLS, kebijakan pengalihan, header keamanan, pembatasan jalur admin, pembatasan laju, pencatatan log, perencanaan rollback, dan alur kerja insiden sederhana.

## Mengapa Itu Penting
Layanan web publik terus diperiksa. Garis dasar memberi tim tempat yang dapat diulang untuk memulai, alih-alih mengandalkan apa pun yang ditinggalkan oleh penerapan terakhir.

## Konteks Ancaman / Paparan
Postur tepi yang lemah atau tidak konsisten memperlihatkan nama host yang lama, pengalihan yang lemah, header yang hilang, jalur admin yang berisik, dan bukti yang buruk ketika terjadi kesalahan.

## Prinsip Desain
- Mulailah dengan edge: DNS, pendengar, TLS, pengalihan, dan header.
- Gunakan alat validasi sederhana seperti `curl`, `openssl`, dan tes konfigurasi setelah setiap perubahan.
- Jaga agar kontrol pelindung tetap terukur dan dapat dibalik.
- Pengecualian dokumen, terutama untuk aplikasi lama.

## Trade-off Operasional
- Header dan CSP yang ketat meningkatkan keamanan namun dapat menghentikan perilaku front-end lama hingga aplikasi dibersihkan.
- Batasan tarif yang agresif membantu melawan penyalahgunaan tetapi dapat menghukum pengguna otomatisasi normal atau IP bersama.
- Postur TLS yang sangat ketat mungkin memerlukan keputusan kompatibilitas yang eksplisit.

## Kesalahan Umum
- Dengan asumsi HTTPS saja berarti tepinya mengeras.
- Menyebarkan header tanpa memvalidasi perilaku langsung.
- Memperlakukan log sebagai renungan hingga insiden dimulai.

## Dokumen Terkait
- [🧩 Utamakan Header Keamanan](./security-headers-first.md)
- [🔒 Pengurangan Permukaan TLS](./tls-surface-reduction.md)
- [🔍 Tinjau Header Keamanan](../how-to/review-security-headers.md)
- [🛡️ 01 Pengantar](../tutorials/01-introduction.md)
