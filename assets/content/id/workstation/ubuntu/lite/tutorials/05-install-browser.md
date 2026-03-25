# 🌐 05 Instal Peramban

## Tujuan
Tambahkan lapisan browser ke Ubuntu Lite hanya setelah sistem dasar dan GUI sudah stabil.

## Prasyarat
- Sesi grafis berfungsi.
- Lulus pemeriksaan jaringan dan DNS.

## Asumsi Lingkungan
- Kemasan Firefox berbeda di setiap rilis Ubuntu; pengangkutan paket yang sebenarnya mungkin didukung deb atau didukung snap.

## Langkah Berurutan
### 1. Pilih jalur browser utama
Untuk pilihan pertama Ubuntu yang stabil, gunakan Firefox. Jika Anda memerlukan browser kedua, tambahkan lagi nanti hanya ketika beban kerja memerlukannya.

```bash
sudo snap install firefox || sudo apt install firefox
```

### 2. Luncurkan sekali dan konfirmasikan garis dasar runtime
Penginstalan browser yang berhasil berarti ketersediaan paket, DNS, TLS, dan tumpukan grafis semuanya masih berfungsi.

```bash
firefox --version 2>/dev/null || snap list firefox
getent hosts ubuntu.com
```

### 3. Catat apakah browser kedua benar-benar diperlukan
Lite tidak boleh mengakumulasi perangkat lunak yang berlebihan tanpa alasan seperti pengujian, pengembangan, atau pekerjaan kompatibilitas.

## ✅ Checkpoint Validasi
- Browser meluncurkan, merender halaman, dan berhasil menggunakan jaringan.
- Penjelajahan yang bergantung pada DNS dan TLS berfungsi tanpa kesalahan sertifikat atau sinkronisasi waktu.
- Workstation masih terasa stabil setelah lapisan runtime baru.

## ⚠️ Peringatan
- Jika pemasangan browser memicu masalah ketergantungan atau sandbox yang besar, periksa jalur paket daripada langsung menambahkan lebih banyak browser.
- Jika halaman tidak dimuat, konfirmasikan kebenaran DNS dan jam sebelum mencurigai paket browser itu sendiri.

## Cleanup / Pemeriksaan Akhir
- Jika jalur browser yang dipilih salah untuk mesin, hapus jalur tersebut dengan bersih sebelum mencoba alternatif lain sehingga Lite tetap dapat dimengerti.

## Tutorial Berikutnya
[📝 06 Pasang Penyunting](./06-install-editor.md)

## Dokumen Terkait
- [📋 Daftar Periksa Jaringan](../reference/network-checklist.md)
- [📋 Matriks Aplikasi](../reference/application-matrix.md)
- [📋 Daftar Periksa Pasca Pemasangan](../reference/post-install-checklist.md)
