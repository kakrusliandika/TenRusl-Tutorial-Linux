# 📚 Kebijakan Retensi

## Tujuan
Retensi aplikasi web harus menjaga generasi file dan database yang cocok cukup lama untuk recovery dari deploy buruk, kesalahan konten, dan korupsi yang lambat terdeteksi.

## Referensi Terstruktur
| Layer | Contoh Jumlah | Tier Storage | Peran Recovery |
| --- | --- | --- | --- |
| Harian | 7 | Disk backup lokal | Rollback cepat untuk kesalahan konten atau deploy terbaru. |
| Mingguan | 4 | Lokal plus remote | Riwayat yang lebih luas untuk masalah yang lambat terdeteksi. |
| Bulanan | 3 | Offsite | Recovery historis lebih panjang untuk situs penting. |
| Generasi yang sudah direhearse | Minimal satu set terbaru | Lokal atau offsite | Referensi restore yang sudah terbukti untuk drill berikutnya. |

## Catatan Interpretasi Praktis
- Pastikan generasi file dan database tetap berpasangan saat pruning atau copy offsite.
- Minimal satu generasi terbaru sebaiknya sudah lolos rehearsal restore penuh.
- Jangan biarkan snapshot CDN atau provider menggantikan retensi yang sadar aplikasi.

## Cuplikan Pemeriksaan
```bash
find /srv/backup/web/example.com -maxdepth 1 -mindepth 1 -type d | sort
# bandingkan generasi yang disimpan dengan kebijakan tertulis sebelum pruning
```

## Dokumen Terkait
- [🧠 Rehearsal Restore](../concepts/restore-rehearsal.md)
- [🛠️ Uji Restore Web](../how-to/test-web-restore.md)
- [✅ Tutorial 06: Verifikasi Aplikasi](../tutorials/06-verify-application.md)
