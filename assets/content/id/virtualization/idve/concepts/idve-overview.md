# 🧠 Arsitektur dan Model Operasional IDVE

## Apa Arti Konsep Ini
Cara paling aman mengoperasikan IDVE adalah menambatkan runbook pada fakta yang bisa diverifikasi dari Linux: CPU virtualization flags, network state, storage visibility, lokasi image dasar, integritas backup, dan jalur restore yang sudah diuji.

## Mengapa Ini Penting Secara Operasional
- Masalah node, storage, atau bridge biasanya muncul lebih dulu sebagai gejala pada guest: boot gagal, migrasi macet, timeout saat restore, atau performa tidak konsisten.
- control plane IDVE memberi fleksibilitas, tetapi tanpa model mental yang rapi fleksibilitas itu berubah menjadi naming drift dan peran storage yang bercampur.
- Platform jauh lebih mudah dijalankan dengan baik ketika Anda bisa menjelaskan jalur manajemen, jalur guest, lokasi disk aktif, dan jalur restore sebelum insiden terjadi.

## Prinsip Desain Inti
- Perlakukan setiap host IDVE sebagai host Linux lebih dulu dan objek control plane setelahnya.
- Namai bridge, VLAN, storage, template, dan backup target berdasarkan fungsi, bukan kenyamanan sesaat.
- Pisahkan storage workload aktif, artefak dasar, dan backup bila memungkinkan.
- Gunakan sekumpulan kecil perintah yang bisa diulang untuk health check harian dan insiden.

## Kesalahan Umum
- Mencampur ISO, image dasar, disk guest aktif, dan backup dalam satu storage tanpa alasan yang jelas.
- Mengaktifkan jaringan tambahan pada guest tanpa dokumentasi peran dan metode validasinya.
- Mengira snapshot sama dengan backup, lalu baru menyadari bedanya setelah kehilangan host atau storage.
- Mengabaikan state cluster atau health control plane hanya karena satu node lokal tampak normal.

## Panduan Pengambilan Keputusan
- Pilih desain awal yang sederhana: satu jalur manajemen, satu jalur guest, satu storage utama untuk workload, satu target backup, dan satu restore path yang pernah diuji.
- Tambahkan fitur lanjutan hanya setelah inventaris dasar dan prosedur recovery sudah tertulis rapi.
- Bila perilaku produk atau rilis berbeda, pegang fakta Linux-host sebagai titik jangkar runbook.

## Cara Berpikir Saat Verifikasi
Gunakan control plane dan pemeriksaan host Linux secara bersamaan. Perintah di bawah ini adalah baseline minimum untuk membaca platform.

```bash
egrep -c "(vmx|svm)" /proc/cpuinfo
ip -br addr
lsblk -f
systemctl list-units --type=service | grep -Ei "idve|libvirt|qemu|virt" || true
```

## File Terkait Dalam Modul Ini
- [🌐 Desain Jaringan](./network-design.md)
- [💽 Desain Storage](./storage-design.md)
- [📋 Checklist Operasional](../reference/operations-checklist.md)
