# ✅ Tutorial 06: Verifikasi Aplikasi

## Tujuan
Memastikan aplikasi web hasil restore benar-benar berfungsi sebagai aplikasi, bukan hanya sebagai file yang berhasil diekstrak dan proses yang berhasil start.

## Prasyarat
- Akses shell ke host aplikasi atau target restore.
- Mengetahui root aplikasi, jalur upload, dan engine database.
- Lingkungan staging atau lab yang aman untuk validasi restore.

## Asumsi Lingkungan
- Stack staging hasil restore sudah berjalan.

## Langkah Berurutan
### 1. Periksa HTTP dan log service
Validasi respons transport dan perilaku runtime sekaligus.

```bash
curl -I http://127.0.0.1 2>/dev/null || true
journalctl -u nginx -u apache2 -u httpd -u php*-fpm -n 100 --no-pager 2>/dev/null || true
```

### 2. Jalankan smoke test dan catat hasilnya
Drill restore belum selesai sampai hasilnya ditulis.

```bash
curl -H 'Host: example.com' http://127.0.0.1/ 2>/dev/null | head -n 30
printf '%s\n' "restore_test=$(date +%F)" 'result=pass-or-fail' 'notes=update web restore runbook if needed' >> /srv/backup/web/example.com/restore-history.txt
tail -n 5 /srv/backup/web/example.com/restore-history.txt
```

## ✅ Titik Validasi
- Respons HTTP, log, dan perilaku aplikasi dasar lolos terhadap standar rehearsal yang Anda tetapkan.
- File restore history menangkap apa yang masih perlu diperbaiki untuk run berikutnya.

## ⚠️ Peringatan
- Jangan mengklaim workflow ini terpercaya jika hanya web server yang start tetapi aplikasi masih gagal secara fungsional.

## Pembersihan / Pemeriksaan Akhir
- Tinjau kembali index modul dan jadwalkan restore rehearsal berikutnya.

## Tutorial Berikutnya
[💾 Backup Aplikasi Web](../index.md)
