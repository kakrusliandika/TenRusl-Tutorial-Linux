# 📦 Tutorial 03: Buat Backup Penuh

## Tujuan
Membuat generasi backup VPS penuh pertama dan memberi checksum.

## Prasyarat
- Akses root atau sudo ke VPS.
- Penyimpanan backup yang terpisah dari disk workload.
- Target VPS bersih atau rehearsal target untuk uji restore.

## Asumsi Lingkungan
- Path penting dan root backup sudah didefinisikan.

## Langkah Berurutan
### 1. Bangun direktori generasi dan inventaris paket
Simpan setiap generasi sebagai satu unit yang berdiri sendiri.

```bash
HOST=$(hostname -s)
STAMP=$(date +%F-%H%M)
BACKUP_DIR=/srv/backup/vps/$HOST/$STAMP
mkdir -p "$BACKUP_DIR"
dpkg-query -W -f='${binary:Package}\t${Version}\n' > "$BACKUP_DIR/packages.tsv" 2>/dev/null || true
rpm -qa --qf '%{NAME}\t%{VERSION}-%{RELEASE}\n' > "$BACKUP_DIR/packages.tsv" 2>/dev/null || true
```

### 2. Arsipkan sistem dan data aplikasi
Tangkap path yang dipilih sambil menjaga metadata file.

```bash
sudo tar --xattrs --acls --numeric-owner -czf "$BACKUP_DIR/system-data.tar.gz" /etc /var/www /srv /home
(cd "$BACKUP_DIR" && sha256sum system-data.tar.gz packages.tsv > SHA256SUMS)
```

## ✅ Titik Validasi
- Direktori generasi berisi arsip, inventaris, dan checksum.
- Isi arsip terlihat sesuai saat diperiksa dengan `tar -tzf`.

## ⚠️ Peringatan
- Jangan prune generasi sebelumnya dulu.

## Pembersihan / Pemeriksaan Akhir
- Tuliskan path generasi untuk tahap offsite berikutnya.

## Tutorial Berikutnya
[☁️ Tutorial 04: Upload Offsite](./04-upload-offsite.md)
