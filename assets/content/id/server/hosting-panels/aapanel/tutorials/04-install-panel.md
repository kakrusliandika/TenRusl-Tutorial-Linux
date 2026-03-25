# 🧰 04 Pasang Panel

## Tujuan
Instal aaPanel menggunakan metode yang didukung vendor saat ini, lalu periksa apa yang berubah pada host.

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
systemctl list-units --type=service | grep -Ei 'nginx|apache|php|mysql|mariadb|bt|panel' || true

ss -ltnp
sudo find /www /etc -maxdepth 3 -type d \( -name server -o -name panel -o -name wwwroot -o -name backup \) 2>/dev/null | sort

journalctl -xe --no-pager | tail -n 60
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
[➡️ 05 Tambahkan Situs](./05-add-sites.md)

## Dokumen Terkait
- [📋 Peta Layanan](../reference/service-map.md)
- [🛡️ Keamanan](../../../../security/index.md)
- [💾 Cadangan](../../../../backup/index.md)
