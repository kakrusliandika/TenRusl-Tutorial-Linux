# 🪟 Boot Ganda

## Tujuan
Rencanakan dan jalankan instalasi dual-boot Ubuntu Lite yang lebih aman tanpa menganggap sistem operasi lain sebagai renungan.

## Kapan Menggunakan Prosedur Ini
Gunakan ini ketika mesin target harus menyimpan OS lain yang terinstal, biasanya Windows, dan Anda ingin Ubuntu bersamanya daripada menggantinya sepenuhnya.

## Prasyarat
- Cadangan penuh dari OS dan data pengguna yang ada.
- Ruang disk kosong yang cukup untuk Ubuntu dan pertumbuhan di masa depan.
- Saatnya untuk menangguhkan atau menyelesaikan BitLocker, Intel RST, fitur boot cepat vendor, dan risiko terkait hibernasi.

## ⚠️ Catatan Risiko
- Dual boot selalu lebih berisiko daripada instalasi OS tunggal yang bersih karena asumsi penyimpanan, firmware, dan boot-loader digunakan bersama.
- Jangan pernah mengecilkan partisi atau menyentuh ESP tanpa cadangan yang dikonfirmasi.

## Asumsi Lingkungan
- Anda bermaksud agar kedua sistem operasi tetap dapat di-boot.
- Anda masih dapat mem-boot OS asli sekarang sebelum melakukan perubahan.

## Prosedur Langkah demi Langkah
### 1. Tangkap disk saat ini dan status boot sebelum mengubah apa pun
Catat tata letak disk, mode boot, dan jenis sistem file sehingga nanti Anda dapat mengetahui apakah Ubuntu mengubah rencananya secara tidak terduga.

```bash
lsblk -f
sudo parted -l
if [ -d /sys/firmware/efi ]; then echo UEFI; else echo BIOS; fi
```

### 2. Selesaikan kondisi vendor atau sisi Windows yang memblokir terlebih dahulu
BitLocker, Intel RST/VMD, startup cepat, dan hibernasi bukanlah detail opsional. Atasi masalah tersebut sebelum Anda mempartisi atau mengecilkan disk.

### 3. Instal Ubuntu ke ruang kosong dengan pilihan partisi yang disengaja
Lebih suka membiarkan partisi OS yang ada tidak tersentuh di luar operasi penyusutan yang Anda rencanakan. Gunakan kembali partisi EFI yang benar pada sistem UEFI alih-alih membuat partisi EFI tambahan secara acak.

### 4. Bangun kembali dan periksa menu boot setelah instalasi
Ubuntu harus mendeteksi OS lain dengan bersih. Validasi menu boot sebelum Anda melanjutkan pelapisan paket stasiun kerja.

```bash
sudo os-prober || true
sudo update-grub
grep menuentry /boot/grub/grub.cfg | sed -n '1,20p'
```

## ✅ Checkpoint Validasi
- Kedua sistem operasi berhasil melakukan booting setelah instalasi.
- Menu GRUB menyertakan entri yang diharapkan, atau Anda tahu persis mengapa tidak.
- Ubuntu memiliki ruang kosong yang cukup untuk paket selanjutnya dan pertumbuhan log.

## Catatan Troubleshooting
- Jika OS lain hilang dari GRUB, periksa partisi disk dan boot sebelum mengedit pengaturan GRUB acak.
- Jika sistem file Windows dipasang dalam kondisi kotor atau hanya baca, pastikan startup cepat dan hibernasi dinonaktifkan di sisi Windows.

## ↩️ Catatan Rollback / Recovery
- Jika dual boot menjadi tidak stabil, lebih baik memulihkan OS asli dari cadangan atau menginstal ulang Ubuntu dengan paket disk yang lebih sederhana daripada pengeditan boot-loader buta yang berulang-ulang.
- Simpan USB penginstal hingga kedua sistem bertahan beberapa kali cold boot.

## Dokumen Terkait
- [🔐 Perbaiki Masalah BitLocker](./fix-bitlocker.md)
- [🧩 Perbaiki Masalah Intel RST](./fix-intel-rst.md)
- [🛠️ Instal ulang GRUB](./reinstall-grub.md)
