# 📋 Checklist TLS

## Tujuan
Gunakan daftar periksa ini untuk meninjau kesehatan sertifikat, cakupan pendengar, dan konsistensi pengalihan di tepi publik.

## Referensi Terstruktur
### Poin ulasan TLS
- Nama host dan rantai sertifikat yang benar disajikan pada port 443.
- HTTP dialihkan ke HTTPS secara konsisten.
- Port alternatif dan nama host lama tidak dapat dijangkau secara tidak terduga.
- Kepemilikan dan pemantauan perpanjangan sertifikat didokumentasikan.
- HSTS diaktifkan hanya setelah HTTPS stabil.

## Catatan Interpretasi Praktis
- Sertifikat yang valid saja tidak membuktikan permukaan TLS aman. Inventaris nama host dan cakupan pendengar juga penting.
- Jalankan pemeriksaan terhadap setiap nama host publik, bukan hanya nama host utama.

## Cuplikan Perintah
```bash
curl -I http://example.com
curl -I https://example.com
openssl s_client -connect example.com:443 -servername example.com </dev/null | openssl x509 -noout -subject -issuer -dates
```

## Dokumen Terkait
- [🔒 Pengurangan Permukaan TLS](../concepts/tls-surface-reduction.md)
- [🔒 Aktifkan HSTS](../how-to/enable-hsts.md)
- [🔒 03 Dasar TLS](../tutorials/03-tls-baseline.md)
