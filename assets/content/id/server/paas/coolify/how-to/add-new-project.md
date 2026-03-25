# 🚀 Tambahkan Proyek Baru

## Tujuan
Jalankan alur kerja penambahan proyek baru untuk Coolify dengan validasi sisi Linux.

## Kapan Menggunakan Prosedur Ini
Gunakan ini selama jendela perubahan Coolify yang sebenarnya atau selama latihan lab sebelum penggunaan produksi.

## Prasyarat
- Coolify dapat dijangkau atau dipulihkan.
- Akses SSH tersedia secara independen dari platform.

## Asumsi Lingkungan
- `/data/coolify` umum terjadi tetapi masih harus diverifikasi di host sebenarnya.

## Langkah Tepat
### 1. Lakukan tugas platform dan catat maksudnya
- Nama proyek atau layanan
- Domain atau rute
- Dampak stateful versus stateless

### 2. Segera periksa status shell-visible
```bash
docker ps --format 'table {{.Names}}\t{{.Status}}\t{{.Ports}}'
docker volume ls
sudo ss -ltnp
curl -I http://example.com
curl -Ik https://example.com || true
```

## ✅ Pos Pemeriksaan Validasi
- Maksud platform cocok dengan Docker, volume, pendengar, dan status HTTP.

## Pemecahan masalah
- Pisahkan kegagalan kontrol sumber, build, container, domain, dan volume alih-alih mengasumsikan satu akar permasalahan.

## ↩️ Catatan Kembalikan / Pemulihan
- Simpan setidaknya satu arsip konfigurasi yang dikenal baik sebelum perubahan berisiko.

## Dokumen Terkait
- [📋 Peta Layanan](../reference/service-map.md)
- [💾 Cadangan](../../../../backup/index.md)
