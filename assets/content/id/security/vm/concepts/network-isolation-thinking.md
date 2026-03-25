# 🌐 Cara Berpikir Isolasi Jaringan

## Ringkasan
Pemikiran isolasi jaringan berarti menentukan batasan kepercayaan tamu sebelum para tamu mulai berbagi satu segmen datar.

## Apa Arti Konsep Ini
Ini mencakup desain saklar atau jembatan virtual, maksud VLAN, pemisahan jalur manajemen, dan bagaimana pembaruan, pencadangan, dan akses admin tetap berfungsi saat tamu dipisahkan.

## Mengapa Itu Penting
Ketika semua tamu berbagi satu jaringan datar, pergerakan lateral, lalu lintas yang bising, dan kebingungan pemecahan masalah menjadi lebih buruk.

## Konteks Ancaman / Paparan
Isolasi yang buruk membuat para tamu rentan terhadap jangkauan timur-barat yang tidak perlu, kebocoran manajemen, dan pengendalian insiden yang tidak jelas.

## Prinsip Desain
- Pisahkan manajemen, aplikasi, dan lalu lintas lab di mana lingkungan dapat mendukungnya.
- Lebih memilih aturan perutean atau firewall yang eksplisit daripada kepercayaan jaringan yang sama yang tidak disengaja.
- Pembaruan dokumen, pencadangan, dan jalur admin untuk setiap zona tamu.
- Uji segmentasi dari dalam tamu dan dari host atau edge.

## Trade-off Operasional
- Lebih banyak segmen meningkatkan kejelasan dan pengendalian tetapi meningkatkan pemeliharaan jaringan.
- Kontrol jalan keluar yang ketat mengurangi penyalahgunaan tetapi dapat merusak patching jika cermin dan rute tidak direncanakan.
- Membangun jaringan lebih aman ketika diisolasi, tetapi memerlukan jalur terdokumentasi untuk pembaruan.

## Kesalahan Umum
- Menempatkan tamu pengembang, lab, dan produksi di jembatan default yang sama karena mudah.
- Membuat segmen terisolasi tanpa jalur keluar yang terdokumentasi.
- Mempercayai label di UI tanpa menguji keterjangkauan tamu yang sebenarnya.

## Dokumen Terkait
- [🧰 Menyiapkan Jaringan Terisolasi](../how-to/set-up-isolated-network.md)
- [📋 Checklist Isolasi Jaringan](../reference/network-isolation-checklist.md)
- [🌐 03 Isolasi Jaringan](../tutorials/03-network-isolation.md)
