# ✅ 10 Penutupan

## Tujuan
Menutup build awal dengan validasi akhir dan catatan operasional yang rapi.

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
Lakukan review akhir atas host, guest, jaringan, storage, dan catatan runbook sebelum platform dianggap siap dipakai.
```bash
kubectl get nodes -o wide
kubectl get pods -A
kubectl get pvc -A
kubectl get sc
```

3. **Simpan catatan hasilnya**
Catat output penting, keputusan desain, dan hal yang harus diperiksa lagi pada langkah berikutnya.

## Poin Validasi
- Tujuan langkah ini tercapai dan bisa dibuktikan dari output yang disimpan.
- Tidak ada perubahan yang dibiarkan aktif tanpa penjelasan peran atau rollback.
- Workload uji, jika ada, masih dapat dibaca kondisinya dengan jelas.

## Peringatan
- Jangan sebut platform siap produksi bila catatan recovery dan validasi akhirnya belum lengkap.

## Pembersihan / Pemeriksaan Akhir
- Simpan output perintah, keputusan penting, dan hal yang belum selesai ke runbook lokal.
- Pastikan ada jalur aman untuk kembali ke kondisi sebelumnya bila langkah lanjutan gagal.

## Tutorial Berikutnya
[☁️ Harvester](../index.md)
