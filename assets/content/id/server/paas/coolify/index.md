# 🌐 Dinginkan

## Ringkasan
Modul ini memperlakukan Coolify sebagai platform aplikasi yang di-host sendiri yang berjalan pada infrastruktur Linux yang masih perlu Anda pahami dari shellnya. Fokusnya adalah alur penerapan, kepercayaan Git, perutean domain, visibilitas Docker, cakupan pencadangan, dan permukaan manajemen yang tetap dapat dikontrol selama terjadi insiden.

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
- [🧠 Ikhtisar Coolify](./concepts/coolify-overview.md)
- [🧠 PaaS yang Dihosting Sendiri](./concepts/self-hosted-paas.md)
- [🧠 Alur Penerapan](./concepts/deployment-flow.md)

### Petunjuk
- [🚀 Tambahkan Proyek Baru](./how-to/add-new-project.md)
- [💾 Cadangkan Konfigurasi Coolify](./how-to/backup-config.md)
- [🔗 Hubungkan Penyedia Git](./how-to/connect-git-provider.md)
- [↩️ Kembalikan Konfigurasi Coolify](./how-to/restore-config.md)

### Referensi
- [📋 Tata Letak Direktori](./reference/directory-layout.md)
- [📋 Matriks Port](./reference/port-matrix.md)
- [📋 Peta Layanan](./reference/service-map.md)

### Tutorial
- [📘 01 Pendahuluan](./tutorials/01-introduction.md)
- [📋 02 Prasyarat](./tutorials/02-prerequisites.md)
- [🖥️ 03 Basis Instal](./tutorials/03-install-base.md)
- [🧰 04 Instal Coolify](./tutorials/04-install-coolify.md)
- [🚀 05 Tambah Layanan](./tutorials/05-add-services.md)
- [🌐 06 Konfigurasi Domain](./tutorials/06-configure-domains.md)
- [💾 07 Konfigurasi Cadangan](./tutorials/07-configure-backups.md)
- [🔐 08 Zona Admin](./tutorials/08-admin-zone.md)
- [✅ 09 Pengerasan](./tutorials/09-hardening.md)
- [📘 10 Penutupan](./tutorials/10-closeout.md)

## Bagian Terkait
- [🖥️ Server](../../../server/index.md)
- [🛡️ Keamanan](../../../security/index.md)
- [💾 Cadangan](../../../backup/index.md)
- [🌐 Proksi Terbalik](../../reverse-proxy/index.md)
