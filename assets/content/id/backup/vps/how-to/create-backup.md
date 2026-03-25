# 🛠️ Buat Backup VPS

## Tujuan
Membuat backup file-level VPS yang menangkap konfigurasi host, data service yang dipilih, konteks paket, dan metadata integritas dalam struktur direktori yang dapat diulang.

## Kasus Penggunaan
Gunakan ini saat Anda membutuhkan backup generasi pertama secara manual sebelum otomatisasi jadwal atau retensi ditambahkan.

## Prasyarat
- Anda mengetahui direktori, database, dan referensi secret mana yang diperlukan untuk membangun ulang workload.
- Target backup ada di luar root volume atau di luar VPS itu sendiri.
- Anda dapat menerima quiesce singkat bila workload berubah cepat.

## Asumsi Lingkungan
- Contoh men-stage backup di `/srv/backup/vps/$HOSTNAME/$STAMP`.
- Path yang disposable seperti cache dapat dikecualikan jika aman diregenerasi.
- Inventaris paket ditangkap bersama arsip untuk konteks rebuild.

## Langkah Tepat
### 1. Buat direktori generasi dan inventaris paket
Simpan arsip dan konteks sistem yang dibutuhkan untuk rebuild host bersih.

```bash
HOST=$(hostname -s)
STAMP=$(date +%F-%H%M)
BACKUP_DIR=/srv/backup/vps/$HOST/$STAMP
mkdir -p "$BACKUP_DIR"
if command -v dpkg >/dev/null 2>&1; then
  dpkg-query -W -f='${binary:Package}\t${Version}\n' > "$BACKUP_DIR/packages.tsv"
elif command -v rpm >/dev/null 2>&1; then
  rpm -qa --qf '%{NAME}\t%{VERSION}-%{RELEASE}\n' > "$BACKUP_DIR/packages.tsv"
fi
```

### 2. Arsipkan konfigurasi dan data layanan
Tangkap path host dan aplikasi yang penting dalam satu arsip bertanggal.

```bash
sudo tar --xattrs --acls --numeric-owner -czf "$BACKUP_DIR/system-data.tar.gz" \
  /etc \
  /var/www \
  /srv \
  /home \
  --exclude=/var/www/*/cache \
  --exclude=/srv/*/tmp
```

### 3. Tulis checksum dan catatan service sederhana
Data integritas dan catatan service membuat arsip lebih berguna saat restore.

```bash
cd "$BACKUP_DIR"
sha256sum system-data.tar.gz packages.tsv > SHA256SUMS
systemctl list-units --type=service --state=running > service-status.txt
```

## ✅ Titik Validasi
- Arsip, inventaris paket, checksum, dan catatan service berada pada direktori generasi yang sama.
- Arsip dapat dilihat dengan `tar -tzf` dan file checksum tervalidasi dengan bersih.

## Pemecahan Masalah
- Jika arsip terlalu besar, pisahkan data aplikasi yang mutable dari code statis dan tinjau exclusion dengan cermat.
- Jika service masih menulis data saat backup, tambahkan dump database atau quiesce singkat sebelum membuat arsip.
- Jika permission salah saat restore nanti, pastikan `tar` preserving ACL dan numeric owner di environment Anda.

## ↩️ Catatan Rollback atau Pemulihan
- Jangan hapus data sumber atau generasi lama yang diketahui baik sampai arsip tervalidasi.
- Jika backup melewatkan path penting, buat generasi baru daripada menambal generasi lama secara diam-diam.

## Dokumen Terkait
- [🧠 Strategi Backup untuk Linux VPS](../concepts/backup-strategy.md)
- [📚 Tata Letak Backup](../reference/backup-layout.md)
- [📦 Tutorial 03: Buat Backup Penuh](../tutorials/03-create-full-backup.md)
