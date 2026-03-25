# 🧩 Konfigurasikan CSP

## Tujuan
Memperkenalkan Kebijakan Keamanan Konten yang mengurangi kepercayaan skrip dan sumber daya tanpa merusak situs secara membabi buta.

## Kasus Penggunaan
Gunakan ini ketika situs siap untuk kebijakan sisi browser yang lebih disengaja daripada dasar header dasar.

## Prasyarat
- Lingkungan pementasan atau jendela peluncuran yang aman.
- Akses ke proxy terbalik atau konfigurasi server web.
- Cara untuk menguji perilaku situs setelah penerapan.

## Asumsi Lingkungan
- Contoh di bawah menunjukkan Nginx dan Caddy karena keduanya merupakan alat edge sisi Linux yang umum.
- Aplikasi lama dengan skrip inline mungkin memerlukan peluncuran bertahap atau hanya laporan terlebih dahulu.

## ⚠️ Catatan Risiko
- CSP yang ketat dapat merusak alur login, logika front-end, atau integrasi pihak ketiga.
- Jangan menerapkan CSP produksi jika Anda belum memahami perilaku skrip situs saat ini.

## Prosedur Langkah demi Langkah
### 1. Draf kebijakan minimal
Mulailah dengan daftar kecil yang diizinkan yang mencerminkan penerapan sebenarnya.

```bash
echo "default-src 'self'; img-src 'self' data:; object-src 'none'; base-uri 'self'; frame-ancestors 'none'"
```

### 2. Terapkan kebijakan di konfigurasi edge
Jaga agar perubahan konfigurasi dapat ditinjau dan diberi versi.

```bash
# Nginx example
add_header Content-Security-Policy "default-src 'self'; img-src 'self' data:; object-src 'none'; base-uri 'self'; frame-ancestors 'none'" always;

# Caddy example
header {
  Content-Security-Policy "default-src 'self'; img-src 'self' data:; object-src 'none'; base-uri 'self'; frame-ancestors 'none'"
}
```

### 3. Validasi tanggapan langsung
Jangan percaya file konfigurasi saja.

```bash
curl -I https://example.com | grep -i content-security-policy
curl -I https://example.com | grep -i x-content-type-options
```

## ✅ Titik Validasi
- Respon langsung berisi CSP yang dimaksud.
- Aplikasi masih berhasil di-render dan login.
- Jika laporan hanya digunakan terlebih dahulu, laporan dikumpulkan di tempat yang berguna.

## Pemecahan masalah
- Jika situs rusak, periksa keluaran konsol browser dan identifikasi arahan mana yang memblokir konten.
- Jika header tidak ada secara langsung, uji dan muat ulang konfigurasi server web sebelum berasumsi aplikasi menghapusnya.

## ↩️ Catatan Kembalikan / Pemulihan
- Kembalikan konfigurasi sebelumnya jika kebijakan melanggar fungsi penting.
- Pertahankan konfigurasi edge terakhir yang diketahui baik hingga peluncurannya stabil.

## Dokumen Terkait
- [🧩 Utamakan Header Keamanan](../concepts/security-headers-first.md)
- [🔍 Tinjau Header Keamanan](./review-security-headers.md)
- [🧩 04 Header Keamanan](../tutorials/04-security-headers.md)
