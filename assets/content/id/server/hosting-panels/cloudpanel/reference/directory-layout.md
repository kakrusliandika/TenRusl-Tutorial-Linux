# 📋 Tata Letak Direktori

## Tujuan
Gunakan halaman ini untuk mengetahui di mana CloudPanel menyimpan atau memengaruhi konfigurasi, konten, dan status runtime di Linux.

## Data Terstruktur / Referensi
| Daerah | Lokasi Khas atau Aturan Penemuan | Mengapa Itu Penting |
| --- | --- | --- |
| Akar konfigurasi yang dikelola panel | Temukan dengan shell, jangan menganggap label UI sudah cukup | `sudo find /home /etc/nginx /etc/php -maxdepth 3 -type d \( -name htdocs -o -name sites-enabled -o -name php -o -name mysql \) 2>/dev/null | sort` |
| File konfigurasi yang baru saja diubah | Berguna setelah tindakan panel untuk melihat apa yang sebenarnya berubah | `sudo find /etc/nginx /etc/php /home -maxdepth 4 -type f -mtime -2 2>/dev/null | sort | tail -n 40` |
| Akar jaring | `CloudPanel site roots are often under `/home/*/htdocs`, but verify owner, document root, and PHP-FPM pool after each site change.` | `Confirm ownership and backup scope per site.` |
| Status database atau waktu proses | Tergantung pada produk dan pilihan pemasangan | Inventarisasi layanan lokal sebelum menjanjikan cakupan cadangan. |

## Cuplikan Perintah
```bash
sudo find /home /etc/nginx /etc/php -maxdepth 3 -type d \( -name htdocs -o -name sites-enabled -o -name php -o -name mysql \) 2>/dev/null | sort

sudo find /etc/nginx /etc/php /home -maxdepth 4 -type f -mtime -2 2>/dev/null | sort | tail -n 40
```

## Catatan Interpretasi
- CloudPanel biasanya mengelola Nginx, PHP-FPM, dan layanan database dengan root situs di bawah `/home/*/htdocs` atau tata letak ramah cloud serupa. Nama layanan yang tepat dapat bervariasi berdasarkan versi.
- Lebih memilih perintah penemuan daripada asumsi hardcode ketika metode instalasi atau rilis mungkin berbeda.
- Simpan inventaris direktori di samping prosedur pencadangan sehingga cakupan pemulihan jelas.

## Dokumen Terkait
- [💾 Konfigurasi Panel Cadangan](../how-to/backup-config.md)
- [📋 Peta Layanan](./service-map.md)
