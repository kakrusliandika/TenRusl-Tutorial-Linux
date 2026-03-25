# ☁️ Incus

## Ringkasan
Incus adalah platform Linux-native untuk container dan virtual machine yang sangat kuat ketika operator memahami image, profile, project, network, dan storage pool dari CLI. Modul ini memosisikan Incus sebagai platform operasi yang dapat diverifikasi dari shell, bukan sekadar alat provisioning guest.

## Siapa yang Cocok Menggunakan Bagian Ini
- Operator yang mengelola container sistem dan VM dari control plane Linux-native.
- Admin yang membutuhkan profile, project, dan image lifecycle yang rapi.
- Pembelajar yang ingin alur virtualisasi yang kuat dari CLI dan mudah divalidasi.

## Prasyarat
- Akses ke host uji, node, atau cluster lab tempat perubahan bisa divalidasi dengan aman.
- Dasar jaringan dan storage Linux yang cukup untuk membaca output host tanpa panik.
- Kesiapan memverifikasi dari shell atau API, bukan hanya dari UI.

## Jalur Belajar
1. Mulai dari konsep inti agar model jaringan, storage, dan artefak dasar punya konteks operasional.
2. Gunakan halaman cara untuk menambah storage, merapikan jaringan, mengelola image dan golden instance, dan melatih restore.
3. Simpan halaman referensi di dekat Anda saat maintenance, review drift, dan handoff insiden.
4. Ikuti tutorial dari 01 sampai 10 jika Anda ingin build pertama yang runtut dan mudah diaudit.

## Apa yang Dibaca Lebih Dulu
- Konsep: [🧠 Ikhtisar Incus](./concepts/incus-overview.md)
- Cara: [💽 Tambahkan Storage dengan Aman](./how-to/add-storage.md)
- Referensi: [📋 Checklist Operasional](./reference/operations-checklist.md)

## Peta Bagian
### Konsep
- [🧠 Ikhtisar Incus](./concepts/incus-overview.md)
- [🌐 Desain Jaringan](./concepts/network-design.md)
- [💽 Desain Storage](./concepts/storage-design.md)

### Cara
- [💽 Tambahkan Storage dengan Aman](./how-to/add-storage.md)
- [🌐 Konfigurasikan Jaringan Tanpa Menebak](./how-to/configure-network.md)
- [📦 Kelola Image dan Golden Instance](./how-to/manage-images.md)
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
