# 🧠 Rehearsal Restore

## Ringkasan
Rehearsal restore membuktikan bahwa backup web dapat membangun ulang aplikasi yang berfungsi di staging atau lab, bukan sekadar membuat file kembali ada di disk.

## Apa Arti Konsep Ini
Rehearsal mengembalikan file, database, referensi secret, ownership, dan konfigurasi service ke target non-produksi, lalu memvalidasi perilaku HTTP, autentikasi, path media, dan log.

## Mengapa Ini Penting secara Operasional
- Aplikasi web dapat gagal setelah restore dengan cara yang tidak akan terlihat oleh checksum: env file hilang, secret basi, permission salah, atau dump database yang tidak cocok.
- Rehearsal mengungkap bagian mana yang masih bergantung pada pengetahuan lisan.
- Catatan yang ditangkap saat rehearsal menjadi runbook tercepat ketika insiden nyata datang.

## Cara Pandang Restore-First
Restore-first memperlakukan rehearsal sebagai langkah pembuktian yang mengubah job backup dari “kemungkinan baik” menjadi “terpercaya secara operasional”. Tanpa rehearsal, retensi dan kedalaman offsite hanyalah asumsi.

## Implikasi Retensi, Offsite, dan Konsistensi
- Simpan setidaknya satu generasi terbaru yang sudah lolos rehearsal restore penuh.
- Salinan offsite juga perlu direhearse karena path arsip remote dapat drift secara terpisah dari keberhasilan backup lokal.
- Pemeriksaan konsistensi setelah rehearsal sebaiknya mencakup HTTP response, log aplikasi, konektivitas database, dan aset user-facing seperti upload.

## Kesalahan Umum
- Menganggap job selesai setelah `tar` dan `mysqldump` berhasil tanpa menguji restore.
- Hanya merehearse restore code sambil melewatkan impor database dan validasi aplikasi.
- Melakukan restore ke target yang berpotensi menerima trafik live sebelum validasi selesai.

## Dokumen Terkait
- [🛠️ Uji Restore Web](../how-to/test-web-restore.md)
- [📚 Checklist Restore](../reference/restore-checklist.md)
- [✅ Tutorial 06: Verifikasi Aplikasi](../tutorials/06-verify-application.md)
