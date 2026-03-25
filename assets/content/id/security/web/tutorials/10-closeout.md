# 📘 10 Penutup

## Tujuan
Tes paket, konfigurasi, dan siklus peninjauan berikutnya.

## Prasyarat
- Akses shell ke nama host publik dan host edge atau log layanan.
- File catatan yang dapat ditulis untuk temuan dan pengecualian.

## Asumsi Lingkungan
- Tepi publik cukup stabil untuk tinjauan terkontrol dan setiap perubahan konfigurasi yang berisiko akan dicadangkan terlebih dahulu.

## Langkah Berurutan
### 1. Gabungkan catatan dan konfigurasi tepi
Pertahankan garis dasar pengoperasian dan materi rollback.

```bash
tar czf web-security-pack-$(date +%F).tgz web-security-notes.txt /etc/nginx /etc/caddy 2>/dev/null || true
```

### 2. Catat tanggal peninjauan berikutnya
Sertifikat, header, dan penyimpangan eksposur kecuali ditinjau kembali.

```bash
printf "%s\n" "Peninjauan keamanan web berikutnya: YYYY-MM-DD" >> web-security-notes.txt
```

### 3. Arahkan operator yang akan datang kembali ke indeks modul
Indeks adalah entri navigasi untuk siklus penyegaran di masa mendatang.

```bash
echo "Tinjau modul: ../index.md"
```

## ✅ Titik Validasi
- Respons dan log langsung cocok dengan desain tepi yang diharapkan setelah setiap perubahan.

## ⚠️ Peringatan
- Jangan menyebut tepi sudah di-hardening jika nama host yang basi, pengalihan yang lemah, atau log yang hilang tetap tidak terdokumentasi.

## Pembersihan / Pemeriksaan Akhir
- Simpan catatan, konfigurasikan cadangan, dan hasil pengujian di lokasi yang ditinjau.

## Tutorial Berikutnya
[Kembali ke Keamanan Web](../index.md)
