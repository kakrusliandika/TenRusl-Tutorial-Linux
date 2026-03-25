# 🧠 Snapshot vs Backup

## Ringkasan
Snapshot VM adalah alat rollback jangka pendek yang hidup dekat dengan workload sumber. Backup VM adalah artefak recovery terpisah yang lebih tahan terhadap berbagai mode kegagalan dan bisa dipindahkan ke luar lokasi.

## Apa Arti Konsep Ini
Gunakan snapshot saat Anda memerlukan checkpoint cepat di sekitar maintenance terencana. Gunakan backup saat Anda memerlukan generasi recovery yang tetap bertahan walau host hilang, datastore rusak, atau operator melakukan kesalahan pada platform asal.

## Mengapa Ini Penting secara Operasional
- Snapshot sering berbagi hypervisor, storage pool, dan risiko retensi yang sama dengan VM aktif.
- Backup seharusnya mencakup metadata definisi guest dan isi disk agar rebuild tetap deterministik.
- Restore dari backup lebih lambat daripada rollback snapshot, tetapi cakupan recovery-nya lebih luas dan tahan lama.

## Cara Pandang Restore-First
Jika restore path dirancang lebih dulu, Anda akan memperlakukan snapshot sebagai alat kenyamanan dan backup sebagai artefak disaster recovery yang sebenarnya. Itu mencegah asumsi bahwa rollback point yang cepat bisa menggantikan backup hasil ekspor yang terpisah dan sudah di-checksum.

## Implikasi Retensi, Offsite, dan Konsistensi
- Retensi snapshot sebaiknya singkat karena menambah tekanan storage dan bisa mempengaruhi performa hypervisor.
- Backup perlu retensi terpisah dan minimal satu salinan offsite agar kegagalan host atau datastore tidak menghapus semua generasi.
- Capture crash-consistent dan app-consistent harus diberi label jelas di metadata backup.

## Kesalahan Umum
- Memelihara rantai snapshot panjang lalu menyebutnya kebijakan backup.
- Mengekspor hanya image disk sambil melupakan XML guest atau metadata definisi VM yang setara.
- Menyimpan semua generasi di cluster atau domain storage yang sama dengan guest sumber.

## Dokumen Terkait
- [🧠 Perencanaan Restore](./restore-planning.md)
- [🛠️ Buat Backup VM](../how-to/create-vm-backup.md)
- [📚 Checklist Restore](../reference/restore-checklist.md)
