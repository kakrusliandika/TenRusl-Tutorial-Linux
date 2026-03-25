# 🛠️ Instal ulang GRUB

## Tujuan
Perbaiki instalasi boot loader Ubuntu dari lingkungan langsung ketika sistem yang diinstal tidak lagi melakukan booting dengan sendirinya.

## Kapan Menggunakan Prosedur Ini
Gunakan ini ketika GRUB hilang, menunjuk ke disk yang salah, gagal setelah perubahan partisi, atau tidak lagi menampilkan sistem operasi yang diharapkan.

## Prasyarat
- USB Ubuntu langsung yang dapat melakukan booting pada mesin target.
- Pengetahuan tentang partisi root yang diinstal dan, pada sistem UEFI, Partisi Sistem EFI.
- Keakraban yang cukup untuk me-mount partisi dengan hati-hati sebelum Anda melakukan chroot.

## ⚠️ Catatan Risiko
- Menjalankan `grub-install` pada disk atau ESP yang salah dapat memperburuk masalah boot.
- Jangan menebak nama partisi; periksa dulu.

## Asumsi Lingkungan
- Anda sedang memperbaiki instalasi yang ada, bukan membangun workstation untuk pertama kalinya.
- Anda dapat mem-boot lingkungan langsung dalam mode perangkat keras yang sama dengan OS yang diinstal jika memungkinkan.

## Prosedur Langkah demi Langkah
### 1. Identifikasi partisi yang diinstal
Dari sesi langsung, tentukan sistem file root dan Partisi Sistem EFI apa pun sebelum memasang apa pun.

```bash
lsblk -f
sudo parted -l
```

### 2. Mount sistem yang terinstal dan siapkan chroot
Ganti contoh nama perangkat dengan partisi sebenarnya dari mesin Anda.

```bash
sudo mount /dev/nvme0n1p2 /mnt
sudo mount /dev/nvme0n1p1 /mnt/boot/efi 2>/dev/null || true
for d in /dev /dev/pts /proc /sys /run; do sudo mount --bind "$d" "/mnt$d"; done
sudo chroot /mnt
```

### 3. Instal ulang GRUB dan bangun kembali menunya
Gunakan perintah yang benar untuk mode boot sistem. Di UEFI, GRUB menulis file EFI. Pada BIOS lama, ia menulis ke MBR disk target atau jalur boot BIOS.

```bash
# Inside chroot for UEFI systems
update-grub
grub-install

# Example for legacy BIOS systems if the target disk is /dev/nvme0n1
# grub-install /dev/nvme0n1
```

### 4. Keluar dengan bersih dan uji perilaku reboot
Lepas ikatan pengikat dan reboot hanya setelah instalasi ulang GRUB selesai tanpa kesalahan.

```bash
exit
for d in /run /sys /proc /dev/pts /dev; do sudo umount "/mnt$d"; done
sudo umount /mnt/boot/efi 2>/dev/null || true
sudo umount /mnt
sudo reboot
```

## ✅ Checkpoint Validasi
- Sistem melakukan booting tanpa bergantung pada USB langsung.
- GRUB melihat sistem Ubuntu yang terinstal dan entri OS sekunder yang diharapkan.
- Prosedur perbaikan dicatat dalam catatan Anda untuk pekerjaan pemulihan di masa depan.

## Catatan Troubleshooting
- Jika `grub-install` gagal, periksa kembali apakah Anda memasang partisi root dan EFI yang benar.
- Jika `update-grub` tidak menemukan entri OS lain, periksa partisi tersebut sebelum mengedit file konfigurasi dengan tangan.

## ↩️ Catatan Rollback / Recovery
- Jika boot tetap rusak setelah perbaikan hati-hati, jangan terus berimprovisasi. Menilai kembali tata letak disk dan menginstal ulang jika itu lebih murah daripada menambah ketidakpastian.
- Pertahankan USB aktif hingga stasiun kerja dapat bertahan dalam beberapa kali boot dingin.

## Dokumen Terkait
- [🚑 Pulihkan Setelah Boot Gagal](./recover-after-failed-boot.md)
- [🖥️ Instal di UEFI](./install-on-uefi.md)
- [🖥️ Instal di BIOS / Legacy](./install-on-bios-legacy.md)
