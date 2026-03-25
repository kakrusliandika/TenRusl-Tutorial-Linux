# 🌐 05 Tambahkan Situs

## Tujuan
Buat situs pertama di Nginx UI dan konfirmasikan perutean yang dihasilkan dan status layanan dari shell.

## Prasyarat
- Akses SSH independen dari panel.
- Jendela pemeliharaan atau jalur pementasan untuk perubahan berisiko.

## Asumsi Lingkungan
- Metode instalasi Nginx UI penting. Beberapa penerapan menjalankannya sebagai layanan asli, yang lainnya dalam container. Jaga agar server web dan status panel dapat ditemukan dari shell sebelum mengandalkan UI.
- Panel bukan satu-satunya sumber utama tentang tuan rumah.

## Langkah Berurutan
### 1. Lakukan tugas panel khusus tahapan
- Catat apa yang berubah di UI dan apa yang harus diubah di host.

### 2. Segera periksa status shell-visible
```bash
sudo find /etc/nginx -maxdepth 4 -type f -mtime -2 2>/dev/null | sort | tail -n 40

ss -ltnp | egrep ":(80|443)" || true
curl -I http://example.com
curl -Ik https://example.com || true
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
[➡️ 06 Pengaturan Basis Data](./06-database-setup.md)

## Dokumen Terkait
- [📋 Peta Layanan](../reference/service-map.md)
- [🛡️ Keamanan](../../../../security/index.md)
- [💾 Cadangan](../../../../backup/index.md)
