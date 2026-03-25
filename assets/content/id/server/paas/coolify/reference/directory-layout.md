# 📋 Tata Letak Direktori

## Tujuan
Gunakan halaman ini sebagai referensi praktis operasi Coolify.

## Data Terstruktur / Referensi
| Daerah | Aturan Jalur atau Penemuan | Mengapa Itu Penting |
| --- | --- | --- |
| Akar konfigurasi platform | `/data/coolify` is common; verify actual path | Diperlukan untuk pencadangan konfigurasi dan perencanaan migrasi. |
| Akar data buruh port | `/var/lib/docker` unless overridden | Mempengaruhi penyimpanan gambar, volume, dan perencanaan kapasitas. |
| Inventaris kontainer | `docker ps --format ...` | Menunjukkan platform apa yang sebenarnya dimulai. |
| Persediaan volume | `docker volume ls` | Mendefinisikan cakupan pencadangan stateful. |

## Cuplikan Perintah
```bash
sudo find /data /var/lib/docker -maxdepth 3 -type d \( -name '*coolify*' -o -name volumes -o -name containers \) 2>/dev/null | sort

docker ps --format 'table {{.Names}}	{{.Status}}	{{.Ports}}'
docker volume ls
systemctl status docker --no-pager
```

## Catatan Interpretasi
- Penemuan mengalahkan asumsi.
- Tinjau status platform setelah setiap penerapan, peningkatan, atau pemulihan.
- Catat beban kerja mana yang bersifat stateful sebelum Anda menjanjikan pemulihan.

## Dokumen Terkait
- [💾 Cadangkan Konfigurasi Coolify](../how-to/backup-config.md)
- [📋 Peta Layanan](./service-map.md)
- [💾 Cadangan](../../../../backup/index.md)
