# ✅ Verifikasi ISO

## Tujuan
Konfirmasikan bahwa ISO Ubuntu yang Anda unduh masih utuh sebelum Anda membuat media penginstal atau mem-boot mesin target dari media tersebut.

## Kapan Menggunakan Prosedur Ini
Gunakan ini sebelum setiap upaya instalasi baru, instalasi ulang, atau pemulihan. Hal ini paling penting ketika jaringan tidak dapat diandalkan, mirror tidak dikenal, atau Anda akan menyentuh laptop produksi.

## Prasyarat
- File ISO Ubuntu.
- File checksum resmi untuk rilis yang sama.
- Opsional tetapi disarankan: file checksum yang ditandatangani jika Ubuntu menerbitkannya untuk rilis tersebut.

## ⚠️ Catatan Risiko
- Verifikasi checksum hanya membuktikan integritas terhadap file checksum yang Anda gunakan; pasangkan dengan verifikasi tanda tangan bila tersedia.
- Jangan lewati langkah ini hanya karena pengunduhan selesai tanpa kesalahan browser.

## Asumsi Lingkungan
- Anda bekerja di shell di Linux.
- Nama file ISO yang Anda bandingkan cocok dengan rilis sebenarnya yang ingin Anda instal.

## Prosedur Langkah demi Langkah
### 1. Tempatkan file ISO dan checksum dalam satu direktori kerja
Menyatukan file akan mengurangi kesalahan jalur dan membuat catatan selanjutnya lebih mudah.

```bash
mkdir -p ~/Downloads/ubuntu-verify
cd ~/Downloads/ubuntu-verify
ls -lh
```

### 2. Hitung checksum SHA256 ISO
Jalankan hash secara lokal dan catat hasilnya.

```bash
sha256sum <ubuntu-iso>.iso
```

### 3. Bandingkan hash dengan file checksum vendor
Cari file checksum untuk nama file ISO yang tepat dan bandingkan nilai karakter demi karakter.

```bash
grep '<ubuntu-iso>.iso' SHA256SUMS
```

### 4. Verifikasi file checksum yang ditandatangani jika tersedia
Verifikasi tanda tangan adalah rantai integritas yang lebih baik. Impor kunci penandatanganan hanya dari sumber tepercaya dan verifikasi file checksum itu sendiri.

```bash
gpg --keyid-format long --verify SHA256SUMS.gpg SHA256SUMS
```

## ✅ Checkpoint Validasi
- Output checksum untuk ISO sama persis dengan checksum yang dipublikasikan.
- Jika Anda menggunakan verifikasi GPG, tanda tangannya bagus dan terikat dengan file checksum yang diharapkan.
- Catatan Anda mencantumkan nama file ISO, hasil checksum, dan tanggal verifikasi.

## Catatan Troubleshooting
- Jika checksum tidak cocok, hapus ISO dan unduh lagi dari mirror tepercaya.
- Jika tanda tangan GPG tidak dapat diverifikasi, jangan perlakukan file checksum sebagai tepercaya sampai Anda menyelesaikan sumber kunci dan asal file.
- Jika ada beberapa file ISO di direktori, periksa kembali apakah Anda telah melakukan hashing pada file yang benar.

## ↩️ Catatan Rollback / Recovery
- Tidak ada kemunduran selain menghapus ISO yang dicurigai dan memulai kembali dengan unduhan yang bersih.
- Jika penyimpanan lokal Anda tidak dapat diandalkan, uji jalur pengunduhan atau kesehatan disk sebelum mempercayai media penginstal apa pun di masa mendatang.

## Dokumen Terkait
- [🛠️ Buat USB bootable](./create-bootable-usb.md)
- [📋 02 Instal Preflight](../tutorials/02-install-preflight.md)
- [📋 Persyaratan Perangkat Keras](../reference/hardware-requirements.md)
