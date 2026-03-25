# 📋 Referensi Tata Letak Disk

## Tujuan
Gunakan referensi ini untuk memilih tata letak disk yang lebih aman untuk instalasi dan pemulihan Ubuntu Lite.

## Materi Referensi Terstruktur
| Skenario | Tata letak yang disarankan | Catatan |
|---|---|---|
| Disk tunggal, UEFI, khusus Ubuntu | ESP + root + file swap | Default paling sederhana untuk sebagian besar sistem modern |
| Disk tunggal, UEFI, boot ganda | ESP + root + home terpisah opsional + swapfile | Gunakan kembali ESP yang benar; jangan membuat partisi EFI tambahan secara acak |
| Sistem BIOS lama | MBR dengan root + swapfile atau GPT konservatif plus desain boot BIOS | Jaga agar tata letak tetap sederhana untuk pemulihan GRUB |
| Laptop SSD kecil | root + file swap | Lebih sedikit partisi membuat pemulihan selanjutnya lebih mudah |
| Workstation dengan masalah data pengguna yang terpisah | root + pisahkan `/home` + swapfile | Membantu pembangunan kembali jika direncanakan dengan sengaja |

## Perintah / Potongan Pemeriksaan
```bash
lsblk -f
findmnt /
sudo parted -l
```

## Catatan Praktis
- Swapfile biasanya lebih sederhana daripada partisi swap khusus kecuali Anda mempunyai alasan yang jelas untuk melakukan sebaliknya.
- `/home` terpisah dapat membantu pembuatan ulang, tetapi hanya jika Anda juga memahami izin, pencadangan, dan alur kerja ulang.
- Tata letak dual-boot harus mengoptimalkan kejelasan pemulihan, bukan keanggunan teoretis.

## Dokumen Terkait
- [🖥️ Instal di UEFI](../how-to/install-on-uefi.md)
- [🖥️ Instal di BIOS / Legacy](../how-to/install-on-bios-legacy.md)
- [🪟 Boot Ganda](../how-to/dual-boot.md)
