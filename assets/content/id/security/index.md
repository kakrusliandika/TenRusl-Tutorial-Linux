# 🛡️ Keamanan

## Ringkasan
Bagian keamanan adalah garis dasar operator untuk mengurangi permukaan serangan Linux, memvalidasi kontrol dari shell, dan mempersiapkan pemulihan sebelum suatu insiden memaksa pengambilan keputusan yang terburu-buru.

## Siapa yang Cocok Menggunakan Bagian Ini
- Operator Linux yang bertanggung jawab atas server, mesin virtual, dan layanan web publik.
- Pelajar yang menginginkan langkah-langkah pengerasan praktis daripada nasihat keamanan umum.
- Administrator yang membutuhkan panduan logging, kontrol akses, TLS, dan kesiapan insiden yang tetap berguna secara operasional.

## Prasyarat
- Kenyamanan dengan dasar-dasar shell, manajemen layanan, dan pengeditan teks.
- Sistem lab atau jendela pemeliharaan sebelum perubahan produksi.
- Kebiasaan pencadangan, snapshot, atau rollback sebelum pengeditan yang berisiko.

## Jalur Belajar
1. Mulailah dengan [Keamanan Server](./server/index.md) untuk membangun dasar host seputar SSH, pembaruan, kebijakan firewall, dan kemampuan audit.
2. Lanjutkan dengan [Keamanan VM](./vm/index.md) jika Anda mengelola templat, snapshot, isolasi tamu, atau alur kerja yang berhubungan dengan hypervisor.
3. Selesaikan dengan [Keamanan Web](./web/index.md) untuk memperkuat TLS, header respons, batas kecepatan, logging, dan tepi publik.

## Apa yang Harus Dibaca Terlebih Dahulu
- Baca [Keamanan Server](./server/index.md) terlebih dahulu jika Anda melakukan hardening pada host Linux secara langsung.
- Baca [Keamanan VM](./vm/index.md) selanjutnya jika kebersihan dan isolasi tamu adalah bagian dari pekerjaan Anda.
- Baca [Keamanan Web](./web/index.md) setelah garis dasar host stabil dan Anda siap mengamankan permukaan publik.

## Peta Bagian
- [🛡️ Keamanan Server](./server/index.md) — baseline host, postur SSH, tinjauan layanan, pemeriksaan firewall, fail2ban, dan kesiapan insiden.
- [🧱 Keamanan VM](./vm/index.md) — kebersihan template, isolasi, kebijakan snapshot, rotasi cadangan, dan loop tinjauan tamu.
- [🌐 Keamanan Web](./web/index.md) — TLS, header, pembatasan kecepatan, logging, pemantauan, dan pengerasan tepi publik.

## Bagian Terkait
- [☁️ Virtualisasi](../virtualization/index.md)
- [💻 Workstation](../workstation/index.md)
- [🖥️ Server](../server/index.md)
- [💾 Backup](../backup/index.md)
