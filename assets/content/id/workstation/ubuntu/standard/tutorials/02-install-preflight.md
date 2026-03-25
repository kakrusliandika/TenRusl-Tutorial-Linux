# 📋 02 Instal Preflight

## Tujuan
Selesaikan pemeriksaan pra-instalasi penting yang sama seperti yang diperlukan oleh Lite, namun dengan mempertimbangkan ekspektasi desktop Standard yang lebih lengkap.

## Prasyarat
- ISO Ubuntu yang diunduh dan USB yang dapat ditulisi jika dipasang pada perangkat keras asli.
- Cadangan data apa pun yang sudah ada di mesin target.

## Asumsi Lingkungan
- Anda masih perlu memverifikasi ISO, USB, mode boot, risiko dual-boot, BitLocker, dan Intel RST sebelum instalasi.

## Langkah Berurutan
### 1. Verifikasi ISO dan buat media penginstal
Bahkan pada Standard, integritas media lebih diutamakan daripada kenyamanan.

```bash
sha256sum <ubuntu-iso>.iso
grep '<ubuntu-iso>.iso' SHA256SUMS
lsblk -d -o NAME,SIZE,MODEL,TRAN
```

### 2. Konfirmasikan mode boot dan kesiapan penyimpanan
Ketahui apakah sistem akan menggunakan UEFI atau BIOS lama dan apakah ada pemblokir dual-boot.

```bash
if [ -d /sys/firmware/efi ]; then echo UEFI; else echo BIOS; fi
lsblk -f
```

### 3. Baca halaman pemulihan Lite jika mesinnya tidak sederhana
BitLocker, Intel RST, dan kompleksitas dual-boot tidak hilang hanya karena Standard adalah jalur yang dipilih.

## ✅ Checkpoint Validasi
- Media penginstal dapat dipercaya dan konteks booting serta penyimpanan mesin dapat dipahami.
- Anda tahu apakah Anda dapat melanjutkan dengan aman atau harus menyelesaikan vendor atau pemblokir dual-boot terlebih dahulu.

## ⚠️ Peringatan
- Jangan perlakukan Standard sebagai jalan pintas dalam manajemen risiko pra-instal.

## Cleanup / Pemeriksaan Akhir
- Simpan catatan USB dan pra-penerbangan hingga setelah tutorial Standard 10.

## Tutorial Berikutnya
[🖥️ 03 Instal Inti](./03-install-core.md)

## Dokumen Terkait
- [✅ Verifikasi ISO](../../lite/how-to/verify-iso.md)
- [🛠️ Buat USB bootable](../../lite/how-to/create-bootable-usb.md)
- [🔐 Perbaiki Masalah BitLocker](../../lite/how-to/fix-bitlocker.md)
