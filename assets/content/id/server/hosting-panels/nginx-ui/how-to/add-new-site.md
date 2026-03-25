# 🌐 Tambahkan Situs Baru

## Tujuan
Buat situs baru di Nginx UI dan verifikasi server web, runtime, dan status DNS yang dihasilkan dari shell.

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
### 1. Siapkan DNS dan catat root dan runtime dokumen yang dimaksud
```bash
dig +short example.com
getent hosts example.com
```

### 2. Buat situs melalui alur kerja panel saat ini, lalu periksa apa yang berubah pada host
```bash
sudo find /etc/nginx -maxdepth 4 -type f -mtime -2 2>/dev/null | sort | tail -n 40

sudo ss -ltnp | egrep ':(80|443)' || true
```

### 3. Uji respons HTTP dan HTTPS dari shell
```bash
curl -I http://example.com
curl -Ik https://example.com
```

### 4. Tinjau log layanan terkini jika situs tidak menjawab seperti yang diharapkan
```bash
sudo journalctl -u nginx -u apache2 -u httpd -u php8.2-fpm -u php8.1-fpm -u php-fpm -n 80 --no-pager 2>/dev/null || true
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
