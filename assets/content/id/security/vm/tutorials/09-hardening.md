# ✅ 09 Hardening

## Tujuan
Jalankan VM final dan peninjauan template.

## Prasyarat
- Akses Shell ke tamu atau jalur inventaris sisi host yang relevan.
- File catatan yang dapat ditulis untuk tinjauan properti.

## Asumsi Lingkungan
- Tamu atau tuan rumah cukup stabil untuk ditinjau dan setiap operasi berisiko dicadangkan terlebih dahulu.

## Langkah Berurutan
### 1. Jalankan kembali pemeriksaan identitas dan jaringan tamu
Konfirmasikan status saat ini sesuai dengan desain yang terdokumentasi.

```bash
hostnamectl
ip -br addr
ip route
sudo ss -tulpn
```

### 2. Tinjau templat dan catatan cadangan
Pengerasan tidak lengkap jika jalur kloning dan pemulihan tidak jelas.

```bash
sed -n "1,160p" vm-security-notes.txt
```

### 3. Catat pengecualian yang belum terselesaikan
Pengecualian sementara harus dapat dilihat oleh operator berikutnya.

```bash
printf "%s\n" "Open VM security exceptions:" >> vm-security-notes.txt
```

## ✅ Titik Validasi
- Status saat ini cocok dengan zona kepercayaan yang terdokumentasi, garis keturunan templat, dan jalur pemulihan.

## ⚠️ Peringatan
- Jangan menyebut dasar VM selesai jika asumsi pemulihan atau isolasi masih hanya ada di memori.

## Pembersihan / Pemeriksaan Akhir
- Simpan catatan, ekspor, dan checksum di mana operator berikutnya dapat menemukannya dengan aman.

## Tutorial Berikutnya
[Berikutnya: 10 Penutup](./10-closeout.md)
