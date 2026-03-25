# ☁️ Tutorial 04: Salin Offsite

## Tujuan
Menyalin generasi backup VM yang sudah tervalidasi ke lokasi remote di luar domain kegagalan sumber.

## Prasyarat
- Akses shell atau konsol ke host hypervisor.
- Penyimpanan backup yang berbeda dari datastore atau host sumber.
- Target lab, VLAN terisolasi, atau lingkungan rehearsal restore.

## Asumsi Lingkungan
- Sudah ada generasi backup lokal yang lolos validasi.
- Tersedia host backup remote yang dapat dijangkau lewat SSH atau mount offsite.

## Langkah Berurutan
### 1. Transfer generasi
Gunakan transport yang menjaga timestamp dan dapat melanjutkan transfer image besar jika terputus.

```bash
BACKUP_DIR=/srv/backup/vm/app01/$(ls -1 /srv/backup/vm/app01 | sort | tail -n1)
REMOTE=backup@example.net:/srv/offsite/vm/app01/
rsync -aH --numeric-ids --partial "$BACKUP_DIR" "$REMOTE"
```

### 2. Verifikasi copy remote ada
Verifikasi remote-lah yang mengubah transfer menjadi langkah perlindungan offsite.

```bash
ssh backup@example.net 'find /srv/offsite/vm/app01 -maxdepth 2 -type f | sort | tail -n 10'
ssh backup@example.net 'cd /srv/offsite/vm/app01 && find . -name SHA256SUMS -print'
```

## ✅ Titik Validasi
- Lokasi remote berisi direktori generasi dan file checksum yang sama.
- Copy lokal tetap tersedia sampai copy remote benar-benar dikonfirmasi.

## ⚠️ Peringatan
- Jangan prune generasi lokal hanya karena perintah transfer satu kali keluar sukses.

## Pembersihan / Pemeriksaan Akhir
- Catat path remote, tanggal, dan hasil transfer di catatan backup.

## Tutorial Berikutnya
[↩️ Tutorial 05: Restore VM](./05-restore-vm.md)
