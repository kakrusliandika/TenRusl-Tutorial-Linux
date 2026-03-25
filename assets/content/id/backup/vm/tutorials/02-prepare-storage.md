# 💽 Tutorial 02: Siapkan Storage

## Tujuan
Menyiapkan storage staging untuk backup VM dan memastikan target mampu menampung satu generasi penuh plus data integritas.

## Prasyarat
- Akses shell atau konsol ke host hypervisor.
- Penyimpanan backup yang berbeda dari datastore atau host sumber.
- Target lab, VLAN terisolasi, atau lingkungan rehearsal restore.

## Asumsi Lingkungan
- Host hypervisor memiliki jalur backup lokal atau mounted target yang tersedia.
- Ukuran guest diketahui cukup untuk memperkirakan kebutuhan ruang backup.

## Langkah Berurutan
### 1. Buat root backup per guest
Gunakan path deterministik agar logika retensi dan salinan offsite nanti tetap sederhana.

```bash
sudo install -d -m 0750 /srv/backup/vm/app01
sudo ls -ld /srv/backup/vm/app01
```

### 2. Periksa kapasitas yang tersedia
Pastikan target backup dapat menampung image disk penuh plus headroom untuk run berikutnya.

```bash
df -h /srv/backup/vm
qemu-img info /var/lib/libvirt/images/app01.qcow2
```

## ✅ Titik Validasi
- Root backup ada dengan izin yang sesuai.
- Target storage punya kapasitas cukup untuk minimal satu generasi backup penuh.

## ⚠️ Peringatan
- Hindari men-stage backup VM di datastore yang sama dengan guest sumber bila Anda mengantisipasi kegagalan site.

## Pembersihan / Pemeriksaan Akhir
- Catat ekspektasi ruang kosong di runbook sebelum melanjutkan ke tahap ekspor.

## Tutorial Berikutnya
[📦 Tutorial 03: Buat Backup](./03-create-backup.md)
