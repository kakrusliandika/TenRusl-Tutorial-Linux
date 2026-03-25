# 💾 08 Backup

## Tujuan
Periksa cakupan pencadangan, penamaan, dan kesiapan pemulihan.

## Prasyarat
- Akses Shell ke tamu atau jalur inventaris sisi host yang relevan.
- File catatan yang dapat ditulis untuk tinjauan properti.

## Asumsi Lingkungan
- Tamu atau tuan rumah cukup stabil untuk ditinjau dan setiap operasi berisiko dicadangkan terlebih dahulu.

## Langkah Berurutan
### 1. Artefak cadangan inventaris
Buat daftar apa yang ada dan bagaimana namanya.

```bash
find /srv/vm-backups -maxdepth 2 -type f -printf '%p\n' 2>/dev/null | sort || true
```

### 2. Periksa integritas metadata
Backup tanpa verifikasi hanyalah arsip.

```bash
sha256sum -c /srv/vm-backups/SHA256SUMS 2>/dev/null || true
```

### 3. Rekam prasyarat pemulihan
Tangkap metadata tamu, format disk, dan dependensi eksternal.

```bash
printf "%s\n" "Restore notes for vm-name:" >> vm-security-notes.txt
```

## ✅ Titik Validasi
- Status saat ini cocok dengan zona kepercayaan yang terdokumentasi, garis keturunan templat, dan jalur pemulihan.

## ⚠️ Peringatan
- Jangan menyebut dasar VM selesai jika asumsi pemulihan atau isolasi masih hanya ada di memori.

## Pembersihan / Pemeriksaan Akhir
- Simpan catatan, ekspor, dan checksum di mana operator berikutnya dapat menemukannya dengan aman.

## Tutorial Berikutnya
[Berikutnya: 09 Pengerasan](./09-hardening.md)
