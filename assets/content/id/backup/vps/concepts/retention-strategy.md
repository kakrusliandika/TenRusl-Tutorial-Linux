# 🧠 Strategi Retensi

## Ringkasan
Strategi retensi menentukan berapa banyak generasi yang disimpan secara lokal, berapa yang dikirim ke offsite, dan seberapa jauh Anda bisa mundur ketika insiden tidak langsung terdeteksi.

## Apa Arti Konsep Ini
Strategi retensi adalah lapisan kebijakan di atas job backup berulang. Ia mengubah arsip bertanggal menjadi sejarah recovery yang berguna, dengan aturan pruning yang jelas dan perlindungan terpisah untuk generasi offsite.

## Mengapa Ini Penting secara Operasional
- Deploy buruk, penghapusan tak sengaja, dan korupsi yang lambat muncul pada timeline yang berbeda.
- Biaya storage itu nyata, tetapi pruning yang terlalu agresif dapat menghapus generasi terakhir yang masih baik.
- Retensi harus eksplisit untuk tier lokal dan offsite.

## Cara Pandang Restore-First
Pertanyaan restore-first-nya adalah: generasi mana yang akan Anda pilih jika backup hari ini ternyata sudah terkontaminasi masalah yang sama dengan produksi? Biasanya jawaban itu memerlukan layer harian, mingguan, dan offsite.

## Implikasi Retensi, Offsite, dan Konsistensi
- Copy lokal biasanya lebih cepat untuk restore, tetapi copy offsite melindungi dari kehilangan host, disk, atau provider.
- Kebijakan retensi harus menyatakan kapan prune dilakukan, siapa yang menyetujui pengecualian, dan verifikasi apa yang wajib sebelum penghapusan.
- Dump database dan arsip filesystem harus menggunakan stamp generasi yang sama agar retensi tidak memisahkan artefak restore yang saling berkaitan.

## Kesalahan Umum
- Menyimpan hanya satu file backup bergilir tanpa kedalaman sejarah.
- Menerapkan angka retensi yang sama untuk semua VPS tanpa mempertimbangkan dampak bisnis.
- Menghapus generasi lokal segera setelah transfer offsite dimulai, bukan setelah diverifikasi.

## Dokumen Terkait
- [📚 Kebijakan Retensi](../reference/retention-policy.md)
- [🛠️ Jadwalkan Backup](../how-to/schedule-backups.md)
- [☁️ Tutorial 04: Upload Offsite](../tutorials/04-upload-offsite.md)
