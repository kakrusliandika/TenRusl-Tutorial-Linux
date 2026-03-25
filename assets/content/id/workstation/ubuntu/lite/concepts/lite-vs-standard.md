# 🧠 Lite vs Standard

## Ringkasan
Lite dan Standard adalah dua model operasi workstation Ubuntu yang valid di repositori ini. Perbedaannya bukanlah kualitas. Perbedaannya terletak pada waktu paket, permukaan dukungan, toleransi perangkat keras, dan seberapa banyak kontrol manual yang Anda inginkan pada versi desktop.

## Apa Arti Konsep Ini
Lite berarti Anda memulai dari yang lebih kecil dan tetap dekat dengan paket individual. Standard berarti Anda menerima permukaan paket awal yang lebih penuh sehingga stasiun kerja menjadi nyaman lebih cepat. Pilihan yang tepat bergantung pada perangkat keras, ekspektasi dukungan, dan seberapa bersedia Anda melakukan debug mesin lapis demi lapis.

## Mengapa Ini Penting di Workstation
Pilihan ini penting karena terlambat mengganti trek dapat memakan waktu. Pengguna yang menginginkan alat kantor, browser, media, dan pengembangan segera mungkin akan membenci versi Lite yang lebih lambat. Pengguna yang menginginkan kejelasan maksimal pada perangkat keras lama mungkin menyesali versi Standard yang mendapatkan lebih banyak paket daripada yang bisa dibawa oleh mesin.

## Prinsip Utama
- Cocokkan track dengan peran mesin sebelum pemasangan, bukan setelah booting pertama terasa berat.
- Gunakan Lite ketika kemampuan observasi dan radius ledakan yang lebih kecil lebih penting daripada kenyamanan.
- Gunakan Standard jika garis dasar desktop yang lebih lengkap merupakan bagian dari kriteria penerimaan.
- Gunakan kembali dokumen pemulihan Lite meskipun keputusan akhirnya adalah Standard.

## Arsitektur / Model Mental
Lite seperti membuat peti alat satu per satu. Standard itu seperti memulai dengan peti yang terisi penuh dan kemudian menyetelnya. Keduanya bisa berakhir dengan baik. Pertanyaan utamanya adalah apakah Anda menginginkan komponen awal yang lebih sedikit atau utilitas yang lebih cepat.

## Panduan Pengambilan Keputusan
- Pilih Standard untuk perangkat keras yang lebih kuat, desktop serba guna, dan pengguna yang membutuhkan kesiapan kantor, browser, dan media lebih cepat.
- Pilih Lite untuk perangkat keras yang terbatas, batasan dukungan yang lebih ketat, atau operator yang ingin menambahkan fungsionalitas satu demi satu.

## Trade-off
- Lite memperdagangkan kecepatan untuk kontrol dan menurunkan kompleksitas awal.
- Standard memperdagangkan permukaan paket yang lebih luas untuk hasil pengemudi harian yang lebih cepat.
- Lite sering kali menang pada perangkat keras yang lebih lemah; Standard sering kali lebih unggul dibandingkan perangkat keras modern dengan beban kerja penggunaan campuran.

## Kesalahan Umum
- Memutuskan hanya berdasarkan ukuran disk dan mengabaikan RAM, dukungan grafis, atau harapan pengguna.
- Memilih Lite dan kemudian segera menginstal bundel desktop besar yang menghapus perbedaannya.
- Memilih Standard untuk perangkat keras yang lemah dan mengharapkan respons gaya Lite nanti tanpa kompromi.

## Praktik Terbaik
- Tuliskan peran mesin sebelum Anda memilih trek.
- Rencanakan persyaratan browser, editor, kantor, pengembang, dan media secara eksplisit.
- Perlakukan dual boot, BitLocker, dan Intel RST sebagai faktor risiko instalasi yang tidak tergantung pada pilihan track.

## Checklist Singkat
- Anda dapat menjelaskan mengapa Lite atau Standard dipilih dalam satu kalimat.
- Pilihannya sesuai dengan perangkat keras dan model dukungan.
- Anda tahu dokumen pemulihan mana yang akan Anda simpan di dekat Anda selama instalasi.

## Dokumen Terkait
- [💻 Ubuntu Standard](../../standard/index.md)
- [🧠 Standard vs Lite](../../standard/concepts/standard-vs-lite.md)
- [📋 Persyaratan Perangkat Keras](../reference/hardware-requirements.md)
- [📋 02 Instal Preflight](../tutorials/02-install-preflight.md)
