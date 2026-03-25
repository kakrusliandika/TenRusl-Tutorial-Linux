# 📚 Tata Letak Backup

## Tujuan
Gunakan tata letak per-host dan per-generasi yang menyimpan arsip, inventaris paket, checksum, dan catatan service di satu tempat agar operator baru dapat merestore tanpa arkeologi.

## Referensi Terstruktur
| Item | Contoh Path | Alasan |
| --- | --- | --- |
| Root backup | `/srv/backup/vps/host01/2026-03-25-0200/` | Retensi per-host yang dapat diprediksi. |
| Arsip utama | `system-data.tar.gz` | Konfigurasi host dan data layanan yang dipilih. |
| Inventaris paket | `packages.tsv` | Konteks rebuild untuk VPS bersih. |
| Checksum | `SHA256SUMS` | Verifikasi integritas sebelum restore. |
| Catatan service | `service-status.txt` | Ringkasan layanan yang aktif saat backup dibuat. |
| Dump DB opsional | `app.sql.gz` | Menjaga state database tetap sejajar dengan arsip. |

## Catatan Interpretasi Praktis
- Tata letak yang bersih penting karena recovery biasanya dilakukan di bawah tekanan waktu.
- Pertahankan timestamp generasi yang konsisten antara arsip, dump database, dan copy offsite.
- Jika secret tidak boleh disimpan di arsip, simpan referensi amannya di runbook dan dokumentasikan cara menerapkannya kembali.

## Cuplikan Pemeriksaan
```bash
find /srv/backup/vps/host01/2026-03-25-0200 -maxdepth 1 -type f -printf '%f\n' | sort
sha256sum -c /srv/backup/vps/host01/2026-03-25-0200/SHA256SUMS
```

## Dokumen Terkait
- [🛠️ Buat Backup VPS](../how-to/create-backup.md)
- [📚 Checklist Restore](./restore-checklist.md)
- [📦 Tutorial 03: Buat Backup Penuh](../tutorials/03-create-full-backup.md)
