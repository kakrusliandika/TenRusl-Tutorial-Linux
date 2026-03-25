# 📋 Peta Layanan

## Tujuan
Gunakan halaman ini sebagai referensi praktis operasi Coolify.

## Data Terstruktur / Referensi
| Daerah | Apa yang Harus Dikonfirmasi | Mengapa Itu Penting |
| --- | --- | --- |
| mesin buruh port | Berjalan, dapat dimulai ulang, dan sehat | Status platform bergantung padanya secara langsung. |
| Mendinginkan wadah bidang kendali | `Visible and stable in `docker ps`` | Jika tidak ada, UI bukanlah satu-satunya masalah. |
| `Proxy or ingress layer` | Pendengar dan rute cocok dengan domain yang dituju | Diperlukan untuk jangkauan eksternal. |
| Wadah aplikasi | Berjalan dengan gambar, port, dan volume yang diharapkan | Diperlukan untuk pemecahan masalah dan rollback per aplikasi. |

## Cuplikan Perintah
```bash
docker ps --format 'table {{.Names}}	{{.Status}}	{{.Ports}}'
docker volume ls
systemctl status docker --no-pager

systemctl --failed
ss -ltnp
```

## Catatan Interpretasi
- Penemuan mengalahkan asumsi.
- Tinjau status platform setelah setiap penerapan, peningkatan, atau pemulihan.
- Catat beban kerja mana yang bersifat stateful sebelum Anda menjanjikan pemulihan.

## Dokumen Terkait
- [💾 Cadangkan Konfigurasi Coolify](../how-to/backup-config.md)
- [📋 Peta Layanan](./service-map.md)
- [💾 Cadangan](../../../../backup/index.md)
