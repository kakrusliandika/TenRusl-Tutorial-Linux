# 🌐 Caddy

## Ringkasan
Modul ini menggunakan Caddy sebagai reverse proxy praktis dan pintu depan TLS untuk layanan Linux. Penekanannya adalah kesiapan DNS, struktur Caddyfile, perilaku HTTPS otomatis, kesehatan layanan, visibilitas upstream, dan cadangan konfigurasi dan status sertifikat.

## Untuk Siapa Bagian Ini
- Operator yang membutuhkan modul ini dalam alur kerja server Linux yang sebenarnya.
- Tim yang masih menginginkan verifikasi dan pemulihan tingkat shell.

## Prasyarat
- Akses SSH, catatan pemeliharaan, dan jalur rollback.
- Kontrol DNS, jaringan, dan penyimpanan yang cukup untuk peran platform.

## Jalur Pembelajaran
1. Baca halaman konsep terlebih dahulu.
2. Gunakan halaman petunjuk untuk tugas terfokus dan pencadangan.
3. Simpan halaman referensi di dekat Anda selama setiap jendela perubahan.
4. Ikuti rangkaian tutorial pada host lab sebelum penggunaan produksi.

## Yang Harus Dibaca Terlebih Dahulu
- Halaman konsep dalam modul ini
- Layanan referensi dan peta port

## Peta Bagian
### Konsep
- [🧠 Ikhtisar Caddy](./concepts/caddy-overview.md)
- [🧠 HTTPS Otomatis](./concepts/automatic-https.md)
- [🧠 Membalikkan Pola Proxy](./concepts/reverse-proxy-patterns.md)

### Petunjuk
- [🌐 Tambahkan Situs Baru](./how-to/add-new-site.md)
- [💾 Cadangkan Konfigurasi Caddy](./how-to/backup-config.md)
- [🔒 Aktifkan HTTPS](./how-to/enable-https.md)
- [↩️ Kembalikan Konfigurasi Caddy](./how-to/restore-config.md)

### Referensi
- [📋 Tata Letak Direktori](./reference/directory-layout.md)
- [📋 Matriks Port](./reference/port-matrix.md)
- [📋 Peta Layanan](./reference/service-map.md)

### Tutorial
- [📘 01 Pendahuluan](./tutorials/01-introduction.md)
- [📋 02 Prasyarat](./tutorials/02-prerequisites.md)
- [🖥️ 03 Basis Instal](./tutorials/03-install-base.md)
- [🧰 04 Instal Caddy](./tutorials/04-install-caddy.md)
- [🌐 05 Tambahkan Situs](./tutorials/05-add-sites.md)
- [🔒 06 Aktifkan TLS](./tutorials/06-enable-tls.md)
- [🧰 07 Layanan](./tutorials/07-services.md)
- [✅ 08 Pengerasan](./tutorials/08-hardening.md)
- [💾 09 Cadangan](./tutorials/09-backup.md)
- [📘 10 Penutupan](./tutorials/10-closeout.md)

## Bagian Terkait
- [🖥️ Server](../../../server/index.md)
- [🛡️ Keamanan](../../../security/index.md)
- [💾 Cadangan](../../../backup/index.md)
- [🌐 Panel Hosting](../../hosting-panels/index.md)
