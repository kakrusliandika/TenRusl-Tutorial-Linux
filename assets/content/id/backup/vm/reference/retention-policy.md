# 📚 Kebijakan Retensi

## Tujuan
Retensi harus melindungi rollback operator yang baru terjadi, korupsi yang lambat terdeteksi, dan kegagalan tingkat site tanpa menganggap snapshot setara dengan backup hasil ekspor.

## Referensi Terstruktur
| Layer | Contoh Jumlah | Tier Storage | Peran Recovery |
| --- | --- | --- | --- |
| Jendela snapshot | 1-3 titik singkat | Datastore lokal | Rollback maintenance, bukan disaster recovery. |
| Backup harian | 3-7 | Storage backup lokal | Recovery cepat dari kesalahan guest terbaru. |
| Backup mingguan | 4 | Lokal atau secondary site | Jendela rollback yang lebih luas untuk masalah yang lambat terdeteksi. |
| Backup bulanan | 2-3 | Offsite | Riwayat lebih panjang untuk guest kritis. |
| Copy remote | Minimal satu generasi terbaru | Object store atau host remote | Bertahan dari kehilangan site atau datastore. |

## Catatan Interpretasi Praktis
- Prune snapshot secara agresif karena rantai snapshot panjang dapat merusak performa storage dan memberi rasa aman palsu.
- Jangan prune satu-satunya generasi offsite sampai copy remote yang lebih baru berhasil diverifikasi.
- Gunakan tingkat kritikalitas guest untuk memilih kedalaman retensi, bukan satu angka untuk semua VM.

## Cuplikan Pemeriksaan
```bash
find /srv/backup/vm/app01 -maxdepth 1 -mindepth 1 -type d | sort
# bandingkan generasi lokal dengan inventaris remote sebelum pruning apa pun
```

## Dokumen Terkait
- [🧠 Snapshot vs Backup](../concepts/snapshot-vs-backup.md)
- [🧠 Strategi Salinan Offsite](../concepts/offsite-copy-strategy.md)
- [☁️ Tutorial 04: Salin Offsite](../tutorials/04-copy-offsite.md)
