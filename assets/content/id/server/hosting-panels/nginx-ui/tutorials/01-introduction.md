# 📘 01 Pendahuluan

## Tujuan
Tentukan mengapa server ini harus menggunakan Nginx UI alih-alih alur kerja mentah khusus Linux dan apa yang diharapkan dapat dikelola oleh bidang kontrol.

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
printf "role=panel-hosting
panel=Nginx UI
owner=ops-team
"
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
[➡️ 02 Prasyarat](./02-prerequisites.md)

## Dokumen Terkait
- [📋 Peta Layanan](../reference/service-map.md)
- [🛡️ Keamanan](../../../../security/index.md)
- [💾 Cadangan](../../../../backup/index.md)
