# 📘 01 Pendahuluan

## Tujuan
Tentukan peran stasiun kerja dan konfirmasikan Ubuntu Lite adalah model operasi yang tepat sebelum instalasi dimulai.

## Prasyarat
- Mesin target atau VM dan tempat untuk merekam catatan.
- Waktu yang cukup untuk memikirkan beban kerja, perangkat keras, dan ekspektasi pemulihan.

## Asumsi Lingkungan
- Anda belum menulis ke disk.
- Anda menginginkan versi minimal pertama daripada desktop default yang luas.

## Langkah Berurutan
### 1. Catat fakta perangkat keras dan penyimpanan
Catat apa yang secara fisik dikerjakan oleh stasiun kerja sebelum Anda memilih paket.

```bash
lscpu | sed -n '1,20p'
free -h
lsblk -f
```

### 2. Tulis peran stasiun kerja dalam bahasa yang sederhana
Contoh: laptop dev dengan overhead rendah, desktop dukungan helpdesk, atau laptop lama untuk browser plus editor plus SSH. Peran tersebut harus menjelaskan mengapa Lite masuk akal.

### 3. Buat daftar hasil yang harus dicapai
Putuskan apakah build pertama yang berhasil harus sudah menyertakan browser, editor, akses jarak jauh, audio, Bluetooth, atau alat pengembangan.

## ✅ Checkpoint Validasi
- Catatan menjelaskan mengapa Lite dipilih daripada Standard.
- Anda dapat menjelaskan batasan perangkat keras dan beban kerja target tanpa menebak-nebak.

## ⚠️ Peringatan
- Jangan mulai mempartisi hanya karena ISO diunduh.
- Jika hasil yang diperlukan benar-benar terdengar seperti desktop default yang lebih lengkap, pertimbangkan kembali Standard sekarang, bukan nanti.

## Cleanup / Pemeriksaan Akhir
- Simpan pernyataan peran dan fakta perangkat keras dalam catatan build Anda sehingga pilihan paket selanjutnya tetap sesuai.

## Tutorial Berikutnya
[📋 02 Instal Preflight](./02-install-preflight.md)

## Dokumen Terkait
- [🧠 Lite vs Standard](../concepts/lite-vs-standard.md)
- [📋 Persyaratan Perangkat Keras](../reference/hardware-requirements.md)
- [📚 00 Indeks Tutorial](./00-index.md)
