# ☁️ IDVE

## Ringkasan
Deployment IDVE dapat berbeda menurut vendor, rilis, atau integrasi lokal. Karena itu modul ini menempatkan Linux host validation, network role, storage role, image discipline, backup testing, dan recovery readiness sebagai sumber kebenaran yang paling stabil.

## Siapa yang Cocok Menggunakan Bagian Ini
- Operator yang menjalankan workload virtual melalui control plane IDVE di atas host Linux.
- Admin yang membutuhkan panduan aman tanpa bergantung pada nama menu yang rapuh.
- Pembelajar yang ingin pola operasi virtualisasi yang konservatif dan dapat diverifikasi.

## Prasyarat
- Akses ke host uji, node, atau cluster lab tempat perubahan bisa divalidasi dengan aman.
- Dasar jaringan dan storage Linux yang cukup untuk membaca output host tanpa panik.
- Kesiapan memverifikasi dari shell atau API, bukan hanya dari UI.

## Jalur Belajar
1. Mulai dari konsep inti agar model jaringan, storage, dan artefak dasar punya konteks operasional.
2. Gunakan halaman cara untuk menambah storage, merapikan jaringan, mengelola image dasar dan template, dan melatih restore.
3. Simpan halaman referensi di dekat Anda saat maintenance, review drift, dan handoff insiden.
4. Ikuti tutorial dari 01 sampai 10 jika Anda ingin build pertama yang runtut dan mudah diaudit.

## Apa yang Dibaca Lebih Dulu
- Konsep: [🧠 Ikhtisar IDVE](./concepts/idve-overview.md)
- Cara: [💽 Tambahkan Storage dengan Aman](./how-to/add-storage.md)
- Referensi: [📋 Checklist Operasional](./reference/operations-checklist.md)

## Peta Bagian
### Konsep
- [🧠 Ikhtisar IDVE](./concepts/idve-overview.md)
- [🌐 Desain Jaringan](./concepts/network-design.md)
- [💽 Desain Storage](./concepts/storage-design.md)

### Cara
- [💽 Tambahkan Storage dengan Aman](./how-to/add-storage.md)
- [🌐 Konfigurasikan Jaringan Tanpa Menebak](./how-to/configure-network.md)
- [📦 Kelola Image Dasar dan Template](./how-to/manage-templates.md)
- [↩️ Pulihkan Backup dengan Validasi](./how-to/restore-backup.md)

### Referensi
- [📋 Checklist Backup](./reference/backup-checklist.md)
- [📋 Tata Letak Jaringan](./reference/network-layout.md)
- [📋 Checklist Operasional](./reference/operations-checklist.md)
- [📋 Tata Letak Storage](./reference/storage-layout.md)

### Tutorial
- [📘 01 Pendahuluan](./tutorials/01-introduction.md)
- [📋 02 Prasyarat](./tutorials/02-prerequisites.md)
- [🧱 03 Instal Komponen Inti](./tutorials/03-install-core.md)
- [🌐 04 Jaringan](./tutorials/04-networking.md)
- [💽 05 Storage](./tutorials/05-storage.md)
- [📦 06 Image atau Template](./tutorials/06-images-or-templates.md)
- [🧰 07 Operasional](./tutorials/07-operations.md)
- [💾 08 Backup](./tutorials/08-backups.md)
- [🔐 09 Hardening](./tutorials/09-hardening.md)
- [✅ 10 Penutupan](./tutorials/10-closeout.md)

## Bagian Terkait
- [☁️ Virtualisasi](../index.md)
- [💻 Workstation](../../workstation/index.md)
- [🖥️ Server](../../server/index.md)
- [🛡️ Security](../../security/index.md)
- [💾 Backup](../../backup/index.md)
