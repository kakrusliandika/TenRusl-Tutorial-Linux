# 📋 Checklist Backup

## Tujuan
Gunakan daftar periksa ini untuk meninjau apakah pencadangan VM cukup lengkap untuk memulihkan di bawah tekanan.

## Referensi Terstruktur
| Periksa | Mengapa itu penting | Verifikasi cepat |
| --- | --- | --- |
| Data disk tamu disertakan | Mencegah kepercayaan palsu dari ekspor hanya konfigurasi | Tinjau cakupan pekerjaan pencadangan |
| Definisi atau metadata VM disimpan | Membangun kembali NIC, disk, dan pemetaan memori lebih cepat | Pertahankan ekspor XML atau JSON dengan cadangan |
| Retensi dituliskan | Mencegah postur satu-cadangan saja | Periksa catatan kebijakan repositori |
| Metadata integritas ada | Mendeteksi korupsi sebelum hari pemulihan | `sha256sum` atau perintah verifikasi repositori |
| Pengujian pemulihan dijadwalkan | Membuktikan pemulihan lebih dari sekedar file arsip | Catat tanggal tes terakhir |

## Catatan Interpretasi Praktis
- Backup tanpa metadata definisi VM memperlambat pemulihan.
- Snapshot bukan merupakan cadangan kecuali salinan terpisah yang disimpan dan langkah pemulihan juga ada.

## Cuplikan Perintah
```bash
find /srv/vm-backups -maxdepth 2 -type f -printf '%p\n' 2>/dev/null | sort || true
sha256sum -c /srv/vm-backups/SHA256SUMS 2>/dev/null || true
```

## Dokumen Terkait
- [💾 Putar Pencadangan VM](../how-to/rotate-vm-backups.md)
- [💾 08 Backup](../tutorials/08-backups.md)
- [🧱 Keamanan VM](../index.md)
