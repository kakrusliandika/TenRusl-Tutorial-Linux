# 📋 Matriks Aplikasi

## Tujuan
Gunakan matriks ini untuk memutuskan lapisan aplikasi mana yang akan ditambahkan terlebih dahulu di Ubuntu Lite dan kategori mana yang dapat ditunggu dengan aman.

## Materi Referensi Terstruktur
| Kategori | Pilihan ramping | Pilihan yang lebih lengkap | Tambahkan sekarang ketika... | Penundaan ketika... |
|---|---|---|---|---|
| Peramban | Firefox | Firefox plus browser kedua untuk pengujian | Akses web adalah bagian dari penerimaan awal | Anda masih memvalidasi grafik atau Wi-Fi |
| Penyunting | mikro atau vim | Editor GUI atau IDE nanti | Anda perlu segera mengedit pada kotak | Anda belum menyelesaikan sumber paket |
| Pemutaran media | mpv atau VLC | VLC plus ekstra codec dan alat media GUI | Stasiun kerja sekarang untuk pemutaran harian | Anda masih menstabilkan audio atau GPU |
| Kantor | tidak ada pada awalnya | LibreOffice | Mesin ini adalah desktop produktivitas sejak hari pertama | Perannya adalah admin atau dev dulu |
| Dukungan jarak jauh | Klien OpenSSH | Alat Remmina, RDP, VNC | Anda harus segera menghubungi mesin lain | Identitas jaringan dan VPN masih belum terselesaikan |
| Rantai alat pengembang | git, curl, build-esensial | runtime bahasa dan IDE nanti | Pembangunan adalah peran inti | Base workstation belum sehat |

## Perintah / Potongan Pemeriksaan
```bash
apt-cache policy firefox micro vim vlc libreoffice remmina git build-essential
```

## Catatan Praktis
- Lite paling kuat jika Anda menghindari penambahan beberapa kategori besar dalam satu sesi.
- Suatu kategori dapat ditunda tanpa berarti stasiun kerja tidak lengkap; itu berarti lapisan tersebut belum diratakan.
- Jika suatu kategori membawa banyak dependensi, tambahkan kategori tersebut di dekat akhir alur tutorial sehingga rollback tetap sederhana.

## Dokumen Terkait
- [📋 Dasar Paket](./package-baseline.md)
- [📋 Paket Opsional](./package-optional.md)
- [📚 00 Indeks Tutorial](../tutorials/00-index.md)
