# 📋 Tata Letak Direktori

## Tujuan
Gunakan halaman ini untuk mengetahui di mana aaPanel menyimpan atau memengaruhi konfigurasi, konten, dan status runtime di Linux.

## Data Terstruktur / Referensi
| Daerah | Lokasi Khas atau Aturan Penemuan | Mengapa Itu Penting |
| --- | --- | --- |
| Akar konfigurasi yang dikelola panel | Temukan dengan shell, jangan menganggap label UI sudah cukup | `sudo find /www /etc -maxdepth 3 -type d \( -name server -o -name panel -o -name wwwroot -o -name backup \) 2>/dev/null | sort` |
| File konfigurasi yang baru saja diubah | Berguna setelah tindakan panel untuk melihat apa yang sebenarnya berubah | `sudo find /www/server /etc/nginx /etc/apache2 -maxdepth 3 -type f -mtime -2 2>/dev/null | sort | tail -n 40` |
| Akar jaring | `aaPanel often creates site roots under `/www/wwwroot`, but always verify the actual generated path and ownership on the host.` | `Confirm ownership and backup scope per site.` |
| Status database atau waktu proses | Tergantung pada produk dan pilihan pemasangan | Inventarisasi layanan lokal sebelum menjanjikan cakupan cadangan. |

## Cuplikan Perintah
```bash
sudo find /www /etc -maxdepth 3 -type d \( -name server -o -name panel -o -name wwwroot -o -name backup \) 2>/dev/null | sort

sudo find /www/server /etc/nginx /etc/apache2 -maxdepth 3 -type f -mtime -2 2>/dev/null | sort | tail -n 40
```

## Catatan Interpretasi
- aaPanel umumnya mengelola layanan gaya LNMP atau LAMP dan menyimpan status milik panel di bawah `/www/server` ditambah akar terkait. Kombinasi paket yang tepat bervariasi berdasarkan pilihan instalasi.
- Lebih memilih perintah penemuan daripada asumsi hardcode ketika metode instalasi atau rilis mungkin berbeda.
- Simpan inventaris direktori di samping prosedur pencadangan sehingga cakupan pemulihan jelas.

## Dokumen Terkait
- [💾 Konfigurasi Panel Cadangan](../how-to/backup-config.md)
- [📋 Peta Layanan](./service-map.md)
