# 🧪 Stasiun Kerja Ubuntu

## Ringkasan
Bagian Ubuntu ini adalah titik keputusan untuk subpohon workstation. Itu tidak berarti satu jalur instalasi cocok untuk setiap mesin. Sebaliknya, ini memisahkan track Lite minimal pertama dari track Standard yang lebih lengkap sehingga usia perangkat keras, batas penyimpanan, toleransi risiko booting, dan kebutuhan kontrol paket ditangani dengan sengaja. Kedua jalur mengasumsikan Anda memverifikasi media terlebih dahulu, memikirkan tentang BIOS vs UEFI sebelum mempartisi, dan menyiapkan jalur pemulihan sebelum Anda menimpa disk.

## Siapa yang Cocok Menggunakan Bagian Ini
- Pengguna menginstal Ubuntu di laptop pribadi, desktop, atau stasiun kerja lab.
- Operator yang membutuhkan desktop Linux yang dapat dibangun kembali dan di-debug tanpa menebak paket mana yang mengubah perilaku sistem.
- Pelajar memilih antara stasiun kerja khusus yang ramping dan pengalaman desktop out-of-box yang lebih luas.

## Orientasi Lite vs Standard
Pilih Lite bila Anda menginginkan kontrol paket yang lebih ketat, lebih sedikit perangkat lunak latar belakang, dan isolasi kesalahan yang lebih jelas. Pilih Standard ketika mesin memiliki cukup RAM dan penyimpanan untuk desktop yang lebih penuh dan Anda ingin alur kerja browser, kantor, media, dan pengembang berjalan lebih cepat. Jika mesin melibatkan dual boot, BitLocker, Intel RST/VMD, atau perilaku firmware yang tidak pasti, baca halaman petunjuk berorientasi pemulihan Lite meskipun Anda akhirnya memilih Standard.

## Prasyarat
- ISO Desktop Ubuntu terbaru dan cara memverifikasinya.
- Flash drive USB yang dapat Anda hapus dengan aman jika Anda melakukan instalasi bare-metal.
- Cadangan terkini dan pemahaman yang jelas tentang apakah mesin melakukan booting dalam mode BIOS/legacy atau mode UEFI.

## Jalur Belajar
1. Baca halaman orientasi Lite dan Standard sebelum Anda memilih alur penginstal.
2. Validasi ISO, mode boot, mode penyimpanan, dan fitur perlindungan disk vendor sebelum Anda mempartisi atau mengecilkan apa pun.
3. Selesaikan urutan tutorial yang dipilih dari awal hingga penutupan, bukan hanya bab instalasi saja.
4. Setelah stasiun kerja dapat digunakan, lanjutkan ke Keamanan dan Pencadangan sehingga pemulihan tetap dapat dilakukan setelah pembaruan dan perubahan paket.

## Apa yang Harus Dibaca Terlebih Dahulu
- [💻 Ubuntu Lite](./lite/index.md) untuk layering terkontrol dan disiplin pemulihan yang lebih kuat.
- [💻 Ubuntu Standard](./standard/index.md) untuk garis dasar pengemudi harian yang lebih lengkap.
- [🧠 Lite vs Standard](./lite/concepts/lite-vs-standard.md) jika Anda masih ragu-ragu.

## Peta Bagian
### Lagu Lite
- [💻 Ubuntu Lite](./lite/index.md)
- [🧠 Apa Arti Ubuntu Lite Di Sini](./lite/concepts/what-is-lite.md)
- [✅ Verifikasi ISO](./lite/how-to/verify-iso.md)
- [📚 00 Indeks Tutorial](./lite/tutorials/00-index.md)

### Trek Standard
- [💻 Ubuntu Standard](./standard/index.md)
- [🧠 Ringkasan Standard](./standard/concepts/standard-overview.md)
- [🎵 Aktifkan Codec](./standard/how-to/enable-codecs.md)
- [📘 01 Pendahuluan](./standard/tutorials/01-introduction.md)

### Topik Keputusan Bersama
- [🧠 Lite vs Standard](./lite/concepts/lite-vs-standard.md)
- [🧠 Standard vs Lite](./standard/concepts/standard-vs-lite.md)
- [🔐 Perbaiki Masalah BitLocker](./lite/how-to/fix-bitlocker.md)
- [🧩 Perbaiki Masalah Intel RST](./lite/how-to/fix-intel-rst.md)

## Bagian Terkait
- [☁️ Virtualisasi](../../virtualization/index.md)
- [🖥️ Server](../../server/index.md)
- [🛡️ Keamanan](../../security/index.md)
- [💾 Cadangan](../../backup/index.md)
