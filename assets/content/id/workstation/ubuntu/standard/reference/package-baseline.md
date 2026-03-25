# 📋 Paket Dasar

## Tujuan
Gunakan halaman ini sebagai permukaan paket gelombang pertama yang diharapkan untuk Ubuntu Standard setelah instalasi dasar.

## Materi Referensi Terstruktur
| Paket atau grup | Mengapa ini termasuk dalam Standard |
|---|---|
| Tumpukan peramban | Sebuah workstation jarang lengkap tanpa penjelajahan yang dapat diandalkan |
| LibreOffice | Garis dasar produktivitas umum |
| Thunderbird atau alat email yang setara | Berguna pada desktop harian serba guna |
| Ingatan | Dukungan jarak jauh umum atau kebutuhan admin |
| Pemutar media dasar ditambah lapisan codec | Harapan pengemudi harian yang sering |
| git plus alat pengembangan dasar | Desktop standar seringkali masih memerlukan utilitas admin dan dev yang praktis |

## Perintah / Potongan Pemeriksaan
```bash
dpkg -l | grep -E 'firefox|libreoffice|thunderbird|remmina|vlc|git' | sed -n '1,40p'
```

## Catatan Praktis
- Garis dasar Standard sengaja dibuat lebih luas daripada Lite, namun tetap mendapat manfaat dari dokumentasi dan peninjauan.

## Dokumen Terkait
- [📋 Paket Diperluas](./package-expanded.md)
- [📚 05 Produktivitas](../tutorials/05-productivity.md)
- [🎵 07 Alat Media](../tutorials/07-media-tools.md)
