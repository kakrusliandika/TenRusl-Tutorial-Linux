# 💾 Backup

## Ringkasan
Bagian ini mengajarkan disiplin backup dan recovery Linux dengan kesiapan restore sebagai tujuan utama. VM, VPS, dan aplikasi web dipisahkan karena artefak yang harus dilindungi, cara menyimpannya, dan cara membuktikan hasil restore memang berbeda secara operasional.

## Siapa yang Cocok Menggunakan Bagian Ini
- Operator Linux yang membutuhkan backup rutin yang bisa diulang, bukan arsip ad-hoc.
- Admin yang bertanggung jawab atas drill restore, retensi offsite, dan validasi pasca-restore.
- Tim yang melindungi guest hypervisor, host VPS tunggal, atau stack aplikasi web lengkap.

## Prasyarat
- Nyaman dengan shell, izin file, dan dasar manajemen layanan.
- Memiliki target backup yang terpisah dari workload yang dilindungi.
- Memiliki target uji atau rehearsal tempat prosedur restore bisa diverifikasi dengan aman.

## Jalur Belajar
1. Mulai dari [VPS Backup](./vps/index.md) jika Anda membutuhkan pola backup host-level untuk scope, retensi, dan urutan restore.
2. Lanjutkan ke [VM Backup](./vm/index.md) jika recovery Anda bergantung pada metadata hypervisor, ekspor disk, atau isolasi guest saat restore.
3. Baca [Web Application Backup](./web/index.md) jika file, database, materi TLS, dan validasi aplikasi harus dipulihkan bersama.
4. Tinjau [Security](../security/index.md) setelah alur backup terbentuk agar data backup, kredensial, dan salinan offsite ikut diamankan.

## Yang Perlu Dibaca Lebih Dulu
- Host Linux tunggal atau stack layanan: [VPS Backup](./vps/index.md).
- Recovery guest yang sadar hypervisor dan ekspor image disk: [VM Backup](./vm/index.md).
- Recovery file, database, dan konfigurasi aplikasi web: [Web Application Backup](./web/index.md).

## Peta Bagian
### VM Backup
- [💾 VM Backup](./vm/index.md) — ekspor guest, capture metadata, salinan offsite, dan drill restore.

### VPS Backup
- [💾 VPS Backup](./vps/index.md) — recovery file, konfigurasi, paket, dan layanan untuk workload Linux VPS.

### Web Backup
- [💾 Web Application Backup](./web/index.md) — arsip file, dump database, penanganan secret, dan validasi aplikasi setelah restore.

## Bagian Terkait
- [☁️ Virtualization](../virtualization/index.md)
- [💻 Workstation](../workstation/index.md)
- [🖥️ Server](../server/index.md)
- [🛡️ Security](../security/index.md)
