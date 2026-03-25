# 📋 02 Prasyarat

## Tujuan
Tingkatkan alur penerapan Coolify sambil menjaga Docker, DNS, pencadangan, dan akses admin tetap terlihat dari Linux.

## Prasyarat
- Akses SSH dan jendela pemeliharaan.
- Domain uji atau sumber aplikasi jika relevan.

## Asumsi Lingkungan
- Platform ini bukan satu-satunya sumber utama tentang status runtime.

## Langkah Berurutan
### 1. Lakukan tugas platform khusus tahapan
- Catat nama aplikasi, rute, dan kebutuhan ketekunan.

### 2. Segera periksa status shell-visible
```bash
docker ps --format 'table {{.Names}}	{{.Status}}	{{.Ports}}'
docker volume ls
systemctl status docker --no-pager

ss -ltnp
curl -I http://example.com || true
curl -Ik https://example.com || true
```

## ✅ Pos Pemeriksaan Validasi
- Maksud platform cocok dengan Docker dan status rute.

## ⚠️ Peringatan
- Jangan lebih mempercayai UI daripada shell saat peluncuran awal.

## Pembersihan / Pasca-Pemeriksaan
- Simpan wadah, volume, domain, dan catatan cadangan.

## Tutorial Selanjutnya
[➡️ 03 Basis Instal](./03-install-base.md)

## Dokumen Terkait
- [📋 Peta Layanan](../reference/service-map.md)
- [💾 Cadangan](../../../../backup/index.md)
