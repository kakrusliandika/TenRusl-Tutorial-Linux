# 🎵 08 Pasang Media

## Tujuan
Tambahkan pemutaran media dan alat yang ramah pembuat konten hanya setelah stasiun kerja berfungsi seperti mesin harian yang stabil.

## Prasyarat
- Instalasi inti, GUI, browser, editor, dan alat pengembangan apa pun yang diperlukan sudah berfungsi.
- Peran stasiun kerja benar-benar mencakup pemutaran audio atau video atau tugas pembuatan.

## Asumsi Lingkungan
- Tumpukan media dapat menarik banyak dependensi dan akan muncul terlambat di versi Lite.

## Langkah Berurutan
### 1. Instal kumpulan paket media yang direncanakan
Jaga agar paket tetap disengaja dan terikat dengan kasus penggunaan nyata.

```bash
sudo apt update
sudo apt install vlc mpv ffmpeg pavucontrol
```

### 2. Tambahkan dukungan codec jika masih belum ada
Hanya tambahkan paket codec tambahan jika peran media memerlukannya dan pengujian pemutaran menunjukkan kebutuhan.

```bash
dpkg -l | grep -E 'ffmpeg|vlc|mpv|gstreamer1.0' | sed -n '1,20p'
```

### 3. Uji pemutaran dan perutean audio
Gunakan file sampel yang terkenal bagus dan periksa pilihan perangkat keluaran sebenarnya.

```bash
aplay -l 2>/dev/null || true
pactl list short sinks 2>/dev/null || true
ffmpeg -version | head -n 1
```

## ✅ Checkpoint Validasi
- Output audio terlihat dan setidaknya satu file sampel berhasil diputar.
- Workstation masih log in dan reboot dengan bersih setelah penambahan lapisan media.

## ⚠️ Peringatan
- Jika pemutaran gagal, tentukan apakah masalahnya terkait dengan codec, pemutar, GPU, atau perutean audio sebelum menambahkan paket lainnya.

## Cleanup / Pemeriksaan Akhir
- Jika lapisan media menjadi berisik atau tidak stabil, bersihkan kumpulan paket media terakhir dan kembali ke garis dasar pra-media sambil menilai kembali persyaratannya.

## Tutorial Berikutnya
[🧹 09 Pembersihan](./09-cleanup.md)

## Dokumen Terkait
- [🎵 Instal Codec](../how-to/install-codecs.md)
- [📋 Matriks Aplikasi](../reference/application-matrix.md)
- [📋 Indeks Troubleshooting](../reference/troubleshooting-index.md)
