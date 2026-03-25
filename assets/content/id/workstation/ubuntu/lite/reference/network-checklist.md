# 📋 Daftar Periksa Jaringan

## Tujuan
Gunakan daftar periksa ini untuk mengonfirmasi bahwa workstation Lite memiliki fundamental jaringan yang stabil sebelum Anda menambahkan lapisan paket besar.

## Materi Referensi Terstruktur
| Periksa | Mengapa itu penting | Perintah |
|---|---|---|
| Deteksi antarmuka | Mengonfirmasi kernel melihat perangkat berkabel dan nirkabel | `ip -br link` |
| pengalamatan IP | Mengonfirmasi DHCP atau konfigurasi statis berfungsi | `ip -br addr` |
| Rute bawaan | Mengonfirmasi adanya jalur keluar | `ip route` |
| Resolusi DNS | Mengonfirmasi pemasangan paket dan penjelajahan akan berfungsi | `resolvectl status` atau `getent hosts ubuntu.com` |
| Sinkronisasi waktu | Validasi paket dan TLS bergantung pada waktu yang tepat | `timedatectl` |
| Keterjangkauan paket | Mengonfirmasi konektivitas dasar | `ping -c 4 1.1.1.1` dan `ping -c 4 ubuntu.com` |

## Perintah / Potongan Pemeriksaan
```bash
ip -br link
ip -br addr
ip route
getent hosts ubuntu.com
timedatectl
```

## Catatan Praktis
- Jalankan daftar periksa ini setelah instalasi dan lagi setelah Wi-Fi atau VPN berubah.
- Browser yang membuka halaman cache tidak cukup menjadi bukti bahwa jaringan dalam keadaan sehat.
- Masalah sinkronisasi waktu dapat terlihat seperti masalah paket atau sertifikat sampai Anda memeriksanya secara langsung.

## Dokumen Terkait
- [🖥️ 03 Instal Inti](../tutorials/03-install-core.md)
- [🧩 Aktifkan Driver Pihak Ketiga](../how-to/enable-third-party-drivers.md)
- [📋 Daftar Periksa Pasca Pemasangan](./post-install-checklist.md)
