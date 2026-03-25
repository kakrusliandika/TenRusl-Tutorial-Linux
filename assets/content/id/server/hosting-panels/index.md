# 🌐 Panel Hosting

## Ringkasan
Modul panel hosting menjelaskan cara menjalankan hosting situs web dan aplikasi yang dikelola panel tanpa mengorbankan visibilitas tingkat shell. Panel dapat mempercepat onboarding, SSL, pembuatan database, dan pemilihan runtime, namun operator masih memiliki host Linux, strategi pencadangan, port yang terbuka, dan jalur pemulihan ketika bidang kontrol gagal.

## Untuk Siapa Bagian Ini
- Operator VPS menghosting situs web dengan alur kerja berorientasi panel.
- Admin yang menginginkan administrasi situs lebih cepat namun masih memerlukan validasi sisi host.
- Tim membandingkan aaPanel, CloudPanel, dan Nginx UI dari perspektif operasional.

## Prasyarat
- Host Linux dengan akses SSH independen dari panel.
- Kontrol DNS untuk setidaknya satu lab atau domain pementasan.
- Pemahaman dasar tentang Nginx, PHP-FPM, database, dan TLS.

## Jalur Pembelajaran
1. Pilih bidang kontrol yang sebenarnya Anda jalankan: [🌐 aaPanel](./aapanel/index.md), [🌐 CloudPanel](./cloudpanel/index.md), atau [🌐 Nginx UI](./nginx-ui/index.md).
2. Bacalah halaman konsep terlebih dahulu sehingga Anda mengetahui apa yang tetap dikelola panel versus apa yang tetap menjadi tanggung jawab Linux.
3. Terapkan pencadangan dan pemulihan sebelum melakukan orientasi ke lokasi produksi.
4. Gunakan tutorial untuk membangun rutinitas pengoperasian staging-first yang berulang.

## Yang Harus Dibaca Terlebih Dahulu
- Bidang kontrol gaya hosting bersama: [🌐 aaPanel](./aapanel/index.md)
- Bidang kontrol hosting ramah cloud: [🌐 CloudPanel](./cloudpanel/index.md)
- Bidang kontrol yang berpusat pada Nginx: [🌐 Nginx UI](./nginx-ui/index.md)

## Peta Bagian
- [🌐 aaPanel](./aapanel/index.md)
- [🌐 CloudPanel](./cloudpanel/index.md)
- [🌐 Nginx UI](./nginx-ui/index.md)

## Bagian Terkait
- [☁️ Virtualisasi](../../virtualization/index.md)
- [💻 Stasiun Kerja](../../workstation/index.md)
- [🛡️ Keamanan](../../security/index.md)
- [💾 Cadangan](../../backup/index.md)
