# 🌐 Matriks Port

## Tujuan
Gunakan matriks ini untuk menjaga set pendengar dasar Debian tetap kecil dan disengaja sebelum layanan khusus peran ditambahkan.

## Data Terstruktur / Referensi
| Port atau Aliran | Arah | Tujuan | Panduan Kebijakan | Validasi |
| --- | --- | --- | --- | --- |
| 22/tcp | Masuk | administrasi SSH | Terbuka hanya untuk jaringan manajemen tepercaya | `ss -ltnp | grep :22` |
| 80/tcp | Masuk | Lalu lintas web opsional di masa mendatang | Hanya setelah layanan HTTP nyata ada | `ss -ltnp | grep :80 || true` |
| 443/tcp | Masuk | Lalu lintas HTTPS masa depan opsional | Hanya setelah layanan HTTPS yang sebenarnya ada | `ss -ltnp | grep :443 || true` |
| Paket keluar | Keluar | Pembaruan dan akses repositori | Izinkan sesuai dengan kebijakan repositori | `curl -I https://example.com || true` |

## Cuplikan Perintah
```bash
ss -ltnup
sudo iptables -S 2>/dev/null | sed -n "1,80p" || true
sudo nft list ruleset 2>/dev/null | sed -n "1,120p" || true
```

## Catatan Interpretasi
- Host dasar jarang memerlukan lebih dari SSH masuk sebelum beban kerja ditambahkan.
- Dokumentasikan setiap pengecualian sehingga operator selanjutnya mengetahui apakah pengecualian tersebut milik OS dasar atau peran aplikasi.
- Tutup pendengar basis data publik kecuali ada persyaratan yang ditinjau secara eksplisit.

## Dokumen Terkait
- [🛡️ Konfigurasikan Firewall](../how-to/configure-firewall.md)
- [🛡️ Tutorial 07: Keamanan](../tutorials/07-security.md)
