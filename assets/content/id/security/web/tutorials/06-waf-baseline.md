# 🧱 06 Baseline WAF

## Tujuan
Dokumentasikan pemfilteran realistis dan batas perlindungan tepi.

## Prasyarat
- Akses shell ke nama host publik dan host edge atau log layanan.
- File catatan yang dapat ditulis untuk temuan dan pengecualian.

## Asumsi Lingkungan
- Tepi publik cukup stabil untuk tinjauan terkontrol dan setiap perubahan konfigurasi yang berisiko akan dicadangkan terlebih dahulu.

## Langkah Berurutan
### 1. Deteksi kemampuan pemfilteran yang tersedia
Mulailah dengan apa yang sebenarnya didukung oleh tumpukan.

```bash
nginx -V 2>&1 | grep -i modsecurity || true
curl -I https://example.com | egrep -i 'server:|cf-ray|x-cache' || true
```

### 2. Tentukan maksud dasar
Contohnya termasuk memblokir probe yang jelas-jelas sensitif atau membatasi metode yang buruk.

```bash
printf "%s\n" "block list intent:" "managed edge provider:" >> web-security-notes.txt
```

### 3. Uji permintaan mencurigakan yang tidak berbahaya
Gunakan pemeriksaan aman yang setidaknya muncul di log.

```bash
curl -I https://example.com/.env || true
curl -I https://example.com/wp-login.php || true
```

## ✅ Titik Validasi
- Respons dan log langsung cocok dengan desain tepi yang diharapkan setelah setiap perubahan.

## ⚠️ Peringatan
- Jangan menyebut tepi sudah di-hardening jika nama host yang basi, pengalihan yang lemah, atau log yang hilang tetap tidak terdokumentasi.

## Pembersihan / Pemeriksaan Akhir
- Simpan catatan, konfigurasikan cadangan, dan hasil pengujian di lokasi yang ditinjau.

## Tutorial Berikutnya
[Berikutnya: 07 Pencatatan](./07-logging.md)
