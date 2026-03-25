# 📝 07 Logging

## Tujuan
Jadikan permintaan dan kejadian tepi dapat ditinjau.

## Prasyarat
- Akses shell ke nama host publik dan host edge atau log layanan.
- File catatan yang dapat ditulis untuk temuan dan pengecualian.

## Asumsi Lingkungan
- Tepi publik cukup stabil untuk tinjauan terkontrol dan setiap perubahan konfigurasi yang berisiko akan dicadangkan terlebih dahulu.

## Langkah Berurutan
### 1. Tinjau akses saat ini dan log kesalahan
Pastikan Anda tahu di mana buktinya berada.

```bash
sudo tail -n 50 /var/log/nginx/access.log 2>/dev/null || true
sudo tail -n 50 /var/log/nginx/error.log 2>/dev/null || true
sudo journalctl -u nginx -u caddy -n 50 --no-pager 2>/dev/null || true
```

### 2. Konfirmasikan stempel waktu dan kolom yang berguna
Log harus cukup ditampilkan untuk melacak rute yang gagal dan klien yang melakukan penyalahgunaan.

```bash
timedatectl status
```

### 3. Catat perintah review
Insiden di masa depan tidak perlu ditemukan kembali.

```bash
printf "%s\n" "Access log path:" "Error log path:" "Review command:" >> web-security-notes.txt
```

## ✅ Titik Validasi
- Respons dan log langsung cocok dengan desain tepi yang diharapkan setelah setiap perubahan.

## ⚠️ Peringatan
- Jangan menyebut tepi sudah di-hardening jika nama host yang basi, pengalihan yang lemah, atau log yang hilang tetap tidak terdokumentasi.

## Pembersihan / Pemeriksaan Akhir
- Simpan catatan, konfigurasikan cadangan, dan hasil pengujian di lokasi yang ditinjau.

## Tutorial Berikutnya
[Berikutnya: 08 Pemantauan](./08-monitoring.md)
