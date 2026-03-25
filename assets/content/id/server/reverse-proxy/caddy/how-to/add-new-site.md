# 🌐 Tambahkan Situs Baru

## Tujuan
Jalankan alur kerja penambahan situs baru untuk Caddy dengan validasi berbasis shell.

## Kapan Menggunakan Prosedur Ini
Gunakan ini selama jendela perubahan layanan edge yang sebenarnya atau selama latihan lab sebelum penggunaan produksi.

## Prasyarat
- Nama host, layanan backend, dan akses SSH.
- Jalur rollback untuk konfigurasi dan status sertifikat.

## Asumsi Lingkungan
- Caddy harus menjadi pemilik yang disengaja dari 80 dan 443 kecuali rencana migrasi menyatakan sebaliknya.

## Langkah Tepat
```caddyfile
example.com {
    encode zstd gzip
    reverse_proxy 127.0.0.1:3000
}
```

```bash
sudo caddy validate --config /etc/caddy/Caddyfile
sudo systemctl reload caddy
curl -I http://example.com
curl -Ik https://example.com || true
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
