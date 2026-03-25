# 🛠️ Verifikasi Backup

## Tujuan
Memverifikasi bahwa setiap generasi backup VPS dapat dibaca, cukup lengkap untuk direstore, dan cukup baru untuk dipercaya sebelum pruning retensi atau promosi offsite.

## Kasus Penggunaan
Gunakan ini setelah setiap job backup dan sebelum menyatakan generasi tersebut aman untuk retensi jangka panjang.

## Prasyarat
- Satu generasi backup sudah tersedia secara lokal atau di target offsite.
- Checksum dibuat saat backup dibuat.
- Anda bisa memeriksa isi arsip dari shell.

## Asumsi Lingkungan
- Verifikasi harus terjadi sebelum generasi lama yang baik dihapus.
- Arsip mencakup inventaris paket dan catatan service sederhana.

## Langkah Tepat
### 1. Validasi checksum dan tampilkan isi arsip
Integritas dan listing isi yang mudah dibaca adalah garis pertahanan pertama yang tercepat.

```bash
BACKUP_DIR=/srv/backup/vps/host01/2026-03-25-0100
cd "$BACKUP_DIR"
sha256sum -c SHA256SUMS
tar -tzf system-data.tar.gz | head -n 50
```

### 2. Tinjau freshness dan file konteks
Backup yang valid secara teknis tetapi terlalu lama atau tidak lengkap tetap lemah secara operasional.

```bash
stat system-data.tar.gz packages.tsv SHA256SUMS
wc -l packages.tsv
sed -n '1,20p' service-status.txt 2>/dev/null || true
```

### 3. Opsional verifikasi copy offsite
Generasi offsite harus cocok dengan yang lokal sebelum prune lokal dimulai.

```bash
ssh backup@example.net 'cd /srv/offsite/vps/host01/2026-03-25-0100 && sha256sum -c SHA256SUMS'
```

## ✅ Titik Validasi
- Checksum lolos secara lokal dan, jika berlaku, di sisi remote.
- Arsip memuat path bernilai tinggi yang diharapkan dan inventaris paket yang berguna.
- Timestamp generasi sesuai dengan kebutuhan retensi dan SLA workload.

## Pemecahan Masalah
- Jika arsip memuat lebih sedikit path daripada yang diharapkan, tinjau exclusion sebelum berasumsi workload berubah dengan aman.
- Jika verifikasi checksum gagal, anggap generasi itu buruk dan pertahankan copy lama yang diketahui baik.
- Jika verifikasi offsite gagal, jangan hapus generasi lokal dulu.

## ↩️ Catatan Rollback atau Pemulihan
- Beri label jelas pada generasi gagal agar tidak dipilih saat insiden.
- Ulangi backup segera jika generasi terbaru tidak lengkap atau rusak.

## Dokumen Terkait
- [🧠 Pola Pikir Restore-First](../concepts/restore-first-thinking.md)
- [📚 Checklist Restore](../reference/restore-checklist.md)
- [✅ Tutorial 06: Verifikasi Restore](../tutorials/06-verify-restore.md)
