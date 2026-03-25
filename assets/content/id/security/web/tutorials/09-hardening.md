# ✅ 09 Hardening

## Tujuan
Jalankan tinjauan postur tepi publik terakhir.

## Prasyarat
- Akses shell ke nama host publik dan host edge atau log layanan.
- File catatan yang dapat ditulis untuk temuan dan pengecualian.

## Asumsi Lingkungan
- Tepi publik cukup stabil untuk tinjauan terkontrol dan setiap perubahan konfigurasi yang berisiko akan dicadangkan terlebih dahulu.

## Langkah Berurutan
### 1. Jalankan kembali pemeriksaan tepi inti
Gunakan perintah yang sama yang akan digunakan pada ulasan selanjutnya.

```bash
curl -I https://example.com
openssl s_client -connect example.com:443 -servername example.com </dev/null | openssl x509 -noout -dates
sudo ss -tulpn | egrep ":80 |:443 " || true
```

### 2. Tinjau log dan kontrol penyalahgunaan
Konfirmasikan bahwa edge masih melihat dan mencatat apa yang Anda perlukan.

```bash
sudo journalctl -u nginx -u caddy -n 30 --no-pager 2>/dev/null || true
sudo tail -n 20 /var/log/nginx/access.log 2>/dev/null || true
```

### 3. Catat pengecualian yang tersisa
Kebutuhan kompatibilitas lama harus dapat dilihat oleh operator berikutnya.

```bash
printf "%s\n" "Open web-security exceptions:" >> web-security-notes.txt
```

## ✅ Titik Validasi
- Respons dan log langsung cocok dengan desain tepi yang diharapkan setelah setiap perubahan.

## ⚠️ Peringatan
- Jangan menyebut tepi sudah di-hardening jika nama host yang basi, pengalihan yang lemah, atau log yang hilang tetap tidak terdokumentasi.

## Pembersihan / Pemeriksaan Akhir
- Simpan catatan, konfigurasikan cadangan, dan hasil pengujian di lokasi yang ditinjau.

## Tutorial Berikutnya
[Berikutnya: 10 Penutup](./10-closeout.md)
