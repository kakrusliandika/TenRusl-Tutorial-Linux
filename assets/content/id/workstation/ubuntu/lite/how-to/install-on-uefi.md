# 🖥️ Instal di UEFI

## Tujuan
Instal Ubuntu Lite pada mesin yang melakukan booting dalam mode UEFI sambil menjaga partisi, penanganan Partisi Sistem EFI, dan verifikasi pasca-instalasi tetap eksplisit.

## Kapan Menggunakan Prosedur Ini
Gunakan ini di sebagian besar laptop dan desktop modern. UEFI harus menjadi jalur yang diharapkan kecuali perangkat keras atau tata letak disk yang ada jelas bergantung pada BIOS lama.

## Prasyarat
- USB penginstal terverifikasi.
- Cadangan semua data penting pada sistem target.
- Rencana partisi dasar, terutama jika mesin sudah melakukan dual-boot pada OS lain.

## ⚠️ Catatan Risiko
- Menghapus atau menggunakan kembali Partisi Sistem EFI yang salah dapat merusak sistem operasi yang ada.
- Opsi Boot Aman dan firmware vendor dapat memengaruhi perilaku driver pihak ketiga nantinya.

## Asumsi Lingkungan
- Firmware mesin dikonfigurasi untuk mem-boot penginstal dalam mode UEFI.
- Anda memahami apakah disk akan dihapus, dikecilkan, atau dipartisi secara manual.

## Prosedur Langkah demi Langkah
### 1. Konfirmasikan sesi penginstal sebenarnya dalam mode UEFI
Lakukan ini dari sesi langsung sebelum Anda membuka penginstal. Jika sesi di-boot dalam mode lama, hentikan dan reboot penginstal dengan benar.

```bash
if [ -d /sys/firmware/efi ]; then echo 'UEFI boot confirmed'; else echo 'Not UEFI'; fi
sudo efibootmgr -v
```

### 2. Periksa disk dan identifikasi Partisi Sistem EFI
Pada sistem dual-boot, sering kali Anda sudah memiliki ESP. Menggunakan kembali ESP yang benar lebih aman daripada membuat duplikat partisi EFI tanpa rencana.

```bash
lsblk -f
sudo parted -l
sudo blkid | grep -Ei 'vfat|fat32'
```

### 3. Jalankan penginstal dan pilih jalur penginstalan terkecil yang sesuai dengan Lite
Label layar penginstal berubah di seluruh rilis Ubuntu, jadi fokuslah pada hasilnya: pemilihan paket ramping, disk target yang benar, titik pemasangan yang benar, dan penggunaan kembali partisi EFI yang tepat jika melakukan boot ganda. Jika Anda memerlukan kontrol manual, gunakan partisi manual daripada menebak-nebak apa yang bisa dilakukan mode terpandu.

### 4. Verifikasi sistem yang diinstal setelah boot pertama
Konfirmasikan bahwa mesin masih melakukan booting dalam mode UEFI, sistem file root berada di tempat yang Anda harapkan, dan file boot-loader ada.

```bash
if [ -d /sys/firmware/efi ]; then echo 'Installed system is UEFI'; fi
lsblk -f
findmnt /
sudo efibootmgr -v
```

## ✅ Checkpoint Validasi
- Sistem yang terinstal melakukan booting tanpa memasukkan USB.
- Mesin melaporkan mode UEFI dari OS yang diinstal, bukan hanya dari sesi langsung.
- Sistem file root, ESP, dan `/home` atau pilihan swap apa pun yang terpisah sesuai dengan desain yang diinginkan.

## Catatan Troubleshooting
- Jika sistem hanya melakukan booting dengan USB, periksa entri boot dengan `efibootmgr -v` dan instal ulang GRUB jika perlu.
- Jika disk yang dipilih salah untuk file boot, hentikan pelapisan paket dan perbaiki urutan boot terlebih dahulu.
- Jika Windows hilang dari menu boot, jangan langsung dipartisi ulang; periksa konfigurasi ESP dan GRUB yang ada terlebih dahulu.

## ↩️ Catatan Rollback / Recovery
- Jika instalasi baru tidak dapat dipercaya, boot kembali live USB, pasang sistem yang diinstal, dan perbaiki GRUB atau instal ulang dengan bersih sebelum menambahkan paket desktop.
- Simpan USB penginstal hingga workstation bertahan beberapa kali cold boot dan tunda/lanjutkan pengujian.

## Dokumen Terkait
- [📋 Referensi Tata Letak Disk](../reference/disk-layout-reference.md)
- [🛠️ Instal ulang GRUB](./reinstall-grub.md)
- [🖥️ 03 Instal Inti](../tutorials/03-install-core.md)
