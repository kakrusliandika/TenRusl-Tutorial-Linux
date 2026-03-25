# 📈 08 Monitoring

## Tujuan
Temukan masalah TLS dan ketersediaan sebelum pengguna melaporkannya.

## Prasyarat
- Akses shell ke nama host publik dan host edge atau log layanan.
- File catatan yang dapat ditulis untuk temuan dan pengecualian.

## Asumsi Lingkungan
- Tepi publik cukup stabil untuk tinjauan terkontrol dan setiap perubahan konfigurasi yang berisiko akan dicadangkan terlebih dahulu.

## Langkah Berurutan
### 1. Tentukan pemeriksaan yang paling penting
Mulailah dengan ketersediaan, TLS, dan beberapa indikator penyalahgunaan.

```bash
printf "%s\n" "health check URL:" "TLS expiry check:" "log anomaly review:" >> web-security-notes.txt
```

### 2. Jalankan pemeriksaan manual sederhana
Rutinitas shell kecil lebih baik daripada tidak sama sekali.

```bash
curl -fsS https://example.com/health || curl -I https://example.com
openssl s_client -connect example.com:443 -servername example.com </dev/null | openssl x509 -noout -dates
```

### 3. Tinjau status layanan edge
Kalau pelayanannya tidak sehat, pengawasan harus menunjukkannya.

```bash
sudo systemctl is-active nginx 2>/dev/null || true
sudo systemctl is-active caddy 2>/dev/null || true
```

## ✅ Titik Validasi
- Respons dan log langsung cocok dengan desain tepi yang diharapkan setelah setiap perubahan.

## ⚠️ Peringatan
- Jangan menyebut tepi sudah di-hardening jika nama host yang basi, pengalihan yang lemah, atau log yang hilang tetap tidak terdokumentasi.

## Pembersihan / Pemeriksaan Akhir
- Simpan catatan, konfigurasikan cadangan, dan hasil pengujian di lokasi yang ditinjau.

## Tutorial Berikutnya
[Berikutnya: 09 Pengerasan](./09-hardening.md)
