# 🚦 Siapkan Rate Limiting

## Tujuan
Terapkan kontrol pembatasan kecepatan dasar di tepi web sehingga penyalahgunaan berulang akan melambat sebelum mencapai inti aplikasi.

## Kasus Penggunaan
Gunakan ini ketika jalur masuk, API, atau titik akhir publik menarik penyalahgunaan berulang-ulang atau penyelidikan yang mencurigakan.

## Prasyarat
- Proksi terbalik atau server web yang dapat menerapkan kontrol tingkat permintaan.
- Pemahaman tentang jalur mana yang berisiko tinggi.
- Jalur pengujian aman yang tidak akan menyebabkan pemadaman listrik yang terlihat oleh pelanggan.

## Asumsi Lingkungan
- Contoh di bawah ini menggunakan Nginx karena menawarkan pola sisi Linux yang umum.
- Jika edge Anda menggunakan alat lain, terjemahkan maksud yang sama alih-alih menyalin sintaksis secara membabi buta.

## ⚠️ Catatan Risiko
- Batasan tarif yang terlalu ketat dapat memblokir pengguna normal, pemeriksaan kesehatan, atau otomatisasi.
- Pembatasan nilai tidak menggantikan autentikasi, patching, atau perlindungan lapisan aplikasi.

## Prosedur Langkah demi Langkah
### 1. Pilih target awal yang sempit
Jalur masuk dan titik akhir berbiaya tinggi adalah target pertama yang lebih baik daripada keseluruhan situs.

```bash
printf "%s\n" "/login" "/wp-login.php" "/api/auth" > rate-limit-targets.txt
```

### 2. Terapkan batas Nginx yang konservatif
Mulailah dari yang kecil dan uji sebelum berkembang.

```bash
# Nginx example
limit_req_zone $binary_remote_addr zone=loginlimit:10m rate=5r/m;
location /login {
    limit_req zone=loginlimit burst=10 nodelay;
    proxy_pass http://app_backend;
}
```

### 3. Validasi dengan permintaan berulang
Gunakan putaran kecil untuk mengonfirmasi pemicu kontrol.

```bash
for i in $(seq 1 20); do
  curl -s -o /dev/null -w "%{http_code}\n" https://example.com/login
done
```

## ✅ Titik Validasi
- Lalu lintas normal masih berjalan.
- Permintaan berulang menunjukkan perilaku yang diinginkan seperti 429 atau pembatasan.
- Log mencatat detail yang cukup untuk menjelaskan mengapa permintaan dibatasi.

## Pemecahan masalah
- Jika klien sah diblokir, perluas jendela tarif atau persempit lokasi target.
- Jika Anda tidak melihat adanya efek, verifikasi bahwa permintaan benar-benar mencapai tepi tempat aturan diterapkan.

## ↩️ Catatan Kembalikan / Pemulihan
- Kembalikan konfigurasi sebelumnya jika aturan menyebabkan dampak produksi.
- Simpan salinan konfigurasi edge terakhir yang diketahui bagus sebelum memperluas cakupan.

## Dokumen Terkait
- [🧠 Baseline Hardening Web](../concepts/web-hardening-baseline.md)
- [🧾 Checklist Pencatatan](../reference/logging-checklist.md)
- [🚦 05 Pembatasan Tarif](../tutorials/05-rate-limiting.md)
