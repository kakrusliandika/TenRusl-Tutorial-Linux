# 🎵 Aktifkan Codec

## Tujuan
Aktifkan dasar codec media yang nyaman di Ubuntu Standard sehingga pemutaran dan media browser berfungsi lebih andal pada stasiun kerja tujuan umum.

## Kapan Menggunakan Prosedur Ini
Gunakan ini setelah desktop Standard terinstal dan jaringan sehat. Standard sering kali memerlukan codec lebih awal daripada Lite karena ekspektasi media sejak awal lebih luas.

## Prasyarat
- Desktop Standard yang berfungsi dengan akses internet.
- Alasan untuk segera mendukung media browser, pemutaran lokal, atau format konten umum.

## ⚠️ Catatan Risiko
- Paket codec dapat membawa petunjuk, pemberitahuan lisensi, atau rangkaian ketergantungan yang lebih luas dari yang diharapkan.

## Asumsi Lingkungan
- Mesin sudah melakukan booting dan login secara normal.
- Anda menginginkan pengalaman media pengemudi harian yang lebih lengkap daripada yang disediakan oleh basis mentah.

## Prosedur Langkah demi Langkah
### 1. Segarkan metadata paket dan periksa kandidat paket
Standard mendukung kesiapan yang lebih cepat, namun Anda tetap harus mengetahui instalasi apa yang akan ditambahkan.

```bash
sudo apt update
apt-cache policy ubuntu-restricted-extras ffmpeg vlc
```

### 2. Instal garis dasar codec
Garis dasar Standard yang praktis biasanya mencakup tambahan umum ditambah satu pemutar media yang andal.

```bash
sudo apt install ubuntu-restricted-extras ffmpeg vlc gstreamer1.0-libav
```

### 3. Verifikasi alat pemutaran dan status paket
Periksa daftar paket dan alat media itu sendiri.

```bash
dpkg -l | grep -E 'ubuntu-restricted-extras|ffmpeg|vlc'
ffmpeg -version | head -n 1
vlc --version | head -n 2
```

## ✅ Checkpoint Validasi
- Paket media diinstal tanpa ketergantungan yang rusak.
- Pemain yang dipilih meluncurkan dan mengenali file media sampel.
- Desktop Standard yang lebih luas masih terasa stabil setelah penambahan codec.

## Catatan Troubleshooting
- Jika paket gagal dikonfigurasi, selesaikan pemulihan paket sebelum mencoba aplikasi media lainnya.
- Jika media browser masih gagal, periksa juga sinkronisasi waktu dan DNS; tidak semua masalah pemutaran merupakan masalah codec.

## ↩️ Catatan Rollback / Recovery
- Bersihkan paket media terakhir jika mengganggu kestabilan mesin, lalu bangun kembali lapisan media dengan lebih sempit.

## Dokumen Terkait
- [🎵 07 Alat Media](../tutorials/07-media-tools.md)
- [📋 Paket Diperluas](../reference/package-expanded.md)
- [💻 Petunjuk Kodek Ubuntu Lite](../../lite/how-to/install-codecs.md)
