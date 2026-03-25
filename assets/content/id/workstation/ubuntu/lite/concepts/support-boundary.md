# 🧠 Batas Dukungan

## Ringkasan
Batas pendukung adalah garis antara apa yang sengaja Anda bangun dan apa yang tidak lagi dapat Anda jelaskan dengan percaya diri. Di stasiun kerja, batasan tersebut penting karena penyimpangan paket, perbaikan darurat, solusi khusus vendor, dan penyesuaian GUI yang berulang dapat membuat mesin sulit pulih bahkan saat mesin masih melakukan booting.

## Apa Arti Konsep Ini
Untuk Ubuntu Lite, batasan dukungan sengaja dibuat ketat. Jika suatu perubahan tidak didokumentasikan, tidak dapat diulang, dan dapat dibatalkan, maka perubahan tersebut tidak boleh menjadi bagian dari data dasar yang terpercaya. Eksperimen yang tidak didukung boleh-boleh saja dilakukan di laboratorium, namun eksperimen tersebut tidak boleh diam-diam menjadi kondisi produksi di stasiun kerja.

## Mengapa Ini Penting di Workstation
Secara operasional, batas dukungan memberi tahu Anda kapan harus berhenti melakukan perbaikan dan kembali ke kondisi yang diketahui baik. Hal ini menghemat waktu selama pemulihan booting yang gagal, masalah driver, atau konflik paket yang sebaliknya akan berubah menjadi pemecahan masalah “satu perintah lagi” yang tiada habisnya.

## Prinsip Utama
- Dokumentasikan keadaan dasar dan setiap lapisan paket utama.
- Lebih memilih paket distro dan perintah yang dikenal baik sebelum peretasan khusus.
- Siapkan jalur pemulihan sebelum menyentuh boot loader, driver, atau tabel partisi.
- Mengetahui kapan menginstal ulang dengan bersih lebih murah daripada menumpuk lebih banyak pengecualian.

## Arsitektur / Model Mental
Bayangkan batas dukungan sebagai sebuah kontrak. Di dalam batasnya terdapat paket yang divalidasi, pengaturan yang diketahui, data yang dicadangkan, dan langkah pemulihan yang dapat diulang. Di luar batas tersebut terdapat penyesuaian ad-hoc, unduhan yang tidak terlacak, dan perubahan yang tidak dapat Anda jelaskan kepada operator berikutnya.

## Panduan Pengambilan Keputusan
- Memperketat batasan pada stasiun kerja bersama atau penting.
- Izinkan lebih banyak eksperimen hanya jika Anda juga menyimpan snapshot, catatan, atau instruksi pembuatan ulang yang jelas.
- Jika suatu perubahan tidak dapat diverifikasi atau dibatalkan, perlakukan perubahan tersebut sebagai perluasan batasan dan putuskan secara sadar apakah hal tersebut dapat diterima.

## Trade-off
- Batasan yang ketat mungkin terasa lebih lambat karena Anda lebih sering menulis catatan dan memvalidasi.
- Batasan yang longgar mungkin terasa lebih cepat saat ini, namun menjadi mahal jika sistem rusak.
- Biaya disiplin kecil dibandingkan dengan biaya pekerjaan ulang yang tidak direncanakan.

## Kesalahan Umum
- Menginstal paket pihak ketiga dari sumber acak tanpa mencatatnya.
- Mengedit konfigurasi boot atau grafik di banyak tempat tanpa mempertahankan status lama.
- Melanjutkan debug setelah mesin masuk ke wilayah "Saya tidak tahu lagi apa yang berubah".

## Praktik Terbaik
- Ekspor pilihan paket sebelum perubahan besar.
- Cadangkan `/etc` dan data pengguna sebelum driver atau boot-loader berfungsi.
- Jika OS dasar meragukan, jeda pembangunan dan perbaiki basis sebelum melanjutkan tutorial.

## Checklist Singkat
- Anda tahu apa arti “kebaikan yang diketahui” untuk stasiun kerja ini.
- Anda memiliki setidaknya satu jalur pemulihan yang terdokumentasi.
- Anda dapat mengidentifikasi perubahan terkini mana yang akan dikembalikan terlebih dahulu setelah kegagalan.

## Dokumen Terkait
- [↩️ Rencana Kembalikan](../how-to/rollback-plan.md)
- [🚑 Pulihkan Setelah Boot Gagal](../how-to/recover-after-failed-boot.md)
- [📋 Indeks Troubleshooting](../reference/troubleshooting-index.md)
- [🧹 09 Pembersihan](../tutorials/09-cleanup.md)
