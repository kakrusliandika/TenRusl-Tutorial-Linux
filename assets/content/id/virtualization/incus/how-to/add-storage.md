# 💽 Tambahkan Storage dengan Aman

## Tujuan
Menambahkan atau mengekspos storage ke Incus tanpa menebak fungsi, kapasitas, atau cara memvalidasinya.

## Kapan Prosedur Ini Digunakan
Gunakan prosedur ini saat Anda menambahkan disk, pool, datastore, backend shared storage, atau target baru untuk backup maupun restore staging.

## Prasyarat
- Anda sudah tahu apakah storage baru dipakai untuk workload aktif, image dan golden instance, backup, atau staging restore.
- Anda punya akses rollback jika perubahan menyentuh node produksi atau backend yang kritis.

## Asumsi Lingkungan
- Langkah registrasi storage bisa berbeda menurut backend dan rilis.
- Validasi akhir tetap dilakukan dari shell host sebelum workload penting dipindahkan.

## Prosedur Langkah demi Langkah
1. **Periksa gambaran storage saat ini**
Pastikan kapasitas, mount state, dan inventaris backend terbaca sebelum ada perubahan.
```bash
incus storage list
incus storage info default 2>/dev/null || true
lsblk -f
df -h
```

2. **Tambahkan atau registrasikan target storage baru**
Gunakan alur yang didukung platform sesuai backend Anda. Pakai nama yang menjelaskan fungsi, bukan hanya nama disk.

3. **Tulis role storage dengan segera**
Catat apakah target baru dipakai untuk workload aktif, artefak dasar, backup, atau restore staging. Jangan biarkan peran itu tersirat.

## Poin Validasi
- Target storage baru terlihat dari platform dan host Linux.
- Role storage tertulis jelas pada catatan operasional.
- Satu uji tulis, impor, atau attach sederhana berhasil tanpa ambiguitas.

## Catatan Troubleshooting
- Backend terlihat tetapi role salah: perbaiki definisi sebelum menaruh guest apa pun.
- Kapasitas tidak sesuai: cek kembali mount, thin provisioning, replikasi, atau akses node.
- Jika storage bersifat shared, pastikan semua node yang relevan melihat target dengan konsisten.

## Catatan Rollback atau Recovery
- Hapus definisi storage baru dari platform bila role atau backend ternyata keliru.
- Kembalikan perubahan mount atau backend lebih dulu sebelum mencoba ulang.
- Jangan membiarkan definisi storage setengah jadi tetap aktif di lingkungan produksi.

## Dokumen Terkait
- [💽 Desain Storage](../concepts/storage-design.md)
- [📋 Tata Letak Storage](../reference/storage-layout.md)
