# 💻 Ubuntu Lite

## Ringkasan
Ubuntu Lite dalam repositori ini adalah metode workstation, bukan SKU Ubuntu terpisah. Idenya adalah untuk membangun basis yang ramping dan dapat diamati; mengonfirmasi penyimpanan, jaringan, grafik, dan perilaku boot; lalu tambahkan hanya lapisan desktop yang benar-benar Anda perlukan. Hal ini membuat keputusan paket menjadi eksplisit, rollback menjadi lebih mudah, dan pemecahan masalah jauh lebih mudah pada perangkat keras yang lemah, mesin lab bersama, atau stasiun kerja yang mana Anda lebih menghargai kontrol daripada kenyamanan.

## Siapa yang Cocok Menggunakan Bagian Ini
- Pengguna yang menginginkan workstation Ubuntu minimal pertama dan tidak keberatan menambahkan paket dalam lapisan yang disengaja.
- Operator yang menginstal Linux pada perangkat keras yang lebih lama atau dengan spesifikasi lebih rendah di mana setiap layanan latar belakang penting.
- Pelajar yang menginginkan batas dukungan yang lebih jelas dan peluang pemulihan yang lebih baik dari kegagalan instalasi, masalah driver, atau regresi boot.

## Orientasi Lite vs Standard
Lite sangat cocok jika Anda ingin memahami apa yang sebenarnya dibutuhkan stasiun kerja sebelum Anda menambahkan tumpukan desktop lengkap. Standard lebih cocok bila Anda menginginkan pengalaman default yang lebih luas dengan lebih cepat. Lite lebih lambat untuk dirakit, namun lebih mudah untuk di-debug karena browser, editor, alat pengembang, tumpukan media, codec, dan tambahan opsional ditambahkan dalam tahapan yang terlihat daripada digabungkan menjadi satu keputusan besar.

## Prasyarat
- ISO Desktop Ubuntu yang terverifikasi dan alur kerja USB bootable.
- Cadangan data penting apa pun pada mesin target dan kesadaran yang jelas akan konsekuensi dual-boot.
- Kenyamanan shell dasar sehingga Anda dapat menjalankan perintah validasi setelah setiap tahap.

## Jalur Belajar
1. Baca konsep Lite terlebih dahulu sehingga Anda memahami batasan dukungan dan model pengoperasian minimal pertama.
2. Lakukan pembuatan media, verifikasi ISO, perencanaan mode boot, dan peringatan dual-boot sebelum Anda menulis ke disk.
3. Gunakan referensi selama partisi, pemilihan paket, dan validasi pasca instalasi.
4. Ikuti tutorial secara berurutan sehingga workstation tumbuh dari basis yang stabil dan bukannya menjadi tumpukan paket acak.

## Apa yang Harus Dibaca Terlebih Dahulu
- [🧠 Apa Arti Ubuntu Lite Di Sini](./concepts/what-is-lite.md)
- [✅ Verifikasi ISO](./how-to/verify-iso.md)
- [📋 Daftar Periksa Pasca Pemasangan](./reference/post-install-checklist.md)
- [📚 00 Indeks Tutorial](./tutorials/00-index.md)

## Peta Bagian
### Konsep
- [🧠 Apa Arti Ubuntu Lite Di Sini](./concepts/what-is-lite.md)
- [🧠 Minimal Pertama](./concepts/minimal-first.md)
- [🧠 Lite vs Standard](./concepts/lite-vs-standard.md)
- [🧠 Batas Dukungan](./concepts/support-boundary.md)

### How-To
- [🛠️ Buat USB bootable](./how-to/create-bootable-usb.md)
- [✅ Verifikasi ISO](./how-to/verify-iso.md)
- [🖥️ Instal di UEFI](./how-to/install-on-uefi.md)
- [🖥️ Instal di BIOS / Legacy](./how-to/install-on-bios-legacy.md)
- [🪟 Boot Ganda](./how-to/dual-boot.md)
- [🔐 Perbaiki Masalah BitLocker](./how-to/fix-bitlocker.md)
- [🧩 Perbaiki Masalah Intel RST](./how-to/fix-intel-rst.md)
- [🧩 Aktifkan Driver Pihak Ketiga](./how-to/enable-third-party-drivers.md)
- [🎵 Instal Codec](./how-to/install-codecs.md)
- [🛠️ Instal ulang GRUB](./how-to/reinstall-grub.md)
- [🚑 Pulihkan Setelah Boot Gagal](./how-to/recover-after-failed-boot.md)
- [↩️ Rencana Kembalikan](./how-to/rollback-plan.md)

### Referensi
- [📋 Matriks Aplikasi](./reference/application-matrix.md)
- [📋 Referensi Tata Letak Disk](./reference/disk-layout-reference.md)
- [📋 Glosarium](./reference/glossary.md)
- [📋 Persyaratan Perangkat Keras](./reference/hardware-requirements.md)
- [📋 Opsi Pemasang](./reference/installer-options.md)
- [📋 Daftar Periksa Jaringan](./reference/network-checklist.md)
- [📋 Dasar Paket](./reference/package-baseline.md)
- [📋 Paket Opsional](./reference/package-optional.md)
- [📋 Daftar Periksa Pasca Pemasangan](./reference/post-install-checklist.md)
- [📋 Indeks Troubleshooting](./reference/troubleshooting-index.md)

### Tutorial
- [📚 00 Indeks Tutorial](./tutorials/00-index.md)
- [📘 01 Pendahuluan](./tutorials/01-introduction.md)
- [📋 02 Instal Preflight](./tutorials/02-install-preflight.md)
- [🖥️ 03 Instal Inti](./tutorials/03-install-core.md)
- [🖼️ 04 Instal GUI](./tutorials/04-install-gui.md)
- [🌐 05 Instal Peramban](./tutorials/05-install-browser.md)
- [📝 06 Pasang Penyunting](./tutorials/06-install-editor.md)
- [🧪 07 Instal Pengembang](./tutorials/07-install-dev.md)
- [🎵 08 Pasang Media](./tutorials/08-install-media.md)
- [🧹 09 Pembersihan](./tutorials/09-cleanup.md)
- [📘 10 Penutup](./tutorials/10-closeout.md)

## Bagian Terkait
- [💻 Stasiun Kerja](../../index.md)
- [💻 Ubuntu Standard](../standard/index.md)
- [🛡️ Keamanan](../../../security/index.md)
- [💾 Cadangan](../../../backup/index.md)
