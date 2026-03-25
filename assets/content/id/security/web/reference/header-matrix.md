# 📋 Matriks Header

## Tujuan
Gunakan matriks ringkas ini untuk meninjau apakah tepi publik memperlihatkan header keamanan sisi browser minimum yang Anda harapkan.

## Referensi Terstruktur
| Header | Tujuan khas | Catatan ulasan |
| --- | --- | --- |
| `Strict-Transport-Security` | Terus melakukan kunjungan berulang di HTTPS | Aktifkan hanya setelah HTTPS stabil |
| `Content-Security-Policy` | Membatasi kepercayaan skrip dan sumber daya | Seringkali memerlukan peluncuran bertahap |
| `X-Content-Type-Options: nosniff` | Mencegah MIME mengendus kejutan | Header dasar berisiko rendah |
| `Referrer-Policy` | Batasi kebocoran perujuk | Pilih nilai yang sesuai dengan kebutuhan analitik |
| `X-Frame-Options` atau CSP `frame-ancestors` | Membatasi paparan clickjacking | Lebih memilih satu kebijakan pembingkaian yang disengaja |

## Catatan Interpretasi Praktis
- Tidak setiap situs memerlukan kumpulan header akhir yang sama, namun setiap situs publik mendapat manfaat dari kumpulan header yang disengaja.
- Jika aplikasi dan proxy menyetel header yang sama, pastikan respons akhir konsisten.

## Cuplikan Perintah
```bash
curl -I https://example.com | egrep -i 'strict-transport-security|content-security-policy|x-content-type-options|referrer-policy|x-frame-options' || true
```

## Dokumen Terkait
- [🔍 Tinjau Header Keamanan](../how-to/review-security-headers.md)
- [🧩 Konfigurasikan CSP](../how-to/configure-csp.md)
- [🧩 04 Header Keamanan](../tutorials/04-security-headers.md)
