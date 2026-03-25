# 📋 Matriks Port

## Tujuan
Gunakan matriks ini untuk memisahkan lalu lintas hosting Nginx UI dari lalu lintas manajemen dan untuk menjaga layanan data lokal saja agar tidak menjadi perhatian publik.

## Data Terstruktur / Referensi
| Port atau Kelas | Tujuan | Panduan Kebijakan | Validasi |
| --- | --- | --- | --- |
| 22/tcp | manajemen SSH | Batasi hanya pada jaringan admin tepercaya | `ss -ltnp | grep :22 || true` |
| 80/tcp | Lalu lintas situs HTTP dan tantangan sertifikat | Buka hanya jika tuan rumah harus menjawab lalu lintas web | `ss -ltnp | grep :80 || true` |
| 443/tcp | Lalu lintas situs HTTPS | Terbuka hanya untuk situs yang dituju | `ss -ltnp | grep :443 || true` |
| Pendengar admin panel | Tergantung pada instalasi | Batasi secara agresif; temukan pendengar sebenarnya dari shell | `ss -ltnp | grep -Ei "panel|bt|clp|nginx-ui|8443|8888|7800" || true` |
| Port basis data | Biasanya hanya lokal | `Do not publish unless there is a reviewed requirement` | `ss -ltnp | grep -Ei ":3306|:5432|:6379" || true` |

## Cuplikan Perintah
```bash
ss -ltnup
sudo nft list ruleset 2>/dev/null | sed -n "1,120p" || true
sudo iptables -S 2>/dev/null | sed -n "1,120p" || true
```

## Catatan Interpretasi
- Pendengar admin panel harus diperlakukan secara terpisah dari lalu lintas situs yang berhubungan dengan pelanggan.
- Jika pendengar basis data muncul di alamat publik, hentikan dan verifikasi apakah paparan tersebut disengaja.
- Jaga agar firewall upstream dan host selaras dengan kebijakan port terdokumentasi yang sama.

## Dokumen Terkait
- [🔒 Menyiapkan SSL](../how-to/set-up-ssl.md)
- [🔐 08 Zona Admin](../tutorials/08-admin-zone.md)
- [✅ 09 Pengerasan](../tutorials/09-hardening.md)
