# 📋 Tata Letak Direktori

## Tujuan
Gunakan halaman ini sebagai referensi praktis pengoperasian tepi Caddy.

## Data Terstruktur / Referensi
| Daerah | Jalur | Mengapa Itu Penting |
| --- | --- | --- |
| Konfigurasi utama | `/etc/caddy/Caddyfile` | Definisi perutean tepi utama. |
| Direktori konfigurasi | `/etc/caddy` | Berguna ketika file penyertaan atau tambahan digunakan. |
| Negara dan sertifikat | `/var/lib/caddy` | Sertifikat dan data negara yang harus dibackup. |
| Log | `journalctl -u caddy` | Jalur tinjauan log layanan utama pada host systemd. |

## Cuplikan Perintah
```bash
sudo ls -la /etc/caddy
sudo ls -la /var/lib/caddy 2>/dev/null || true
sudo journalctl -u caddy -n 80 --no-pager
```

## Catatan Interpretasi
- Cadangkan konfigurasi dan status jika Anda menginginkan jalur pemulihan yang bersih.
- Tinjau peta layanan setelah setiap pengeditan konfigurasi, peristiwa sertifikat, atau pemindahan backend.

## Dokumen Terkait
- [💾 Cadangkan Konfigurasi Caddy](../how-to/backup-config.md)
- [📋 Peta Layanan](./service-map.md)
- [💾 Cadangan](../../../../backup/index.md)
