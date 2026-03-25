# 🔒 Aktifkan HTTPS

## Tujuan
Jalankan alur kerja aktifkan https untuk Caddy dengan validasi berbasis shell.

## Kapan Menggunakan Prosedur Ini
Gunakan ini selama jendela perubahan layanan edge yang sebenarnya atau selama latihan lab sebelum penggunaan produksi.

## Prasyarat
- Nama host, layanan backend, dan akses SSH.
- Jalur rollback untuk konfigurasi dan status sertifikat.

## Asumsi Lingkungan
- Caddy harus menjadi pemilik yang disengaja dari 80 dan 443 kecuali rencana migrasi menyatakan sebaliknya.

## Langkah Tepat
```bash
dig +short example.com
sudo ss -ltnp | egrep ":(80|443)" || true
curl -Ik https://example.com
openssl s_client -connect example.com:443 -servername example.com </dev/null | openssl x509 -noout -subject -issuer -dates
sudo journalctl -u caddy -n 100 --no-pager | tail -n 40
```

## ✅ Pos Pemeriksaan Validasi
- Konfigurasi, pendengar, dan perilaku HTTP atau HTTPS langsung semuanya setuju.

## Pemecahan masalah
- Pisahkan kegagalan DNS, pendengar, sertifikat, dan hulu alih-alih menebak-nebak.

## ↩️ Catatan Kembalikan / Pemulihan
- Kembalikan ke Caddyfile terakhir yang diketahui bagus dan arsip negara sebelum berimprovisasi pada kondisi yang rusak.

## Dokumen Terkait
- [📋 Peta Layanan](../reference/service-map.md)
- [💾 Cadangan](../../../../backup/index.md)
