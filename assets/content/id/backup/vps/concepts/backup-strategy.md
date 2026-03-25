# 🧠 Strategi Backup untuk Linux VPS

## Ringkasan
Strategi backup VPS mendefinisikan apa yang harus ditangkap untuk membangun ulang host dan workload-nya: konfigurasi sistem, data aplikasi, inventaris paket, referensi secret, dan setidaknya satu salinan di luar VPS itu sendiri.

## Apa Arti Konsep Ini
Di VPS, state sistem operasi dan state aplikasi sering bercampur pada satu disk. Strategi menentukan file, database, daftar paket, dan catatan layanan mana yang harus menjadi bagian dari setiap generasi agar restore ke host bersih tetap terarah.

## Mengapa Ini Penting secara Operasional
- Snapshot provider dapat berguna, tetapi tidak menggantikan alur restore yang terdokumentasi dan bisa diuji.
- Jika `/etc`, data aplikasi, dan konteks paket terpisah dengan buruk, rebuild ke VPS baru akan penuh tebakan.
- Keputusan scope bersifat operasional: mengecualikan cache yang bisa diregenerasi, tetapi menyertakan config, secret reference, upload, dan data yang tidak tergantikan.

## Cara Pandang Restore-First
Strategi restore-first menanyakan apa yang dibutuhkan VPS pengganti pada hari pertama: hostname, user, paket, config service, data aplikasi, referensi kredensial, dan urutan validasi. Scope backup harus menjawab kebutuhan itu secara langsung.

## Implikasi Retensi, Offsite, dan Konsistensi
- Retensi harus disesuaikan dengan seberapa jauh Anda mungkin perlu mundur setelah deploy buruk, regresi paket, atau korupsi data.
- Salinan offsite penting karena root volume VPS dan akun provider bukanlah batas bencana yang sama.
- Konsistensi penting untuk database dan aplikasi aktif; arsip filesystem saja tidak cukup jika data tier berubah cepat.

## Kesalahan Umum
- Mengarsipkan seluruh filesystem tanpa mengecualikan path sementara atau mendokumentasikan dependensi service.
- Menyimpan arsip backup tetapi tanpa inventaris paket atau catatan layanan.
- Menjadikan snapshot provider sebagai satu-satunya artefak recovery.

## Dokumen Terkait
- [🧠 Pola Pikir Restore-First](./restore-first-thinking.md)
- [🛠️ Buat Backup VPS](../how-to/create-backup.md)
- [📚 Tata Letak Backup](../reference/backup-layout.md)
