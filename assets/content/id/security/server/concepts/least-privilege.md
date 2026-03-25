# 👥 Hak Akses Minimum

## Ringkasan
Hak istimewa paling rendah berarti memberikan pengguna, layanan, dan otomatisasi hanya akses yang benar-benar mereka perlukan.

## Apa Arti Konsep Ini
Di server Linux, hal ini mencakup aturan sudo, akun layanan, kepemilikan file, akses rahasia, dan jangkauan jaringan. Ini adalah kebiasaan desain, bukan sekadar izin.

## Mengapa Itu Penting
Sebagian besar insiden parah menjadi lebih buruk karena pijakan pertama mendarat di akun atau layanan dengan jangkauan yang terlalu luas. Hak istimewa yang paling sedikit membuat kesalahan dan kompromi menjadi lebih kecil.

## Konteks Ancaman / Paparan
Entri sudoer yang memiliki hak istimewa berlebihan, akun bersama, dan pohon konfigurasi yang dapat ditulis memperluas kerusakan yang tidak disengaja dan berbahaya. Bahayanya seringkali tidak terlihat sampai waktu peninjauan.

## Prinsip Desain
- Pisahkan akses admin manusia dari identitas layanan.
- Lebih memilih aturan sudo yang eksplisit daripada ketinggian selimut.
- Gunakan kepemilikan dan desain grup dengan sengaja.
- Tinjau token, kunci, dan rahasia seperti Anda meninjau pengguna.

## Trade-off Operasional
- Aturan sudo granular meningkatkan ketertelusuran tetapi menambah pekerjaan pemeliharaan.
- Menjalankan layanan sebagai pengguna non-root mungkin memerlukan pengaturan tambahan seputar file dan port rendah.
- Model kepemilikan yang lebih ketat mengurangi kenyamanan perbaikan ad hoc.

## Kesalahan Umum
- Menggunakan satu akun admin bersama untuk beberapa orang.
- Pemberian `NOPASSWD:ALL` karena nyaman.
- Mengabaikan jalur yang dapat ditulis dunia dan kepemilikan kelompok yang luas.

## Dokumen Terkait
- [🧠 Dasar Pengerasan](./hardening-baseline.md)
- [🔐 Kebijakan SSH](./ssh-policy.md)
- [📁 07 Izin Berkas](../tutorials/07-file-permissions.md)
- [🚨 Checklist Insiden](../reference/incident-checklist.md)
