# 🛡️ 01 Pengantar

## Tujuan
Tentukan properti VM dan model kepercayaan.

## Prasyarat
- Akses Shell ke tamu atau jalur inventaris sisi host yang relevan.
- File catatan yang dapat ditulis untuk tinjauan properti.

## Asumsi Lingkungan
- Tamu atau tuan rumah cukup stabil untuk ditinjau dan setiap operasi berisiko dicadangkan terlebih dahulu.

## Langkah Berurutan
### 1. Daftar tamu dan peran
Tuliskan kandidat produksi, pementasan, lab, dan template.

```bash
printf "%s\n" "VM name | role | trust zone | template source" > vm-security-notes.txt
```

### 2. Ambil identitas tamu dari dalam satu VM perwakilan
Mulailah dengan data yang dapat diverifikasi oleh shell.

```bash
hostnamectl
systemd-detect-virt || true
ip -br addr
```

### 3. Catat jalur pemulihan saat ini
Rencana pengerasan tanpa jalur rollback tidaklah lengkap.

```bash
printf "%s\n" "Latest backup:" "Latest snapshot:" "Template version:" >> vm-security-notes.txt
```

## ✅ Titik Validasi
- Status saat ini cocok dengan zona kepercayaan yang terdokumentasi, garis keturunan templat, dan jalur pemulihan.

## ⚠️ Peringatan
- Jangan menyebut dasar VM selesai jika asumsi pemulihan atau isolasi masih hanya ada di memori.

## Pembersihan / Pemeriksaan Akhir
- Simpan catatan, ekspor, dan checksum di mana operator berikutnya dapat menemukannya dengan aman.

## Tutorial Berikutnya
[Berikutnya: 02 Baseline Hypervisor](./02-hypervisor-baseline.md)
