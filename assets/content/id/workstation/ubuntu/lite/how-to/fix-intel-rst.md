# 🧩 Perbaiki Masalah Intel RST

## Tujuan
Identifikasi pemblokir penyimpanan terkait Intel RST, RAID, atau VMD sebelum instalasi Ubuntu dan tangani secara konservatif.

## Kapan Menggunakan Prosedur Ini
Gunakan ini ketika penginstal tidak dapat melihat disk internal, BIOS menyebutkan mode RAID/RST/VMD, atau mesin adalah laptop terbaru dengan abstraksi penyimpanan vendor diaktifkan.

## Prasyarat
- Akses ke pengaturan firmware dan, jika ada, dokumentasi vendor Windows.
- Cadangan mesin target saat ini.
- Kesabaran untuk menghentikan dan memverifikasi mode penyimpanan daripada memaksa instalasi di sekitarnya.

## ⚠️ Catatan Risiko
- Peralihan mode penyimpanan secara sembarangan dapat merusak instalasi Windows yang ada.
- Terminologi firmware vendor bervariasi; jangan mengandalkan satu label UI yang disalin dari postingan blog acak.

## Asumsi Lingkungan
- Anda mencurigai mesin menggunakan Intel RST, mode RAID, atau VMD pada jalur penyimpanan internal.
- Anda menginginkan instalasi Linux yang didukung dan dapat diprediksi daripada solusi yang rapuh.

## Prosedur Langkah demi Langkah
### 1. Periksa cara Linux melihat pengontrol penyimpanan
Boot sesi langsung dan cari driver RAID, VMD, atau pengontrol yang menjelaskan mengapa disk disembunyikan atau diekspos secara berbeda dari yang diharapkan.

```bash
lspci -nnk | grep -A4 -Ei 'RAID|SATA|VMD|NVMe'
lsblk -f
sudo dmesg -T | grep -Ei 'vmd|raid|rst|nvme' | tail -n 20
```

### 2. Konfirmasikan mode penyimpanan firmware sebelum mengubahnya
Jangan mengalihkan firmware dari RST, RAID, atau VMD ke AHCI secara membabi buta. Validasi panduan OEM dan pahami terlebih dahulu konsekuensinya terhadap OS yang ada.

### 3. Buat keputusan mode penyimpanan dengan sengaja
Jika mesin harus berubah dari RST, RAID, atau VMD ke AHCI untuk Ubuntu, lakukan itu hanya setelah Anda memiliki jalur terdokumentasi untuk OS terinstal lainnya dan cadangan yang diketahui baik.

### 4. Nyalakan ulang sesi langsung dan pastikan Linux sekarang dapat melihat disk secara normal
Setelah perubahan mode penyimpanan apa pun, kembali ke sesi langsung dan konfirmasikan perangkat blok yang diharapkan ada sebelum Anda meluncurkan penginstal.

```bash
lsblk -f
sudo parted -l
```

## ✅ Checkpoint Validasi
- Disk target terlihat oleh lingkungan live Ubuntu.
- Anda dapat menjelaskan mode penyimpanan saat ini dan mengapa dapat diterima untuk instalasi.
- Anda belum menyembunyikan OS yang ada dari diri Anda sendiri dengan mengubah firmware tanpa rencana pemulihan.

## Catatan Troubleshooting
- Jika disk masih tidak muncul, tinjau kembali mode firmware sebelum mengubah tabel partisi atau mencurigai penginstal.
- Jika Windows sebelumnya diinstal dalam mode RST, perlakukan konversi AHCI apa pun sebagai perubahan yang sensitif terhadap pemulihan, bukan perubahan biasa.

## ↩️ Catatan Rollback / Recovery
- Jika mesin menjadi tidak stabil setelah perubahan mode penyimpanan, kembalikan ke mode sebelumnya dan pulihkan jalur OS asli sebelum mencoba lagi.
- Simpan catatan tertulis tentang mode firmware sehingga mesin dapat didukung nanti tanpa perlu menebak-nebak.

## Dokumen Terkait
- [🪟 Boot Ganda](./dual-boot.md)
- [🔐 Perbaiki Masalah BitLocker](./fix-bitlocker.md)
- [📋 Referensi Tata Letak Disk](../reference/disk-layout-reference.md)
