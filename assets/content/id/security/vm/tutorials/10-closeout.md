# 📘 10 Penutup

## Tujuan
Data rollback paket dan jadwal review selanjutnya.

## Prasyarat
- Akses Shell ke tamu atau jalur inventaris sisi host yang relevan.
- File catatan yang dapat ditulis untuk tinjauan properti.

## Asumsi Lingkungan
- Tamu atau tuan rumah cukup stabil untuk ditinjau dan setiap operasi berisiko dicadangkan terlebih dahulu.

## Langkah Berurutan
### 1. Gabungkan catatan dan metadata
Simpan catatan keamanan di dekat templat dan catatan cadangan.

```bash
tar czf vm-security-pack-$(date +%F).tgz vm-security-notes.txt 2>/dev/null || true
```

### 2. Rekam jendela tinjauan berikutnya
Postur keamanan menurun jika tidak ada yang memiliki cek berikutnya.

```bash
printf "%s\n" "Next VM security review: YYYY-MM-DD" >> vm-security-notes.txt
```

### 3. Arahkan operator kembali ke indeks modul
Indeks adalah laman landas untuk siklus penyegaran di masa mendatang.

```bash
echo "Tinjau modul: ../index.md"
```

## ✅ Titik Validasi
- Status saat ini cocok dengan zona kepercayaan yang terdokumentasi, garis keturunan templat, dan jalur pemulihan.

## ⚠️ Peringatan
- Jangan menyebut dasar VM selesai jika asumsi pemulihan atau isolasi masih hanya ada di memori.

## Pembersihan / Pemeriksaan Akhir
- Simpan catatan, ekspor, dan checksum di mana operator berikutnya dapat menemukannya dengan aman.

## Tutorial Berikutnya
[Kembali ke Keamanan VM](../index.md)
