# 🛡️ 01 Pengantar

## Tujuan
Tentukan peran host, batas kepercayaan, dan kriteria keberhasilan keamanan.

## Prasyarat
- Akses Sudo ke host atau jalur inspeksi yang relevan.
- File catatan yang dapat ditulis untuk temuan dan pengecualian.

## Asumsi Lingkungan
- Host cukup stabil untuk pekerjaan peninjauan dan setiap pengeditan yang berisiko dicadangkan terlebih dahulu.

## Langkah Berurutan
### 1. Catat identitas host
Mulailah dengan gambaran identitas yang tahan lama.

```bash
hostnamectl
cat /etc/os-release
uname -r
id
```

### 2. Layanan pengambilan dan inventaris soket
Ini adalah dasar untuk pengambilan keputusan yang lebih tegas di kemudian hari.

```bash
sudo systemctl --type=service --state=running --no-pager
sudo ss -tulpn
```

### 3. Tulis maksud keamanannya
Dokumentasikan siapa yang boleh masuk dan port mana yang harus tetap terbuka.

```bash
printf "%s\n" "Host role:" "Allowed admin path:" "Expected open ports:" > security-baseline-notes.txt
```

## ✅ Titik Validasi
- Output langkah cocok dengan peran host yang didokumentasikan dan tidak ada layanan, pengguna, atau pendengar baru yang tidak dikenal yang muncul.

## ⚠️ Peringatan
- Jangan pernah menganggap perubahan konfigurasi yang belum diuji sebagai selesai hanya karena perintahnya menghasilkan nol.

## Pembersihan / Pemeriksaan Akhir
- Simpan keluaran yang penting dalam catatan host Anda atau log perubahan.

## Tutorial Berikutnya
[Berikutnya: Audit Baseline 02](./02-baseline-audit.md)
