# 📋 Matriks Port

## Tujuan
Gunakan halaman ini sebagai referensi praktis pengoperasian tepi Caddy.

## Data Terstruktur / Referensi
| Port | Tujuan | Panduan Kebijakan | Validasi |
| --- | --- | --- | --- |
| 22/tcp | manajemen SSH | Tetap terbatas pada jaringan admin tepercaya | `ss -ltnp | grep :22 || true` |
| 80/tcp | HTTP dan ACME menantang lalu lintas | Buka ketika Caddy harus menerima HTTP publik | `ss -ltnp | grep :80 || true` |
| 443/tcp | lalu lintas HTTPS | Buka saat Caddy menyajikan TLS | `ss -ltnp | grep :443 || true` |
| 2019/tcp | API admin Caddy jika diaktifkan | `Keep disabled or strictly restricted unless intentionally used` | `ss -ltnp | grep :2019 || true` |

## Cuplikan Perintah
```bash
ss -ltnup
sudo nft list ruleset 2>/dev/null | sed -n "1,120p" || true
```

## Catatan Interpretasi
- Cadangkan konfigurasi dan status jika Anda menginginkan jalur pemulihan yang bersih.
- Tinjau peta layanan setelah setiap pengeditan konfigurasi, peristiwa sertifikat, atau pemindahan backend.

## Dokumen Terkait
- [💾 Cadangkan Konfigurasi Caddy](../how-to/backup-config.md)
- [📋 Peta Layanan](./service-map.md)
- [💾 Cadangan](../../../../backup/index.md)
