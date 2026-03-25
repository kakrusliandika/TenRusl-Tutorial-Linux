# 📋 Matriks Port

## Tujuan
Gunakan halaman ini sebagai referensi praktis operasi Coolify.

## Data Terstruktur / Referensi
| Port atau Kelas | Tujuan | Panduan Kebijakan | Validasi |
| --- | --- | --- | --- |
| 22/tcp | manajemen SSH | Tetap terbatas pada jaringan admin tepercaya | `ss -ltnp | grep :22 || true` |
| 80/tcp | Entri HTTP dan aliran sertifikat | Ekspos hanya ketika platform seharusnya melayani lalu lintas web | `ss -ltnp | grep :80 || true` |
| 443/tcp | Entri HTTPS untuk aplikasi yang diterapkan | Ekspos hanya jika lalu lintas TLS dimaksudkan | `ss -ltnp | grep :443 || true` |
| Pendengar admin platform | Tergantung pada instalasi | Dokumentasikan dan batasi secara agresif | `ss -ltnp | grep -Ei "coolify|8000|3000|8080|8443" || true` |
| Backend kontainer | Biasanya swasta atau jembatan-lokal | `Do not publish directly unless reviewed` | `docker ps --format "table {{.Names}}\t{{.Ports}}"` |

## Cuplikan Perintah
```bash
ss -ltnup
docker ps --format "table {{.Names}}	{{.Ports}}"
sudo nft list ruleset 2>/dev/null | sed -n "1,120p" || true
```

## Catatan Interpretasi
- Penemuan mengalahkan asumsi.
- Tinjau status platform setelah setiap penerapan, peningkatan, atau pemulihan.
- Catat beban kerja mana yang bersifat stateful sebelum Anda menjanjikan pemulihan.

## Dokumen Terkait
- [💾 Cadangkan Konfigurasi Coolify](../how-to/backup-config.md)
- [📋 Peta Layanan](./service-map.md)
- [💾 Cadangan](../../../../backup/index.md)
