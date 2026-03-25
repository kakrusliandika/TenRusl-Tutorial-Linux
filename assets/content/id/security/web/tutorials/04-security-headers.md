# 🧩 04 Header Keamanan

## Tujuan
Terapkan pagar pembatas sisi browser dengan validasi terukur.

## Prasyarat
- Akses shell ke nama host publik dan host edge atau log layanan.
- File catatan yang dapat ditulis untuk temuan dan pengecualian.

## Asumsi Lingkungan
- Tepi publik cukup stabil untuk tinjauan terkontrol dan setiap perubahan konfigurasi yang berisiko akan dicadangkan terlebih dahulu.

## Langkah Berurutan
### 1. Periksa header saat ini
Mulailah dengan respons langsung.

```bash
curl -I https://example.com | egrep -i 'strict-transport-security|content-security-policy|x-content-type-options|referrer-policy|x-frame-options' || true
```

### 2. Tambahkan atau sesuaikan header dasar
Terapkan set berguna terkecil terlebih dahulu.

```bash
# Example low-risk headers
# X-Content-Type-Options: nosniff
# Referrer-Policy: strict-origin-when-cross-origin
```

### 3. Uji ulang respons langsung
Konfirmasikan bahwa edge mengembalikan header yang Anda inginkan.

```bash
curl -I https://example.com
```

## ✅ Titik Validasi
- Respons dan log langsung cocok dengan desain tepi yang diharapkan setelah setiap perubahan.

## ⚠️ Peringatan
- Jangan menyebut tepi sudah di-hardening jika nama host yang basi, pengalihan yang lemah, atau log yang hilang tetap tidak terdokumentasi.

## Pembersihan / Pemeriksaan Akhir
- Simpan catatan, konfigurasikan cadangan, dan hasil pengujian di lokasi yang ditinjau.

## Tutorial Berikutnya
[Berikutnya: 05 Pembatasan Tarif](./05-rate-limiting.md)
