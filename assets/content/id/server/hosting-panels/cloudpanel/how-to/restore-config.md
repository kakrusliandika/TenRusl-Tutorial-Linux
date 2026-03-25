# ↩️ Kembalikan Konfigurasi Panel

## Tujuan
Pulihkan konfigurasi CloudPanel dan status hosting sekitarnya setelah perubahan yang gagal, pembangunan kembali host, atau pengujian migrasi.

## Kapan Menggunakan Prosedur Ini
Gunakan ini selama jendela perubahan nyata pada host di mana panel dan akses SSH tetap tersedia.

## Prasyarat
- Akses SSH independen dari panel.
- Nama host pementasan atau produksi jika tugas menyentuh perutean atau TLS.
- Jalur pencadangan atau pengembalian sebelum perubahan dimulai.

## Asumsi Lingkungan
- Kata-kata UI mungkin berbeda berdasarkan rilis, namun verifikasi sisi host tetap stabil.
- CloudPanel biasanya mengelola Nginx, PHP-FPM, dan layanan database dengan root situs di bawah `/home/*/htdocs` atau tata letak ramah cloud serupa. Nama layanan yang tepat dapat bervariasi berdasarkan versi.

## Langkah Tepat
### 1. Periksa host saat ini sebelum menimpa status
```bash
systemctl list-units --type=service | grep -Ei 'nginx|php.*fpm|mysql|mariadb|redis|cloudpanel|clp' || true

ss -ltnp
```

### 2. Menghentikan atau mengisolasi layanan yang dikelola panel selama pemulihan file
```bash
sudo systemctl stop nginx apache2 httpd php8.2-fpm php8.1-fpm php-fpm mysql mariadb 2>/dev/null || true
```

### 3. Pulihkan file dan, jika diperlukan, status database
```bash
sudo tar -xzf /root/panel-backup-latest.tgz -C /
mysql < /root/panel-databases-latest.sql 2>/dev/null || mariadb < /root/panel-databases-latest.sql 2>/dev/null || true
```

### 4. Mulai layanan dan validasi lagi
```bash
sudo systemctl start nginx apache2 httpd php8.2-fpm php8.1-fpm php-fpm mysql mariadb 2>/dev/null || true
ss -ltnp
curl -I http://example.com
curl -Ik https://example.com
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
