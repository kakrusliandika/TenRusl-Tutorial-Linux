# 🌐 Keamanan Web

## Ringkasan
Keamanan web di perpustakaan ini berfokus pada tepi publik: TLS, pengalihan, header respons, pembatasan laju, pencatatan, pemantauan, dan penanganan insiden realistis untuk situs dan API yang dioperasikan Linux.

## Siapa yang Cocok Menggunakan Bagian Ini
- Operator yang bertanggung jawab atas situs web publik, API, dasbor, atau proxy terbalik di Linux.
- Administrator yang membutuhkan pengerasan tepi praktis dan pemeriksaan keamanan yang sesuai dengan browser.
- Pelajar yang menginginkan keamanan web yang dapat diverifikasi oleh shell dan bukannya saran keamanan web yang tidak jelas.

## Prasyarat
- Akses ke host web, proksi terbalik, atau konfigurasi penerapan.
- Salinan rollback situs aktif atau konfigurasi edge sebelum diedit.
- Jalur pementasan atau jendela pemeliharaan yang aman untuk perubahan TLS dan header.

## Jalur Belajar
1. Baca [Baseline Hardening Web](./concepts/web-hardening-baseline.md), [Utamakan Header Keamanan](./concepts/security-headers-first.md), dan [Pengurangan Permukaan TLS](./concepts/tls-surface-reduction.md).
2. Gunakan panduan cara kerja untuk CSP, HSTS, tinjauan header, dan rate limiting.
3. Jalankan tutorial `01` melalui `10` secara berurutan setelah tepi publik siap untuk perubahan terukur.

## Apa yang Harus Dibaca Terlebih Dahulu
- Mulailah dengan [Tinjau Header Keamanan](./how-to/review-security-headers.md) untuk jalur audit langsung yang cepat.
- Baca [Pengurangan Permukaan TLS](./concepts/tls-surface-reduction.md) sebelum mengaktifkan perilaku HTTPS yang ketat.
- Gunakan [01 Pengantar](./tutorials/01-introduction.md) jika Anda menginginkan alur kerja menyeluruh yang dipandu.

## Peta Bagian
### Konsep
- [🧠 Baseline Hardening Web](./concepts/web-hardening-baseline.md) — Tentukan kontrol tepi publik minimum yang harus dimiliki setiap situs.
- [🧩 Utamakan Header Keamanan](./concepts/security-headers-first.md) — Gunakan header respons untuk mengurangi kepercayaan browser yang dapat dihindari.
- [🔒 Pengurangan Permukaan TLS](./concepts/tls-surface-reduction.md) — Mengurangi pendengar yang lemah, pengalihan yang lemah, dan penanganan sertifikat yang tidak jelas.

### How-To
- [🧩 Konfigurasikan CSP](./how-to/configure-csp.md) — Memperkenalkan Kebijakan Keamanan Konten yang terkontrol.
- [🔒 Aktifkan HSTS](./how-to/enable-hsts.md) — Paksa kunjungan berulang ke HTTPS hanya setelah TLS stabil.
- [🔍 Tinjau Header Keamanan](./how-to/review-security-headers.md) — Audit kumpulan header respons langsung, bukan hanya file konfigurasi.
- [🚦 Atur Pembatasan Kecepatan](./how-to/set-up-rate-limiting.md) — Memperlambat penyalahgunaan berulang sebelum mencapai inti aplikasi.

### Referensi
- [📋 Matriks Header](./reference/header-matrix.md) — Simpan peta ringkas header yang layak untuk ditinjau.
- [🚨 Checklist Insiden](./reference/incident-checklist.md) — Pertahankan bukti tepi web sebelum pembersihan menyembunyikannya.
- [🧾 Checklist Logging](./reference/logging-checklist.md) — Tinjau apakah edge mencatat apa yang diperlukan untuk penyelidikan di masa depan.
- [📋 Checklist TLS](./reference/tls-checklist.md) — Tinjau sertifikat, pendengar, dan arahkan ulang postur dengan cepat.

### Tutorial
- [🛡️ 01 Pengantar](./tutorials/01-introduction.md) — Tentukan batasan publik dan kepercayaan.
- [🗺️ 02 Pemetaan Permukaan](./tutorials/02-surface-mapping.md) — Nama host inventaris, pendengar, pengalihan, dan jalur publik.
- [🔒 03 TLS Baseline](./tutorials/03-tls-baseline.md) — Verifikasi kesehatan sertifikat dan perilaku HTTPS terlebih dahulu.
- [🧩 04 Header Keamanan](./tutorials/04-security-headers.md) — Menerapkan pagar pembatas sisi browser dengan validasi terukur.
- [🚦 05 Rate Limiting](./tutorials/05-rate-limiting.md) — Memperkenalkan aturan pengendalian penyalahgunaan pertama di edge.
- [🧱 06 WAF Baseline](./tutorials/06-waf-baseline.md) — Mendokumentasikan pemfilteran realistis dan batas perlindungan tepi.
- [📝 07 Logging](./tutorials/07-logging.md) — Membuat permintaan dan peristiwa edge dapat ditinjau.
- [📈 08 Pemantauan](./tutorials/08-monitoring.md) — Tangkap masalah TLS dan ketersediaan sebelum pengguna melaporkannya.
- [✅ 09 Hardening](./tutorials/09-hardening.md) — Jalankan tinjauan postur tepi publik terakhir.
- [📘 10 Penutup](./tutorials/10-closeout.md) — Pengujian paket, konfigurasi, dan siklus peninjauan berikutnya.

## Bagian Terkait
- [🛡️ Indeks Keamanan](../index.md)
- [🛡️ Keamanan Server](../server/index.md)
- [🧱 Keamanan VM](../vm/index.md)
- [🖥️ Server](../../server/index.md)
- [💾 Backup](../../backup/index.md)
