# 🚑 Pulihkan Setelah Booting Gagal

## Tujuan
Lakukan triase dan pulihkan workstation Ubuntu Lite setelah kegagalan booting tanpa mengubah mesin menjadi tumpukan perintah penyelamatan acak.

## Kapan Menggunakan Prosedur Ini
Gunakan ini ketika sistem gagal sebelum login grafis, loop saat boot, masuk ke mode darurat, atau mengalami kemunduran segera setelah perubahan paket atau driver.

## Prasyarat
- Cara untuk mencapai konsol teks, mode pemulihan, atau USB langsung.
- Catatan dasar tentang apa yang berubah sebelum kegagalan.
- Kesabaran untuk mendiagnosis sebelum menerapkan perbaikan lebih lanjut.

## ⚠️ Catatan Risiko
- Siklus daya paksa yang berulang dapat merusak bukti dalam log atau semakin mengotori sistem file.
- Jangan menginstal paket yang tidak terkait selama pemulihan sampai Anda mengetahui paket mana yang gagal.

## Asumsi Lingkungan
- Anda ingin memulihkan instalasi saat ini jika masih dapat dipercaya.
- Anda dapat menghentikan dan menginstal ulang dengan bersih jika batas dukungan telah terlampaui.

## Prosedur Langkah demi Langkah
### 1. Dapatkan shell paling stabil yang dapat Anda capai
Coba konsol teks atau shell pemulihan terlebih dahulu. Layar hitam grafis tidak sama dengan kegagalan sistem total.

```bash
systemctl --failed
journalctl -xb -p warning..alert | tail -n 80
```

### 2. Periksa log untuk mengetahui indikator kegagalan terbaru
Cari perubahan paket terakhir, kegagalan memuat driver, masalah sistem file, atau layanan yang sekarang memblokir boot.

```bash
dmesg -T | tail -n 80
journalctl -b -1 -p warning..alert | tail -n 80 2>/dev/null || true
```

### 3. Perbaiki status paket sebelum mengubah konfigurasi
Jika kegagalan terjadi setelah pembaruan atau mengganggu pekerjaan paket, pulihkan konsistensi paket terlebih dahulu.

```bash
sudo dpkg --configure -a
sudo apt --fix-broken install
sudo apt update
```

### 4. Putuskan apakah masalahnya terkait dengan boot loader, grafis, atau layanan
Kegagalan GRUB, kegagalan login GPU, dan layanan yang rusak memiliki jalur pemulihan yang berbeda. Jangan mencampurkannya menjadi satu upaya perbaikan yang hanya berdasarkan dugaan.

## ✅ Checkpoint Validasi
- Anda dapat memberi nama domain kegagalan utama: boot loader, sistem file, grafik, status paket, atau satu layanan yang gagal.
- Sistem akan kembali ke keadaan dapat digunakan atau Anda memiliki cukup bukti untuk memilih instal ulang atau rollback dengan sengaja.
- Anda tidak melanjutkan pelapisan paket selama pemulihan.

## Catatan Troubleshooting
- Jika log kosong atau tidak konsisten, pertimbangkan apakah beberapa reboot paksa atau masalah penyimpanan merupakan bagian dari cerita.
- Jika mesin hanya gagal setelah grafik dimulai, uji dari target teks sebelum mengedit parameter boot acak.

## ↩️ Catatan Rollback / Recovery
- Jika penyebab utama tidak jelas setelah triase yang disiplin, kembalilah ke rencana rollback atau instal ulang dari pos pemeriksaan yang sudah dikenal baik daripada berimprovisasi tanpa batas waktu.
- Pertahankan log atau daftar paket penting sebelum Anda menghapus atau membangun kembali sistem.

## Dokumen Terkait
- [🛠️ Instal ulang GRUB](./reinstall-grub.md)
- [↩️ Rencana Kembalikan](./rollback-plan.md)
- [📋 Indeks Troubleshooting](../reference/troubleshooting-index.md)
