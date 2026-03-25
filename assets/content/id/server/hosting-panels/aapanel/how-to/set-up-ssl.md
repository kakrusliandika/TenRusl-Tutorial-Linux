# 🔒 Siapkan SSL

## Tujuan
Aktifkan TLS untuk situs yang dikelola aaPanel dan verifikasi sertifikat yang dihasilkan serta status pendengar dari shell.

## Kapan Menggunakan Prosedur Ini
Gunakan ini selama jendela perubahan nyata pada host di mana panel dan akses SSH tetap tersedia.

## Prasyarat
- Akses SSH independen dari panel.
- Nama host pementasan atau produksi jika tugas menyentuh perutean atau TLS.
- Jalur pencadangan atau pengembalian sebelum perubahan dimulai.

## Asumsi Lingkungan
- Kata-kata UI mungkin berbeda berdasarkan rilis, namun verifikasi sisi host tetap stabil.
- aaPanel umumnya mengelola layanan gaya LNMP atau LAMP dan menyimpan status milik panel di bawah `/www/server` ditambah akar terkait. Kombinasi paket yang tepat bervariasi berdasarkan pilihan instalasi.

## Langkah Tepat
### 1. Verifikasi DNS dan pendengar saat ini sebelum meminta atau melampirkan sertifikat
```bash
dig +short example.com
sudo ss -ltnp | egrep ":(80|443)" || true
```

### 2. Gunakan alur kerja panel untuk meminta atau melampirkan sertifikat
- Lebih memilih nama host pementasan pertama kali jika lingkungannya baru.
- Konfirmasikan apakah panel menyimpan file sertifikat secara lokal atau mendelegasikan manajemen ke server web.

### 3. Validasi sertifikat langsung dari shell
```bash
curl -Ik https://example.com
openssl s_client -connect example.com:443 -servername example.com </dev/null | openssl x509 -noout -subject -issuer -dates
```

### 4. Tinjau log layanan jika penerbitan atau pemuatan ulang gagal
```bash
sudo journalctl -u nginx -u apache2 -u httpd -n 80 --no-pager 2>/dev/null || true
```

## ✅ Pos Pemeriksaan Validasi
- Status tingkat shell sesuai dengan maksud panel.
- Layanan, pendengar, dan log tetap dapat dimengerti setelah perubahan.

## Pemecahan masalah
- Bandingkan maksud panel dengan konfigurasi sebenarnya, pendengar, dan log sebelum membuat lebih banyak perubahan UI.
- Pisahkan masalah DNS, layanan web, runtime, dan database alih-alih mengasumsikan satu akar permasalahan.

## ↩️ Catatan Kembalikan / Pemulihan
- Kembalikan konfigurasi terakhir yang diketahui baik atau hapus perubahan yang gagal sebelum berimprovisasi lebih jauh.
- Simpan satu cadangan yang belum tersentuh sebelum jendela pemeliharaan saat ini.

## Dokumen Terkait
- [📋 Peta Layanan](../reference/service-map.md)
- [📋 Tata Letak Direktori](../reference/directory-layout.md)
- [🛡️ Keamanan](../../../../security/index.md)
