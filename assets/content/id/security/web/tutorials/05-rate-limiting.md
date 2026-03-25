# 🚦 05 Rate Limiting

## Tujuan
Perkenalkan aturan pengendalian penyalahgunaan pertama di edge.

## Prasyarat
- Akses shell ke nama host publik dan host edge atau log layanan.
- File catatan yang dapat ditulis untuk temuan dan pengecualian.

## Asumsi Lingkungan
- Tepi publik cukup stabil untuk tinjauan terkontrol dan setiap perubahan konfigurasi yang berisiko akan dicadangkan terlebih dahulu.

## Langkah Berurutan
### 1. Pilih target yang sempit
Mulailah dengan jalur yang mendapat manfaat dari resistensi terhadap penyalahgunaan.

```bash
printf "%s\n" "/login" "/api/auth" >> web-security-notes.txt
```

### 2. Terapkan batasnya
Gunakan sintaks server web yang didukung lingkungan Anda.

```bash
# Nginx example
limit_req_zone $binary_remote_addr zone=loginlimit:10m rate=5r/m;
```

### 3. Uji permintaan berulang
Konfirmasikan pemicu aturan tanpa mengganggu penelusuran normal.

```bash
for i in $(seq 1 20); do
  curl -s -o /dev/null -w "%{http_code}\n" https://example.com/login
done
```

## ✅ Titik Validasi
- Respons dan log langsung cocok dengan desain tepi yang diharapkan setelah setiap perubahan.

## ⚠️ Peringatan
- Jangan menyebut tepi sudah di-hardening jika nama host yang basi, pengalihan yang lemah, atau log yang hilang tetap tidak terdokumentasi.

## Pembersihan / Pemeriksaan Akhir
- Simpan catatan, konfigurasikan cadangan, dan hasil pengujian di lokasi yang ditinjau.

## Tutorial Berikutnya
[Berikutnya: 06 Garis Dasar WAF](./06-waf-baseline.md)
