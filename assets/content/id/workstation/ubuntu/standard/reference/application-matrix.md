# 📋 Matriks Aplikasi

## Tujuan
Gunakan matriks ini untuk membentuk workstation Ubuntu Standard yang lebih luas tanpa kehilangan jejak perangkat lunak mana yang termasuk dalam gelombang pertama.

## Materi Referensi Terstruktur
| Kategori | Pilihan Standard Dasar | Pilihan ekstra | Mengapa cocok dengan Standard |
|---|---|---|---|
| Peramban | Firefox | Browser kedua untuk pengujian jika diperlukan | Desktop serba guna akan segera menjelajah dengan nyaman |
| Kantor | LibreOffice | Alat PDF atau catatan nanti | Alur kerja kantor umum diharapkan lebih awal dibandingkan di Lite |
| Surat dan kalender | Burung Guntur | Alat sinkronisasi tambahan nanti | Membantu skenario pengemudi harian penggunaan campuran |
| Dukungan jarak jauh | Ingatan | Ekstra SSH, VNC, atau RDP | Umum pada admin dan desktop dukungan |
| Grafik | Penampil gambar plus alat tangkapan layar | GIMP atau Inkscape nanti | Berguna namun tetap bergantung pada peran |
| Media | VLC plus dasar codec | OBS Studio atau alat pembuat nanti | Standard sering kali menangani pemutaran sehari-hari lebih awal |
| Pengembang | git plus alat pembangunan plus Python | runtime bahasa tambahan nanti | Sering digunakan pada desktop Linux penggunaan campuran |

## Perintah / Potongan Pemeriksaan
```bash
apt-cache policy firefox libreoffice thunderbird remmina vlc gimp git build-essential python3
```

## Catatan Praktis
- Standard lebih luas dari Lite, namun setiap kategori tetap harus memiliki justifikasi berbasis peran.
- Aplikasi kedua atau ketiga per kategori harus menjadi pengecualian, bukan default.

## Dokumen Terkait
- [📋 Dasar Paket](./package-baseline.md)
- [📋 Paket Diperluas](./package-expanded.md)
- [📚 05 Produktivitas](../tutorials/05-productivity.md)
