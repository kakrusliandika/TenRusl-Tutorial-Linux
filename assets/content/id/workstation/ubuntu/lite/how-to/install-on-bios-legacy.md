# 🖥️ Instal di BIOS / Legacy

## Tujuan
Instal Ubuntu Lite pada perangkat keras yang menggunakan booting BIOS lama atau pada mesin yang boot lamanya sengaja dipertahankan.

## Kapan Menggunakan Prosedur Ini
Gunakan ini hanya ketika perangkat keras sebenarnya hanya warisan, penerapan yang sudah ada memerlukannya, atau keterbatasan vendor membuat UEFI tidak praktis. Pada sebagian besar sistem baru, UEFI masih merupakan default yang lebih aman.

## Prasyarat
- USB penginstal terverifikasi.
- Cadangan data target dan kejelasan apakah disk akan menggunakan MBR.
- Keyakinan bahwa boot lama diperlukan untuk mesin atau lingkungan ini.

## ⚠️ Catatan Risiko
- Mencampur mode boot penginstal dan mode boot target menyebabkan kegagalan GRUB yang membingungkan.
- BIOS lama pada disk GPT dapat bekerja dengan partisi boot BIOS, tetapi hanya jika Anda mendesainnya dengan sengaja.

## Asumsi Lingkungan
- Sesi penginstal itu sendiri di-boot dalam mode lama.
- Anda telah menerima batasan MBR atau merencanakan tata letak GPT yang kompatibel dengan BIOS.

## Prosedur Langkah demi Langkah
### 1. Konfirmasikan bahwa Anda tidak berada dalam mode UEFI secara tidak sengaja
Anda perlu mengetahui mode penginstal sebelum keputusan partisi pertama.

```bash
if [ -d /sys/firmware/efi ]; then echo 'Installer is UEFI, not legacy'; else echo 'Legacy boot confirmed'; fi
```

### 2. Periksa label disk dan batasan partisi
Jika Anda menggunakan disk MBR, pastikan jumlah partisi dan batas ukuran sesuai dengan paket. Jika menggunakan GPT dengan boot BIOS, pastikan tata letaknya mencakup apa yang dibutuhkan GRUB.

```bash
lsblk -f
sudo parted -l
```

### 3. Instal sistem dasar dengan tata letak yang sederhana dan eksplisit
Penginstalan lama lebih mudah dipulihkan jika tata letaknya konservatif. Hindari kompleksitas partisi tambahan kecuali peran mesin benar-benar memerlukannya.

### 4. Verifikasi boot dari disk yang diinstal
Setelah boot pertama, konfirmasikan bahwa GRUB telah diinstal di tempat yang Anda harapkan dan sistem tidak lagi bergantung pada stik USB.

```bash
lsblk -f
findmnt /
sudo grub-install --version
grep -E '^GRUB_' /etc/default/grub
```

## ✅ Checkpoint Validasi
- Mesin berhasil melakukan booting dalam mode lawas dengan USB penginstal dilepas.
- Sistem file root dan lokasi boot-loader sesuai dengan rencana disk yang didokumentasikan.
- Sistem bertahan setidaknya satu kali reboot sebelum Anda melanjutkan dengan GUI dan pelapisan paket.

## Catatan Troubleshooting
- Jika penginstal melakukan booting secara diam-diam dalam mode UEFI, mulai ulang proses daripada mencoba memaksakan pengaturan hibrid setelahnya.
- Jika label disk salah untuk mode boot yang diinginkan, lakukan partisi ulang secara sengaja; jangan terus-terusan melakukan perbaikan di atas ketidakcocokan.

## ↩️ Catatan Rollback / Recovery
- Jika boot tetap tidak stabil, sederhanakan tata letak dan instal ulang daripada men-debug beberapa kasus edge lama/GPT sekaligus.
- Simpan salinan tata letak disk yang dipilih dan mode boot di catatan build Anda.

## Dokumen Terkait
- [📋 Referensi Tata Letak Disk](../reference/disk-layout-reference.md)
- [🛠️ Instal ulang GRUB](./reinstall-grub.md)
- [📋 Opsi Pemasang](../reference/installer-options.md)
