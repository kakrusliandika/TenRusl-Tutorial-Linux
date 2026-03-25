# 🖥️ Dasar Server keluarga RHEL

## Ringkasan
Modul ini mengubah instalasi keluarga RHEL baru menjadi dasar server Linux yang dapat diandalkan: penamaan host, disiplin paket, akses SSH, prediktabilitas jaringan, pemasangan penyimpanan, tinjauan layanan, dan penyerahan bersih ke dalam panduan khusus keamanan atau beban kerja. Sistem keluarga RHEL mendukung siklus hidup paket bergaya perusahaan, operasi yang mendukung SELinux, dan jaringan yang digerakkan oleh NetworkManager.

## Untuk Siapa Bagian Ini
- Admin mempersiapkan host keluarga RHEL baru untuk produksi atau laboratorium yang serius.
- Tim menstandardisasi garis dasar yang dapat diverifikasi shell sebelum peran aplikasi ditambahkan.
- Pelajar yang membutuhkan perintah khusus distro tanpa kehilangan model operasi Linux yang umum.

## Prasyarat
- Akses konsol atau penyelamatan untuk jaringan, firewall, dan rollback SSH.
- Nama host yang direncanakan, ekspektasi DNS, model IP, dan tata letak penyimpanan.
- Shell kedua atau jalur akses independen sebelum menyentuh pengaturan kendali jarak jauh.

## Jalur Pembelajaran
1. Mulailah dengan [📦 RHEL-family Server Baseline](./concepts/rhel-baseline.md) untuk memahami filosofi dasar spesifik distro.
2. Gunakan halaman petunjuk untuk tugas-tugas terfokus seperti OpenSSH, firewall, pembaruan otomatis, jaringan, dan pemasangan ekstra-disk.
3. Simpan halaman referensi di dekat Anda saat membangun host sehingga keputusan paket, layanan, dan port tetap disengaja.
4. Ikuti tutorial secara berurutan jika Anda ingin build dasar lengkap mulai dari instalasi baru hingga penutupan.

## Yang Harus Dibaca Terlebih Dahulu
- Konsep: [📦 Dasar Server Keluarga RHEL](./concepts/rhel-baseline.md)
- Petunjuk: [🔐 Instal OpenSSH](./how-to/install-openssh.md)
- Referensi: [📋 Daftar Periksa Layanan](./reference/service-checklist.md)
- Tutorial: [🧭 Tutorial 01: Pendahuluan](./tutorials/01-introduction.md)

## Peta Bagian
### Konsep
- [📦 Dasar Server keluarga RHEL](./concepts/rhel-baseline.md)
- [🔐 SSH Pertama](./concepts/ssh-first.md)
- [🧹 Minimisasi Layanan](./concepts/service-minimization.md)

### Petunjuk
- [🛡️ Konfigurasikan Firewall](./how-to/configure-firewall.md)
- [🔄 Aktifkan Pembaruan Otomatis](./how-to/enable-automatic-updates.md)
- [🔐 Instal OpenSSH](./how-to/install-openssh.md)
- [🌐 Tetapkan IP Statis](./how-to/set-static-ip.md)
- [💽 Pasang Disk Ekstra](./how-to/mount-extra-disk.md)

### Referensi
- [🧰 Persyaratan Perangkat Keras](./reference/hardware-requirements.md)
- [📦 Paket Dasar](./reference/package-baseline.md)
- [🌐 Matriks Port](./reference/port-matrix.md)
- [📋 Daftar Periksa Layanan](./reference/service-checklist.md)

### Tutorial
- [🧭 Tutorial 01: Pendahuluan](./tutorials/01-introduction.md)
- [🧪 Tutorial 02: Prapemeriksaan Instalasi](./tutorials/02-install-preflight.md)
- [📦 Tutorial 03: Instal Inti](./tutorials/03-install-core.md)
- [🌐 Tutorial 04: Jaringan](./tutorials/04-network.md)
- [🔐 Tutorial 05: Pengguna dan SSH](./tutorials/05-users-and-ssh.md)
- [💽 Tutorial 06: Penyimpanan](./tutorials/06-storage.md)
- [🛡️ Tutorial 07: Keamanan](./tutorials/07-security.md)
- [📋 Tutorial 08: Layanan](./tutorials/08-services.md)
- [🧽 Tutorial 09: Pembersihan](./tutorials/09-cleanup.md)
- [✅ Tutorial 10: Penutupan](./tutorials/10-closeout.md)

## Bagian Terkait
- [☁️ Virtualisasi](../../../virtualization/index.md)
- [💻 Stasiun Kerja](../../../workstation/index.md)
- [🛡️ Keamanan](../../../security/index.md)
- [💾 Cadangan](../../../backup/index.md)
