# 🖥️ 03 Instal Inti

## Tujuan
Instal sistem operasi dasar Lite dan konfirmasikan mesin melakukan booting dengan bersih sebelum pelapisan paket desktop yang berat dimulai.

## Prasyarat
- Pemeriksaan sebelum penerbangan selesai.
- Anda tahu apakah mesin akan menggunakan UEFI atau BIOS lama.
- Anda memiliki rencana tata letak disk.

## Asumsi Lingkungan
- Bab ini berakhir hanya ketika sistem yang diinstal melakukan booting tanpa USB dan OS dasar dapat dipercaya.

## Langkah Berurutan
### 1. Boot penginstal dalam mode yang benar dan verifikasi disk
Dari sesi langsung, konfirmasikan mode boot dan periksa penyimpanan sekali lagi sebelum instalasi.

```bash
if [ -d /sys/firmware/efi ]; then echo 'UEFI installer'; else echo 'Legacy installer'; fi
lsblk -f
sudo parted -l
```

### 2. Jalankan installer dengan path paling ramping yang masih cocok dengan Lite
Pilih paket praktis terkecil, pertahankan partisi konservatif, dan hindari opsi tambahan yang belum Anda perlukan. Label penginstal yang tepat berbeda-beda tergantung rilis Ubuntu, jadi fokuslah pada hasil daripada menghafal teks UI.

### 3. Boot sistem yang diinstal dan lakukan validasi dasar
Jangan melanjutkan ekspansi GUI sampai sistem dasar bertahan dari reboot dan melaporkan sistem file dan mode boot yang diharapkan.

```bash
lsblk -f
findmnt /
if [ -d /sys/firmware/efi ]; then echo 'Installed OS is UEFI'; else echo 'Installed OS is legacy'; fi
systemd-analyze
```

## ✅ Checkpoint Validasi
- Mesin melakukan booting tanpa adanya USB penginstal.
- Sistem file root dan mode boot sesuai dengan tata letak yang direncanakan.
- Tidak ada kegagalan paket atau layanan yang jelas muncul pada boot pertama.

## ⚠️ Peringatan
- Jika sistem tidak dapat melakukan booting dengan baik sekarang, hentikan dan perbaiki sebelum Anda menginstal GUI atau browser.
- Jangan bingung antara layar akhir penginstal yang berhasil dengan basis stasiun kerja yang berhasil.

## Cleanup / Pemeriksaan Akhir
- Simpan USB langsung dan pasang catatan di dekat Anda; ini masih cukup awal sehingga menginstal ulang mungkin lebih murah daripada perbaikan berlapis jika basisnya salah.

## Tutorial Berikutnya
[🖼️ 04 Instal GUI](./04-install-gui.md)

## Dokumen Terkait
- [🖥️ Instal di UEFI](../how-to/install-on-uefi.md)
- [🖥️ Instal di BIOS / Legacy](../how-to/install-on-bios-legacy.md)
- [📋 Daftar Periksa Pasca Pemasangan](../reference/post-install-checklist.md)
