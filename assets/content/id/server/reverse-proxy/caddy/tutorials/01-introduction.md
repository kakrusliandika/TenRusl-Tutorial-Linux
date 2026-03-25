# 📘 01 Pendahuluan

## Tujuan
Tingkatkan peluncuran Caddy edge sambil menjaga DNS, pendengar, sertifikat, dan jangkauan upstream tetap terlihat dari Linux.

## Prasyarat
- Akses SSH, satu nama host pengujian, dan setidaknya satu layanan backend.

## Asumsi Lingkungan
- Tepian tidak sehat sampai jalur umum dan hulu dapat diuji secara independen.

## Langkah Berurutan
### 1. Lakukan tugas tepi khusus tahapan
- Catat nama host, upstream, dan ekspektasi sertifikat.

### 2. Segera periksa status shell-visible
```bash
sudo caddy validate --config /etc/caddy/Caddyfile
sudo systemctl status caddy --no-pager
sudo ss -ltnp | egrep ":(80|443|2019)" || true
curl -I http://example.com || true
curl -Ik https://example.com || true
```

## ✅ Pos Pemeriksaan Validasi
- Konfigurasi Caddy, pendengar, dan rute semuanya setuju.

## ⚠️ Peringatan
- Jangan salahkan TLS atau proxy sebelum mengonfirmasi DNS dan jangkauan upstream.

## Pembersihan / Pasca-Pemeriksaan
- Simpan nama host, upstream, dan catatan cadangan.

## Tutorial Selanjutnya
[➡️ 02 Prasyarat](./02-prerequisites.md)

## Dokumen Terkait
- [📋 Peta Layanan](../reference/service-map.md)
- [🛡️ Keamanan](../../../../security/index.md)
- [💾 Cadangan](../../../../backup/index.md)
