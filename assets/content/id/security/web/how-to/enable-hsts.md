# 🔒 Aktifkan HSTS

## Tujuan
Aktifkan Keamanan Transportasi Ketat HTTP setelah HTTPS stabil dan selesai.

## Kasus Penggunaan
Gunakan ini ketika situs sudah dialihkan ke HTTPS dan Anda ingin browser berhenti menggunakan HTTP tidak aman untuk kunjungan berulang.

## Prasyarat
- Penerapan HTTPS yang valid untuk nama host target.
- Tidak ada sisa konten campuran atau ketergantungan HTTP saja yang masih dibutuhkan pengguna.
- Salinan rollback konfigurasi edge.

## Asumsi Lingkungan
- HSTS hanya boleh diaktifkan setelah HTTPS konsisten di seluruh nama host yang Anda lindungi.
- Berhati-hatilah dengan subdomain jika Anda berencana memperluas cakupannya nanti.

## ⚠️ Catatan Risiko
- Setelah browser melakukan cache HSTS, kesalahan akan lebih sulit untuk dibalik dengan cepat.
- Jangan menganggap remeh perilaku gaya pramuat.

## Prosedur Langkah demi Langkah
### 1. Konfirmasikan HTTPS dan perilaku pengalihan
Periksa transportasi sebelum mengirimkan instruksi ketat ke browser.

```bash
curl -I http://example.com
curl -I https://example.com
openssl s_client -connect example.com:443 -servername example.com </dev/null | openssl x509 -noout -subject -issuer -dates
```

### 2. Tambahkan header HSTS konservatif
Mulailah dengan usia maksimal yang lebih pendek jika situs tersebut baru mengenal HSTS.

```bash
# Nginx example
add_header Strict-Transport-Security "max-age=86400" always;

# Caddy example
header {
  Strict-Transport-Security "max-age=86400"
}
```

### 3. Muat ulang dan uji
Respons HTTPS langsung sekarang harus menyertakan HSTS.

```bash
curl -I https://example.com | grep -i strict-transport-security
curl -I http://example.com
```

## ✅ Titik Validasi
- Respons HTTPS mencakup header HSTS.
- HTTP masih dialihkan ke HTTPS.
- Tidak ada ketergantungan aplikasi yang masih memerlukan HTTP biasa.

## Pemecahan masalah
- Jika header tidak ada, periksa blok situs aktif dan status muat ulang.
- Jika pengguna melaporkan kerusakan, tinjau sumber daya HTTP yang tertanam atau URL panggilan balik lama.

## ↩️ Catatan Kembalikan / Pemulihan
- Hapus header dan muat ulang server web jika peluncuran harus dibalik.
- Ingat, perilaku browser yang di-cache mungkin tetap ada jika Anda kemudian meningkatkan usia maksimal secara signifikan.

## Dokumen Terkait
- [🔒 Pengurangan Permukaan TLS](../concepts/tls-surface-reduction.md)
- [📋 Checklist TLS](../reference/tls-checklist.md)
- [🔒 03 TLS Baseline](../tutorials/03-tls-baseline.md)
