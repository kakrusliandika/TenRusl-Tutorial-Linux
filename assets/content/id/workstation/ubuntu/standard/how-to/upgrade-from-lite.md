# ⬆️ Tingkatkan Dari Lite

## Tujuan
Pindahkan build Ubuntu Lite yang berfungsi ke profil Standard tanpa melupakan bahwa default yang lebih luas meningkatkan permukaan paket dan biaya dukungan.

## Kapan Menggunakan Prosedur Ini
Gunakan ini ketika mesin yang sebelumnya ramping kini memerlukan tumpukan desktop yang lebih luas dan menginstal ulang dari awal tidak diperlukan atau terlalu mengganggu.

## Prasyarat
- Instalasi Ubuntu Lite yang sehat dengan cadangan dan ekspor paket.
- Penyimpanan dan RAM yang cukup untuk mendukung profil Standard yang lebih luas.

## ⚠️ Catatan Risiko
- Instalasi metapackage yang luas dapat menarik banyak dependensi dengan cepat; perlakukan ini sebagai perubahan besar, bukan perubahan biasa.

## Asumsi Lingkungan
- Basis Lite sudah cukup stabil sehingga Anda meningkatkannya berdasarkan kekuatan, bukan dari mesin yang rusak.
- Anda mengetahui bagian Standard mana yang sebenarnya Anda inginkan: paket meta desktop lengkap, bundel aplikasi, atau fitur tertentu saja.

## Prosedur Langkah demi Langkah
### 1. Ekspor status Lite saat ini sebelum peningkatan
Jangan memperluas permukaan paket tanpa terlebih dahulu menjaga garis dasar Lite yang bersih.

```bash
mkdir -p ~/pre-standard-upgrade
dpkg --get-selections > ~/pre-standard-upgrade/dpkg-selections.txt
apt-mark showmanual > ~/pre-standard-upgrade/apt-manual.txt
```

### 2. Pilih gaya peningkatan
Jika Anda menginginkan pendaratan gaya Standard yang paling mendekati, instal metapackage desktop Ubuntu yang lebih luas. Jika Anda hanya memerlukan fungsionalitas tertentu, instal paket berbasis peran yang lebih kecil. Keanggotaan paket dapat bervariasi berdasarkan rilis Ubuntu, jadi periksa dependensinya terlebih dahulu.

```bash
apt-cache depends ubuntu-desktop | sed -n '1,120p'
# Example full-profile path
sudo apt install ubuntu-desktop
```

### 3. Validasi profil desktop yang lebih luas setelah reboot
Periksa target default, perilaku login, aplikasi utama, dan konsistensi paket.

```bash
systemctl get-default
systemctl --failed
dpkg -l | grep ubuntu-desktop
```

## ✅ Checkpoint Validasi
- Sistem masih melakukan booting dengan andal dan mencapai sesi grafis yang diharapkan.
- Fitur Standard yang ditambahkan membenarkan permukaan paket yang lebih luas.
- Anda menyimpan ekspor paket pra-peningkatan untuk pengembalian atau audit.

## Catatan Troubleshooting
- Jika jalur metapackage menambahkan jauh lebih banyak dari yang Anda inginkan, hentikan dan bandingkan hasilnya dengan peran yang direncanakan sebelum menambahkan lebih banyak aplikasi.
- Jika grafik atau boot mengalami kemunduran setelah pemutakhiran, gunakan ekspor paket pra-peningkatan dan catatan pemulihan alih-alih berimprovisasi.

## ↩️ Catatan Rollback / Recovery
- Jika jalur peningkatan menghasilkan terlalu banyak ketidakpastian, pembangunan kembali Standard yang bersih mungkin lebih aman daripada mencoba memangkas hasilnya selamanya.

## Dokumen Terkait
- [💻 Ubuntu Lite](../../lite/index.md)
- [📋 Paket Diperluas](../reference/package-expanded.md)
- [📘 01 Pendahuluan](../tutorials/01-introduction.md)
