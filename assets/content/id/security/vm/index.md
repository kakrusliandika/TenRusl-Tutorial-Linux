# 🧱 Keamanan VM

## Ringkasan
Keamanan VM adalah tentang kebersihan tamu ditambah bidang kendali di sekitar tamu: templat, jaringan, snapshot, pencadangan, akses konsol, dan bukti yang Anda perlukan jika klon atau beban kerja menjadi mencurigakan.

## Siapa yang Cocok Menggunakan Bagian Ini
- Operator yang mengkloning tamu Linux, mengelola template, atau memelihara lab dan fleet VM produksi.
- Administrator yang membutuhkan panduan keamanan tamu yang mencakup realitas sisi hypervisor.
- Pelajar yang menginginkan kebersihan VM yang berulang daripada kebiasaan kloning satu kali.

## Prasyarat
- Akses shell ke setidaknya satu tamu dan, jika memungkinkan, akses CLI ke host hypervisor.
- Titik rollback sebelum menyegel template, memangkas snapshot, atau memutar cadangan.
- Inventaris sederhana peran guest dan zona kepercayaan.

## Jalur Belajar
1. Baca [Disiplin Templat](./concepts/template-discipline.md), [Dasar Pengerasan VM](./concepts/vm-hardening-baseline.md), dan [Pemikiran Isolasi Jaringan](./concepts/network-isolation-thinking.md).
2. Terapkan panduan cara untuk penyegelan templat, tinjauan snapshot, rotasi cadangan, dan jaringan terisolasi.
3. Gunakan referensi selama peninjauan lalu jalankan tutorial `01` hingga `10` secara berurutan.

## Apa yang Harus Dibaca Terlebih Dahulu
- Mulailah dengan [Disiplin Templat](./concepts/template-discipline.md) jika Anda membuat atau menerbitkan gambar yang dapat digunakan kembali.
- Baca [Menyiapkan Jaringan Terisolasi](./how-to/set-up-isolated-network.md) sebelum mencampur zona kepercayaan.
- Gunakan [01 Pengantar](./tutorials/01-introduction.md) jika Anda menginginkan jalur operator yang dipandu.

## Peta Bagian
### Konsep
- [🧠 Disiplin Templat](./concepts/template-discipline.md) — Perlakukan templat sebagai artefak yang dikontrol, bukan sebagai tiruan yang mudah digunakan.
- [🧱 Baseline Hardening VM](./concepts/vm-hardening-baseline.md) — Tentukan ekspektasi minimum untuk setiap tamu dan template.
- [🌐 Pemikiran Isolasi Jaringan](./concepts/network-isolation-thinking.md) — Pisahkan zona kepercayaan tamu sebelum semuanya terpecah menjadi satu jaringan datar.

### How-To
- [🧰 Buat Templat Emas](./how-to/create-golden-template.md) — Menyegel gambar tamu yang dapat digunakan kembali tanpa membawa identitas atau rahasia lama.
- [📸 Tinjau Kebijakan Snapshot](./how-to/review-snapshot-policy.md) — Jaga agar snapshot tetap berumur pendek dan memiliki tujuan.
- [💾 Putar Backup VM](./how-to/rotate-vm-backups.md) — Putar cadangan yang disimpan dengan metadata pemulihan dan pemeriksaan integritas.
- [🌐 Siapkan Jaringan Terisolasi](./how-to/set-up-isolated-network.md) — Buat segmen dengan batasan kepercayaan yang jelas dan aturan yang dapat diuji.

### Referensi
- [📋 Checklist Backup](./reference/backup-checklist.md) — Tinjau apakah cadangan VM benar-benar dapat dipulihkan.
- [🚨 Checklist Insiden](./reference/incident-checklist.md) — Simpan bukti dan dengan sengaja menahan tamu yang mencurigakan.
- [📋 Checklist Isolasi Jaringan](./reference/network-isolation-checklist.md) — Verifikasi zona kepercayaan tamu dan batasan sebenarnya.
- [📋 Checklist Hardening VM](./reference/vm-hardening-checklist.md) — Jalankan tinjauan postur tamu dan template yang ringkas.

### Tutorial
- [🛡️ 01 Pengantar](./tutorials/01-introduction.md) — Menentukan properti VM dan model kepercayaan.
- [🧱 02 Hypervisor Baseline](./tutorials/02-hypervisor-baseline.md) — Tinjau asumsi dan inventaris sisi host.
- [🌐 03 Isolasi Jaringan](./tutorials/03-network-isolation.md) — Pastikan tamu ditempatkan di segmen yang disengaja.
- [🧼 04 Kebersihan Templat](./tutorials/04-template-hygiene.md) — Siapkan sumber templat yang dapat digunakan kembali dan aman.
- [📸 05 Kebijakan Snapshot](./tutorials/05-snapshot-policy.md) — Pisahkan titik rollback dari cadangan sebenarnya.
- [🔐 06 Kontrol Akses](./tutorials/06-access-control.md) — Tinjau jalur akses konsol, tamu, dan templat.
- [🧾 07 Logging](./tutorials/07-logging.md) — Membuat tindakan yang berdekatan dengan tamu dan hypervisor dapat ditinjau.
- [💾 08 Backup](./tutorials/08-backups.md) — Periksa cakupan pencadangan, penamaan, dan kesiapan pemulihan.
- [✅ 09 Hardening](./tutorials/09-hardening.md) — Jalankan VM final dan peninjauan template.
- [📘 10 Penutup](./tutorials/10-closeout.md) — Bundel catatan rollback dan jadwal peninjauan berikutnya.

## Bagian Terkait
- [🛡️ Indeks Keamanan](../index.md)
- [🛡️ Keamanan Server](../server/index.md)
- [🌐 Keamanan Web](../web/index.md)
- [☁️ Virtualisasi](../../virtualization/index.md)
- [💾 Backup](../../backup/index.md)
