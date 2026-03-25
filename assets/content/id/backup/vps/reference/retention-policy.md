# 📚 Kebijakan Retensi

## Tujuan
Retensi harus menjaga sejarah yang cukup untuk pulih dari kesalahan cepat dan korupsi yang lambat, sambil tetap menyimpan copy offsite yang sudah diuji.

## Referensi Terstruktur
| Tier | Contoh Jumlah | Lokasi Umum | Peran Recovery |
| --- | --- | --- | --- |
| Harian | 7 | Disk backup lokal | Rollback cepat setelah kesalahan terbaru atau deploy buruk. |
| Mingguan | 4 | Lokal atau host sekunder | Riwayat lebih luas untuk masalah yang lambat terdeteksi. |
| Bulanan | 3-6 | Offsite | Recovery historis yang lebih panjang untuk host penting. |
| Snapshot provider | Opsional dan singkat | Control plane provider | Rollback platform cepat, bukan pengganti arsip. |

## Catatan Interpretasi Praktis
- Dokumentasikan aturan pruning secara eksplisit agar rotasi tidak terjadi diam-diam karena disk penuh.
- Jangan memperlakukan snapshot provider dan backup file-level sebagai kontrol yang setara.
- Retensi offsite sebaiknya tertinggal sedikit dari pruning lokal agar selalu ada copy remote yang baru.

## Cuplikan Pemeriksaan
```bash
find /srv/backup/vps/host01 -maxdepth 1 -mindepth 1 -type d | sort
# bandingkan generasi yang dipertahankan dengan kebijakan tertulis sebelum menghapus
```

## Dokumen Terkait
- [🧠 Strategi Retensi](../concepts/retention-strategy.md)
- [🛠️ Jadwalkan Backup](../how-to/schedule-backups.md)
- [☁️ Tutorial 04: Upload Offsite](../tutorials/04-upload-offsite.md)
