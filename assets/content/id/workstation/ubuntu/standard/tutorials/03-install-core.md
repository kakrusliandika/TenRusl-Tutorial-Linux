# 🖥️ 03 Instal Inti

## Tujuan
Instal basis desktop Standard dan konfirmasikan mesin berada pada desktop Ubuntu yang stabil dan lebih lengkap sebelum menambahkan lebih banyak alat pengguna.

## Prasyarat
- Preflight selesai dan cadangan sudah terkini.
- Mesin memiliki sumber daya untuk menjalankan profil desktop yang lebih lengkap.

## Asumsi Lingkungan
- Hasil yang ditargetkan adalah zona pendaratan desktop yang lebih luas, namun tidak sembarangan.

## Langkah Berurutan
### 1. Instal Ubuntu dalam mode boot yang benar
Validasi sesi langsung, periksa penyimpanan, lalu jalankan penginstal dengan jalur paket yang sesuai standar untuk rilis Anda.

```bash
if [ -d /sys/firmware/efi ]; then echo 'UEFI installer'; else echo 'Legacy installer'; fi
lsblk -f
```

### 2. Pilih jalur desktop yang lebih lengkap dan sesuai dengan Standard
Kata-kata penginstal berubah berdasarkan rilis. Fokus pada hasilnya: default desktop yang lebih luas, target disk yang benar, dan penempatan boot-loader yang aman.

### 3. Validasi boot pertama sebagai desktop, bukan hanya sebagai kernel
Penerimaan standar mencakup login, jaringan, grafik, dan stabilitas desktop yang cukup untuk beralih ke default dan aplikasi.

```bash
lsblk -f
findmnt /
systemd-analyze
systemctl --failed
```

## ✅ Checkpoint Validasi
- Stasiun kerja melakukan booting tanpa USB dan berhasil mencapai desktop.
- Jaringan, grafik, dan penyimpanan terlihat wajar sebelum Anda menambahkan lebih banyak lapisan aplikasi.

## ⚠️ Peringatan
- Jika desktop yang lebih penuh sudah tidak stabil, hentikan sekarang daripada menumpuk lebih banyak aplikasi di atasnya.

## Cleanup / Pemeriksaan Akhir
- Simpan media penginstal hingga mesin bertahan dari pembaruan, boot ulang, dan bab penginstalan aplikasi.

## Tutorial Berikutnya
[🧭 04 Aplikasi Bawaan](./04-default-apps.md)

## Dokumen Terkait
- [📋 Persyaratan Perangkat Keras](../reference/hardware-requirements.md)
- [🎵 Aktifkan Codec](../how-to/enable-codecs.md)
- [💻 Panduan UEFI Ubuntu Lite](../../lite/how-to/install-on-uefi.md)
