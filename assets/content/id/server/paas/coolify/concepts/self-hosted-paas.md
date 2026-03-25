# 🧠 PaaS yang Dihosting Sendiri

## Ringkasan
PaaS yang di-host sendiri memberi Anda kenyamanan penerapan sekaligus menjaga infrastruktur, penyimpanan, dan beban respons insiden di server Anda sendiri.

## Apa Arti Konsepnya
Coolify mengoordinasikan proyek, aplikasi, variabel, domain, dan layanan pendukung melalui alur kerja platform. Host Linux masih memiliki Docker, penggunaan disk, konektivitas keluar, penyimpanan cadangan, dan pemulihan darurat ketika platform atau jalur penerapan gagal.

## Mengapa Penting Di Server Linux
- Dapat mempercepat pengiriman aplikasi tanpa melakukan outsourcing pada platform Anda.
- Ini memperkenalkan lapisan kontrol lain yang harus dicadangkan, diamankan, dan diaudit.
- Ini mengubah mode kegagalan dari kesalahan kontainer sederhana menjadi masalah kontrol sumber, pembangunan, penyimpanan, jaringan, atau status platform.

## Prinsip Desain
- Jaga akses SSH dan jalur inspeksi host independen dari Coolify.
- Perlakukan akses Git, status runtime, dan penyimpanan persisten sebagai batasan kepercayaan yang terpisah.
- Cadangkan konfigurasi platform dan volume stateful sebelum penghentian produksi.
- Validasi penerapan dari platform dan shell.

## Pengorbanan Operasional
- Sebuah platform dapat mengurangi pekerjaan penerapan manual namun meningkatkan ketergantungan pada status platform.
- UX penerapan terpusat membantu tim bergerak lebih cepat, tetapi hanya jika Docker, DNS, dan cakupan pencadangan tetap terlihat.
- Hosting mandiri mengurangi penguncian vendor namun meningkatkan tanggung jawab atas ketersediaan.

## Kesalahan Umum
- Membiarkan Coolify menjadi satu-satunya tempat di mana kebenaran runtime terlihat.
- Menyebarkan aplikasi stateful tanpa terlebih dahulu menentukan kepemilikan cadangan.
- Memberikan kredensial Git yang terlalu luas pada platform.
- Mengabaikan status container, volume, dan reverse proxy karena UI menunjukkan keberhasilan.

## Dokumen Terkait
- [🚀 Tambahkan Proyek Baru](../how-to/add-new-project.md)
- [📋 Peta Layanan](../reference/service-map.md)
- [💾 Cadangan](../../../../backup/index.md)
