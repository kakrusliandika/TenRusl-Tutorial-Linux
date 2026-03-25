# 📦 Tutorial 03: Buat Backup

## Tujuan
Membuat generasi backup VM manual pertama beserta metadata, data disk, dan checksum.

## Prasyarat
- Akses shell atau konsol ke host hypervisor.
- Penyimpanan backup yang berbeda dari datastore atau host sumber.
- Target lab, VLAN terisolasi, atau lingkungan rehearsal restore.

## Asumsi Lingkungan
- Jalur disk guest dan root backup sudah dikonfirmasi.

## Langkah Berurutan
### 1. Ekspor metadata dan disk
Bangun satu generasi bertanggal yang nanti bisa dikelola retensinya dengan bersih.

```bash
VM=app01
STAMP=$(date +%F-%H%M)
BACKUP_DIR=/srv/backup/vm/$VM/$STAMP
mkdir -p "$BACKUP_DIR"
virsh dumpxml "$VM" > "$BACKUP_DIR/$VM.xml"
rsync -aH --sparse /var/lib/libvirt/images/$VM.qcow2 "$BACKUP_DIR/"
```

### 2. Buat checksum generasi
Jangan masukkan generasi ke retensi atau offsite tanpa data integritas.

```bash
cd "$BACKUP_DIR"
sha256sum * > SHA256SUMS
ls -lh
```

## ✅ Titik Validasi
- Direktori generasi berisi XML, image disk, dan file checksum.
- Checksum selesai dibuat dengan sukses pada artefak baru.

## ⚠️ Peringatan
- Jangan ubah nama artefak secara sembarangan setelah checksum dibuat.

## Pembersihan / Pemeriksaan Akhir
- Tuliskan path generasi lengkap untuk tutorial berikutnya.

## Tutorial Berikutnya
[☁️ Tutorial 04: Salin Offsite](./04-copy-offsite.md)
