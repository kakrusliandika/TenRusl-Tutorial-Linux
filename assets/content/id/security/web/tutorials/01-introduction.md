# 🛡️ 01 Pengantar

## Tujuan
Tentukan tepi publik dan batasan kepercayaan.

## Prasyarat
- Akses shell ke nama host publik dan host edge atau log layanan.
- File catatan yang dapat ditulis untuk temuan dan pengecualian.

## Asumsi Lingkungan
- Tepi publik cukup stabil untuk tinjauan terkontrol dan setiap perubahan konfigurasi yang berisiko akan dicadangkan terlebih dahulu.

## Langkah Berurutan
### 1. Catat nama host publik
Ketahui domain dan subdomain mana yang asli dan mana yang harus dihentikan.

```bash
printf "%s\n" "hostname | role | owner | expected ports" > web-security-notes.txt
```

### 2. Tangkap tanggapan langsung pertama
Gunakan hostname publik, bukan hanya localhost.

```bash
curl -I https://example.com
curl -I http://example.com
```

### 3. Catat perangkat lunak edge yang digunakan
Mengetahui bentuk tumpukan tepi setiap langkah selanjutnya.

```bash
sudo systemctl status nginx --no-pager 2>/dev/null || true
sudo systemctl status caddy --no-pager 2>/dev/null || true
```

## ✅ Titik Validasi
- Respons dan log langsung cocok dengan desain tepi yang diharapkan setelah setiap perubahan.

## ⚠️ Peringatan
- Jangan menyebut tepi sudah di-hardening jika nama host yang basi, pengalihan yang lemah, atau log yang hilang tetap tidak terdokumentasi.

## Pembersihan / Pemeriksaan Akhir
- Simpan catatan, konfigurasikan cadangan, dan hasil pengujian di lokasi yang ditinjau.

## Tutorial Berikutnya
[Berikutnya: 02 Pemetaan Permukaan](./02-surface-mapping.md)
