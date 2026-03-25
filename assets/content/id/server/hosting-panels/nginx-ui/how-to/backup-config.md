# 💾 Konfigurasi Panel Cadangan

## Tujuan
Tangkap konfigurasi Nginx UI dan konteks Linux di sekitarnya sehingga panel dapat dipulihkan dengan perutean dan ekspektasi layanan yang sama.

## Kapan Menggunakan Prosedur Ini
Gunakan ini selama jendela perubahan nyata pada host di mana panel dan akses SSH tetap tersedia.

## Prasyarat
- Akses SSH independen dari panel.
- Nama host pementasan atau produksi jika tugas menyentuh perutean atau TLS.
- Jalur pencadangan atau pengembalian sebelum perubahan dimulai.

## Asumsi Lingkungan
- Kata-kata UI mungkin berbeda berdasarkan rilis, namun verifikasi sisi host tetap stabil.
- Metode instalasi Nginx UI penting. Beberapa penerapan menjalankannya sebagai layanan asli, yang lainnya dalam container. Jaga agar server web dan status panel dapat ditemukan dari shell sebelum mengandalkan UI.

## Langkah Tepat
### 1. Temukan konfigurasi dan lokasi konten yang relevan
```bash
sudo find /etc/nginx /var/log/nginx /usr/share/nginx -maxdepth 3 -type d 2>/dev/null | sort

sudo find /etc/nginx -maxdepth 4 -type f -mtime -2 2>/dev/null | sort | tail -n 40
```

### 2. Ambil inventaris layanan dan status pendengar sebelum pengarsipan
```bash
systemctl list-units --type=service | grep -Ei 'nginx|nginx-ui' || true
docker ps --format 'table {{.Names}}	{{.Status}}	{{.Ports}}' 2>/dev/null || true

ss -ltnp
```

### 3. Buat arsip panel dan status situs
```bash
sudo tar -czf /root/panel-backup-$(date +%F-%H%M).tgz /www /etc/nginx /etc/apache2 /etc/php /home 2>/dev/null || true
sudo mysqldump --all-databases --single-transaction --quick --lock-tables=false > /root/panel-databases-$(date +%F-%H%M).sql 2>/dev/null || true
```

## ✅ Pos Pemeriksaan Validasi
- Status tingkat shell sesuai dengan maksud panel.
- Layanan, pendengar, dan log tetap dapat dimengerti setelah perubahan.

## Pemecahan masalah
- Bandingkan maksud panel dengan konfigurasi sebenarnya, pendengar, dan log sebelum membuat lebih banyak perubahan UI.
- Pisahkan masalah DNS, layanan web, runtime, dan database alih-alih mengasumsikan satu akar permasalahan.

## ↩️ Catatan Kembalikan / Pemulihan
- Kembalikan konfigurasi terakhir yang diketahui baik atau hapus perubahan yang gagal sebelum berimprovisasi lebih jauh.
- Simpan satu cadangan yang belum tersentuh sebelum jendela pemeliharaan saat ini.

## Dokumen Terkait
- [📋 Peta Layanan](../reference/service-map.md)
- [📋 Tata Letak Direktori](../reference/directory-layout.md)
- [🛡️ Keamanan](../../../../security/index.md)
