# 🎵 Instal Codec

## Tujuan
Tambahkan dasar codec audio dan video yang praktis ke Ubuntu Lite tanpa mengubah workstation menjadi bundel media yang tidak direncanakan.

## Kapan Menggunakan Prosedur Ini
Gunakan ini setelah sesi grafis, browser, dan jaringan paket sudah berfungsi. Jangan jadikan codec sebagai perubahan pertama Anda setelah instalasi.

## Prasyarat
- Sistem terinstal yang stabil dengan jaringan.
- Alasan untuk menambahkan dukungan pemutaran media sekarang, bukan nanti.
- Ruang disk yang cukup untuk paket codec dan pembaruan.

## ⚠️ Catatan Risiko
- Beberapa paket codec meminta penerimaan lisensi atau menarik rangkaian ketergantungan yang lebih luas dari yang diharapkan.
- Tambahkan codec setelah boot dasar dan validasi grafis sehingga Anda tahu bahwa regresi selanjutnya bukanlah masalah OS dasar.

## Asumsi Lingkungan
- Anda telah menyelesaikan instalasi inti dan pemeriksaan GUI dasar.
- Anda merasa nyaman menguji pemutaran dari file sampel yang dikenal bagus setelahnya.

## Prosedur Langkah demi Langkah
### 1. Segarkan metadata paket dan periksa kumpulan codec kandidat
Tinjau apa yang akan diinstal Ubuntu sebelum Anda menerima penarikan ketergantungan yang besar.

```bash
sudo apt update
apt-cache depends ubuntu-restricted-extras | sed -n '1,80p'
```

### 2. Instal paket media inti
Hal ini memberikan dasar stasiun kerja yang praktis tanpa mengasumsikan setiap codec berpemilik harus segera ada.

```bash
sudo apt install ubuntu-restricted-extras ffmpeg gstreamer1.0-plugins-good gstreamer1.0-plugins-bad gstreamer1.0-libav
```

### 3. Verifikasi pemutaran dan visibilitas codec
Periksa apakah paket telah diterima dan pemutaran lokal berfungsi dengan setidaknya satu sampel yang dikenal baik.

```bash
dpkg -l | grep -E 'ubuntu-restricted-extras|ffmpeg|gstreamer1.0'
ffmpeg -codecs | sed -n '1,40p'
```

## ✅ Checkpoint Validasi
- Instalasi paket selesai tanpa ketergantungan yang rusak.
- Contoh file audio atau video berhasil diputar di pemutar yang dituju.
- Workstation masih melakukan booting dan login secara normal setelah tumpukan media berubah.

## Catatan Troubleshooting
- Jika perintah konfigurasi paket terganggu, pulihkan dengan `sudo dpkg --configure -a`.
- Jika pemutaran media masih gagal, periksa apakah masalahnya terkait codec atau terkait pemutar sebelum menambahkan paket lainnya.

## ↩️ Catatan Rollback / Recovery
- Jika instalasi codec menimbulkan masalah ketergantungan, bersihkan kumpulan paket terakhir dan kembali ke daftar paket pra-media sebelum mencoba kombinasi yang lebih sempit.
- Simpan dokumentasi penambahan media sehingga pembersihan nanti tidak menghapus sesuatu yang penting secara tidak sengaja.

## Dokumen Terkait
- [🎵 08 Pasang Media](../tutorials/08-install-media.md)
- [📋 Paket Opsional](../reference/package-optional.md)
- [📋 Indeks Troubleshooting](../reference/troubleshooting-index.md)
