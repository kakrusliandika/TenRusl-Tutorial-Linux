# 📋 02 Instal Preflight

## Tujuan
Selesaikan semua pemeriksaan pra-instal sehingga instalasi Ubuntu Lite yang sebenarnya membosankan, dapat diprediksi, dan dapat dipulihkan.

## Prasyarat
- ISO target telah diunduh.
- Drive USB tersedia jika Anda memasang pada logam kosong.
- Cadangan ada untuk semua data yang ada di mesin target.

## Asumsi Lingkungan
- Bab ini adalah tempat Anda mengatasi integritas ISO, media USB, mode boot, pemblokir dual-boot, dan kejutan penyimpanan.

## Langkah Berurutan
### 1. Verifikasi checksum ISO
Jangan membuat media penginstal dari gambar yang belum diverifikasi.

```bash
sha256sum <ubuntu-iso>.iso
grep '<ubuntu-iso>.iso' SHA256SUMS
```

### 2. Buat USB bootable dan catat perangkat yang digunakan
Konfirmasikan jalur USB dua kali sebelum menulis.

```bash
lsblk -d -o NAME,SIZE,MODEL,TRAN
sudo dd if=<ubuntu-iso>.iso of=/dev/sdX bs=4M status=progress oflag=sync
sync
```

### 3. Periksa mode boot dan pemblokir dual-boot
Untuk mesin dengan sistem operasi yang sudah ada, selesaikan pertanyaan BitLocker, Intel RST, startup cepat vendor, dan hibernasi sekarang.

```bash
if [ -d /sys/firmware/efi ]; then echo UEFI; else echo BIOS; fi
lsblk -f
```

## ✅ Checkpoint Validasi
- ISO diverifikasi, USB ada, dan mode boot mesin target diketahui.
- Anda tahu apakah dual boot cukup aman untuk dicoba.
- Anda belum mengubah partisi tanpa cadangan.

## ⚠️ Peringatan
- Melewatkan preflight adalah cara tercepat untuk membuang-buang waktu beberapa jam berikutnya.
- Jangan lanjutkan jika status BitLocker atau Intel RST tidak jelas.

## Cleanup / Pemeriksaan Akhir
- Simpan catatan checksum terverifikasi dan pengidentifikasi USB di log build Anda.

## Tutorial Berikutnya
[🖥️ 03 Instal Inti](./03-install-core.md)

## Dokumen Terkait
- [✅ Verifikasi ISO](../how-to/verify-iso.md)
- [🛠️ Buat USB bootable](../how-to/create-bootable-usb.md)
- [🪟 Boot Ganda](../how-to/dual-boot.md)
