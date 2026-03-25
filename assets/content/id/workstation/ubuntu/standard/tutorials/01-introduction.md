# 📘 01 Pendahuluan

## Tujuan
Tentukan mengapa stasiun kerja harus mengikuti profil Standard yang lebih lengkap sehingga kenyamanan, cakupan paket, dan harapan dukungan tetap selaras.

## Prasyarat
- Mesin kandidat dan tempat menyimpan catatan stasiun kerja.
- Cadangan jika mesin sudah berisi data penting pengguna.

## Asumsi Lingkungan
- Anda menginginkan desktop Ubuntu yang lebih luas lebih cepat daripada menyusunnya dalam banyak lapisan Lite kecil.

## Langkah Berurutan
### 1. Catat perangkat keras dan beban kerja yang diinginkan
Pilihan Standard tetap harus dibenarkan, bukan diasumsikan.

```bash
lscpu | sed -n '1,20p'
free -h
lsblk -f
```

### 2. Tulis pengalaman hari pertama yang diperlukan
Contoh: browser plus kantor plus dukungan jarak jauh, atau admin campuran plus media plus stasiun kerja pengembang.

### 3. Konfirmasi Standard adalah keputusan yang sesuai dengan perangkat keras, bukan sekadar preferensi
Jika mesin lebih tua atau kekurangan penyimpanan, evaluasi ulang Lite sekarang.

## ✅ Checkpoint Validasi
- Pilihan Standard didokumentasikan berdasarkan perangkat keras dan beban kerja.
- Anda tahu apa arti dapat digunakan pada hari pertama untuk desktop ini.

## ⚠️ Peringatan
- Jangan menganggap Standard secara otomatis benar hanya karena terasa lebih familiar.

## Cleanup / Pemeriksaan Akhir
- Simpan deskripsi peran di catatan Anda untuk pembersihan dan penutupan nanti.

## Tutorial Berikutnya
[📋 02 Instal Preflight](./02-install-preflight.md)

## Dokumen Terkait
- [🧠 Ringkasan Standard](../concepts/standard-overview.md)
- [🧠 Kapan Memilih Standard](../concepts/when-to-choose-standard.md)
- [💻 Ubuntu Lite](../../lite/index.md)
