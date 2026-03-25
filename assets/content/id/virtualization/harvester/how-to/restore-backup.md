# ↩️ Pulihkan Backup dengan Validasi

## Tujuan
Melatih restore pada Harvester secara sengaja sehingga backup bukan hanya arsip, tetapi benar-benar jalur recovery.

## Kapan Prosedur Ini Digunakan
Gunakan saat Anda ingin menguji backup baru, mengaudit kesiapan recovery, atau memulihkan workload ke lingkungan lab atau staging.

## Prasyarat
- Anda memiliki backup yang terdokumentasi dan tahu storage target untuk restore.
- Restore dilakukan pada workload uji atau lingkungan yang aman terlebih dahulu.

## Asumsi Lingkungan
- Mekanisme restore berbeda menurut platform dan jenis artefak.
- Validasi akhir harus membuktikan guest hidup, jaringannya benar, dan data atau layanan inti dapat diperiksa.

## Prosedur Langkah demi Langkah
1. **Inventarisasi backup yang akan dipakai**
Pastikan Anda tahu backup mana yang diuji, kapan dibuat, dan dari workload mana asalnya.
```bash
kubectl api-resources | grep -Ei "backup|restore" || true
kubectl get vm -A 2>/dev/null || true
kubectl get pvc -A
kubectl get pods -A
```

2. **Lakukan restore pada target yang jelas**
Gunakan target storage dan identitas guest yang tidak bertabrakan dengan workload produksi.

3. **Validasi hasil restore**
Periksa apakah guest bisa boot, mendapat jaringan yang tepat, dan punya data atau layanan inti yang memang diharapkan.

## Poin Validasi
- Backup yang dipakai memiliki asal dan tanggal yang jelas.
- Restore selesai tanpa bentrok identitas dengan workload lain.
- Guest hasil restore lolos pemeriksaan boot, jaringan, dan layanan inti.

## Catatan Troubleshooting
- Restore selesai tetapi guest tidak sehat: cek storage placement, jaringan, dan log boot sebelum mencoba backup lain.
- Restore lambat atau gagal: audit backend storage, ruang kosong, dan log service platform.
- Jika control plane terlihat normal tetapi host tidak, prioritaskan pembacaan host-side facts.

## Catatan Rollback atau Recovery
- Hapus atau arsipkan guest hasil restore yang gagal agar tidak menambah kebingungan inventaris.
- Kembalikan ke backup terakhir yang memang terbukti baik.
- Catat penyebab kegagalan restore agar runbook membaik, bukan hanya backup yang bertambah.

## Dokumen Terkait
- [📋 Checklist Backup](../reference/backup-checklist.md)
- [📋 Checklist Operasional](../reference/operations-checklist.md)
