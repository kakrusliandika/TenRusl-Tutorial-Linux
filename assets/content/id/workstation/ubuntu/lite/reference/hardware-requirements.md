# 📋 Persyaratan Perangkat Keras

## Tujuan
Gunakan panduan perangkat keras ini untuk menilai apakah Ubuntu Lite benar-benar cocok untuk stasiun kerja target.

## Materi Referensi Terstruktur
| Sumber Daya | Hampir tidak bisa diterapkan | Nyaman untuk Lite | Catatan |
|---|---|---|---|
| CPU | 2 core dengan dukungan 64-bit | 4 atau lebih inti modern | Periksa perilaku manajemen daya secara terpisah jika stasiun kerja juga menjalankan lab lokal |
| RAM | 4 GiB | 8 GiB atau lebih | Lite mendapat manfaat besar dari lebih banyak RAM ketika browser dan alat pengembang muncul nanti |
| Penyimpanan | 32 hingga 64 GiB | SSD 128 GiB atau lebih | Tinggalkan ruang kepala untuk pembaruan, log, cache browser, dan paket opsional |
| Grafik | GPU terintegrasi dasar | GPU diskrit apa pun yang terintegrasi atau didukung dan stabil | Kualitas driver lebih penting daripada tenaga mentah untuk Lite |
| Jaringan | Wi-Fi berkabel atau didukung | Wi-Fi yang andal plus dukungan Ethernet atau dock | Tes setelah instalasi, bukan hanya di sesi live |

## Perintah / Potongan Pemeriksaan
```bash
lscpu | sed -n '1,20p'
free -h
lsblk -d -o NAME,SIZE,MODEL,ROTA
lspci -nnk | grep -A3 -Ei 'VGA|3D|Network'
```

## Catatan Praktis
- Lite dapat berjalan pada perangkat keras yang lebih lemah dibandingkan Standard, namun perangkat keras yang sangat lemah masih memerlukan ekspektasi yang realistis.
- Penyimpanan SSD meningkatkan kualitas Lite lebih dari yang diperkirakan banyak pengguna.
- Menunda, melanjutkan, dan stabilitas Wi-Fi lebih penting daripada angka benchmark mentah pada laptop sungguhan.

## Dokumen Terkait
- [🧠 Lite vs Standard](../concepts/lite-vs-standard.md)
- [📋 02 Instal Preflight](../tutorials/02-install-preflight.md)
- [📋 Daftar Periksa Jaringan](./network-checklist.md)
