# 🧠 Minimal Pertama

## Ringkasan
Minimal-pertama bukan berarti kurang bertenaga atau belum selesai. Ini berarti setiap lapisan paket harus mendapatkan tempatnya. Sistem dasar harus melakukan booting dengan bersih, memasang penyimpanan dengan benar, menjangkau jaringan, dan lulus pemeriksaan driver sebelum Anda beralih ke browser, editor, alat media, atau tumpukan pengembang.

## Apa Arti Konsep Ini
Di stasiun kerja Ubuntu, minimal-first berarti Anda menunda paket opsional hingga OS dasar terbukti stabil. Ini juga berarti Anda lebih memilih kumpulan paket langsung daripada paket praktis raksasa ketika paket tersebut akan menyembunyikan ketergantungan mana yang mengubah perilaku.

## Mengapa Ini Penting di Workstation
Pendekatan ini penting karena masalah stasiun kerja sering kali tersembunyi di dalam paket sprawl: terlalu banyak layanan saat boot, terlalu banyak komponen grafis sekaligus, dan terlalu banyak perubahan desktop sebelum Anda mengonfirmasi bahwa penangguhan, Wi-Fi, penskalaan tampilan, dan pembaruan firmware sudah berfungsi dengan baik.

## Prinsip Utama
- Tetapkan sistem operasi dasar yang stabil sebelum Anda mengoptimalkan kenyamanan.
- Ukur sistem setelah setiap lapisan paket: waktu boot, tekanan memori, dan dukungan perangkat.
- Lebih memilih perubahan yang dapat dibalik dan menjaga daftar paket tetap dapat diekspor.
- Tambahkan kompleksitas hanya setelah lapisan saat ini dijelaskan dan divalidasi.

## Arsitektur / Model Mental
Bayangkan stasiun kerja sebagai tangga. Langkah pertama adalah mode firmware, paket penyimpanan, dan instalasi dasar. Langkah selanjutnya adalah login grafis, browser, editor, dev stack, dan dukungan media. Jika salah satu tangga terasa lemah, Anda berhenti di situ dan memperbaikinya sebelum naik lebih tinggi.

## Panduan Pengambilan Keputusan
- Gunakan minimal-first jika Anda ingin memecahkan sendiri masalah interaksi perangkat keras atau paket.
- Gunakan jika Anda ingin mengurangi penggunaan sumber daya yang menganggur atau sedang merehabilitasi perangkat keras lama.
- Lewati hanya jika peran mesin jelas-jelas menuntut desktop yang lebih lengkap dengan segera dan Anda dapat menoleransi jejak ketergantungan yang lebih luas.

## Trade-off
- Waktu penyiapan yang lebih disengaja pada hari pertama.
- Lebih banyak catatan untuk disimpan selama instalasi dan pemeriksaan pasca instalasi.
- Kejelasan jangka panjang yang lebih baik ketika Anda kemudian menghapus, mengganti, atau memecahkan masalah perangkat lunak.

## Kesalahan Umum
- Membingungkan “minimal-first” dengan “jangan pernah menginstal alat produktivitas.”
- Menambahkan PPA, bundel pihak ketiga, dan paket meta desktop sebelum memvalidasi dasar distro.
- Mengabaikan tekanan memori atau penyimpanan setelah setiap lapisan dan hanya memperhatikan masalah ketika sistem sudah berantakan.

## Praktik Terbaik
- Pertahankan ekspor `apt-mark showmanual` seiring pertumbuhan workstation.
- Tambahkan satu kelas perangkat lunak sekaligus: GUI, browser, editor, dev, media.
- Gunakan daftar referensi agar pembangunan tetap dapat diulang.

## Checklist Singkat
- Anda tahu lapisan mana yang Anda tambahkan selanjutnya dan alasannya.
- Anda dapat membalikkan atau menghapus perubahan besar terakhir tanpa menginstal ulang seluruh mesin.
- Stasiun kerja tetap dapat dimengerti oleh orang lain selain penginstal aslinya.

## Dokumen Terkait
- [📋 Dasar Paket](../reference/package-baseline.md)
- [📋 Paket Opsional](../reference/package-optional.md)
- [🧪 07 Instal Pengembang](../tutorials/07-install-dev.md)
- [🧹 09 Pembersihan](../tutorials/09-cleanup.md)
