# 🧠 Desain Zona Admin

## Ringkasan
Permukaan admin panel harus diperlakukan seperti antarmuka manajemen, bukan seperti titik akhir aplikasi publik.

## Apa Arti Konsepnya
Desain zona admin adalah praktik memisahkan lalu lintas situs web pengguna akhir dari pendengar administratif yang mengontrol CloudPanel. Hal ini biasanya berarti nama host manajemen khusus, kebijakan firewall yang membatasi, daftar izin VPN atau IP jika memungkinkan, dan pencatatan jalur akses admin secara hati-hati.

## Mengapa Penting Di Server Linux
- Panel yang disusupi biasanya menjadi tumpukan hosting yang disusupi.
- Pendengar admin sering kali mengungkapkan lebih banyak detail tumpukan daripada situs biasa.
- Mempersempit permukaan admin mengurangi paparan pemindaian oportunistik dan brute force.

## Prinsip Desain
- Gunakan nama host atau jalur manajemen yang berbeda jika produk mendukungnya.
- Jaga agar kebijakan SSH dan akses panel tetap selaras namun tidak identik.
- Lebih memilih akses manajemen melalui VPN, jaringan pribadi, atau rentang sumber terbatas jika memungkinkan.
- Uji pemulihan tanpa panel sebelum menyebut penerapan aman.

## Pengorbanan Operasional
- Eksposur admin yang lebih ketat meningkatkan keamanan tetapi dapat menambah gesekan akses.
- Membalikkan proksi zona admin dapat membantu dengan header dan logging, tetapi hanya jika model kepemilikan tetap jelas.
- Jalur lalu lintas admin dan publik yang tumpang tindih menciptakan ambiguitas pemecahan masalah selama insiden.

## Kesalahan Umum
- Melayani permukaan admin dari nama host publik yang sama dengan yang digunakan oleh situs produksi.
- Hanya mengandalkan kata sandi ketika pembatasan jaringan juga dimungkinkan.
- Lupa mencatat atau menguji jalur yang digunakan untuk akses darurat.
- Memperkuat zona admin tanpa terlebih dahulu memverifikasi jalur pemulihan.

## Dokumen Terkait
- [🔐 08 Zona Admin](../tutorials/08-admin-zone.md)
- [✅ 09 Pengerasan](../tutorials/09-hardening.md)
- [🛡️ Keamanan](../../../../security/index.md)
