# 🧹 Minimalisasi Layanan

## Ringkasan
Garis dasar server lebih mudah untuk dipertahankan dan dipecahkan ketika hanya layanan yang diperlukan yang diaktifkan dan didengarkan.

## Apa Arti Konsepnya
Minimisasi layanan adalah praktik meninjau unit yang diaktifkan, unit yang gagal, pendengar terbuka, dan penyebaran paket sehingga host hanya memperlihatkan komponen yang benar-benar dibutuhkan oleh peran tersebut.

## Mengapa Penting Di Server Linux
- Lebih sedikit layanan berarti lebih sedikit port terbuka dan permukaan patch lebih kecil.
- Peninjauan insiden menjadi lebih cepat ketika tuan rumah memiliki inventaris layanan yang singkat.
- Cakupan pencadangan lebih mudah ditentukan ketika komponen yang tidak diperlukan tidak pernah tiba.

## Prinsip Desain
- Mulai dari dasar praktis terkecil.
- Tinjau unit yang diaktifkan dan pendengar aktif.
- Hapus atau nonaktifkan komponen hanya setelah Anda memahami kepemilikan dan ketergantungan.
- Periksa kembali peta layanan setelah setiap pemasangan bidang kendali.

## Pengorbanan Operasional
- Rangkaian layanan minimal mengurangi risiko namun dapat memperlambat pekerjaan eksplorasi.
- Tumpukan kenyamanan yang lebih besar membantu produktivitas yang dijalankan pertama kali tetapi meningkatkan cakupan penyimpangan dan pemecahan masalah.
- Beberapa default distro tidak berbahaya, sementara yang lain merupakan ketergantungan jangka panjang; membedakannya dengan cermat.

## Kesalahan Umum
- Memperlakukan keberhasilan instalasi paket sebagai bukti bahwa layanan baru milik host.
- Membiarkan daemon pengujian diaktifkan setelah jendela pemeliharaan.
- Mengabaikan pendengar soket karena daftar layanan terlihat bersih.
- Menonaktifkan layanan tanpa memeriksa apakah modul selanjutnya masih membutuhkannya.

## Dokumen Terkait
- [📋 Daftar Periksa Layanan](../reference/service-checklist.md)
- [🌐 Matriks Port](../reference/port-matrix.md)
- [📋 Tutorial 08: Layanan](../tutorials/08-services.md)
- [🛡️ Tutorial 07: Keamanan](../tutorials/07-security.md)
