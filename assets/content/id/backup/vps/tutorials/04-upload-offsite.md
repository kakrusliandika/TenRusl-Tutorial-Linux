# ☁️ Tutorial 04: Upload Offsite

## Tujuan
Mengirim generasi backup VPS yang sudah tervalidasi ke tujuan offsite dan memastikan copy remote dapat digunakan.

## Prasyarat
- Akses root atau sudo ke VPS.
- Penyimpanan backup yang terpisah dari disk workload.
- Target VPS bersih atau rehearsal target untuk uji restore.

## Asumsi Lingkungan
- Generasi lokal yang baru sudah ada.
- Tersedia endpoint backup remote yang dapat diakses via SSH.

## Langkah Berurutan
### 1. Transfer generasi
Gunakan `rsync` atau yang setara agar timestamp terjaga dan transfer dapat dilanjutkan jika terputus.

```bash
BACKUP_DIR=$(find /srv/backup/vps/$(hostname -s) -maxdepth 1 -mindepth 1 -type d | sort | tail -n1)
REMOTE=backup@example.net:/srv/offsite/vps/$(hostname -s)/
rsync -aH --numeric-ids --partial "$BACKUP_DIR" "$REMOTE"
```

### 2. Periksa copy remote
Keberadaan remote dan verifikasi checksum lebih penting daripada exit code transfer semata.

```bash
ssh backup@example.net 'find /srv/offsite/vps/$(hostname -s) -maxdepth 2 -type f | sort | tail -n 10'
ssh backup@example.net 'cd /srv/offsite/vps/$(hostname -s)/$(basename "$BACKUP_DIR") && sha256sum -c SHA256SUMS'
```

## ✅ Titik Validasi
- Copy offsite berisi arsip, inventaris, dan file checksum yang sama.
- Validasi checksum remote berhasil sebelum keputusan prune lokal dibuat.

## ⚠️ Peringatan
- Jangan hapus copy lokal sampai copy offsite benar-benar dapat dipakai.

## Pembersihan / Pemeriksaan Akhir
- Catat path remote dan tanggal backup di notes backup.

## Tutorial Berikutnya
[↩️ Tutorial 05: Restore ke VPS Baru](./05-restore-on-new-vps.md)
