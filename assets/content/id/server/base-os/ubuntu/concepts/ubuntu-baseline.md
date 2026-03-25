# 📦 Dasar Server Ubuntu

## Ringkasan
Server Ubuntu umum digunakan pada VPS, cloud, dan host yang banyak otomatisasi di mana cloud-init dan netplan sudah menjadi bagian dari model operasinya.

## Apa Arti Konsepnya
Dasar server Ubuntu adalah kumpulan paket, layanan, keputusan jaringan, identitas, dan aturan penyimpanan minimal yang dapat dijelaskan yang Anda terapkan sebelum perangkat lunak khusus beban kerja hadir.

## Mengapa Penting Di Server Linux
- Ini memberi modul selanjutnya titik awal yang stabil.
- Ini membatasi pendengar kejutan, paket kejutan, dan penyimpangan kepemilikan kejutan.
- Ini membuat pemecahan masalah lebih cepat karena host sengaja dibuat kecil dan ditinjau.

## Prinsip Desain
- Patch sebelum mengekspos host ke lalu lintas nyata.
- Tetapkan nama host, SSH, firewall, kebijakan pembaruan, jaringan, dan penyimpanan sebelum menambahkan aplikasi.
- Jaga agar perubahan dapat diverifikasi dan dibalik oleh shell.
- Dokumentasikan setiap port terbuka, titik pemasangan, dan jalur admin.

## Pengorbanan Operasional
- Baseline yang lebih kecil lebih mudah untuk dipikirkan, namun memerlukan penambahan paket yang lebih disengaja nantinya.
- Garis dasar yang lebih berat terasa nyaman sejak awal, namun perbesar peta layanan dan permukaan patch Anda.
- Peralatan distro asli harus memenangkan lapisan kontrol pihak ketiga ad hoc pada waktu dasar.

## Kesalahan Umum
- Mencampur beberapa pengelola jaringan sebelum mengidentifikasi penyaji aktif.
- Membiarkan default penginstal menentukan paket jangka panjang dan dasar layanan.
- Membuka port sebelum layanan di belakangnya dikonfigurasi dan diuji.
- Memasang data dengan nama perangkat yang rapuh, bukan UUID.

## Dokumen Terkait
- [🔐 SSH Pertama](./ssh-first.md)
- [🧹 Minimisasi Layanan](./service-minimization.md)
- [🔐 Instal OpenSSH](../how-to/install-openssh.md)
- [📋 Daftar Periksa Layanan](../reference/service-checklist.md)
