# 🧭 Tutorial 01: Pendahuluan

## Tujuan
Menentukan apa yang harus dimasukkan dalam backup VPS agar jalur rebuild jelas sebelum arsip dibuat.

## Prasyarat
- Akses root atau sudo ke VPS.
- Penyimpanan backup yang terpisah dari disk workload.
- Target VPS bersih atau rehearsal target untuk uji restore.

## Asumsi Lingkungan
- VPS menampung satu atau lebih layanan Linux yang harus selamat dari rebuild.

## Langkah Berurutan
### 1. Inventarisasi path penting
Daftar config, data aplikasi, database, dan referensi secret yang dibutuhkan saat rebuild.

```bash
hostnamectl
printf '%s\n' /etc /var/www /srv /home > /tmp/vps-backup-scope.txt
cat /tmp/vps-backup-scope.txt
```

### 2. Periksa service aktif dan port terbuka
Ini membantu mengetahui apa yang harus berfungsi lagi setelah restore.

```bash
systemctl list-units --type=service --state=running
ss -tulpn
```

## ✅ Titik Validasi
- Anda punya draft awal scope backup dan peta service yang sedang berjalan.

## ⚠️ Peringatan
- Jangan berasumsi seluruh filesystem harus diarsipkan secara buta.

## Pembersihan / Pemeriksaan Akhir
- Perbaiki catatan scope sebelum memasang atau mengonfirmasi tool.

## Tutorial Berikutnya
[🧰 Tutorial 02: Siapkan Tool](./02-prepare-tools.md)
