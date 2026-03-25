# 🎵 07 Alat Media

## Tujuan
Instal perangkat media Standard yang lebih lengkap untuk pemutaran dan pembuatan ringan tanpa mengabaikan validasi codec, audio, dan GPU.

## Prasyarat
- Desktop Standard dan lapisan produktivitas sudah sehat.
- Peran stasiun kerja mencakup pemutaran media atau karya kreatif ringan.

## Asumsi Lingkungan
- Alat media lebih luas daripada codec saja; memvalidasi akselerasi perangkat keras dan perutean audio jika relevan.

## Langkah Berurutan
### 1. Instal aplikasi media utama
Lapisan media Standard yang umum mencakup pemutaran ditambah satu atau dua alat pembuatan.

```bash
sudo apt update
sudo apt install vlc ffmpeg gimp obs-studio
```

### 2. Validasi pemutaran dan visibilitas perangkat
Periksa apakah audio sink, alat pemutaran, dan grafik tetap sehat.

```bash
pactl list short sinks 2>/dev/null || true
ffmpeg -version | head -n 1
vlc --version | head -n 2
```

### 3. Jaga agar cakupan tetap proporsional
Jika mesin hanya memerlukan pemutaran, jangan terus-menerus memasang alat pembuat karena kebiasaan.

## ✅ Checkpoint Validasi
- Workstation dapat memutar media dan meluncurkan alat yang diperlukan.
- Tidak ada regresi grafis atau audio yang muncul setelah pemasangan media.

## ⚠️ Peringatan
- Jika alat media yang banyak menggunakan OBS atau GPU mengganggu kestabilan mesin, hapus alat tersebut dan kembali ke baseline pemutaran pertama yang lebih sederhana.

## Cleanup / Pemeriksaan Akhir
- Simpan hanya alat media yang sesuai dengan beban kerja; Standard lebih luas dari Lite, bukan tidak terbatas.

## Tutorial Berikutnya
[🧰 08 Alat Opsional](./08-optional-tools.md)

## Dokumen Terkait
- [🎵 Aktifkan Codec](../how-to/enable-codecs.md)
- [📋 Paket Diperluas](../reference/package-expanded.md)
- [💻 Bab Media Ubuntu Lite](../../lite/tutorials/08-install-media.md)
