# 🛠️ Buat USB bootable

## Tujuan
Buat media penginstal Ubuntu dari Linux dengan cara yang disengaja, dapat diverifikasi, dan aman untuk perangkat USB target.

## Kapan Menggunakan Prosedur Ini
Gunakan ini ketika Anda sudah memiliki ISO Ubuntu yang terverifikasi dan memerlukan media instalasi untuk laptop, desktop, atau sesi pemulihan.

## Prasyarat
- File ISO Ubuntu yang terverifikasi.
- Flash drive USB yang dapat Anda hapus sepenuhnya.
- Akses shell pada mesin Linux dengan `lsblk`, `umount`, dan `dd` tersedia.

## ⚠️ Catatan Risiko
- Menulis ke perangkat blok yang salah akan segera menghancurkan data.
- Beberapa auto-mounter desktop memasang ulang USB setelah dimasukkan; lepaskan lagi sebelum menulis.

## Asumsi Lingkungan
- Anda membuat media dari Linux, bukan dari Windows atau macOS.
- Anda mengetahui jalur perangkat USB sebelum menjalankan `dd`.

## Prosedur Langkah demi Langkah
### 1. Identifikasi perangkat USB yang benar
Colokkan drive USB, daftarkan perangkat blok, dan konfirmasikan model dan ukurannya dua kali sebelum Anda menulis apa pun.

```bash
lsblk -d -o NAME,SIZE,MODEL,TRAN
sudo fdisk -l | sed -n '1,120p'
```

### 2. Lepas semua partisi yang terpasang pada drive USB
Jika desktop memasang USB secara otomatis, lepaskan setiap partisi terlebih dahulu. Ganti `sdX` dengan nama perangkat asli yang Anda konfirmasi pada langkah sebelumnya.

```bash
sudo umount /dev/sdX?* 2>/dev/null || true
lsblk -o NAME,MOUNTPOINT /dev/sdX
```

### 3. Tulis ISO ke perangkat mentah
Gunakan `dd` hanya setelah Anda yakin perangkat target sudah benar. Ukuran blok 4 MiB dengan tanda sinkronisasi adalah standar praktis.

```bash
sudo dd if=<ubuntu-iso>.iso of=/dev/sdX bs=4M status=progress oflag=sync
sync
```

### 4. Matikan dan masukkan kembali USB untuk pemeriksaan baca kembali dengan cepat
Lepaskan drive dengan aman, masukkan kembali, dan konfirmasikan bahwa sistem sekarang melihat partisi bergaya penginstal.

```bash
sudo udisksctl power-off -b /dev/sdX
lsblk -f
```

## ✅ Checkpoint Validasi
- Perangkat USB terdeteksi setelah dimasukkan kembali dan tidak lagi menampilkan tata letak sistem file lama.
- Firmware mesin dapat melihat USB sebagai opsi boot.
- Anda masih dapat mengidentifikasi perangkat USB secara bersih dengan `lsblk -f`.

## Catatan Troubleshooting
- Jika `dd` melaporkan “target sibuk,” periksa lagi partisi yang terpasang dengan `lsblk` dan `mount`.
- Jika USB tidak bisa boot, buat ulang setelah memverifikasi ulang checksum ISO.
- Jika mesin target hanya UEFI, uji USB pada sistem UEFI yang dikenal baik sebelum mencurigai firmware laptop.

## ↩️ Catatan Rollback / Recovery
- Jika Anda menulis ke perangkat yang salah, segera hentikan dan pulihkan dari cadangan; tidak ada pembatalan yang aman untuk menimpa image disk.
- Jika media USB berperilaku aneh, tulis ulang setelah menghapus tanda tangan dengan `sudo wipefs -a /dev/sdX` hanya jika Anda yakin perangkat tersebut adalah drive USB.

## Dokumen Terkait
- [✅ Verifikasi ISO](./verify-iso.md)
- [🖥️ Instal di UEFI](./install-on-uefi.md)
- [📋 02 Instal Preflight](../tutorials/02-install-preflight.md)
