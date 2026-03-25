# 📋 Peta Layanan

## Tujuan
Gunakan halaman ini sebagai referensi praktis pengoperasian tepi Caddy.

## Data Terstruktur / Referensi
| Daerah | Apa yang Harus Dikonfirmasi | Mengapa Itu Penting |
| --- | --- | --- |
| Layanan kedi | Berjalan, dapat dimuat ulang, dan masuk dengan bersih | `Edge ownership must be explicit.` |
| File Caddy | Berlaku sebelum memuat ulang atau memulai ulang | Mencegah kesalahan ketik konfigurasi yang menyebabkan pemadaman tepi. |
| Status sertifikat | Hadir dan dapat dibaca di bawah akun layanan | Diperlukan untuk kontinuitas TLS dan cakupan cadangan. |
| Layanan ujung belakang | Dapat dijangkau tanpa proxy | Memisahkan kegagalan edge dari kegagalan aplikasi. |

## Cuplikan Perintah
```bash
sudo systemctl status caddy --no-pager
sudo caddy validate --config /etc/caddy/Caddyfile
sudo journalctl -u caddy -n 80 --no-pager
sudo ss -ltnp | egrep ":(80|443|2019)" || true
```

## Catatan Interpretasi
- Cadangkan konfigurasi dan status jika Anda menginginkan jalur pemulihan yang bersih.
- Tinjau peta layanan setelah setiap pengeditan konfigurasi, peristiwa sertifikat, atau pemindahan backend.

## Dokumen Terkait
- [💾 Cadangkan Konfigurasi Caddy](../how-to/backup-config.md)
- [📋 Peta Layanan](./service-map.md)
- [💾 Cadangan](../../../../backup/index.md)
