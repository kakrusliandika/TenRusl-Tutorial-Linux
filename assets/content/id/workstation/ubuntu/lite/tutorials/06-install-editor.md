# 📝 06 Instal Editor

## Tujuan
Instal rantai alat pengeditan yang dapat diandalkan sehingga workstation Lite dapat menangani konfigurasi, catatan, dan kode tanpa harus terjerumus ke dalam alat yang terhampar.

## Prasyarat
- Sistem dasar, GUI, dan lapisan browser stabil.
- Anda tahu apakah mesin ini memerlukan editor terminal-first, editor GUI sederhana, atau keduanya.

## Asumsi Lingkungan
- Bab ini membahas tentang pengeditan yang dapat diandalkan, bukan tentang membuat IDE akhir yang sempurna.

## Langkah Berurutan
### 1. Instal garis dasar pengeditan
Pertahankan satu editor konsol dan satu editor GUI sederhana jika peran stasiun kerja mendapat manfaat dari keduanya.

```bash
sudo apt update
sudo apt install micro vim mousepad
```

### 2. Uji pengeditan dari konteks terminal dan GUI
Buka, simpan, dan buka kembali file pengujian dari kedua lingkungan sehingga Anda mengetahui alur kerjanya nyata.

```bash
printf 'lite workstation note
' > ~/workstation-note.txt
micro ~/workstation-note.txt
mousepad ~/workstation-note.txt 2>/dev/null || true
```

### 3. Tentukan editor mana yang merupakan alat operasional default
Intinya adalah konsistensi. Mesin harus memiliki satu editor yang Anda percayai untuk sesi pemulihan dan pekerjaan konfigurasi normal.

## ✅ Checkpoint Validasi
- Anda dapat mengedit dan menyimpan file dari terminal dan sesi grafis jika diinginkan.
- Kumpulan editor yang dipilih cocok dengan peran stasiun kerja dan bukan merupakan koleksi acak.

## ⚠️ Peringatan
- Jangan langsung menggunakan IDE yang berat di sini kecuali beban kerja pengembangan benar-benar memerlukannya dan mesin sudah stabil.

## Cleanup / Pemeriksaan Akhir
- Jika pilihan editor dirasa salah, hapus alat tambahan sekarang sebelum tutorial selanjutnya menambahkan lebih banyak perangkat lunak.

## Tutorial Berikutnya
[🧪 07 Instal Pengembang](./07-install-dev.md)

## Dokumen Terkait
- [📋 Matriks Aplikasi](../reference/application-matrix.md)
- [📋 Dasar Paket](../reference/package-baseline.md)
- [📋 Paket Opsional](../reference/package-optional.md)
