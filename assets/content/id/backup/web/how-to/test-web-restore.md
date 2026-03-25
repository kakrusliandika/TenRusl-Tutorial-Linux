# 🛠️ Uji Restore Web

## Tujuan
Melakukan rehearsal restore web di staging atau lab dan memverifikasi bukan hanya ekstraksi file, tetapi perilaku aplikasi yang benar-benar terlihat oleh pengguna.

## Kasus Penggunaan
Gunakan ini untuk membuktikan bahwa seluruh workflow backup web memang dapat dipercaya sebelum insiden berikutnya atau deployment berisiko.

## Prasyarat
- Target restore sudah ada dengan file dan database yang telah direstore.
- Anda dapat menjangkau aplikasi melalui loopback, DNS override lokal, atau hostname staging.
- Log dapat diakses dari shell.

## Asumsi Lingkungan
- Target tetap terisolasi dari produksi atau hanya dapat diakses melalui jalur uji yang terkendali.
- Tujuannya adalah validasi end-to-end, bukan hanya keberhasilan checksum.

## Langkah Tepat
### 1. Periksa HTTP dan header secara lokal
Mulai dari respons dasar sebelum tes fungsional yang lebih dalam.

```bash
curl -I http://127.0.0.1 2>/dev/null || true
curl -k -I https://127.0.0.1 2>/dev/null || true
```

### 2. Tinjau log aplikasi dan path kritis
Aplikasi hasil restore bisa tetap rusak meskipun menjawab HTTP.

```bash
journalctl -u nginx -u apache2 -u httpd -u php*-fpm -n 100 --no-pager 2>/dev/null || true
ls -ld /var/www/example.com /var/www/example.com/storage 2>/dev/null || true
```

### 3. Jalankan smoke test fungsional
Uji halaman login, homepage, atau endpoint penting dengan jalur yang sama seperti yang dibutuhkan user.

```bash
curl -H 'Host: example.com' http://127.0.0.1/ 2>/dev/null | head -n 20
```

## ✅ Titik Validasi
- HTTP merespons sebagaimana mestinya dan log service tidak menunjukkan kegagalan runtime yang kritis.
- Upload, halaman hasil generate, dan fungsi yang bergantung pada database berjalan sesuai target recovery aplikasi.
- Operator mencatat setiap perbaikan manual yang masih diperlukan selama rehearsal.

## Pemecahan Masalah
- Jangan menganggap restore telah terverifikasi jika hanya proses web server yang start tetapi aplikasi masih error.
- Jauhkan DNS produksi atau public load balancer dari target rehearsal.

## ↩️ Catatan Rollback atau Pemulihan
- Tulis ringkasan rehearsal singkat dan simpan di dekat runbook backup.

## Dokumen Terkait
- [🧠 Rehearsal Restore](../concepts/restore-rehearsal.md)
- [📚 Checklist Restore](../reference/restore-checklist.md)
- [✅ Tutorial 06: Verifikasi Aplikasi](../tutorials/06-verify-application.md)
