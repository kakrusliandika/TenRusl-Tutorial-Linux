# 🧰 Tutorial 02: Siapkan Tool

## Tujuan
Menyiapkan tool arsip, checksum, dan transfer untuk workflow backup VPS.

## Prasyarat
- Akses root atau sudo ke VPS.
- Penyimpanan backup yang terpisah dari disk workload.
- Target VPS bersih atau rehearsal target untuk uji restore.

## Asumsi Lingkungan
- Anda bisa memasang paket di VPS atau mengonfirmasi tool sudah ada.

## Langkah Berurutan
### 1. Konfirmasi tool inti
Verifikasi utilitas arsip, checksum, dan transfer tersedia.

```bash
command -v tar sha256sum rsync systemctl
command -v mysqldump pg_dump 2>/dev/null || true
```

### 2. Buat root backup
Gunakan path stabil yang akan dipakai tutorial berikutnya.

```bash
sudo install -d -m 0750 /srv/backup/vps/$(hostname -s)
sudo ls -ld /srv/backup/vps/$(hostname -s)
```

## ✅ Titik Validasi
- Tool inti terpasang atau sudah tersedia.
- Root backup ada dan bisa dipakai oleh workflow backup.

## ⚠️ Peringatan
- Jika tool dump database belum ada, jangan tunda mencatat engine database yang benar-benar dipakai workload.

## Pembersihan / Pemeriksaan Akhir
- Simpan catatan mengenai tool yang masih hilang atau nama paket yang spesifik distro.

## Tutorial Berikutnya
[📦 Tutorial 03: Buat Backup Penuh](./03-create-full-backup.md)
