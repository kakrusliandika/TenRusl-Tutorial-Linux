# 💻 Ubuntu Standard

## Ringkasan
Ubuntu Standard dalam repositori ini adalah profil workstation yang lebih lengkap. Hal ini mengasumsikan mesin dapat membawa tumpukan desktop yang lebih luas dan operator menginginkan browser, media, kantor, pengembangan, dan dasar produktivitas yang dapat digunakan lebih cepat. Ini masih merupakan build Linux yang disiplin, bukan pendekatan “instal semuanya” yang ceroboh. Tujuannya adalah untuk mendapatkan driver harian yang stabil dengan cepat sambil menjaga visibilitas paket yang cukup untuk memecahkan masalah driver, codec, default, dan penyimpangan pasca-instalasi.

## Siapa yang Cocok Menggunakan Bagian Ini
- Pengguna yang menginginkan desktop Ubuntu yang lebih luas dan tidak memerlukan lapisan minimal Lite yang ketat.
- Tim yang membangun admin, produktivitas, atau workstation serba guna yang dapat digunakan lebih cepat setelah instalasi.
- Pelajar yang menginginkan profil desktop yang lebih kaya namun masih memerlukan validasi, pembersihan, dan kesadaran pemulihan.

## Orientasi Lite vs Standard
Standard adalah pilihan yang lebih baik jika perangkat kerasnya cukup modern, desktop sudah dapat digunakan lebih awal, dan beban kerjanya mencakup kantor, browser, media, dan alat pengembangan sejak awal. Lite lebih baik jika Anda menginginkan radius ledakan yang lebih kecil, tekanan sumber daya yang lebih rendah, atau kontrol paket yang lebih ketat. Standard masih mendapat manfaat dari halaman pemulihan Lite untuk verifikasi ISO, BitLocker, Intel RST, dan perbaikan boot.

## Prasyarat
- ISO Desktop Ubuntu yang didukung dan sistem dengan RAM dan penyimpanan yang cukup untuk profil desktop yang lebih lengkap.
- Cadangan jika sistem target sudah berisi data pengguna.
- Kesediaan untuk memvalidasi default, driver, dan pilihan paket setelah instalasi alih-alih berasumsi desktop selesai pada boot pertama.

## Jalur Belajar
1. Bacalah konsep Standard sehingga Anda memahami bahwa kenyamanan lebih berharga daripada permukaan kemasan ekstra.
2. Gunakan halaman petunjuk pemulihan pra-instalasi Lite jika mesin melakukan dual-boot atau fitur firmware vendor mempersulit instalasi.
3. Ikuti tutorial Standard untuk mendapatkan desktop lengkap tanpa melewatkan validasi.
4. Selesaikan dengan pembersihan, peninjauan aplikasi default, dan rencana pencadangan agar mesin tetap dapat dirawat setelah pembaruan.

## Apa yang Harus Dibaca Terlebih Dahulu
- [🧠 Ringkasan Standard](./concepts/standard-overview.md)
- [🎵 Aktifkan Codec](./how-to/enable-codecs.md)
- [📋 Paket Diperluas](./reference/package-expanded.md)
- [📘 01 Pendahuluan](./tutorials/01-introduction.md)

## Peta Bagian
### Konsep
- [🧠 Ringkasan Standard](./concepts/standard-overview.md)
- [🧠 Standard vs Lite](./concepts/standard-vs-lite.md)
- [🧠 Kapan Memilih Standard](./concepts/when-to-choose-standard.md)

### How-To
- [🎵 Aktifkan Codec](./how-to/enable-codecs.md)
- [📦 Instal Aplikasi Ekstra](./how-to/install-extra-apps.md)
- [🧭 Tetapkan Aplikasi Default](./how-to/set-default-apps.md)
- [⬆️ Tingkatkan Dari Lite](./how-to/upgrade-from-lite.md)

### Referensi
- [📋 Matriks Aplikasi](./reference/application-matrix.md)
- [📋 Persyaratan Perangkat Keras](./reference/hardware-requirements.md)
- [📋 Dasar Paket](./reference/package-baseline.md)
- [📋 Paket Diperluas](./reference/package-expanded.md)

### Tutorial
- [📘 01 Pendahuluan](./tutorials/01-introduction.md)
- [📋 02 Instal Preflight](./tutorials/02-install-preflight.md)
- [🖥️ 03 Instal Inti](./tutorials/03-install-core.md)
- [🧭 04 Aplikasi Bawaan](./tutorials/04-default-apps.md)
- [📚 05 Produktivitas](./tutorials/05-productivity.md)
- [🧪 06 Alat Pengembang](./tutorials/06-dev-tools.md)
- [🎵 07 Alat Media](./tutorials/07-media-tools.md)
- [🧰 08 Alat Opsional](./tutorials/08-optional-tools.md)
- [🧹 09 Pembersihan](./tutorials/09-cleanup.md)
- [📘 10 Penutup](./tutorials/10-closeout.md)

## Bagian Terkait
- [💻 Stasiun Kerja](../../index.md)
- [💻 Ubuntu Lite](../lite/index.md)
- [🛡️ Keamanan](../../../security/index.md)
- [💾 Cadangan](../../../backup/index.md)
