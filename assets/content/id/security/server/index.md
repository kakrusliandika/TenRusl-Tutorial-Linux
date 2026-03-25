# 🛡️ Keamanan Server

## Ringkasan
Keamanan server adalah dasar host Linux: identitas, SSH, postur pembaruan, paparan jaringan, tinjauan layanan, pencatatan, dan pelestarian bukti. Fokusnya adalah kontrol terukur yang dapat Anda buktikan dari shell.

## Siapa yang Cocok Menggunakan Bagian Ini
- Operator yang mengelola server Linux, instance VPS, atau infrastruktur yang dihosting sendiri.
- Administrator yang membutuhkan hardening praktis dan bukan teori keamanan abstrak.
- Pelajar membangun fondasi yang diperlukan sebelum lapisan web, PaaS, atau panel hosting ditambahkan.

## Prasyarat
- Akses root atau sudo ke server Linux atau host lab sekali pakai.
- Sesi terminal kedua atau jalur konsol sebelum menyentuh SSH.
- Backup SSH, firewall, dan konfigurasi layanan sebelum pengeditan berisiko.

## Jalur Belajar
1. Baca [Baseline Hardening](./concepts/hardening-baseline.md), [Kebijakan SSH](./concepts/ssh-policy.md), dan [Hak Akses Minimum](./concepts/least-privilege.md).
2. Terapkan tugas terfokus dari panduan cara kerja, dimulai dengan [Nonaktifkan Login Kata Sandi](./how-to/disable-password-login.md) dan [Tinjau Port Terbuka](./how-to/review-open-ports.md).
3. Gunakan referensi untuk pemeriksaan berulang lalu jalankan tutorial `01` hingga `10` secara berurutan.

## Apa yang Harus Dibaca Terlebih Dahulu
- Mulailah dengan [Baseline Hardening](./concepts/hardening-baseline.md) jika Anda memerlukan status aman minimum.
- Baca [Kebijakan SSH](./concepts/ssh-policy.md) sebelum perubahan akses jarak jauh.
- Gunakan [01 Pengantar](./tutorials/01-introduction.md) jika Anda menginginkan alur kerja terpandu dan bukan pendekatan yang mengutamakan daftar periksa.

## Peta Bagian
### Konsep
- [🧠 Baseline Hardening](./concepts/hardening-baseline.md) — Tentukan status aman minimum untuk host Linux.
- [🔐 Kebijakan SSH](./concepts/ssh-policy.md) — Tetapkan aturan admin jarak jauh dan postur autentikasi yang tahan lama.
- [👥 Hak Akses Minimum](./concepts/least-privilege.md) — Mengurangi radius ledakan admin dan layanan.

### How-To
- [🔐 Nonaktifkan Login Kata Sandi](./how-to/disable-password-login.md) — Pindahkan akses jarak jauh ke kunci dan hapus jalur login terlemah.
- [🧾 Konfigurasikan Logging Audit](./how-to/configure-audit-logging.md) — Menangkap tindakan istimewa dan perubahan file sensitif.
- [🌐 Tinjau Port Terbuka](./how-to/review-open-ports.md) — Bandingkan pendengar sebenarnya dengan paparan yang diinginkan.
- [🚨 Siapkan Fail2ban](./how-to/set-up-fail2ban.md) — Tambahkan rem brute force ringan di sekitar layanan yang terbuka.

### Referensi
- [📋 Checklist Firewall](./reference/firewall-checklist.md) — Tinjau paparan, kepemilikan, dan penyimpangan kebijakan dengan cepat.
- [🚨 Checklist Insiden](./reference/incident-checklist.md) — Simpan bukti sebelum pembersihan dan penahanan terpisah.
- [🧾 Checklist Logging](./reference/logging-checklist.md) — Konfirmasikan bahwa host menyimpan log yang Anda perlukan nanti.
- [📋 Checklist SSH](./reference/ssh-checklist.md) — Tinjau postur akses jarak jauh sebelum dan sesudah perubahan.

### Tutorial
- [🛡️ 01 Pengantar](./tutorials/01-introduction.md) — Mencakup host dan menentukan garis dasar.
- [📋 02 Audit Baseline](./tutorials/02-baseline-audit.md) — Menangkap status host saat ini dari shell.
- [🔐 03 Pengguna dan SSH](./tutorials/03-users-and-ssh.md) — Menstabilkan akses admin dan kebijakan login jarak jauh.
- [🌐 04 Firewall](./tutorials/04-firewall.md) — Mengurangi paparan dan mendokumentasikan lalu lintas yang diizinkan.
- [📦 05 Pembaruan](./tutorials/05-updates.md) — Membuat patching dapat diprediksi dan ditinjau.
- [🧰 06 Pengerasan Layanan](./tutorials/06-service-hardening.md) — Hapus atau perketat layanan yang tidak diperlukan.
- [📁 07 Izin File](./tutorials/07-file-permissions.md) — Memperbaiki kepemilikan berisiko dan jalur yang dapat ditulis dunia.
- [🧾 08 Logging](./tutorials/08-logging.md) — Menjadikan host dapat diaudit dan lebih mudah diselidiki.
- [✅ 09 Hardening](./tutorials/09-hardening.md) — Jalankan peninjauan host terakhir dan catat pengecualian.
- [📘 10 Penutup](./tutorials/10-closeout.md) — Bundel catatan rollback dan putaran tinjauan berikutnya.

## Bagian Terkait
- [🛡️ Indeks Keamanan](../index.md)
- [🧱 Keamanan VM](../vm/index.md)
- [🌐 Keamanan Web](../web/index.md)
- [🖥️ Server](../../server/index.md)
- [💾 Backup](../../backup/index.md)
