# 🔍 Tinjau Header Keamanan

## Tujuan
Periksa header respons langsung dan putuskan kontrol sisi browser mana yang hilang, lemah, atau tidak konsisten.

## Kasus Penggunaan
Gunakan ini sebagai langkah audit cepat sebelum menerapkan CSP, HSTS, atau edge hardening pass yang lebih luas.

## Prasyarat
- Akses shell dari host mana pun yang dapat mencapai situs.
- Daftar nama host atau titik akhir untuk ditinjau.

## Asumsi Lingkungan
- Ini adalah tinjauan respons langsung, bukan hanya tinjauan konfigurasi.
- Contoh menggunakan `curl` karena terdapat pada sebagian besar sistem Linux.

## ⚠️ Catatan Risiko
- Jangan menganggap satu respons baik pun sebagai bukti bahwa setiap nama host atau vhost konsisten.

## Prosedur Langkah demi Langkah
### 1. Ambil header respons
Mulailah dengan nama host HTTPS kanonik.

```bash
curl -I https://example.com
```

### 2. Periksa header keamanan yang diharapkan
Cari kontrol transportasi, tipe konten, pembingkaian, dan perujuk.

```bash
curl -I https://example.com | egrep -i 'strict-transport-security|content-security-policy|x-content-type-options|referrer-policy|x-frame-options' || true
```

### 3. Bandingkan beberapa nama host atau jalur
API, dasbor, dan host alternatif mungkin berperilaku berbeda.

```bash
for url in https://example.com https://www.example.com https://api.example.com; do
  echo "=== $url ==="
  curl -I "$url" | egrep -i 'HTTP/|server:|strict-transport-security|content-security-policy|x-content-type-options|referrer-policy|x-frame-options' || true
done
```

## ✅ Titik Validasi
- Anda dapat menjelaskan header mana yang ada, hilang, atau tidak konsisten.
- Anda mengetahui apakah situs siap untuk peluncuran CSP atau HSTS yang lebih ketat.

## Pemecahan masalah
- Jika header muncul di satu nama host tetapi tidak di nama host lain, periksa pemisahan vhost, perilaku CDN, atau pewarisan konfigurasi proxy.
- Jika header diduplikasi, tinjau apakah aplikasi dan proxy menyetelnya.

## ↩️ Catatan Kembalikan / Pemulihan
- Prosedur ini bersifat read-only. Rollback ini hanya untuk menghindari perubahan sampai audit dituliskan.

## Dokumen Terkait
- [🧩 Utamakan Header Keamanan](../concepts/security-headers-first.md)
- [📋 Matriks Header](../reference/header-matrix.md)
- [🧩 04 Header Keamanan](../tutorials/04-security-headers.md)
