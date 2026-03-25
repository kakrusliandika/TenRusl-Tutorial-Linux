# 🧰 Persyaratan Perangkat Keras

## Tujuan
Gunakan halaman ini sebagai dasar pengukuran praktis untuk server Ubuntu sebelum pertumbuhan spesifik aplikasi mengubah persyaratannya.

## Data Terstruktur / Referensi
| Sumber | Minimal Lab | Dasar Praktis | Interpretasi |
| --- | --- | --- | --- |
| CPU | 2vCPU | 4 vCPU atau lebih | Ruang kepala yang cukup untuk pekerjaan paket, log, pencadangan, dan peran aplikasi pertama. |
| Ingatan | 2 GiB | 4-8 GiB | Mencegah layanan dasar dan pembaruan bersaing dengan memori beban kerja terlalu dini. |
| Disk sistem | 20 GiB | 40 GiB atau lebih | Memberikan ruang untuk paket, log, artefak rollback, dan snapshot. |
| Disk data | Opsional | Pisahkan disk atau volume | Direkomendasikan untuk data layanan, akar web, atau pementasan cadangan. |
| Jaringan | 1 NIC stabil | Pengalamatan yang dapat diprediksi ditambah DNS | `Management access and service reachability depend on consistent networking.` |

## Cuplikan Perintah
```bash
lscpu | sed -n "1,20p"
free -h
lsblk -f
ip -br addr
```

## Catatan Interpretasi
- Ubuntu menoleransi jejak lab yang kecil, namun operasi server bergaya cloud mendapat manfaat dari RAM dan disk tambahan untuk log, pekerjaan paket, dan agen otomasi.
- Ukuran untuk log, pencadangan, dan jendela pemeliharaan, tidak hanya untuk boot pertama.
- Jika host nantinya akan menjalankan panel, reverse proxy, atau container, anggarankan di atas minimum OS dasar.

## Dokumen Terkait
- [📦 Dasar Paket](./package-baseline.md)
- [🧪 Tutorial 02: Prapemeriksaan Instalasi](../tutorials/02-install-preflight.md)
