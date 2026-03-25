# 💽 05 Storage

## Tujuan
Menetapkan peran storage untuk workload aktif, artefak, dan backup.

## Prasyarat
- Anda sudah menyelesaikan langkah sebelumnya atau setidaknya memahami konteks platform dan target uji.
- Ada host atau cluster lab yang aman untuk perubahan dan validasi.

## Asumsi Lingkungan
- Anda memulai secara konservatif dan ingin build awal yang mudah dijelaskan ke operator lain.
- Semua perubahan akan dibuktikan dengan perintah host-side atau control-plane yang bisa diulang.

## Langkah Berurutan
1. **Tegaskan ruang lingkup langkah ini**
Tuliskan apa yang ingin dicapai, apa yang belum masuk ruang lingkup, dan bukti apa yang harus dikumpulkan.

2. **Lakukan pekerjaan inti**
Tetapkan role storage dengan jelas dan buktikan target baru bisa dipakai untuk alur yang dimaksud.
```bash
incus storage list
incus storage info default 2>/dev/null || true
lsblk -f
df -h
```

3. **Simpan catatan hasilnya**
Catat output penting, keputusan desain, dan hal yang harus diperiksa lagi pada langkah berikutnya.

## Poin Validasi
- Tujuan langkah ini tercapai dan bisa dibuktikan dari output yang disimpan.
- Tidak ada perubahan yang dibiarkan aktif tanpa penjelasan peran atau rollback.
- Workload uji, jika ada, masih dapat dibaca kondisinya dengan jelas.

## Peringatan
- Jangan menaruh workload penting pada storage baru sebelum role dan validasinya jelas.

## Pembersihan / Pemeriksaan Akhir
- Simpan output perintah, keputusan penting, dan hal yang belum selesai ke runbook lokal.
- Pastikan ada jalur aman untuk kembali ke kondisi sebelumnya bila langkah lanjutan gagal.

## Tutorial Berikutnya
[📦 06 Image atau Template](./06-images-or-templates.md)
