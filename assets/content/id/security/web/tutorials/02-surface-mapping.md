# 🗺️ 02 Pemetaan Permukaan

## Tujuan
Nama host inventaris, pendengar, pengalihan, dan jalur publik.

## Prasyarat
- Akses shell ke nama host publik dan host edge atau log layanan.
- File catatan yang dapat ditulis untuk temuan dan pengecualian.

## Asumsi Lingkungan
- Tepi publik cukup stabil untuk tinjauan terkontrol dan setiap perubahan konfigurasi yang berisiko akan dicadangkan terlebih dahulu.

## Langkah Berurutan
### 1. Hitung pendengar pada host
Permukaan publik dimulai dengan pendengar yang sebenarnya.

```bash
sudo ss -tulpn | egrep ':80 |:443 |:8080 |:8443 ' || true
```

### 2. Uji nama host inti dan pengalihan
Periksa setiap nama host penting satu per satu.

```bash
for url in http://example.com https://example.com https://www.example.com; do
  echo "=== $url ==="
  curl -I "$url" | head -n 10
done
```

### 3. Catat peta permukaan
Simpan peta dalam file yang dapat Anda perbarui selama sisa modul.

```bash
printf "%s\n" "hostname | listener | redirect | headers reviewed | notes" >> web-security-notes.txt
```

## ✅ Titik Validasi
- Respons dan log langsung cocok dengan desain tepi yang diharapkan setelah setiap perubahan.

## ⚠️ Peringatan
- Jangan menyebut tepi sudah di-hardening jika nama host yang basi, pengalihan yang lemah, atau log yang hilang tetap tidak terdokumentasi.

## Pembersihan / Pemeriksaan Akhir
- Simpan catatan, konfigurasikan cadangan, dan hasil pengujian di lokasi yang ditinjau.

## Tutorial Berikutnya
[Berikutnya: 03 Dasar TLS](./03-tls-baseline.md)
