# 🗄️ 06 Pengaturan Basis Data

## Tujuan
Membuat dan memvalidasi jalur database pertama yang digunakan oleh situs yang dikelola aaPanel tanpa kehilangan jejak kredensial, pilihan mesin, atau cakupan pencadangan.

## Prasyarat
- Akses SSH independen dari panel.
- Jendela pemeliharaan atau jalur pementasan untuk perubahan berisiko.

## Asumsi Lingkungan
- aaPanel umumnya mengelola layanan gaya LNMP atau LAMP dan menyimpan status milik panel di bawah `/www/server` ditambah akar terkait. Kombinasi paket yang tepat bervariasi berdasarkan pilihan instalasi.
- Panel bukan satu-satunya sumber utama tentang tuan rumah.

## Langkah Berurutan
### 1. Lakukan tugas panel khusus tahapan
- Catat apa yang berubah di UI dan apa yang harus diubah di host.

### 2. Segera periksa status shell-visible
```bash
systemctl status mysql mariadb --no-pager 2>/dev/null || true

ss -ltnp | grep -Ei ":3306|:5432" || true
mysql -e "SHOW DATABASES;" 2>/dev/null || mariadb -e "SHOW DATABASES;" 2>/dev/null || psql -l 2>/dev/null || true
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
[➡️ 07 Pengaturan Waktu Proses](./07-runtime-setup.md)

## Dokumen Terkait
- [📋 Peta Layanan](../reference/service-map.md)
- [🛡️ Keamanan](../../../../security/index.md)
- [💾 Cadangan](../../../../backup/index.md)
