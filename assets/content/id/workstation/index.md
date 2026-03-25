# 💻 Workstation

## Ringkasan
Bagian workstation adalah jalur pembelajaran desktop Linux untuk repositori ini. Ini berfokus pada perencanaan desktop berbasis Ubuntu, instalasi, pelapisan paket, pengaturan media, penanganan driver, pemikiran rollback, dan pekerjaan pemulihan nyata sehingga pelajar dapat membangun mesin harian tanpa memperlakukan penginstal sebagai keajaiban. Bahasa Inggris adalah sumber kebenaran dalam subpohon ini, dan jalur Ubuntu sengaja dipecah menjadi Lite dan Standard sehingga pembaca dapat memilih model operasional yang tepat sebelum menyentuh disk.

## Siapa yang Cocok Menggunakan Bagian Ini
- Pengguna laptop dan desktop yang menginstal Ubuntu untuk pertama kalinya dan menginginkan proses yang lebih aman daripada “klik berikutnya hingga boot.”
- Pengembang, staf pendukung, dan pengguna lab rumahan yang membutuhkan desktop Linux yang andal dengan langkah validasi dan rollback yang jelas.
- Pengguna memutuskan antara workstation minimal pertama dan pengalaman desktop default yang lebih lengkap.

## Orientasi Lite vs Standard
Lite dan Standard keduanya merupakan jalur workstation Ubuntu, tetapi keduanya memecahkan masalah yang berbeda. Lite adalah jalur yang terkontrol: dasar paket yang lebih kecil, pelapisan yang lebih hati-hati, domain kegagalan yang lebih jelas, dan penekanan pemulihan yang lebih besar. Standard adalah jalur yang lebih luas: default desktop yang lebih lengkap, produktivitas lebih cepat, dan lebih sedikit perakitan manual pada hari pertama. Kedua track tersebut masih memerlukan verifikasi ISO, kesadaran firmware, perencanaan penyimpanan, dan validasi pasca instalasi.

## Prasyarat
- Mesin atau VM yang dapat Anda instal atau instal ulang dengan aman.
- ISO Ubuntu yang terverifikasi, alur kerja USB bootable, dan cadangan terkini dari semua data yang ada.
- Kenyamanan dasar dengan menu BIOS/UEFI, konsep partisi, dan perintah shell Linux.

## Jalur Belajar
1. Buka [🧪 Stasiun Kerja Ubuntu](./ubuntu/index.md) untuk memutuskan apakah Lite atau Standard lebih cocok dengan mesin, alur kerja, dan toleransi pemulihan.
2. Gunakan [💻 Ubuntu Lite](./ubuntu/lite/index.md) jika Anda menginginkan basis yang ramping, kontrol paket yang eksplisit, disiplin perangkat keras yang lebih lama, atau batasan pemecahan masalah yang lebih kuat.
3. Gunakan [💻 Ubuntu Standard](./ubuntu/standard/index.md) jika Anda menginginkan profil pengemudi harian yang lebih lengkap dengan default yang lebih luas dan kesiapan aplikasi yang lebih cepat.
4. Setelah workstation stabil, lanjutkan ke [🛡️ Keamanan](../security/index.md) dan [💾 Cadangan](../backup/index.md) agar desktop dapat dipulihkan dan diperkuat, bukan hanya diinstal.

## Apa yang Harus Dibaca Terlebih Dahulu
- [🧪 Stasiun Kerja Ubuntu](./ubuntu/index.md) untuk ikhtisar trek dan titik keputusan.
- [✅ Verifikasi ISO](./ubuntu/lite/how-to/verify-iso.md) sebelum Anda membuat media penginstal.
- [📋 02 Instal Preflight](./ubuntu/lite/tutorials/02-install-preflight.md) jika Anda ingin menjalankan pertama kali berdasarkan daftar periksa.

## Peta Bagian
### Ringkasan Ubuntu Workstation
- [🧪 Stasiun Kerja Ubuntu](./ubuntu/index.md)
- [💻 Ubuntu Lite](./ubuntu/lite/index.md)
- [💻 Ubuntu Standard](./ubuntu/standard/index.md)

### Titik Awal yang Direkomendasikan
- Minimal-pertama, perangkat keras ramping, atau kontrol paket maksimum: [💻 Ubuntu Lite](./ubuntu/lite/index.md)
- Pendaratan lebih cepat dengan pengemudi harian yang lebih lengkap: [💻 Ubuntu Standard](./ubuntu/standard/index.md)

### Pemulihan-Bacaan Berat
- [✅ Verifikasi ISO](./ubuntu/lite/how-to/verify-iso.md)
- [🛠️ Buat USB bootable](./ubuntu/lite/how-to/create-bootable-usb.md)
- [🔐 Perbaiki Masalah BitLocker](./ubuntu/lite/how-to/fix-bitlocker.md)
- [🧩 Perbaiki Masalah Intel RST](./ubuntu/lite/how-to/fix-intel-rst.md)
- [🚑 Pulihkan Setelah Boot Gagal](./ubuntu/lite/how-to/recover-after-failed-boot.md)

## Bagian Terkait
- [☁️ Virtualisasi](../virtualization/index.md)
- [🖥️ Server](../server/index.md)
- [🛡️ Keamanan](../security/index.md)
- [💾 Cadangan](../backup/index.md)
