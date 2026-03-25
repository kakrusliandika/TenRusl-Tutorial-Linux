# 📦 Instal Aplikasi Ekstra

## Tujuan
Tambahkan aplikasi produktivitas dan penggunaan sehari-hari ke Ubuntu Standard tanpa mengabaikan cakupan paket dan dukungannya.

## Kapan Menggunakan Prosedur Ini
Gunakan ini ketika stasiun kerja telah menyelesaikan instalasi inti dan Anda siap untuk memperluas kumpulan aplikasi melampaui default desktop awal.

## Prasyarat
- Pemasangan dasar Standard yang stabil.
- Ruang disk yang cukup untuk kumpulan paket yang dapat diakses pengguna lebih luas.

## ⚠️ Catatan Risiko
- Paket aplikasi yang luas dapat menyembunyikan paket mana yang kemudian menyebabkan masalah. Pengelompokan instalasi berdasarkan peran dan pengujian setelah setiap grup.

## Asumsi Lingkungan
- Stasiun kerja ditujukan untuk pekerjaan sehari-hari dengan penggunaan campuran.
- Anda tetap dapat mengidentifikasi kategori aplikasi mana yang benar-benar diperlukan.

## Prosedur Langkah demi Langkah
### 1. Tentukan grup aplikasi tambahan pertama
Kelompok yang umum adalah kantor, dukungan jarak jauh, grafik, manajemen kata sandi, dan pencatatan. Instal berdasarkan kelompok, bukan berdasarkan dorongan hati.

### 2. Instal dasar aplikasi tambahan yang praktis
Contoh ini berlaku untuk paket Ubuntu yang tersedia secara luas.

```bash
sudo apt update
sudo apt install libreoffice thunderbird remmina keepassxc gimp
```

### 3. Validasi perilaku peluncuran dan kesehatan paket
Luncurkan aplikasi yang benar-benar Anda pedulikan dan verifikasi konsistensi paket setelahnya.

```bash
dpkg -l | grep -E 'libreoffice|thunderbird|remmina|keepassxc|gimp'
systemctl --failed
```

## ✅ Checkpoint Validasi
- Aplikasi yang dibutuhkan oleh peran stasiun kerja diinstal dan diluncurkan.
- Tidak ada status paket rusak yang tersisa setelah instalasi.

## Catatan Troubleshooting
- Jika satu aplikasi menarik lebih banyak dari yang diharapkan, jeda dan putuskan apakah aplikasi tersebut benar-benar termasuk dalam baseline Standard.

## ↩️ Catatan Rollback / Recovery
- Segera hapus aplikasi yang tidak diinginkan sehingga permukaan paket Standard yang lebih luas tidak terkapar tanpa kepemilikan.

## Dokumen Terkait
- [📚 05 Produktivitas](../tutorials/05-productivity.md)
- [📋 Matriks Aplikasi](../reference/application-matrix.md)
- [📋 Paket Diperluas](../reference/package-expanded.md)
