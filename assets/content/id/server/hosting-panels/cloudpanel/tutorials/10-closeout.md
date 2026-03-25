# 📘 10 Penutupan

## Tujuan
Tutup build CloudPanel pertama dengan inventaris yang dapat Anda serahkan ke operator lain atau gunakan selama pemulihan.

## Prasyarat
- Akses SSH independen dari panel.
- Jendela pemeliharaan atau jalur pementasan untuk perubahan berisiko.

## Asumsi Lingkungan
- CloudPanel biasanya mengelola Nginx, PHP-FPM, dan layanan database dengan root situs di bawah `/home/*/htdocs` atau tata letak ramah cloud serupa. Nama layanan yang tepat dapat bervariasi berdasarkan versi.
- Panel bukan satu-satunya sumber utama tentang tuan rumah.

## Langkah Berurutan
### 1. Lakukan tugas panel khusus tahapan
- Catat apa yang berubah di UI dan apa yang harus diubah di host.

### 2. Segera periksa status shell-visible
```bash
systemctl list-units --type=service | grep -Ei 'nginx|php.*fpm|mysql|mariadb|redis|cloudpanel|clp' || true

ss -ltnp
sudo find /home /etc/nginx /etc/php -maxdepth 3 -type d \( -name htdocs -o -name sites-enabled -o -name php -o -name mysql \) 2>/dev/null | sort
```

### 3. Simpan catatan inventaris untuk operator berikutnya
- Nama host atau domain
- Akar situs atau pemetaan layanan
- Ketergantungan runtime atau database
- Dampak pencadangan dan pengembalian

## ✅ Pos Pemeriksaan Validasi
- Maksud panel cocok dengan status shell-visible.
- Pendengar, runtime, dan log tetap dapat dimengerti.

## ⚠️ Peringatan
- Jangan lebih mempercayai kenyamanan panel daripada verifikasi shell.

## Pembersihan / Pasca-Pemeriksaan
- Simpan snapshot inventaris yang dihasilkan dengan catatan host.

## Tutorial Selanjutnya
[🌐 CloudPanel](../index.md)

## Dokumen Terkait
- [📋 Peta Layanan](../reference/service-map.md)
- [🛡️ Keamanan](../../../../security/index.md)
- [💾 Cadangan](../../../../backup/index.md)
