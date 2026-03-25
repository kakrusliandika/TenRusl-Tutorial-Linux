# 🔒 03 Baseline TLS

## Tujuan
Verifikasi kesehatan sertifikat dan perilaku HTTPS terlebih dahulu.

## Prasyarat
- Akses shell ke nama host publik dan host edge atau log layanan.
- File catatan yang dapat ditulis untuk temuan dan pengecualian.

## Asumsi Lingkungan
- Tepi publik cukup stabil untuk tinjauan terkontrol dan setiap perubahan konfigurasi yang berisiko akan dicadangkan terlebih dahulu.

## Langkah Berurutan
### 1. Periksa perilaku HTTP ke HTTPS
Kebijakan pengalihan yang dapat diprediksi sama pentingnya dengan sertifikat.

```bash
curl -I http://example.com
curl -I https://example.com
```

### 2. Periksa sertifikat
Baca penerbit dan tanggal validitas dari pendengar langsung.

```bash
openssl s_client -connect example.com:443 -servername example.com </dev/null | openssl x509 -noout -subject -issuer -dates
```

### 3. Catat kepemilikan TLS
Seseorang harus memiliki pemantauan perpanjangan dan kadaluwarsa.

```bash
printf "%s\n" "certificate owner:" "renewal path:" >> web-security-notes.txt
```

## ✅ Titik Validasi
- Respons dan log langsung cocok dengan desain tepi yang diharapkan setelah setiap perubahan.

## ⚠️ Peringatan
- Jangan menyebut tepi sudah di-hardening jika nama host yang basi, pengalihan yang lemah, atau log yang hilang tetap tidak terdokumentasi.

## Pembersihan / Pemeriksaan Akhir
- Simpan catatan, konfigurasikan cadangan, dan hasil pengujian di lokasi yang ditinjau.

## Tutorial Berikutnya
[Berikutnya: 04 Header Keamanan](./04-security-headers.md)
