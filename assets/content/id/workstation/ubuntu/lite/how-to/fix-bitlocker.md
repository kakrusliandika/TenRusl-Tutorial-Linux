# 🔐 Perbaiki Masalah BitLocker

## Tujuan
Identifikasi dan hapus pemblokir terkait BitLocker dengan aman sebelum mencoba instalasi Ubuntu atau perubahan dual boot.

## Kapan Menggunakan Prosedur Ini
Gunakan ini ketika instalasi Windows yang ada menggunakan BitLocker, enkripsi perangkat, atau volume yang dilindungi kunci pemulihan dan Anda ingin melakukan partisi ulang atau boot ganda.

## Prasyarat
- Akses ke dokumentasi instalasi atau pemulihan Windows yang ada.
- Cadangan terverifikasi dan kunci pemulihan BitLocker disimpan di tempat yang aman.
- Akses shell dari sesi live Linux jika Anda perlu memeriksa tata letak disk sebelum atau sesudah perubahan.

## ⚠️ Catatan Risiko
- Mengubah partisi pada sistem yang dilindungi BitLocker tanpa persiapan dapat memicu mode pemulihan atau masalah akses data.
- Jangan mengandalkan memori untuk kunci pemulihan.

## Asumsi Lingkungan
- Mesin target saat ini melakukan booting Windows atau memiliki partisi terenkripsi berbasis Windows.
- Anda bersedia menjeda instalasi hingga perlindungan penyimpanan dipahami.

## Prosedur Langkah demi Langkah
### 1. Dokumentasikan status disk saat ini dari Linux jika diperlukan
Bahkan sebelum menyentuh pengaturan sisi Windows, catat apa yang dapat dilihat oleh lingkungan Linux sehingga Anda memahami partisi mana yang akan Anda lindungi atau kecilkan.

```bash
lsblk -f
sudo blkid
sudo parted -l
```

### 2. Periksa status BitLocker dari Windows sebelum partisi diubah
Gunakan alat administratif Windows atau PowerShell untuk mengonfirmasi apakah BitLocker aktif dan apakah Anda memiliki kunci pemulihan. Alur kerja sebenarnya dapat bervariasi menurut versi Windows dan kebijakan vendor.

```powershell
manage-bde -status
```

### 3. Tangguhkan atau dekripsi sepenuhnya hanya jika kebijakan dan paket dukungan Anda mengizinkannya
Banyak kegagalan dual-boot terjadi karena pengguna melewatkan langkah ini dan menemukan perubahan perlindungan hanya setelah tabel partisi dipindahkan. Pilih jalur yang paling tidak mengganggu sehingga pemulihan tetap dapat diprediksi.

### 4. Periksa kembali kemampuan boot setelah perubahan enkripsi sisi Windows
Jangan lanjutkan ke instalasi Ubuntu sampai Windows masih melakukan booting dengan bersih dan kunci pemulihan tersedia.

## ✅ Checkpoint Validasi
- Anda mengetahui apakah BitLocker aktif, ditangguhkan, atau dinonaktifkan sepenuhnya pada disk target.
- Anda memiliki akses ke kunci pemulihan sebelum mengubah ukuran atau mempartisi ulang apa pun.
- Sistem Windows yang ada masih melakukan booting setelah perubahan enkripsi.

## Catatan Troubleshooting
- Jika Linux melihat volume NTFS tetapi volume tersebut dipasang hanya-baca atau menunjukkan metadata yang tidak konsisten, atasi kondisi shutdown dan hibernasi Windows sebelum menyalahkan Ubuntu.
- Jika kunci pemulihan hilang, hentikan. Jangan lanjutkan dengan perubahan partisi.

## ↩️ Catatan Rollback / Recovery
- Jika Windows menjadi tidak dapat di-boot setelah perubahan penyimpanan, gunakan kunci pemulihan dan jalur perbaikan yang disetujui vendor terlebih dahulu.
- Jika status enkripsi masih belum jelas, perlakukan mesin sebagai belum siap untuk dual boot dan jauhkan Ubuntu dari disk sampai Anda memperjelasnya.

## Dokumen Terkait
- [🪟 Boot Ganda](./dual-boot.md)
- [🧩 Perbaiki Masalah Intel RST](./fix-intel-rst.md)
- [📋 02 Instal Preflight](../tutorials/02-install-preflight.md)
