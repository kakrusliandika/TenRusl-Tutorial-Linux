# 📋 Tata Letak Direktori

## Tujuan
Gunakan halaman ini untuk mengetahui di mana Nginx UI menyimpan atau memengaruhi konfigurasi, konten, dan status runtime di Linux.

## Data Terstruktur / Referensi
| Daerah | Lokasi Khas atau Aturan Penemuan | Mengapa Itu Penting |
| --- | --- | --- |
| Akar konfigurasi yang dikelola panel | Temukan dengan shell, jangan menganggap label UI sudah cukup | `sudo find /etc/nginx /var/log/nginx /usr/share/nginx -maxdepth 3 -type d 2>/dev/null | sort` |
| File konfigurasi yang baru saja diubah | Berguna setelah tindakan panel untuk melihat apa yang sebenarnya berubah | `sudo find /etc/nginx -maxdepth 4 -type f -mtime -2 2>/dev/null | sort | tail -n 40` |
| Akar jaring | `Nginx UI generally manages server blocks, upstreams, and TLS material tied to the Nginx config tree. Verify generated config with `nginx -t` after every UI change.` | `Confirm ownership and backup scope per site.` |
| Status database atau waktu proses | Tergantung pada produk dan pilihan pemasangan | Inventarisasi layanan lokal sebelum menjanjikan cakupan cadangan. |

## Cuplikan Perintah
```bash
sudo find /etc/nginx /var/log/nginx /usr/share/nginx -maxdepth 3 -type d 2>/dev/null | sort

sudo find /etc/nginx -maxdepth 4 -type f -mtime -2 2>/dev/null | sort | tail -n 40
```

## Catatan Interpretasi
- Metode instalasi Nginx UI penting. Beberapa penerapan menjalankannya sebagai layanan asli, yang lainnya dalam container. Jaga agar server web dan status panel dapat ditemukan dari shell sebelum mengandalkan UI.
- Lebih memilih perintah penemuan daripada asumsi hardcode ketika metode instalasi atau rilis mungkin berbeda.
- Simpan inventaris direktori di samping prosedur pencadangan sehingga cakupan pemulihan jelas.

## Dokumen Terkait
- [💾 Konfigurasi Panel Cadangan](../how-to/backup-config.md)
- [📋 Peta Layanan](./service-map.md)
