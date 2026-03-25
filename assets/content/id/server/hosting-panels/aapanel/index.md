# 🌐aaPanel

## Ringkasan
Modul ini memperlakukan aaPanel sebagai bidang kendali hosting Linux, bukan sebagai sihir. Fokusnya adalah persiapan host, orientasi situs, verifikasi runtime, kontrol permukaan admin, cakupan pencadangan, dan pemulihan berbasis shell ketika panel atau konfigurasi yang dihasilkan tidak berfungsi seperti yang diharapkan. aaPanel adalah bidang kontrol hosting yang sering menggabungkan administrasi web, runtime, dan database ke dalam satu permukaan. Perlakukan itu sebagai bidang kendali yang berlapis di atas Linux, bukan sebagai pengganti operasi Linux.

## Untuk Siapa Bagian Ini
- Operator yang menjalankan beberapa beban kerja PHP atau web campuran pada satu VPS atau armada kecil yang masih memerlukan pemulihan tingkat shell.
- Tim membandingkan hosting yang dikelola panel dengan administrasi shell langsung.
- Operator yang memerlukan jalur pencadangan dan pemulihan di luar panel UI.

## Prasyarat
- Host Linux dengan akses SSH independen dari panel.
- Kontrol DNS untuk setidaknya satu domain pementasan.
- Keakraban dasar dengan layanan web, TLS, dan alur kerja situs yang didukung database.

## Jalur Pembelajaran
1. Mulailah dengan [🧠 Ikhtisar aaPanel](./concepts/aapanel-overview.md) dan halaman konsep sehingga batas bidang kontrolnya jelas.
2. Terapkan pencadangan dan pemulihan sebelum melakukan orientasi ke lokasi produksi.
3. Gunakan referensi agar port, direktori, dan layanan dapat dimengerti selama setiap jendela perubahan.
4. Jalani seri tutorial pada host lab sebelum mempercayai panel dengan domain nyata atau data pelanggan.

## Yang Harus Dibaca Terlebih Dahulu
- Konsep: [🧠 Ikhtisar aaPanel](./concepts/aapanel-overview.md)
- Petunjuk: [🌐 Tambahkan Situs Baru](./how-to/add-new-site.md)
- Referensi: [📋 Peta Layanan](./reference/service-map.md)
- Tutorial: [📘 01 Pendahuluan](./tutorials/01-introduction.md)

## Peta Bagian
### Konsep
- [🧠 Ikhtisar aaPanel](./concepts/aapanel-overview.md)
- [🧠 Hosting Berbasis Panel](./concepts/panel-based-hosting.md)
- [🧠 Desain Zona Admin](./concepts/admin-zone-design.md)

### Petunjuk
- [🌐 Tambahkan Situs Baru](./how-to/add-new-site.md)
- [💾 Konfigurasi Panel Cadangan](./how-to/backup-config.md)
- [↩️ Kembalikan Konfigurasi Panel](./how-to/restore-config.md)
- [🔒 Menyiapkan SSL](./how-to/set-up-ssl.md)

### Referensi
- [📋 Tata Letak Direktori](./reference/directory-layout.md)
- [📋 Matriks Port](./reference/port-matrix.md)
- [📋 Peta Layanan](./reference/service-map.md)

### Tutorial
- [📘 01 Pendahuluan](./tutorials/01-introduction.md)
- [📋 02 Prasyarat](./tutorials/02-prerequisites.md)
- [🖥️ 03 Basis Instal](./tutorials/03-install-base.md)
- [🧰 04 Instal Panel](./tutorials/04-install-panel.md)
- [🌐 05 Tambahkan Situs](./tutorials/05-add-sites.md)
- [🗄️ 06 Pengaturan Basis Data](./tutorials/06-database-setup.md)
- [⚙️ 07 Pengaturan Waktu Proses](./tutorials/07-runtime-setup.md)
- [🔐 08 Zona Admin](./tutorials/08-admin-zone.md)
- [✅ 09 Pengerasan](./tutorials/09-hardening.md)
- [📘 10 Penutupan](./tutorials/10-closeout.md)

## Bagian Terkait
- [🖥️ Server](../../../server/index.md)
- [🛡️ Keamanan](../../../security/index.md)
- [💾 Cadangan](../../../backup/index.md)
- [🌐 Proksi Terbalik](../../reverse-proxy/index.md)
